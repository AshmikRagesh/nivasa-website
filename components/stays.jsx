import React from 'react'
import { Link } from 'react-router-dom'
import { allStays } from '../data/stays'

const Heart = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>

export const StayCardV2 = ({ stay }) => (
  <article className="stay-v2">
    <div className="stay-v2-photo">
      <img src={stay.img} alt={stay.name} />
      {stay.tag ? <span className="stay-v2-tag">{stay.tag}</span> : null}
      <span className="stay-v2-heart"><Heart/></span>
    </div>
    <div className="stay-v2-body">
      <div className="stay-v2-eyebrow">{stay.eyebrow}</div>
      <h3>{stay.name}</h3>
      <p className="stay-v2-desc">{stay.desc}</p>
      <div className="stay-v2-chips">
        {stay.chips.map((c,i) => <span key={i} className="chip">{c}</span>)}
      </div>
      <div className="stay-v2-foot">
        <Link to={`/stays/${stay.id}`} className="stay-v2-link">Explore this stay →</Link>
        <div className="stay-v2-price">
          <span className="p-num">₹{stay.price.toLocaleString("en-IN")}</span>
          <span className="p-unit">/ night</span>
        </div>
      </div>
    </div>
  </article>
)

const Stays = () => {
  const list = allStays.slice(0, 3)

  return (
    <section className="section stays-v2-section" id="stays">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Featured stays</div>
            <h2>A few homes<br/><span className="italic">we think you'll love.</span></h2>
          </div>
          <div className="meta">
            Every Nivasa home is leased long-term, furnished by us, and looked after by a
            local team. What you see is what you get — right down to the kettle.
            <div style={{ marginTop: 18 }}>
              <Link to="/stays" style={{ borderBottom: "1px solid var(--hairline-strong)", paddingBottom: 2, color: "var(--teak)" }}>See all 42 stays →</Link>
            </div>
          </div>
        </div>

        <div className="stays-v2-grid">
          {list.map(s => <StayCardV2 key={s.name} stay={s} />)}
        </div>
      </div>
    </section>
  )
}

export default Stays
