import React from 'react'

const SLIDES = [
  { url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80', area: 'Koramangala', room: 'Living Room' },
  { url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80', area: 'Indiranagar', room: 'Bedroom' },
  { url: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&q=80', area: 'Whitefield', room: 'Master Suite' },
  { url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80', area: 'Hebbal', room: 'Studio' },
  { url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80', area: 'Koramangala', room: 'Balcony' },
  { url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80', area: 'Indiranagar', room: 'Kitchen' },
  { url: 'https://images.unsplash.com/photo-1567360425618-1594206637d2?w=1200&q=80', area: 'Whitefield', room: 'Terrace' },
]
const N = SLIDES.length

const Gallery = () => {
  const [cur, setCur] = React.useState(0)
  const [paused, setPaused] = React.useState(false)
  const [progKey, setProgKey] = React.useState(0)
  const drag = React.useRef({ on: false, x: 0 })

  const go = React.useCallback((i) => {
    setCur((i + N) % N)
    setProgKey(k => k + 1)
  }, [])

  React.useEffect(() => {
    if (paused) return
    const t = setTimeout(() => go(cur + 1), 4000)
    return () => clearTimeout(t)
  }, [cur, paused, go])

  const onDown = (e) => {
    drag.current = { on: true, x: e.touches ? e.touches[0].clientX : e.clientX }
  }
  const onUp = (e) => {
    if (!drag.current.on) return
    const x = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
    const d = drag.current.x - x
    if (Math.abs(d) > 50) go(cur + (d > 0 ? 1 : -1))
    drag.current.on = false
  }

  // slide = 72vw, gap = 16px, centering offset = 14vw
  const tx = `calc(${14 - cur * 72}vw - ${cur * 16}px)`

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <div className="gallery-copy">
            <div className="eyebrow" style={{ marginBottom: 16 }}>Our Homes</div>
            <h2 className="gallery-h2">Every home, thought through.</h2>
            <p className="gallery-lede">Forty-two homes across Bangalore. Each one furnished, hosted, and looked after by us.</p>
          </div>
          <div className="gallery-arrows">
            <button className="gallery-btn" onClick={() => go(cur - 1)} aria-label="Previous">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 13L5 8l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="gallery-btn" onClick={() => go(cur + 1)} aria-label="Next">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className="gallery-track-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { setPaused(false); drag.current.on = false }}
        onMouseDown={onDown}
        onMouseUp={onUp}
        onTouchStart={onDown}
        onTouchEnd={onUp}
      >
        <div className="gallery-track" style={{ transform: `translateX(${tx})` }}>
          {SLIDES.map((s, i) => {
            const dist = Math.abs(i - cur)
            return (
              <div
                key={i}
                className="gallery-slide"
                style={{
                  transform: `scale(${dist === 0 ? 1 : 0.9})`,
                  opacity: dist === 0 ? 1 : dist === 1 ? 0.6 : 0.35,
                }}
                onClick={() => dist > 0 && go(i)}
              >
                <img src={s.url} alt={`${s.area} · ${s.room}`} draggable="false" />
                <div className="gallery-caption">
                  <span>{s.area}</span>
                  <span className="gallery-dot">·</span>
                  <span>{s.room}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="container">
        <div className="gallery-progress-bg">
          <div
            key={progKey}
            className="gallery-progress-bar"
            style={{ animationPlayState: paused ? 'paused' : 'running' }}
          />
        </div>
      </div>
    </section>
  )
}

export default Gallery
