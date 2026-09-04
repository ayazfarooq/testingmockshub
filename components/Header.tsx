import Link from 'next/link'
import { Logo } from './Logo'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="siteHeader">
      <div className="headerInner">
        <Logo />
        <nav className="mainNav" aria-label="Main navigation">
          {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
          <Link className="loginButton" href="/login">Login</Link>
        </nav>
      </div>
    </header>
  )
}
