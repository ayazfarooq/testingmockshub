'use client'

import { useCallback } from 'react'
import { getQuestionsByCertification } from '@/lib/supabase/queries'
import { QuestionsQuiz } from '@/components/QuestionsQuiz'

interface FullPracticeQuizProps {
  certificationId: number | string
  certificationName: string
  onBack: () => void
}

export function FullPracticeQuiz({
  certificationId,
  certificationName,
  onBack,
}: FullPracticeQuizProps) {
  const loadQuestions = useCallback(
    () => getQuestionsByCertification(Number(certificationId)),
    [certificationId],
  )

  return (
    <QuestionsQuiz
      title={certificationName}
      loadQuestions={loadQuestions}
      onBack={onBack}
    />
  )
}
