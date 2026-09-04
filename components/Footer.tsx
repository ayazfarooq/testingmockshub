import Link from 'next/link'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <Logo />
        <nav className="footerNav" aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <p>© {new Date().getFullYear()} TestingMocksHub</p>
      </div>
    </footer>
  )
}
