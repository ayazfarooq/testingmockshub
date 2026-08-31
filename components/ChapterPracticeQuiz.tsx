'use client'

import { useCallback } from 'react'
import { getQuestionsByChapters } from '@/lib/supabase/queries'
import { QuestionsQuiz } from '@/components/QuestionsQuiz'

interface ChapterPracticeQuizProps {
  chapterIds: number[]
  title: string
  onBack: () => void
}

export function ChapterPracticeQuiz({
  chapterIds,
  title,
  onBack,
}: ChapterPracticeQuizProps) {
  const loadQuestions = useCallback(
    () => getQuestionsByChapters(chapterIds),
    [chapterIds],
  )

  return (
    <QuestionsQuiz
      title={title}
      loadQuestions={loadQuestions}
      onBack={onBack}
    />
  )
}
