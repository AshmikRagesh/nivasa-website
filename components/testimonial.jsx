import React from 'react'

const Testimonial = () => {
  const quotes = [
    {
      text: "I've stayed in four Nivasa homes now. Every single one felt like someone actually thought about what I'd need. The filter coffee tip in the welcome note was genuinely the best I had in Bangalore.",
      who: "Meera R.",
      meta: "Indiranagar · 21 nights · The Jacaranda House",
    },
    {
      text: "Booked for three nights, stayed for three weeks. By day four the neighbours knew my name and the kaapi guy knew my order. It stopped feeling like a stay — it started feeling like my flat.",
      who: "Arjun & Priya",
      meta: "Koramangala · 19 nights · Banyan Studio",
    },
    {
      text: "We moved from Amsterdam with two kids and a cat. The Nivasa team found us a home, stocked the kitchen, and pointed us at a good school. Honestly, it made the first month bearable.",
      who: "The Van Dyke family",
      meta: "Whitefield · 30 nights · Neem & Teak",
    },
  ]

  return (
    <section className="section testimonial-v2" id="testimonial">
      <div className="container">
        <div className="tv2-head">
          <div className="eyebrow" style={{ marginBottom: 16 }}>Notes from guests</div>
          <h2>Kind words<br/><span className="italic">from kind people.</span></h2>
        </div>
        <div className="tv2-grid">
          {quotes.map((q,i) => (
            <article key={i} className="tv2-card">
              <div className="tv2-mark" aria-hidden="true">
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
                  <path d="M4 14c0-5 3-9 8-10v3c-3 1-5 4-5 7h5v10H4V14Zm12 0c0-5 3-9 8-10v3c-3 1-5 4-5 7h5v10h-8V14Z" fill="currentColor"/>
                </svg>
              </div>
              <p className="tv2-text">{q.text}</p>
              <div className="tv2-rule" />
              <div className="tv2-byline">
                <div className="tv2-who">{q.who}</div>
                <div className="tv2-meta">{q.meta}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
