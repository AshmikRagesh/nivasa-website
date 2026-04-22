import React from 'react'
import { Link } from 'react-router-dom'
import LogoMark from './logomark'

const Footer = () => (
  <footer className="footer" id="contact">
    <div className="container">
      <div className="cta">
        <h2>Come stay.<br/>We'll leave the <em>light on.</em></h2>
        <div className="btn-wrap">
          <Link to="/stays" className="btn">Book a stay
            <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <Link to="/contact" className="btn-ghost" style={{ color:"var(--linen)", borderColor:"rgba(248,239,230,.4)" }}>
            Host with Nivasa
          </Link>
        </div>
      </div>

      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <LogoMark size={48} color="var(--linen)" />
          </div>
          <p className="footer-about">
            Short stays in Bangalore — homes we lease, furnish, and host ourselves.
            Run out of a small office in Indiranagar by people who actually live here.
          </p>
          <div style={{ marginTop: 24, display:"flex", gap:10, fontFamily:"var(--mono)", fontSize:11, letterSpacing:".12em", textTransform:"uppercase", color:"var(--clay)" }}>
            <span>Instagram</span><span>·</span><span>LinkedIn</span><span>·</span><span>WhatsApp</span>
          </div>
        </div>
        <div>
          <h4>Stay</h4>
          <ul>
            <li><Link to="/stays">All homes</Link></li>
            <li><Link to="/stays">Long stays (28+ nights)</Link></li>
            <li><Link to="/stays">For business</Link></li>
            <li><Link to="/stays">For families</Link></li>
            <li><a href="#">Gift a stay</a></li>
          </ul>
        </div>
        <div>
          <h4>Neighbourhoods</h4>
          <ul>
            <li><Link to="/neighbourhoods#koramangala">Koramangala</Link></li>
            <li><Link to="/neighbourhoods#indiranagar">Indiranagar</Link></li>
            <li><Link to="/neighbourhoods#whitefield">Whitefield</Link></li>
            <li><Link to="/neighbourhoods#hebbal">Hebbal</Link></li>
            <li><Link to="/neighbourhoods">See all areas</Link></li>
          </ul>
        </div>
        <div>
          <h4>Nivasa</h4>
          <ul>
            <li><a href="/#about">Our story</a></li>
            <li><Link to="/contact">Host with us</Link></li>
            <li><a href="#">Press & partners</a></li>
            <li><a href="#">Careers</a></li>
            <li><Link to="/contact">hello@nivasa.co · +91 80 4000 1234</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Nivasa Homes Pvt Ltd · Bangalore</span>
        <span style={{ display:"flex", gap:18 }}>
          <a href="#">Privacy</a>
          <a href="#">House rules</a>
          <a href="#">Terms</a>
        </span>
      </div>
    </div>
  </footer>
)

export default Footer
