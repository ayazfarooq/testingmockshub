import type { Metadata } from 'next'
import Link from 'next/link'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = { title: 'Pricing' }

export default function PricingPage() {
  return (
    <main className="standardPage">
      <PageIntro eyebrow="Simple pricing" title="Free practice for every learner">
        <p>Access full mock exams and targeted practice without a subscription.</p>
      </PageIntro>
      <section className="pricingCard">
        <p className="eyebrow">Free plan</p><p className="price">€0 <span>/ forever</span></p>
        <ul><li>Full-length mock exams</li><li>Practice by chapter</li><li>Practice by learning objective</li><li>Scenario-based questions</li></ul>
        <Link className="primaryButton" href="/#practice-options">Start practising</Link>
      </section>
    </main>
  )
}
