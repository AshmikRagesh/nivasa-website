import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { allStays } from '../data/stays'
import { StayCardV2 } from '../components/stays'

const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#C2552A">
    <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1z"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 12l5 5L19 7" stroke="var(--terra)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const StayDetailPage = () => {
  const { id } = useParams()
  const stay = allStays.find(s => s.id === id) || allStays[0]

  const similar = allStays
    .filter(s => s.id !== stay.id && s.neighbourhood === stay.neighbourhood)
    .slice(0, 3)
    .concat(allStays.filter(s => s.id !== stay.id && s.neighbourhood !== stay.neighbourhood))
    .slice(0, 3)

  return (
    <>
      {/* Breadcrumb */}
      <div className="container" style={{ paddingTop: 28, paddingBottom: 0 }}>
        <Link to="/stays" className="detail-back">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M13 7H1m4-4L1 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to all stays
        </Link>
      </div>

      {/* Photo gallery */}
      <div className="container" style={{ marginTop: 20 }}>
        <div className="detail-gallery">
          <div className="detail-gallery-main">
            <img src={stay.img} alt={stay.name} />
          </div>
          <div className="detail-gallery-side">
            {stay.imgs.map((img, i) => (
              <div key={i} className="detail-gallery-side-img">
                <img src={img} alt={`${stay.name} — view ${i + 2}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content + booking */}
      <div className="container">
        <div className="detail-layout">

          {/* Left: content */}
          <div className="detail-content">
            <div className="detail-eyebrow">{stay.eyebrow}</div>
            <h1 className="detail-h1">{stay.name}</h1>

            <div className="detail-meta-row">
              <div className="detail-rating">
                <div className="detail-stars">
                  {[0,1,2,3,4].map(i => <StarIcon key={i} />)}
                </div>
                <span className="detail-rating-num">{stay.rating}</span>
                <span className="detail-rating-count">({stay.reviews} reviews)</span>
              </div>
              <span className="detail-dot" />
              <span className="detail-neighbourhood">{stay.neighbourhood}, Bangalore</span>
              {stay.minNights > 1 && (
                <>
                  <span className="detail-dot" />
                  <span className="detail-min-nights">{stay.minNights}-night minimum</span>
                </>
              )}
            </div>

            <div className="detail-chips">
              {stay.chips.map((c, i) => (
                <span key={i} className="detail-chip">{c}</span>
              ))}
            </div>

            <div className="rule" style={{ margin: '36px 0' }} />

            <div className="detail-section">
              <div className="eyebrow" style={{ marginBottom: 16 }}>About this home</div>
              {stay.longDesc.split('\n\n').map((para, i) => (
                <p key={i} className="detail-para">{para}</p>
              ))}
            </div>

            <div className="rule" style={{ margin: '36px 0' }} />

            <div className="detail-section">
              <div className="eyebrow" style={{ marginBottom: 20 }}>What's included</div>
              <div className="detail-amenities">
                {stay.amenities.map((a, i) => (
                  <div key={i} className="detail-amenity">
                    <CheckIcon />
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rule" style={{ margin: '36px 0' }} />

            <div className="detail-section">
              <div className="eyebrow" style={{ marginBottom: 16 }}>The neighbourhood</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 28, lineHeight: 1.1, marginBottom: 12 }}>{stay.neighbourhood}</h3>
              <p className="detail-para" style={{ marginTop: 0 }}>
                {stay.neighbourhood === 'Koramangala' && "Koramangala is where Bangalore does its living — cafés, parks, restaurants, and the kind of startup energy that makes every street feel active. 100ft Road is five minutes away."}
                {stay.neighbourhood === 'Indiranagar' && "Indiranagar is our favourite part of the city. Tree-lined streets, the best restaurants on 100ft Road, and homes that have actual character. CMH Road has everything else."}
                {stay.neighbourhood === 'Whitefield' && "Whitefield has grown up. What was once purely an IT corridor is now a proper neighbourhood — connected by metro, surrounded by good restaurants, and surprisingly calm once you get off the main road."}
                {stay.neighbourhood === 'Hebbal' && "Hebbal sits in the north of the city, quieter than the south and ten minutes from the airport. The lake is a two-minute walk. It's the part of Bangalore where people who live here actually slow down."}
              </p>
              <Link to={`/neighbourhoods#${stay.neighbourhood.toLowerCase()}`} style={{ display: 'inline-block', marginTop: 16, fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--terra)', fontWeight: 500 }}>
                Explore {stay.neighbourhood} →
              </Link>
            </div>
          </div>

          {/* Right: booking card */}
          <div>
            <div className="booking-card">
              <div className="booking-card-price">
                <span className="booking-price-num">₹{stay.price.toLocaleString("en-IN")}</span>
                <span className="booking-price-unit">/ night</span>
              </div>

              <div className="booking-card-rating">
                <div style={{ display: 'flex', gap: 2 }}>
                  {[0,1,2,3,4].map(i => <StarIcon key={i} />)}
                </div>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 15, color: 'var(--teak)' }}>{stay.rating}</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--teak-soft)' }}>· {stay.reviews} reviews</span>
              </div>

              <div className="booking-fields">
                <div className="booking-field-row">
                  <div className="booking-field">
                    <div className="booking-field-label">Check in</div>
                    <div className="booking-field-val">Select date</div>
                  </div>
                  <div className="booking-field booking-field-border">
                    <div className="booking-field-label">Check out</div>
                    <div className="booking-field-val">Select date</div>
                  </div>
                </div>
                <div className="booking-field" style={{ borderTop: '1px solid var(--hairline)' }}>
                  <div className="booking-field-label">Guests</div>
                  <div className="booking-field-val">2 adults</div>
                </div>
              </div>

              <button className="btn" style={{ width: '100%', justifyContent: 'center', marginTop: 14, padding: '16px 22px', fontSize: 15 }}>
                Book this stay
                <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>

              <p style={{ textAlign: 'center', marginTop: 12, fontSize: 12.5, color: 'var(--teak-soft)', fontFamily: 'var(--sans)' }}>
                You won't be charged yet
              </p>

              <div className="booking-card-divider" />

              <div className="booking-card-info-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 20 5.3 16A8 8 0 1 1 8 18.7L4 20Z" stroke="var(--terra)" strokeWidth="1.4" strokeLinejoin="round"/></svg>
                <span>Questions? Message us on WhatsApp</span>
              </div>
              <div className="booking-card-info-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10Zm0-14v5l3 2" stroke="var(--terra)" strokeWidth="1.4" strokeLinecap="round"/></svg>
                <span>{stay.minNights === 1 ? 'Minimum 1 night' : `Minimum ${stay.minNights} nights`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar stays */}
      {similar.length > 0 && (
        <section className="section" style={{ borderTop: '1px solid var(--hairline)' }}>
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow" style={{ marginBottom: 16 }}>More in Bangalore</div>
                <h2>You might also<br/><span className="italic">like these.</span></h2>
              </div>
              <div className="meta">
                <Link to="/stays" style={{ borderBottom: '1px solid var(--hairline-strong)', paddingBottom: 2, color: 'var(--teak)' }}>See all 42 stays →</Link>
              </div>
            </div>
            <div className="stays-v2-grid">
              {similar.map(s => <StayCardV2 key={s.id} stay={s} />)}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default StayDetailPage
