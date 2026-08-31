'use client'

import { useCallback } from 'react'
import { getQuestionsByLearningObjective } from '@/lib/supabase/queries'
import { QuestionsQuiz } from '@/components/QuestionsQuiz'

interface ObjectivePracticeQuizProps {
  learningObjectiveId: number
  title: string
  onBack: () => void
}

export function ObjectivePracticeQuiz({
  learningObjectiveId,
  title,
  onBack,
}: ObjectivePracticeQuizProps) {
  const loadQuestions = useCallback(
    () => getQuestionsByLearningObjective(learningObjectiveId),
    [learningObjectiveId],
  )

  return (
    <QuestionsQuiz
      title={title}
      loadQuestions={loadQuestions}
      onBack={onBack}
    />
  )
}
