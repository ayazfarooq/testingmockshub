export type Certification = {
  id: number
  name: string
}

export type Chapter = {
  id: number
  certification_id: number
  chapter_number: number
  chapter_name: string
}

export type LearningObjective = {
  id: number
  chapter_id: number
  lo_number: string
  lo_title: string
}

export type AnswerOption = {
  id: number
  question_id: number
  option_text: string
}

export type QuestionDifficulty = 'Recall' | 'medium' | 'Advanced'

export type Question = {
  id: number
  learning_objective_id: number
  question_text: string
  difficulty: QuestionDifficulty | null
  answer_options: AnswerOption[]
}
