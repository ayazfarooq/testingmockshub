import Link from 'next/link'

export function Logo() {
  return (
    <Link className="brand" href="/" aria-label="TestingMocksHub home">
      <span className="brandMark" aria-hidden="true">TMH</span>
      <span className="brandWordmark">
        TestingMocks<span className="brandH">H</span><span className="brandHub">ub</span>
      </span>
    </Link>
  )
}
