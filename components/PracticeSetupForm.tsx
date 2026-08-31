'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getCertifications } from '@/lib/supabase/queries'
import { FullPracticeQuiz } from '@/components/FullPracticeQuiz'
import type { Certification } from '@/types/database'

export function PracticeSetupForm({ mode }: { mode: string }) {
  const router = useRouter()
  const [certifications, setCertifications] = useState<Certification[]>([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)
  const [certificationId, setCertificationId] = useState('')
  const [showQuiz, setShowQuiz] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function loadCertifications() {
      try {
        const data = await getCertifications()
        if (cancelled) return
        setCertifications(data)
      } catch {
        if (!cancelled) setLoadError(true)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadCertifications()
    return () => {
      cancelled = true
    }
  }, [])

  function handleContinue() {
    if (!certificationId) return

    if (mode === 'chapter') {
      const certification = certifications.find((option) => String(option.id) === certificationId)
      const params = new URLSearchParams({ certificationId })
      if (certification) params.set('name', certification.name)
      router.push(`/practice/chapters?${params.toString()}`)
      return
    }

    if (mode === 'full') {
      setShowQuiz(true)
      return
    }

    if (mode === 'objective') {
      const certification = certifications.find((option) => String(option.id) === certificationId)
      const params = new URLSearchParams({ certificationId })
      if (certification) params.set('name', certification.name)
      router.push(`/practice/objectives?${params.toString()}`)
      return
    }
  }

  if (showQuiz && mode === 'full') {
    const certification = certifications.find((option) => String(option.id) === certificationId)
    return (
      <FullPracticeQuiz
        certificationId={certificationId}
        certificationName={certification?.name ?? 'Unknown certification'}
        onBack={() => setShowQuiz(false)}
      />
    )
  }

  return (
    <>
      <label htmlFor="certification">Certification</label>
      <select
        id="certification"
        value={certificationId}
        onChange={(event) => setCertificationId(event.target.value)}
        disabled={loading || loadError}
      >
        <option value="" disabled>
          {loading ? 'Loading certifications…' : loadError ? 'Unable to load certifications' : 'Select an ISTQB certification'}
        </option>
        {certifications.map((certification) => (
          <option key={certification.id} value={certification.id}>{certification.name}</option>
        ))}
      </select>
      {loadError && (
        <p className="formMessage" role="alert">
          We couldn&apos;t load certifications right now. Please refresh the page.
        </p>
      )}
      <button className="primaryButton" type="button" disabled={!certificationId} onClick={handleContinue}>
        Continue
      </button>
    </>
  )
}
