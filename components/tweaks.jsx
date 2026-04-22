import React from 'react'

const TWEAK_DEFAULTS = {
  "accent": "terra",
  "serifHeads": true,
  "showGrain": true
}

const accents = {
  terra:    { "--terra": "#C2552A", "--cinnamon": "#8B3A1E" },
  cinnamon: { "--terra": "#8B3A1E", "--cinnamon": "#6b2c14" },
  clay:     { "--terra": "#B87A4B", "--cinnamon": "#8B5A2F" },
}

const Tweaks = () => {
  const [active, setActive] = React.useState(false)
  const [state, setState] = React.useState(TWEAK_DEFAULTS)

  React.useEffect(() => {
    const root = document.documentElement
    const a = accents[state.accent] || accents.terra
    Object.entries(a).forEach(([k,v]) => root.style.setProperty(k, v))
    root.style.setProperty("--serif", state.serifHeads ? '"Instrument Serif", ui-serif, Georgia, serif' : '"Inter Tight", system-ui, sans-serif')
    const grainEl = document.getElementById("__grain_toggle_style")
    if (grainEl) grainEl.remove()
    const s = document.createElement("style")
    s.id = "__grain_toggle_style"
    s.textContent = `body::before{opacity:${state.showGrain ? ".35" : "0"} !important}`
    document.head.appendChild(s)
  }, [state])

  React.useEffect(() => {
    const onMsg = (e) => {
      if (!e.data) return
      if (e.data.type === "__activate_edit_mode") setActive(true)
      if (e.data.type === "__deactivate_edit_mode") setActive(false)
    }
    window.addEventListener("message", onMsg)
    window.parent.postMessage({ type: "__edit_mode_available" }, "*")
    return () => window.removeEventListener("message", onMsg)
  }, [])

  const set = (k, v) => {
    const next = { ...state, [k]: v }
    setState(next)
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*")
  }

  if (!active) return null

  const Seg = ({ value, options, onChange }) => (
    <div className="seg">
      {options.map(o => (
        <button key={o.v} className={value === o.v ? "on" : ""} onClick={() => onChange(o.v)}>{o.l}</button>
      ))}
    </div>
  )

  return (
    <div className="tweaks">
      <h5>Tweaks</h5>
      <div className="row">
        <span>Accent</span>
        <Seg value={state.accent} onChange={v => set("accent", v)} options={[
          { v:"terra", l:"Terracotta" }, { v:"cinnamon", l:"Cinnamon" }, { v:"clay", l:"Clay" }
        ]}/>
      </div>
      <div className="row">
        <span>Serif headlines</span>
        <Seg value={state.serifHeads ? "on" : "off"} onChange={v => set("serifHeads", v === "on")} options={[
          { v:"on", l:"On" }, { v:"off", l:"Off" }
        ]}/>
      </div>
      <div className="row">
        <span>Paper grain</span>
        <Seg value={state.showGrain ? "on" : "off"} onChange={v => set("showGrain", v === "on")} options={[
          { v:"on", l:"On" }, { v:"off", l:"Off" }
        ]}/>
      </div>
    </div>
  )
}

export default Tweaks
