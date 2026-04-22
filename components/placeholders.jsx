import React from 'react'

let __phCounter = 0
const Placeholder = ({ caption, tone = "clay", pattern = "stripes", style }) => {
  const id = React.useMemo(() => `ph-${++__phCounter}`, [])
  const palettes = {
    clay:     { bg: "#E6BFA0", a: "#D4956A", b: "#C2552A" },
    terra:    { bg: "#D98A5F", a: "#C2552A", b: "#8B3A1E" },
    teak:     { bg: "#4a2d18", a: "#3b2415", b: "#261609" },
    linen:    { bg: "#F1E5D7", a: "#E6BFA0", b: "#D4956A" },
    cinnamon: { bg: "#A85430", a: "#8B3A1E", b: "#6b2c14" },
  }
  const p = palettes[tone] || palettes.clay

  const patternSvg = (() => {
    if (pattern === "stripes") {
      return (
        <>
          <defs>
            <pattern id={id} width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
              <rect width="24" height="24" fill={p.bg} />
              <rect width="2" height="24" fill={p.a} opacity=".55" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${id})`} />
        </>
      )
    }
    if (pattern === "dots") {
      return (
        <>
          <defs>
            <pattern id={id} width="22" height="22" patternUnits="userSpaceOnUse">
              <rect width="22" height="22" fill={p.bg} />
              <circle cx="11" cy="11" r="1.4" fill={p.a} opacity=".7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${id})`} />
        </>
      )
    }
    if (pattern === "grid") {
      return (
        <>
          <defs>
            <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill={p.bg} />
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={p.a} strokeWidth="0.5" opacity=".6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${id})`} />
        </>
      )
    }
    return <rect width="100%" height="100%" fill={p.bg} />
  })()

  const hint = (() => {
    if (pattern === "room") {
      return (
        <g opacity=".35">
          <rect x="40" y="275" width="320" height="225" fill={p.b} />
          <rect x="72" y="200" width="88" height="150" fill={p.a} opacity=".85" />
          <circle cx="300" cy="190" r="28" fill={p.a} opacity=".9" />
        </g>
      )
    }
    if (pattern === "arch") {
      return (
        <g opacity=".4">
          <path d="M 80 500 L 80 260 Q 200 90 320 260 L 320 500 Z" fill={p.b} />
        </g>
      )
    }
    return null
  })()

  return (
    <div className="ph" style={style}>
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        {patternSvg}
        {hint}
      </svg>
      {caption ? <span className="ph-caption">{caption}</span> : null}
    </div>
  )
}

export default Placeholder
