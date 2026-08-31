import { getSupabase } from './client'
import type {
  Certification,
  Chapter,
  LearningObjective,
  Question,
} from '@/types/database'

export type AnswerCheckResult = {
  selected_is_correct: boolean
  correct_option_ids: number[]
}

export async function getCertifications(): Promise<Certification[]> {
  const supabase = getSupabase()

  const { data, error } = await supabase
    .from('certifications')
    .select('id, name')
    .eq('available', true)
    .order('name', { ascending: true })

  if (error) {
    console.error('Certifications query failed:', error)
    throw new Error(error.message)
  }

  return data ?? []
}

export async function getChapters(
  certificationId: number,
): Promise<Chapter[]> {
  const supabase = getSupabase()

  const { data, error } = await supabase
    .from('chapters')
    .select('id, certification_id, chapter_number, chapter_name')
    .eq('certification_id', certificationId)
    .order('chapter_number', { ascending: true })

  if (error) {
    console.error('Chapters query failed:', error)
    throw new Error(error.message)
  }

  return data ?? []
}

export async function getLearningObjectives(
  chapterId: number,
): Promise<LearningObjective[]> {
  const supabase = getSupabase()

  const { data, error } = await supabase
    .from('learning_objectives')
    .select('id, chapter_id, lo_number, lo_title')
    .eq('chapter_id', chapterId)
    .order('lo_number', { ascending: true })

  if (error) {
    console.error('Learning-objectives query failed:', error)
    throw new Error(error.message)
  }

  return data ?? []
}

export async function getQuestionsByChapter(
  chapterId: number,
  limit = 20,
): Promise<Question[]> {
  const supabase = getSupabase()

  const { data, error } = await supabase
    .from('questions')
    .select(`
      id,
      learning_objective_id,
      question_text,
      difficulty,
      learning_objectives!inner (
        chapter_id
      ),
      answer_options (
        id,
        question_id,
        option_text
      )
    `)
    .eq('learning_objectives.chapter_id', chapterId)
    .limit(limit)

  if (error) {
    console.error('Questions query failed:', {
      code: error.code,
      message: error.message,
      details: error.details,
      hint: error.hint,
    })
    throw new Error(error.message)
  }

  return (data ?? []).map((question) => ({
    id: question.id,
    learning_objective_id: question.learning_objective_id,
    question_text: question.question_text,
    difficulty: question.difficulty,
    answer_options: question.answer_options ?? [],
  }))
}

export async function getQuestionsByChapters(
  chapterIds: number[],
  limit = 40,
): Promise<Question[]> {
  const supabase = getSupabase()

  const { data, error } = await supabase
    .from('questions')
    .select(`
      id,
      learning_objective_id,
      question_text,
      difficulty,
      learning_objectives!inner (
        chapter_id
      ),
      answer_options (
        id,
        question_id,
        option_text
      )
    `)
    .in('learning_objectives.chapter_id', chapterIds)
    .limit(limit)

  if (error) {
    console.error('Questions-by-chapters query failed:', {
      code: error.code,
      message: error.message,
      details: error.details,
      hint: error.hint,
    })
    throw new Error(error.message)
  }

  return (data ?? []).map((question) => ({
    id: question.id,
    learning_objective_id: question.learning_objective_id,
    question_text: question.question_text,
    difficulty: question.difficulty,
    answer_options: question.answer_options ?? [],
  }))
}

export async function getQuestionsByLearningObjective(
  learningObjectiveId: number,
  limit = 20,
): Promise<Question[]> {
  const supabase = getSupabase()

  const { data, error } = await supabase
    .from('questions')
    .select(`
      id,
      learning_objective_id,
      question_text,
      difficulty,
      answer_options (
        id,
        question_id,
        option_text
      )
    `)
    .eq('learning_objective_id', learningObjectiveId)
    .limit(limit)

  if (error) {
    console.error('Questions-by-objective query failed:', error)
    throw new Error(error.message)
  }

  return (data ?? []).map((question) => ({
    id: question.id,
    learning_objective_id: question.learning_objective_id,
    question_text: question.question_text,
    difficulty: question.difficulty,
    answer_options: question.answer_options ?? [],
  }))
}

export async function getQuestionsByCertification(
  certificationId: number,
  limit = 40,
): Promise<Question[]> {
  const supabase = getSupabase()

  const { data, error } = await supabase
    .from('questions')
    .select(`
      id,
      learning_objective_id,
      question_text,
      difficulty,
      learning_objectives!inner (
        id,
        chapter_id,
        chapters!inner (
          id,
          certification_id
        )
      ),
      answer_options (
        id,
        question_id,
        option_text
      )
    `)
    .eq(
      'learning_objectives.chapters.certification_id',
      certificationId,
    )
    .limit(limit)

  if (error) {
    console.error('Questions-by-certification query failed:', {
      code: error.code,
      message: error.message,
      details: error.details,
      hint: error.hint,
    })

    throw new Error(error.message)
  }

  return (data ?? []).map((question) => ({
    id: question.id,
    learning_objective_id: question.learning_objective_id,
    question_text: question.question_text,
    difficulty: question.difficulty,
    answer_options: question.answer_options ?? [],
  }))
}

export async function checkQuestionAnswer(
  questionId: number,
  optionId: number,
): Promise<AnswerCheckResult> {
  const supabase = getSupabase()

  const { data, error } = await supabase.rpc('check_question_answer', {
    p_question_id: questionId,
    p_option_id: optionId,
  })

  if (error) {
    console.error('Answer validation failed:', error)
    throw new Error(error.message)
  }

  const result = data?.[0]

  if (!result) {
    throw new Error('No answer-validation result was returned.')
  }

  return {
    selected_is_correct: result.selected_is_correct,
    correct_option_ids: result.correct_option_ids ?? [],
  }
}
