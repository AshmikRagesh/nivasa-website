import React from 'react'

const Hero = () => {
  return (
    <section className="hero-v2">
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Warm Bangalore home, living room"
        />
        <div className="hero-bg-overlay" />
      </div>

      <div className="container hero-v2-inner">
        <div className="hero-v2-copy">
          <div className="hero-hairline">
            <span className="hair-line" />
            <span className="hair-label">Short stays in Bangalore · 42 homes across 4 neighbourhoods</span>
          </div>

          <h1 className="hero-v2-h1">
            Your nest<br/>
            <span className="l2">in the <em>city.</em></span>
          </h1>

          <p className="hero-v2-lede">
            Thoughtful homes, warmly hosted. Stay a night, a week, or the whole month.
          </p>
        </div>

        <div className="hero-v2-strip" role="search" aria-label="Find a stay">
          <div className="hv2-f">
            <div className="label">Where</div>
            <div className="val">Koramangala, Bangalore</div>
          </div>
          <div className="hv2-f">
            <div className="label">Check in</div>
            <div className="val">Thu, 14 May</div>
          </div>
          <div className="hv2-f">
            <div className="label">Check out</div>
            <div className="val">Sun, 17 May</div>
          </div>
          <div className="hv2-f">
            <div className="label">Guests</div>
            <div className="val">2 adults</div>
          </div>
          <button className="hv2-go">
            Find your stay
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        <div className="hero-v2-footer">
          <div className="hv2-links">
            <a href="/neighbourhoods">Browse neighbourhoods →</a>
            <a href="/stays">See all 42 homes →</a>
            <a href="/#how">How Nivasa works →</a>
          </div>
          <div className="hv2-rating">
            <div className="stars" aria-hidden="true">
              {[0,1,2,3,4].map(i => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C2552A"><path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1z"/></svg>
              ))}
            </div>
            <span className="rating-num">4.92</span>
            <span className="rating-text">Loved by <b>guests</b> on Airbnb · 1,400+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
