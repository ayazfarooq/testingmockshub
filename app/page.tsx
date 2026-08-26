import Link from 'next/link'
import { AdRail } from '@/components/AdRail'
import { PracticeSelector } from '@/components/PracticeSelector'

export default function HomePage() {
  return (
    <main>
      <div className="pageShell">
        <AdRail side="left" />
        <div className="contentColumn">
          <section className="heroSection">
            <div className="heroCopy">
              <div className="freeBadge"><span aria-hidden="true">✓</span> Free for everyone</div>
              <p className="eyebrow">ISTQB exam preparation</p>
              <h1>Practise the way the <span>real exam</span> challenges you.</h1>
              <p className="heroLead">Scenario-based questions for ISTQB certifications—not just simple recall. Build confidence by practising complete exams, chapters or individual learning objectives.</p>
              <div className="heroActions">
                <Link className="primaryButton" href="#practice-options">Choose practice mode</Link>
                <Link className="textLink" href="/about">How our questions work <span aria-hidden="true">→</span></Link>
              </div>
            </div>
            <div className="questionPreview" aria-label="Example question preview">
              <div className="previewTop"><span>Example scenario</span><span>1 of 40</span></div>
              <p className="previewMeta">CTFL · Risk-based testing</p>
              <h2>A team has limited time before release. Which testing decision provides the strongest risk coverage?</h2>
              <div className="answerOption"><span>A</span><p>Run every existing test once, regardless of priority.</p></div>
              <div className="answerOption selected"><span>B</span><p>Prioritise tests by impact and likelihood of failure.</p></div>
              <div className="answerOption"><span>C</span><p>Test only the features changed most recently.</p></div>
              <div className="previewFoot"><span>Scenario-based</span><span>Apply knowledge</span></div>
            </div>
          </section>

          <PracticeSelector />

          <section className="differenceSection">
            <div>
              <p className="eyebrow">Beyond memorisation</p>
              <h2>Questions designed to test understanding</h2>
            </div>
            <div className="differenceCopy">
              <p>Knowing a definition is not enough in the real exam. Our questions place concepts in realistic testing situations and ask you to select the most appropriate response.</p>
              <ul>
                <li><span>01</span>Realistic testing scenarios</li>
                <li><span>02</span>Plausible, application-based answer choices</li>
                <li><span>03</span>Focused practice for individual learning objectives</li>
              </ul>
            </div>
          </section>

          <section className="freeSection">
            <p className="eyebrow">Open preparation</p>
            <h2>Serious ISTQB practice. Completely free.</h2>
            <p>Choose a certification and start building exam confidence at your own pace.</p>
            <Link className="lightButton" href="#practice-options">Start practising</Link>
          </section>
        </div>
        <AdRail side="right" />
      </div>
    </main>
  )
}
