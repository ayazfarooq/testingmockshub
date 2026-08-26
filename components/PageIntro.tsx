export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="pageIntro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <div className="pageLead">{children}</div>
    </section>
  )
}
