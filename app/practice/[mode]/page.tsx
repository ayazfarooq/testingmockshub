import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CertificationSelect } from '@/components/PracticeSelector'

const modes = {
  full: { title: 'Full mock exam', description: 'Prepare for a timed, complete exam simulation.' },
  chapter: { title: 'Practice by chapter', description: 'Select a certification and focus on one syllabus chapter.' },
  objective: { title: 'Practice by learning objective', description: 'Target a precise learning objective inside a chapter.' },
}

export function generateStaticParams() { return Object.keys(modes).map((mode) => ({ mode })) }

export async function generateMetadata({ params }: { params: Promise<{ mode: string }> }): Promise<Metadata> {
  const { mode } = await params
  return { title: modes[mode as keyof typeof modes]?.title ?? 'Practice' }
}

export default async function PracticeModePage({ params }: { params: Promise<{ mode: string }> }) {
  const { mode } = await params
  const selected = modes[mode as keyof typeof modes]
  if (!selected) notFound()

  return (
    <main className="standardPage">
      <section className="selectionPanel">
        <p className="eyebrow">Practice setup</p><h1>{selected.title}</h1><p>{selected.description}</p>
        <label htmlFor="certification">Certification</label>
        <CertificationSelect />
        <button className="primaryButton" type="button">Continue</button>
        <Link className="textLink" href="/">← Back to practice options</Link>
      </section>
    </main>
  )
}
