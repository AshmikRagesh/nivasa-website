import React from 'react'

const WhyNivasa = () => {
  const items = [
    { n: "01", t: "Real photos, real homes", p: "No staged shots. What you see is exactly what you get.",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 7a2 2 0 0 1 2-2h3l2-2h4l2 2h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" stroke="currentColor" strokeWidth="1.4"/><circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.4"/></svg> },
    { n: "02", t: "Self check-in", p: "Arrive on your schedule. The keys are waiting.",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="12" r="4" stroke="currentColor" strokeWidth="1.4"/><path d="M13 12h8m-3-3v6m-3-6v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg> },
    { n: "03", t: "Kitchen stocked", p: "Essentials ready before you are. Milk, coffee, the basics.",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M8 3h8v5a4 4 0 0 1-4 4 4 4 0 0 1-4-4V3ZM12 12v9M8 21h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg> },
    { n: "04", t: "WhatsApp support", p: "A real person, not a bot. On the line when you need us.",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 20 5.3 16A8 8 0 1 1 8 18.7L4 20Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M9 10c.5 2 2 3.5 4 4l1.5-1.5 2.5 1v2.5c-3.5.5-7.5-3.5-7-7L11.5 7.5l1 2.5L11 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg> },
    { n: "05", t: "Flexible stays", p: "One night or one month. No pressure either way.",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg> },
    { n: "06", t: "Run by Bangaloreans", p: "We live here. We know the city. That's the difference.",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-6-7-12a7 7 0 0 1 14 0c0 6-7 12-7 12Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.4"/></svg> },
  ]
  return (
    <section className="section" id="why">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Why Nivasa</div>
            <h2>Small things<br/><span className="italic">done properly.</span></h2>
          </div>
          <div className="meta">
            The details we sweat so you don't have to. These are the six things every guest
            gets, every time — and the reason most come back.
          </div>
        </div>

        <div className="why-grid">
          {items.map(it => (
            <div className="why-cell" key={it.n}>
              <div className="why-top">
                <span className="why-num">{it.n}</span>
                <span className="why-icon">{it.icon}</span>
              </div>
              <h3>{it.t}</h3>
              <p>{it.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyNivasa
