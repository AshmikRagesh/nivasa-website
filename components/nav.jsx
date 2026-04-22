import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import LogoMark from './logomark'

const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false)
  const { pathname } = useLocation()
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on()
    window.addEventListener("scroll", on, { passive: true })
    return () => window.removeEventListener("scroll", on)
  }, [])
  return (
    <header className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="container nav-inner">
        <Link className="brand" to="/">
          <LogoMark size={36} color="var(--teak)" />
        </Link>
        <nav className="nav-links">
          <Link to="/stays" className={pathname.startsWith('/stays') ? 'active' : ''}>Stays</Link>
          <Link to="/neighbourhoods" className={pathname.startsWith('/neighbourhoods') ? 'active' : ''}>Neighbourhoods</Link>
          <a href="/#how">How it works</a>
          <a href="/#about">Our story</a>
          <Link to="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </nav>
        <div className="nav-right">
          <a href="/contact" style={{ fontSize: 14, color: "var(--teak-soft)" }}>Host with us</a>
          <button className="btn" style={{ padding: "10px 18px", fontSize: 14 }}>
            Book a stay
            <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Nav
