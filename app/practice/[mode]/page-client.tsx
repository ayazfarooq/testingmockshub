'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CertificationSelect } from '@/components/PracticeSelector'
import { FullPracticeQuiz } from '@/components/FullPracticeQuiz'

interface PracticeModeClientProps {
  mode: string
  selected: { title: string; description: string }
}

export function PracticeModeClient({ mode, selected }: PracticeModeClientProps) {
  const [showQuiz, setShowQuiz] = useState(false)
  const [selectedCertId, setSelectedCertId] = useState('')
  const [selectedCertName, setSelectedCertName] = useState('')

  const handleContinue = () => {
    const certSelect = document.getElementById('certification') as HTMLSelectElement
    if (!certSelect.value) {
      alert('Please select a certification')
      return
    }

    const certOptions = certSelect.querySelectorAll('option')
    const selectedOption = Array.from(certOptions).find((opt) => opt.value === certSelect.value)

    setSelectedCertId(certSelect.value)
    setSelectedCertName(selectedOption?.textContent || 'Unknown certification')
    setShowQuiz(true)
  }

  if (showQuiz && mode === 'full') {
    return (
      <FullPracticeQuiz
        certificationId={selectedCertId}
        certificationName={selectedCertName}
        onBack={() => setShowQuiz(false)}
      />
    )
  }

  return (
    <section className="selectionPanel">
      <p className="eyebrow">Practice setup</p>
      <h1>{selected.title}</h1>
      <p>{selected.description}</p>
      <label htmlFor="certification">Certification</label>
      <CertificationSelect />
      <button className="primaryButton" type="button" onClick={handleContinue}>
        Continue
      </button>
      <Link className="textLink" href="/">
        ← Back to practice options
      </Link>
    </section>
  )
}
