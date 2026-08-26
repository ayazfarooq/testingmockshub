import type { Metadata } from 'next'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <main className="standardPage">
      <PageIntro eyebrow="About TestingMocksHub" title="Practice that develops exam judgement">
        <p>TestingMocksHub helps ISTQB candidates practise applying syllabus knowledge in realistic situations, instead of relying only on definition-based questions.</p>
      </PageIntro>
      <section className="proseGrid">
        <article><h2>Scenario-based</h2><p>Questions describe practical testing decisions and require you to evaluate the best response.</p></article>
        <article><h2>Precisely targeted</h2><p>Practice can be organised by certification, chapter and individual learning objective.</p></article>
        <article><h2>Open to everyone</h2><p>The core practice experience is free, making focused exam preparation accessible to all learners.</p></article>
      </section>
    </main>
  )
}
