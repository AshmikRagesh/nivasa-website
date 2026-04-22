import React from 'react'
import { Link } from 'react-router-dom'
import { allStays } from '../data/stays'

const hoods = [
  {
    id: "koramangala",
    name: "Koramangala",
    tagline: "The city's living room.",
    desc: "Koramangala is where Bangalore does its living. Cafés that fill up before 9am, parks where people actually run, tech offices tucked between old houses — and 100ft Road holding it all together. It's the neighbourhood that made South Bangalore worth staying in.",
    highlights: ["100ft Road", "Café scene", "Parks & joggers' tracks", "Startup hub", "HSR border"],
    img: "https://images.unsplash.com/photo-1567360425618-1594206637d2?w=1200&q=80",
    imgCaption: "KORAMANGALA · 100ft Road at dusk",
  },
  {
    id: "indiranagar",
    name: "Indiranagar",
    tagline: "Character, restaurants, and trees.",
    desc: "Indiranagar has the best restaurants in Bangalore and enough tree cover to make you forget it's a city. CMH Road has everything you need day-to-day. 100ft Road has everything you want at night. The homes here have actual character — high ceilings, old-growth gardens, the kind of thing new buildings can't replicate.",
    highlights: ["100ft Road dining", "CMH Road market", "Tree-lined 12th Main", "HAL heritage area", "Closest metro access"],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    imgCaption: "INDIRANAGAR · 12th Main, morning",
  },
  {
    id: "whitefield",
    name: "Whitefield",
    tagline: "Well-connected, surprisingly calm.",
    desc: "Whitefield has grown up. What started as an IT corridor is now a proper neighbourhood — metro-connected, surrounded by good restaurants and parks, and quiet once you're off the main road. If your work is east of MG Road, there's nowhere better to be.",
    highlights: ["ITPL & tech parks", "Purple Line metro", "Forum Shantiniketan", "Varthur Lake walks", "Prestige complexes"],
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
    imgCaption: "WHITEFIELD · Morning light, Prestige area",
  },
  {
    id: "hebbal",
    name: "Hebbal",
    tagline: "North Bangalore, lake views, airport road.",
    desc: "Hebbal is the city at a slower pace. The lake is two minutes on foot. The airport expressway is ten minutes by car. The parts of Bangalore that Hebbal residents love — the quiet lanes, the old bungalows, the morning fog over the water — haven't changed much in twenty years.",
    highlights: ["Hebbal Lake", "10 min to airport", "Manyata Tech Park", "Sankey Tank nearby", "Expressway access"],
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    imgCaption: "HEBBAL · Lake view from terrace",
  },
]

const NhFeature = ({ hood, index }) => {
  const stayCount = allStays.filter(s => s.neighbourhood === hood.name).length
  const reverse = index % 2 !== 0

  return (
    <div id={hood.id} className={"nh-feature" + (reverse ? " nh-feature-reverse" : "")}>
      <div className="nh-feature-img">
        <img src={hood.img} alt={hood.name} />
        <span className="nh-feature-caption">{hood.imgCaption}</span>
      </div>
      <div className="nh-feature-copy">
        <div className="eyebrow" style={{ marginBottom: 16 }}>{hood.name}</div>
        <h2 className="nh-feature-name">{hood.tagline}</h2>
        <p className="nh-feature-desc">{hood.desc}</p>
        <div className="nh-highlights">
          {hood.highlights.map((h, i) => (
            <span key={i} className="nh-highlight">{h}</span>
          ))}
        </div>
        <div className="nh-feature-foot">
          <div>
            <div className="nh-feature-count">{stayCount} homes</div>
            <div className="nh-feature-count-label">available to book</div>
          </div>
          <Link to={`/stays`} className="btn" onClick={() => window.scrollTo(0,0)}>
            See homes in {hood.name}
            <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

const NeighbourhoodsPage = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 16 }}>Where in Bangalore</div>
          <h1 className="page-hero-h1">
            Four neighbourhoods.<br /><em>One good city.</em>
          </h1>
          <p className="page-hero-lede">
            We don't spread thin across all of Bangalore. We pick pockets we actually know —
            near the things you'll use, in the parts of the city worth living in.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <div className="container">
        <div className="rule" style={{ marginBottom: 32 }} />
        <div className="nh-page-tabs">
          {hoods.map(h => (
            <a key={h.id} href={`#${h.id}`} className="nh-page-tab">{h.name}</a>
          ))}
        </div>
        <div className="rule" style={{ marginTop: 32 }} />
      </div>

      {/* Feature sections */}
      <div className="container">
        {hoods.map((hood, i) => (
          <NhFeature key={hood.id} hood={hood} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="section" style={{ background: 'var(--linen-2)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>Ready to stay?</div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.06 }}>
                Browse all homes<br /><span className="italic">across the city.</span>
              </h2>
            </div>
            <Link to="/stays" className="btn" style={{ padding: '16px 28px', fontSize: 15 }}>
              See all 42 stays
              <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default NeighbourhoodsPage
