import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { allStays } from '../data/stays'
import { StayCardV2 } from '../components/stays'

const StarIcon = ({ size = 13, fill = '#C2552A' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
    <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1z"/>
  </svg>
)

const amenityIcons = {
  'Wi-Fi': <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M1 7C5.3 2.7 10.4 1 12 1s6.7 1.7 11 6m-3.5 3.5a8 8 0 0 0-11 0M9 17l3 3 3-3a3 3 0 0 0-6 0Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  'Work desk': <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="8" width="20" height="3" rx="1" stroke="currentColor" strokeWidth="1.5"/><path d="M6 11v8M18 11v8M4 19h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  'Kitchen': <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 10v.01M8 14v.01M12 10v.01M12 14v.01M16 10v.01M16 14v.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  'Netflix': <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="15" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 21h8M12 18v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  'Balcony': <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 18h16M4 18V8M20 18V8M4 8h16M8 8V5M16 8V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  'Air conditioning': <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="6" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M6 16v3M12 16v3M18 16v3M7 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  'Washing machine': <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.5"/><circle cx="7" cy="6" r="1" fill="currentColor"/></svg>,
  'Parking': <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  'default': <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
}

const getIcon = (name) => {
  const match = Object.keys(amenityIcons).find(k => k !== 'default' && name.toLowerCase().includes(k.toLowerCase()))
  return amenityIcons[match] || amenityIcons['default']
}

const HIGHLIGHT_MAP = [
  { key: 'Self check-in', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>, title: 'Self check-in', desc: 'Check yourself in with the building staff.' },
  { key: 'Work desk', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="2" y="8" width="20" height="3" rx="1" stroke="currentColor" strokeWidth="1.5"/><path d="M6 11v8M18 11v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>, title: 'Great for work', desc: 'Dedicated desk and fast Wi-Fi for your best focus days.' },
  { key: 'Balcony', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V9l7-6 7 6v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: 'Private outdoor space', desc: 'A balcony or terrace all to yourself.' },
  { key: 'Washing machine', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.5"/></svg>, title: 'In-unit laundry', desc: 'Washer in the apartment — no laundromat runs.' },
  { key: 'Air conditioning', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="2" y="6" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M6 14v4M12 14v4M18 14v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>, title: 'Beat the heat', desc: 'A/C and ceiling fan for Bangalore summers.' },
]

const BookingCard = ({ stay }) => {
  const [checkIn, setCheckIn] = React.useState('')
  const [checkOut, setCheckOut] = React.useState('')
  const [guests, setGuests] = React.useState(1)
  const [showGuests, setShowGuests] = React.useState(false)
  const [showBreakdown, setShowBreakdown] = React.useState(false)

  const nights = React.useMemo(() => {
    if (!checkIn || !checkOut) return null
    const d = Math.round((new Date(checkOut) - new Date(checkIn)) / 86400000)
    return d > 0 ? d : null
  }, [checkIn, checkOut])

  const subtotal = nights ? stay.price * nights : null
  const cleaning = nights ? Math.round(stay.price * 0.12) : null
  const service = nights ? Math.round(subtotal * 0.1) : null
  const total = nights ? subtotal + cleaning + service : null

  return (
    <div className="booking-card">
      <div className="bc-price-row">
        <div className="bc-price">
          <span className="bc-price-num">₹{stay.price.toLocaleString('en-IN')}</span>
          <span className="bc-price-unit"> / night</span>
        </div>
        <div className="bc-rating">
          <StarIcon size={12} />
          <span>{stay.rating}</span>
          <span className="bc-rating-count">· {stay.reviews} reviews</span>
        </div>
      </div>

      <div className="bc-fields">
        <div className="bc-field-row">
          <label className="bc-field">
            <span className="bc-field-label">Check in</span>
            <input
              type="date"
              className="bc-field-input"
              value={checkIn}
              min={new Date().toISOString().slice(0, 10)}
              onChange={e => setCheckIn(e.target.value)}
            />
          </label>
          <label className="bc-field bc-field-sep">
            <span className="bc-field-label">Check out</span>
            <input
              type="date"
              className="bc-field-input"
              value={checkOut}
              min={checkIn || new Date().toISOString().slice(0, 10)}
              onChange={e => setCheckOut(e.target.value)}
            />
          </label>
        </div>
        <div className="bc-field bc-field-top" onClick={() => setShowGuests(v => !v)} style={{ cursor: 'pointer' }}>
          <span className="bc-field-label">Guests</span>
          <div className="bc-field-guests-row">
            <span className="bc-field-val">{guests} guest{guests !== 1 ? 's' : ''}</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: showGuests ? 'rotate(180deg)' : 'none', transition: 'transform .2s', flexShrink: 0 }}>
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        {showGuests && (
          <div className="bc-guests-picker">
            <div className="bc-guests-row">
              <div>
                <div style={{ fontWeight: 500, fontSize: 14 }}>Guests</div>
                <div style={{ fontSize: 12, color: 'var(--teak-soft)' }}>Max 8</div>
              </div>
              <div className="bc-guests-ctrl">
                <button className="bc-guests-btn" onClick={() => setGuests(g => Math.max(1, g - 1))}>−</button>
                <span className="bc-guests-num">{guests}</span>
                <button className="bc-guests-btn" onClick={() => setGuests(g => Math.min(8, g + 1))}>+</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <button className="btn bc-reserve-btn">
        Reserve
        <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <p className="bc-no-charge">You won't be charged yet</p>

      {nights && (
        <div className="bc-breakdown">
          <button className="bc-breakdown-toggle" onClick={() => setShowBreakdown(v => !v)}>
            <span>₹{stay.price.toLocaleString('en-IN')} × {nights} night{nights !== 1 ? 's' : ''}</span>
            <span>₹{subtotal.toLocaleString('en-IN')}</span>
          </button>
          {showBreakdown && (
            <>
              <div className="bc-breakdown-row"><span>Cleaning fee</span><span>₹{cleaning.toLocaleString('en-IN')}</span></div>
              <div className="bc-breakdown-row"><span>Nivasa service fee</span><span>₹{service.toLocaleString('en-IN')}</span></div>
            </>
          )}
          <div className="bc-breakdown-total">
            <span>Total before taxes</span>
            <span>₹{total.toLocaleString('en-IN')}</span>
          </div>
        </div>
      )}

      {!nights && (
        <div className="bc-breakdown">
          <div className="bc-breakdown-row" style={{ color: 'var(--teak-soft)', fontSize: 13 }}>
            <span>Add dates to see exact pricing</span>
          </div>
        </div>
      )}

      <div className="bc-footer-row">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 20 5.3 16A8 8 0 1 1 8 18.7L4 20Z" stroke="var(--terra)" strokeWidth="1.4" strokeLinejoin="round"/></svg>
        <span>Questions? Message us on WhatsApp</span>
      </div>
    </div>
  )
}

const SAMPLE_REVIEWS = [
  { name: 'Priya M.', date: 'March 2026', text: 'Exactly as described — clean, well-lit, and in a great part of town. The neighbourhood guide they left was genuinely helpful.', rating: 5 },
  { name: 'Arjun S.', date: 'February 2026', text: "Stayed for two weeks for work. The internet was fast, the bed was comfortable, and the kitchen had everything I needed. Would book again.", rating: 5 },
]

const StayDetailPage = () => {
  const { id } = useParams()
  const stay = allStays.find(s => s.id === id) || allStays[0]
  const [activeSection, setActiveSection] = React.useState('about')
  const [showAllAmenities, setShowAllAmenities] = React.useState(false)

  const similar = allStays
    .filter(s => s.id !== stay.id && s.neighbourhood === stay.neighbourhood)
    .concat(allStays.filter(s => s.id !== stay.id && s.neighbourhood !== stay.neighbourhood))
    .slice(0, 3)

  const highlights = HIGHLIGHT_MAP.filter(h => stay.amenities.some(a => a.toLowerCase().includes(h.key.toLowerCase()))).slice(0, 3)

  const displayedAmenities = showAllAmenities ? stay.amenities : stay.amenities.slice(0, 6)

  React.useEffect(() => {
    const sections = ['about', 'amenities', 'reviews', 'location']
    const observers = sections.map(sec => {
      const el = document.getElementById(`detail-${sec}`)
      if (!el) return null
      const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActiveSection(sec) }, { rootMargin: '-20% 0px -70% 0px' })
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o && o.disconnect())
  }, [stay.id])

  return (
    <>
      {/* Title bar */}
      <div className="container detail-title-bar">
        <Link to="/stays" className="detail-back">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M13 7H1m4-4L1 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          All stays
        </Link>
        <h1 className="detail-title-h1">{stay.name}</h1>
        <div className="detail-title-actions">
          <button className="detail-action-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Share
          </button>
          <button className="detail-action-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
            Save
          </button>
        </div>
      </div>

      {/* Photo mosaic */}
      <div className="container" style={{ marginTop: 12, marginBottom: 0 }}>
        <div className="detail-mosaic" id="detail-photos">
          <div className="detail-mosaic-main">
            <img src={stay.img} alt={stay.name} />
          </div>
          <div className="detail-mosaic-right">
            <div className="detail-mosaic-thumb">
              <img src={stay.imgs[0]} alt={`${stay.name} interior`} />
            </div>
            <div className="detail-mosaic-thumb detail-mosaic-thumb-last">
              <img src={stay.imgs[1]} alt={`${stay.name} detail`} />
              <button className="detail-show-photos">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg>
                Show all photos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky anchor nav */}
      <div className="detail-anchor-wrap">
        <div className="container">
          <nav className="detail-anchor-nav">
            {[['about', 'About'], ['amenities', 'Amenities'], ['reviews', 'Reviews'], ['location', 'Location']].map(([sec, label]) => (
              <a
                key={sec}
                href={`#detail-${sec}`}
                className={'detail-anchor-link' + (activeSection === sec ? ' active' : '')}
                onClick={() => setActiveSection(sec)}
              >{label}</a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="container">
        <div className="detail-layout">

          {/* ── Left column ── */}
          <div className="detail-content">

            {/* About */}
            <div id="detail-about">
              <div className="detail-eyebrow">{stay.eyebrow}</div>
              <h2 className="detail-h1">{stay.name}</h2>
              <div className="detail-meta-row">
                <div className="detail-rating">
                  <div className="detail-stars">{[0,1,2,3,4].map(i => <StarIcon key={i} />)}</div>
                  <span className="detail-rating-num">{stay.rating}</span>
                  <span className="detail-rating-count">({stay.reviews})</span>
                </div>
                <span className="detail-dot" />
                <span className="detail-neighbourhood">{stay.neighbourhood}, Bangalore</span>
                {stay.minNights > 1 && <><span className="detail-dot" /><span className="detail-min-nights">{stay.minNights}-night min</span></>}
              </div>
              <div className="detail-chips">
                {stay.chips.map((c, i) => <span key={i} className="detail-chip">{c}</span>)}
              </div>
            </div>

            <div className="rule" style={{ margin: '32px 0' }} />

            {/* Host row */}
            <div className="detail-host-row">
              <div>
                <div className="detail-host-name">Hosted by Nivasa</div>
                <div className="detail-host-meta">{stay.reviews} reviews · Verified host · Bangalore</div>
              </div>
              <div className="detail-host-avatar">N</div>
            </div>

            <div className="rule" style={{ margin: '32px 0' }} />

            {/* Highlights */}
            {highlights.length > 0 && (
              <>
                <div className="detail-highlights">
                  {highlights.map((h, i) => (
                    <div key={i} className="detail-highlight">
                      <div className="detail-highlight-icon">{h.icon}</div>
                      <div>
                        <div className="detail-highlight-title">{h.title}</div>
                        <div className="detail-highlight-desc">{h.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rule" style={{ margin: '32px 0' }} />
              </>
            )}

            {/* Description */}
            <div>
              {stay.longDesc.split('\n\n').map((para, i) => (
                <p key={i} className="detail-para" style={{ marginTop: i === 0 ? 0 : 18 }}>{para}</p>
              ))}
            </div>

            <div className="rule" style={{ margin: '32px 0' }} id="detail-amenities" />

            {/* Amenities */}
            <div className="detail-section">
              <h3 className="detail-section-h3">What this place offers</h3>
              <div className="detail-amenities-v2">
                {displayedAmenities.map((a, i) => (
                  <div key={i} className="detail-amenity-v2">
                    <span className="detail-amenity-icon">{getIcon(a)}</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
              {stay.amenities.length > 6 && (
                <button className="detail-show-more" onClick={() => setShowAllAmenities(v => !v)}>
                  {showAllAmenities ? 'Show less' : `Show all ${stay.amenities.length} amenities`}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: showAllAmenities ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
            </div>

            <div className="rule" style={{ margin: '32px 0' }} id="detail-reviews" />

            {/* Reviews */}
            <div className="detail-section">
              <div className="detail-reviews-header">
                <div className="detail-reviews-score">
                  <StarIcon size={22} />
                  <span className="detail-big-rating">{stay.rating}</span>
                </div>
                <span className="detail-reviews-count">{stay.reviews} reviews</span>
              </div>
              <div className="detail-reviews-grid">
                {SAMPLE_REVIEWS.map((r, i) => (
                  <div key={i} className="detail-review">
                    <div className="detail-review-top">
                      <div className="detail-review-avatar">{r.name[0]}</div>
                      <div>
                        <div className="detail-review-name">{r.name}</div>
                        <div className="detail-review-date">{r.date}</div>
                      </div>
                      <div className="detail-review-stars">
                        {[...Array(r.rating)].map((_, j) => <StarIcon key={j} size={11} />)}
                      </div>
                    </div>
                    <p className="detail-review-text">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rule" style={{ margin: '32px 0' }} id="detail-location" />

            {/* Neighbourhood */}
            <div className="detail-section">
              <h3 className="detail-section-h3">The neighbourhood</h3>
              <p className="detail-para" style={{ marginTop: 12 }}>
                {stay.neighbourhood === 'Koramangala' && "Koramangala is where Bangalore does its living — cafés, parks, restaurants, and the kind of startup energy that makes every street feel active. 100ft Road is five minutes away."}
                {stay.neighbourhood === 'Indiranagar' && "Indiranagar is our favourite part of the city. Tree-lined streets, the best restaurants on 100ft Road, and homes that have actual character. CMH Road has everything else."}
                {stay.neighbourhood === 'Whitefield' && "Whitefield has grown up. What was once purely an IT corridor is now a proper neighbourhood — connected by metro, surrounded by good restaurants, and surprisingly calm once you get off the main road."}
                {stay.neighbourhood === 'Hebbal' && "Hebbal sits in the north of the city, quieter than the south and ten minutes from the airport. The lake is a two-minute walk. It's the part of Bangalore where people who live here actually slow down."}
              </p>
              <Link to={`/neighbourhoods#${stay.neighbourhood.toLowerCase()}`} className="detail-nh-link">
                Explore {stay.neighbourhood} →
              </Link>
            </div>
          </div>

          {/* ── Right: sticky booking card ── */}
          <div className="detail-booking-col">
            <BookingCard stay={stay} />
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
                <h2>You might also<br/><em>like these.</em></h2>
              </div>
              <div className="meta">
                <Link to="/stays" style={{ borderBottom: '1px solid var(--hairline-strong)', paddingBottom: 2 }}>See all homes →</Link>
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
