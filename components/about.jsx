import React from 'react'
import Img from './img'

const About = () => (
  <section className="section" id="about">
    <div className="container">
      <div className="about-grid">
        <div className="about-stack">
          <Img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" caption="KITCHEN · Morning light" alt="Bright kitchen with morning light" />
          <Img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" caption="BALCONY · Whitefield" alt="Balcony with greenery" />
        </div>
        <div className="about-copy">
          <div className="eyebrow" style={{ marginBottom: 20 }}>What is Nivasa</div>
          <h2>
            Not a hotel. Not a PG.<br/>
            <span className="italic">Somewhere in between —</span><br/>
            and better for it.
          </h2>
          <p>
            We lease homes around Bangalore, furnish them with care, and host you like a
            friend who lives a few streets away.
          </p>
          <p>
            Stay a night, a week, or a month. Either way, you get a real home —
            keys, kettle, and a neighbourhood that starts to feel like yours.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default About
