export function AdRail({ side }: { side: 'left' | 'right' }) {
  return (
    <aside className={`adRail adRail${side}`} aria-label={`${side} advertisement`}>
      <div className="adPlaceholder"><span>Advertisement</span><strong>Google Ad</strong></div>
    </aside>
  )
}
