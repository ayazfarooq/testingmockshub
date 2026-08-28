import { supabase } from './client'
import type {
  Certification,
  Chapter,
  LearningObjective,
  Question,
} from '@/types/database'

export async function getCertifications(): Promise<Certification[]> {
  const { data, error } = await supabase
    .from('certifications')
    .select('id, name')
    .order('name')

  if (error) throw new Error(error.message)

  return data ?? []
}

export async function getChapters(
  certificationId: number,
): Promise<Chapter[]> {
  const { data, error } = await supabase
    .from('chapters')
    .select('id, certification_id, chapter_number, chapter_name')
    .eq('certification_id', certificationId)
    .order('chapter_number')

  if (error) throw new Error(error.message)

  return data ?? []
}

export async function getLearningObjectives(
  sectionId: number,
): Promise<LearningObjective[]> {
  const { data, error } = await supabase
    .from('learning_objectives')
    .select('id, chapter_id, lo_number, lo_title')
    .eq('section_id', sectionId)
    .order('objective_code')

  if (error) throw new Error(error.message)

  return data ?? []
}

export async function getQuestionsByChapter(
  chapterId: number,
  limit = 20,
): Promise<Question[]> {
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
        option_text,
        is_correct,
        display_order
      )
    `)
    .eq('chapter_id', chapterId)
    .eq('available', true)
    .limit(limit)

  if (error) throw new Error(error.message)

  return (data ?? []).map((question) => ({
    ...question,
    answer_options: [...question.answer_options]
  }))
}