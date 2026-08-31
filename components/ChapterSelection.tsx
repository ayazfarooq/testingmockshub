'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { getChapters } from '@/lib/supabase/queries'
import { ChapterChecklist, type Chapter } from '@/components/ChapterChecklist'
import { ChapterPracticeQuiz } from '@/components/ChapterPracticeQuiz'

export function ChapterSelection() {
  const searchParams = useSearchParams()
  const certificationId = searchParams.get('certificationId')
  const certificationName = searchParams.get('name')

  const [chapters, setChapters] = useState<Chapter[] | null>(null)
  const [error, setError] = useState(false)
  const [loadedForId, setLoadedForId] = useState<string | null>(null)
  const [selectedChapterIds, setSelectedChapterIds] = useState<number[] | null>(null)

  useEffect(() => {
    if (!certificationId) return

    let cancelled = false

    async function loadChapters() {
      try {
        setError(false)
        const data = await getChapters(Number(certificationId))
        if (cancelled) return
        setChapters(data.map((row) => ({ id: row.id, name: row.chapter_name })))
      } catch {
        if (!cancelled) setError(true)
      } finally {
        if (!cancelled) setLoadedForId(certificationId)
      }
    }

    loadChapters()
    return () => {
      cancelled = true
    }
  }, [certificationId])

  // Show a fresh loading state whenever the certification changes.
  const isLoading = certificationId !== null && loadedForId !== certificationId
  const visibleChapters = isLoading ? null : chapters
  const visibleError = !isLoading && error

  if (selectedChapterIds) {
    return (
      <ChapterPracticeQuiz
        chapterIds={selectedChapterIds}
        title={certificationName ?? 'Chapter practice'}
        onBack={() => setSelectedChapterIds(null)}
      />
    )
  }

  return (
    <>
      <p className="eyebrow">Practice by chapter</p>
      <h1>{certificationName ?? 'Select chapters'}</h1>
      <p>Select one or more chapters to focus your practice on.</p>

      {!certificationId && (
        <p className="formMessage" role="alert">
          No certification was selected. <Link href="/practice/chapter">Choose one first</Link>.
        </p>
      )}
      {certificationId && visibleError && (
        <p className="formMessage" role="alert">
          We couldn&apos;t load chapters right now. Please try again shortly.
        </p>
      )}
      {certificationId && !visibleError && visibleChapters === null && (
        <p className="formMessage" role="status">Loading chapters…</p>
      )}
      {certificationId && !visibleError && visibleChapters !== null && visibleChapters.length === 0 && (
        <p className="formMessage" role="status">No chapters are available for this certification yet.</p>
      )}
      {certificationId && !visibleError && visibleChapters !== null && visibleChapters.length > 0 && (
        <ChapterChecklist chapters={visibleChapters} onStart={setSelectedChapterIds} />
      )}

      <Link className="textLink" href="/practice/chapter">← Choose a different certification</Link>
    </>
  )
}
