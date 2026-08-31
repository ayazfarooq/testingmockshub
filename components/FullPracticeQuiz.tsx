'use client'

import { useState, useEffect } from 'react'
import { getQuestionsByCertification } from '@/lib/supabase/queries'
import type { Question } from '@/types/database'

interface FullPracticeQuizProps {
  certificationId: number | string
  certificationName: string
  onBack: () => void
}

export function FullPracticeQuiz({ certificationId, certificationName, onBack }: FullPracticeQuizProps) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Map<number, number>>(new Map())

  useEffect(() => {
    getQuestionsByCertification(Number(certificationId))
      .then(setQuestions)
      .catch((err) => {
        console.error('Failed to load questions:', err)
        setError('Failed to load questions. ' + (err instanceof Error ? err.message : 'Unknown error'))
      })
      .finally(() => setLoading(false))
  }, [certificationId])

  if (loading) {
    return <div className="selectionPanel"><p>Loading questions…</p></div>
  }

  if (error) {
    return (
      <div className="selectionPanel">
        <p role="alert" style={{ color: 'var(--ink)' }}>Error: {error}</p>
        <button className="primaryButton" onClick={onBack}>Back to setup</button>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="selectionPanel">
        <p>No questions available for this certification yet. Please check back later.</p>
        <button className="primaryButton" onClick={onBack}>Back to setup</button>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === questions.length - 1
  const answeredCount = answers.size

  const handleSelectOption = (optionId: number) => {
    const newAnswers = new Map(answers)
    newAnswers.set(currentQuestion.id, optionId)
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleSubmit = () => {
    alert(`Quiz submitted! You answered ${answeredCount} out of ${questions.length} questions.`)
    onBack()
  }

  return (
    <div className="quizContainer">
      <div className="quizHeader">
        <p className="eyebrow">{certificationName}</p>
        <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
        <p>Answered: {answeredCount}/{questions.length}</p>
      </div>

      <div className="questionCard">
        <p className="questionText">{currentQuestion.question_text}</p>
        <div className="optionsContainer">
          {currentQuestion.answer_options.map((option) => (
            <label key={option.id} className="optionLabel">
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                value={option.id}
                checked={answers.get(currentQuestion.id) === option.id}
                onChange={() => handleSelectOption(option.id)}
              />
              <span>{option.option_text}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="quizNav">
        <button
          className="primaryButton"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          ← Previous
        </button>

        {isLastQuestion ? (
          <button className="primaryButton" onClick={handleSubmit}>
            Submit Quiz
          </button>
        ) : (
          <button className="primaryButton" onClick={handleNext}>
            Next →
          </button>
        )}
      </div>

      <button className="textLink" onClick={onBack}>Exit without submitting</button>
    </div>
  )
}
