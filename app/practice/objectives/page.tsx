import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ObjectiveSelection } from '@/components/ObjectiveSelection'

export const metadata: Metadata = { title: 'Practice by learning objective' }

export default function ObjectivesPage() {
  return (
    <main className="standardPage">
      <section className="selectionPanel">
        <Suspense fallback={<p className="formMessage" role="status">Loading…</p>}>
          <ObjectiveSelection />
        </Suspense>
      </section>
    </main>
  )
}
