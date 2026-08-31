'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { getChapters, getLearningObjectives } from '@/lib/supabase/queries'
import { ObjectivePracticeQuiz } from '@/components/ObjectivePracticeQuiz'
import type { Chapter, LearningObjective } from '@/types/database'

export function ObjectiveSelection() {
  const searchParams = useSearchParams()
  const certificationId = searchParams.get('certificationId')
  const certificationName = searchParams.get('name')

  const [chapters, setChapters] = useState<Chapter[] | null>(null)
  const [chaptersError, setChaptersError] = useState(false)
  const [chapterId, setChapterId] = useState('')

  const [objectives, setObjectives] = useState<LearningObjective[] | null>(null)
  const [objectivesError, setObjectivesError] = useState(false)
  const [objectiveId, setObjectiveId] = useState('')

  const [activeObjective, setActiveObjective] = useState<LearningObjective | null>(null)

  useEffect(() => {
    if (!certificationId) return

    let cancelled = false

    async function loadChapters() {
      try {
        setChaptersError(false)
        const data = await getChapters(Number(certificationId))
        if (cancelled) return
        setChapters(data)
      } catch {
        if (!cancelled) setChaptersError(true)
      }
    }

    loadChapters()
    return () => {
      cancelled = true
    }
  }, [certificationId])

  useEffect(() => {
    setObjectiveId('')
    setObjectives(null)

    if (!chapterId) return

    let cancelled = false

    async function loadObjectives() {
      try {
        setObjectivesError(false)
        const data = await getLearningObjectives(Number(chapterId))
        if (cancelled) return
        setObjectives(data)
      } catch {
        if (!cancelled) setObjectivesError(true)
      }
    }

    loadObjectives()
    return () => {
      cancelled = true
    }
  }, [chapterId])

  function handleStart() {
    const objective = objectives?.find((option) => String(option.id) === objectiveId)
    if (objective) setActiveObjective(objective)
  }

  if (activeObjective) {
    return (
      <ObjectivePracticeQuiz
        learningObjectiveId={activeObjective.id}
        title={`${activeObjective.lo_number} ${activeObjective.lo_title}`}
        onBack={() => setActiveObjective(null)}
      />
    )
  }

  return (
    <>
      <p className="eyebrow">Practice by learning objective</p>
      <h1>{certificationName ?? 'Select a learning objective'}</h1>
      <p>Select a chapter, then a learning objective to focus your practice on.</p>

      {!certificationId && (
        <p className="formMessage" role="alert">
          No certification was selected. <Link href="/practice/objective">Choose one first</Link>.
        </p>
      )}

      {certificationId && (
        <>
          <label htmlFor="chapter">Chapter</label>
          <select
            id="chapter"
            value={chapterId}
            onChange={(event) => setChapterId(event.target.value)}
            disabled={!chapters || chaptersError}
          >
            <option value="" disabled>
              {!chapters && !chaptersError ? 'Loading chapters…' : chaptersError ? 'Unable to load chapters' : 'Select a chapter'}
            </option>
            {chapters?.map((chapter) => (
              <option key={chapter.id} value={chapter.id}>{chapter.chapter_name}</option>
            ))}
          </select>
          {chaptersError && (
            <p className="formMessage" role="alert">
              We couldn&apos;t load chapters right now. Please try again shortly.
            </p>
          )}

          <label htmlFor="learningObjective">Learning objective</label>
          <select
            id="learningObjective"
            value={objectiveId}
            onChange={(event) => setObjectiveId(event.target.value)}
            disabled={!chapterId || !objectives || objectivesError}
          >
            <option value="" disabled>
              {!chapterId
                ? 'Select a chapter first'
                : !objectives && !objectivesError
                  ? 'Loading learning objectives…'
                  : objectivesError
                    ? 'Unable to load learning objectives'
                    : (objectives?.length ?? 0) === 0
                      ? 'No learning objectives available yet'
                      : 'Select a learning objective'}
            </option>
            {objectives?.map((objective) => (
              <option key={objective.id} value={objective.id}>{objective.lo_number} {objective.lo_title}</option>
            ))}
          </select>
          {objectivesError && (
            <p className="formMessage" role="alert">
              We couldn&apos;t load learning objectives right now. Please try again shortly.
            </p>
          )}

          <button className="primaryButton" type="button" disabled={!objectiveId} onClick={handleStart}>
            Start practice
          </button>
        </>
      )}

      <Link className="textLink" href="/practice/objective">← Choose a different certification</Link>
    </>
  )
}
