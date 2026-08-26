import Link from 'next/link'

export function Logo() {
  return (
    <Link className="brand" href="/" aria-label="TestingMocksHub home">
      <span className="brandMark" aria-hidden="true">TMH</span>
      <span className="brandName">TestingMocks<span>Hub</span></span>
    </Link>
  )
}
