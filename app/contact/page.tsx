import type { Metadata } from 'next'
import { PageIntro } from '@/components/PageIntro'
import { SLACK_CHANNEL_URL, CONTACT_EMAIL } from '@/config/links'

export const metadata: Metadata = { title: 'Contact us' }

export default function ContactPage() {
  return (
    <main className="standardPage">
      <PageIntro eyebrow="Contact" title="Contact us">
        <p>If you need help or have feedback, reach out via Slack or email. We aim to respond within 24 hours.</p>
      </PageIntro>

      <section>
        <h2>Slack</h2>
        <p>Join our Slack channel for real-time support and community discussion:</p>
        <p>
          <a href={SLACK_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="link">
            Join our Slack channel
          </a>
        </p>

        <h2>Email</h2>
        <p>
          For detailed issues or account requests, email{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="link">{CONTACT_EMAIL}</a>.
        </p>

        <h2>Support hours</h2>
        <p>Mon–Fri, 9:00–17:00 (local time).</p>
      </section>
    </main>
  )
}