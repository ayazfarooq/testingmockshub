'use client'

import { useRouter } from 'next/navigation'

export function BackToPracticeOptionsButton() {
  const router = useRouter()

  return (
    <button
      className="primaryButton"
      type="button"
      onClick={() => router.push('/')}
    >
      Back to practice options
    </button>
  )
}
