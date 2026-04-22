import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { allStays } from '../data/stays'
import { StayCardV2 } from '../components/stays'

const HOODS = ["All", "Koramangala", "Indiranagar", "Whitefield", "Hebbal"]

const StaysPage = () => {
  const [hood, setHood] = useState("All")
  const filtered = hood === "All" ? allStays : allStays.filter(s => s.neighbourhood === hood)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 16 }}>All stays</div>
          <h1 className="page-hero-h1">
            42 homes.<br /><em>Pick yours.</em>
          </h1>
          <p className="page-hero-lede">
            Every Nivasa home is leased, furnished, and looked after by us.
            What you see is what you get — right down to the kettle.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="rule" style={{ marginBottom: 36 }} />

        <div className="filter-bar">
          <div className="filter-pills">
            {HOODS.map(h => (
              <button
                key={h}
                onClick={() => setHood(h)}
                className={"filter-pill" + (hood === h ? " active" : "")}
              >{h}</button>
            ))}
          </div>
          <span className="filter-count">{filtered.length} homes</span>
        </div>

        <div className="stays-v2-grid" style={{ marginBottom: 80 }}>
          {filtered.map(s => <StayCardV2 key={s.id} stay={s} />)}
        </div>

        <div className="stays-page-cta">
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Not seeing what you need?</div>
            <h3 className="stays-page-cta-h">
              Tell us what you're<br /><span className="italic">looking for.</span>
            </h3>
            <p style={{ marginTop: 14, color: "var(--teak-soft)", fontSize: 15, maxWidth: "44ch", lineHeight: 1.55 }}>
              Group trip, corporate stay, or a month in the city — message us and we'll find something that fits.
            </p>
          </div>
          <Link to="/contact" className="btn">
            Get in touch
            <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </>
  )
}

export default StaysPage
