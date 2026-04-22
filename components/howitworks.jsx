import React from 'react'

const HowItWorks = () => {
  const steps = [
    { n: "Step one", t: "Pick your home", p: "Filter by neighbourhood, length of stay, and what matters — a desk, a balcony, room for the kids. Real photos, real layouts.", glyph: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 11 12 4l9 7v8a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-8Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>
    )},
    { n: "Step two", t: "Book in a tap", p: "Direct with us or via Airbnb. Instant confirmation, flexible cancellation, and a real person on WhatsApp if you need one.", glyph: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 11.5 11 13.5 15 9.5M5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
    )},
    { n: "Step three", t: "Settle in", p: "Self check-in, fresh linens, high-speed Wi-Fi, and a welcome note with the best filter coffee on the street.", glyph: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M15 7h2a4 4 0 0 1 0 8h-2M5 7h10v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V7ZM7 3v2M11 3v2M13 3v2M5 21h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
    )},
  ]
  return (
    <section className="section" id="how">
      <div className="container">
        <div className="how">
          <div className="how-head">
            <div>
              <div className="eyebrow" style={{ color: "var(--clay)", marginBottom: 18 }}>How it works</div>
              <h2>Three steps.<br/><span style={{ fontStyle:"italic", color:"var(--terra)" }}>No small print.</span></h2>
            </div>
            <div className="meta">
              From the first search to the front door, we try to keep it as simple as calling
              a friend. Because that's really what booking a Nivasa should feel like.
            </div>
          </div>
          <div className="how-steps">
            {steps.map((s,i) => (
              <div key={i} className="how-step">
                <div className="how-rule" />
                <div className="num">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.p}</p>
                <div className="glyph">{s.glyph}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
