import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'TestingMocksHub | Free ISTQB Practice Questions',
    template: '%s | TestingMocksHub',
  },
  description: 'Free, scenario-based ISTQB mock exams and targeted practice by chapter and learning objective.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
