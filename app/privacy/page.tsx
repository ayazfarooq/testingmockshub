import type { Metadata } from 'next'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = { title: 'Privacy Policy' }

export default function PrivacyPage() {
  return <main className="standardPage legalPage">
      <PageIntro eyebrow="Legal" title="Privacy Policy">
      <p>This page describes how TestingMocksHub handles account, progress and technical data.</p>
      </PageIntro>
      <section>
        <h2>Information we collect</h2><p>When account features are enabled, we may process your email address, practice history and progress. Hosting and analytics providers may process standard technical information such as IP addresses and browser details.</p>
        <h2>How information is used</h2><p>Information is used to provide account access, save progress, improve the service and protect the website.</p>
      </section>
      </main>
}
