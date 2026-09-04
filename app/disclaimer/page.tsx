import type { Metadata } from 'next'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = { title: 'Disclaimer' }

export default function DisclaimerPage() {
  return <main className="standardPage legalPage">
        <PageIntro eyebrow="Legal" title="Disclaimer">
        <p>Important information about the purpose and independence of this practice website.</p>
        </PageIntro>
        <section>
          <h2>Independent practice resource</h2><p>TestingMocksHub is an independent practice resource and is not affiliated with, endorsed by or operated by ISTQB. ISTQB and related marks belong to their respective owners.</p>
          <h2>No guarantee of results</h2><p>Practice questions are educational materials. Using this website does not guarantee success in any certification examination.</p>
          <h2>Not real exam content</h2><p>The questions are independently created practice questions and are not copied from live certification examinations or any other similar practice resource.</p>
        </section>
        </main>
}
