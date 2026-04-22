import React from 'react'

const Img = ({ src, caption, alt, style, className }) => {
  const [loaded, setLoaded] = React.useState(false)
  return (
    <div className={"ph " + (className || "")} style={style}>
      <img
        src={src}
        alt={alt || caption || ""}
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%", height: "100%", objectFit: "cover", display: "block",
          opacity: loaded ? 1 : 0, transition: "opacity .4s ease",
          position: "absolute", inset: 0,
        }}
      />
      {!loaded && (
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, #E6BFA0 0%, #D4956A 100%)",
        }} />
      )}
      {caption ? <span className="ph-caption">{caption}</span> : null}
    </div>
  )
}

export default Img
