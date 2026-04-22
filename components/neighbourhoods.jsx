import React from 'react'
import { Link } from 'react-router-dom'
import Img from './img'

const Neighbourhoods = () => {
  const hoods = [
    { name: "Koramangala", count: "14 homes", note: "The city's living room. Cafés, parks, and tech offices in one stretch." },
    { name: "Indiranagar", count: "11 homes", note: "Tree-lined streets, the best restaurants, and homes with character." },
    { name: "Whitefield",  count: "10 homes", note: "For work trips east. Quiet, well-connected, and surprisingly green." },
    { name: "Hebbal",      count: "7 homes",  note: "Close to the airport road, lakes, and a calmer pace in the north." },
  ]
  const img = "https://images.unsplash.com/photo-1567360425618-1594206637d2?w=600&q=80"
  return (
    <section className="section" id="neighbourhoods">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>The city</div>
            <h2>Find your<br/><span className="italic">neighbourhood.</span></h2>
          </div>
          <div className="meta">
            Bangalore isn't one city — it's a dozen. We pick homes in pockets we actually
            like, near the things you'll actually need. Pick a stretch and we'll show you
            what's around.
          </div>
        </div>

        <div className="nh-grid">
          {hoods.map((h,i) => (
            <Link key={i} to={`/neighbourhoods#${h.name.toLowerCase()}`} className="nh-card">
              <Img src={img} caption={`${h.name.toUpperCase()} · Street`} alt={`${h.name} street scene`} />
              <div className="body">
                <div className="body-text">
                  <h3>{h.name}</h3>
                  <p className="nh-note">{h.note}</p>
                  <div className="nh-cta">
                    <span className="count">{h.count}</span>
                    <span className="nh-link">Explore homes →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Neighbourhoods
