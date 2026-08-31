import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ChapterSelection } from '@/components/ChapterSelection'

export const metadata: Metadata = { title: 'Practice by chapter' }

export default function ChaptersPage() {
  return (
    <main className="standardPage">
      <section className="selectionPanel">
        <Suspense fallback={<p className="formMessage" role="status">Loading…</p>}>
          <ChapterSelection />
        </Suspense>
      </section>
    </main>
  )
}
