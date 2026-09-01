'use client'

import { useEffect, useState } from 'react'
import { checkQuestionAnswer, type AnswerCheckResult } from '@/lib/supabase/queries'
import type { Question } from '@/types/database'

interface QuestionsQuizProps {
  title: string
  loadQuestions: () => Promise<Question[]>
  onBack: () => void
}

export function QuestionsQuiz({ title, loadQuestions, onBack }: QuestionsQuizProps) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [checking, setChecking] = useState(false)
  const [error, setError] = useState('')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Map<number, number>>(new Map())
  const [results, setResults] = useState<Map<number, AnswerCheckResult>>(
    new Map(),
  )

  useEffect(() => {
    loadQuestions()
      .then(setQuestions)
      .catch((queryError) => {
        console.error('Failed to load questions:', queryError)
        setError(
          queryError instanceof Error
            ? queryError.message
            : 'Unknown error',
        )
      })
      .finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return (
      <div className="selectionPanel">
        <p>Loading questions…</p>
      </div>
    )
  }

  if (error && questions.length === 0) {
    return (
      <div className="selectionPanel">
        <p className="quizError" role="alert">
          Error: {error}
        </p>
        <button className="primaryButton" type="button" onClick={onBack}>
          Back to setup
        </button>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="selectionPanel">
        <p>No questions are available for this selection yet.</p>
        <button className="primaryButton" type="button" onClick={onBack}>
          Back to setup
        </button>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]
  const selectedOptionId = answers.get(currentQuestion.id)
  const currentResult = results.get(currentQuestion.id)
  const isLastQuestion = currentQuestionIndex === questions.length - 1

  async function handleSelectOption(optionId: number) {
    if (checking || currentResult) return

    setChecking(true)
    setError('')

    try {
      const result = await checkQuestionAnswer(currentQuestion.id, optionId)

      setAnswers((previousAnswers) => {
        const updatedAnswers = new Map(previousAnswers)
        updatedAnswers.set(currentQuestion.id, optionId)
        return updatedAnswers
      })

      setResults((previousResults) => {
        const updatedResults = new Map(previousResults)
        updatedResults.set(currentQuestion.id, result)
        return updatedResults
      })
    } catch (validationError) {
      console.error('Failed to validate answer:', validationError)
      setError(
        validationError instanceof Error
          ? validationError.message
          : 'Could not validate the selected answer.',
      )
    } finally {
      setChecking(false)
    }
  }

  function getOptionClass(optionId: number) {
    if (!currentResult) return 'optionLabel'
    if (currentResult.correct_option_ids.includes(optionId)) {
      return 'optionLabel optionCorrect'
    }
    if (optionId === selectedOptionId) {
      return 'optionLabel optionIncorrect'
    }
    return 'optionLabel optionDisabled'
  }

  function handleNext() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((current) => current + 1)
      setError('')
    }
  }

  function handleSubmit() {
    const correctAnswers = Array.from(results.values()).filter(
      (result) => result.selected_is_correct,
    ).length

    window.alert(
      `Quiz completed. You answered ${correctAnswers} of ${questions.length} questions correctly.`,
    )
    onBack()
  }

  return (
    <div className="quizContainer">
      <div className="quizHeader">
        <p className="eyebrow">{title}</p>
        <p>
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
        <p>
          Answered: {answers.size}/{questions.length}
        </p>
      </div>

      <div className="questionCard">
        <p className="questionText">{currentQuestion.question_text}</p>

        <div className="optionsContainer">
          {currentQuestion.answer_options.map((option) => (
            <label key={option.id} className={getOptionClass(option.id)}>
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                value={option.id}
                checked={selectedOptionId === option.id}
                disabled={checking || Boolean(currentResult)}
                onChange={() => void handleSelectOption(option.id)}
              />
              <span>{option.option_text}</span>
            </label>
          ))}
        </div>

        {checking && <p className="answerStatus">Checking answer…</p>}

        {error && (
          <p className="answerStatus answerIncorrect" role="alert">
            {error}
          </p>
        )}
      </div>

      <div className="quizNav">
        {isLastQuestion ? (
          <button
            className="primaryButton"
            type="button"
            disabled={!currentResult}
            onClick={handleSubmit}
          >
            Submit quiz
          </button>
        ) : (
          <button
            className="primaryButton"
            type="button"
            disabled={!currentResult}
            onClick={handleNext}
          >
            Next →
          </button>
        )}
        <button className="primaryButton" type="button" onClick={onBack}>
          Exit
        </button>
      </div>
    </div>
  )
}
