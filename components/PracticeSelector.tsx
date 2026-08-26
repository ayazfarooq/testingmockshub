import Link from 'next/link'

const options = [
  {
    number: '01',
    title: 'Full mock exam',
    description: 'Take a timed, full-length simulation with the structure and challenge of the real certification exam.',
    href: '/practice/full',
    link: 'Start full exam',
  },
  {
    number: '02',
    title: 'Practice by chapter',
    description: 'Concentrate on one syllabus chapter, identify weak areas and strengthen your understanding.',
    href: '/practice/chapter',
    link: 'Choose a chapter',
  },
  {
    number: '03',
    title: 'Practice by learning objective',
    description: 'Select a specific learning objective inside a chapter and practise exactly what you need.',
    href: '/practice/objective',
    link: 'Choose an objective',
  },
]

export function PracticeSelector() {
  return (
    <section className="practiceSection" id="practice-options" aria-labelledby="practice-title">
      <div className="sectionHeading">
        <p className="eyebrow">Choose your practice path</p>
        <h2 id="practice-title">Study at the level that works for you</h2>
      </div>
      <div className="practiceGrid">
        {options.map((option) => (
          <article className="practiceCard" key={option.number}>
            <span className="cardNumber">{option.number}</span>
            <h3>{option.title}</h3>
            <p>{option.description}</p>
            <Link href={option.href}>{option.link}<span aria-hidden="true"> →</span></Link>
          </article>
        ))}
      </div>
    </section>
  )
}
