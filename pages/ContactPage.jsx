import React, { useState } from 'react'

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', checkin: '', checkout: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 16 }}>Get in touch</div>
          <h1 className="page-hero-h1">
            Let's find you<br /><em>a home.</em>
          </h1>
          <p className="page-hero-lede">
            Tell us what you're looking for — neighbourhood, dates, how long, how many.
            We'll come back within a few hours.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="rule" style={{ marginBottom: 0 }} />
        <div className="contact-grid">

          {/* Form */}
          <div>
            {sent ? (
              <div className="contact-sent">
                <div className="contact-sent-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L19 7" stroke="var(--terra)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 32, marginTop: 20, marginBottom: 12 }}>We got it.</h3>
                <p style={{ color: 'var(--teak-soft)', fontSize: 16, lineHeight: 1.6, maxWidth: '40ch' }}>
                  We'll be in touch within a few hours. In the meantime, feel free to browse homes or message us directly on WhatsApp.
                </p>
                <a
                  href="https://wa.me/918040001234"
                  className="btn"
                  style={{ marginTop: 28, display: 'inline-flex' }}
                >
                  Open WhatsApp
                  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="eyebrow" style={{ marginBottom: 28 }}>Send us a note</div>

                <div className="contact-row">
                  <div className="contact-field">
                    <label>Your name</label>
                    <input
                      type="text"
                      className="contact-input"
                      placeholder="Meera Krishnaswamy"
                      value={form.name}
                      onChange={update('name')}
                      required
                    />
                  </div>
                  <div className="contact-field">
                    <label>Email</label>
                    <input
                      type="email"
                      className="contact-input"
                      placeholder="meera@example.com"
                      value={form.email}
                      onChange={update('email')}
                      required
                    />
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-field">
                    <label>Phone (WhatsApp preferred)</label>
                    <input
                      type="tel"
                      className="contact-input"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={update('phone')}
                    />
                  </div>
                  <div className="contact-field">
                    <label>Neighbourhood (if you have one in mind)</label>
                    <select className="contact-input contact-select" value={form.neighbourhood} onChange={update('neighbourhood')}>
                      <option value="">Any neighbourhood</option>
                      <option>Koramangala</option>
                      <option>Indiranagar</option>
                      <option>Whitefield</option>
                      <option>Hebbal</option>
                    </select>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-field">
                    <label>Arrival</label>
                    <input
                      type="date"
                      className="contact-input"
                      value={form.checkin}
                      onChange={update('checkin')}
                    />
                  </div>
                  <div className="contact-field">
                    <label>Departure</label>
                    <input
                      type="date"
                      className="contact-input"
                      value={form.checkout}
                      onChange={update('checkout')}
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label>Tell us more</label>
                  <textarea
                    className="contact-input"
                    placeholder="Number of guests, any specific requirements, how long you're planning to stay..."
                    value={form.message}
                    onChange={update('message')}
                    rows={5}
                  />
                </div>

                <button type="submit" className="btn" style={{ marginTop: 8, padding: '16px 28px', fontSize: 15 }}>
                  Send message
                  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div className="contact-info-panel">
            <div className="eyebrow" style={{ marginBottom: 28 }}>Find us</div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 20 5.3 16A8 8 0 1 1 8 18.7L4 20Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <div className="contact-info-label">WhatsApp</div>
                <a href="https://wa.me/918040001234" className="contact-info-val">+91 80 4000 1234</a>
                <div className="contact-info-sub">Fastest way to reach us. Usually within the hour.</div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.4"/><path d="m22 6-10 7L2 6" stroke="currentColor" strokeWidth="1.4"/></svg>
              </div>
              <div>
                <div className="contact-info-label">Email</div>
                <a href="mailto:hello@nivasa.co" className="contact-info-val">hello@nivasa.co</a>
                <div className="contact-info-sub">We reply within a few hours on weekdays.</div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-6-7-12a7 7 0 0 1 14 0c0 6-7 12-7 12Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.4"/></svg>
              </div>
              <div>
                <div className="contact-info-label">Office</div>
                <div className="contact-info-val">14, 12th Main, HAL 2nd Stage</div>
                <div className="contact-info-sub">Indiranagar, Bangalore 560 038<br/>Mon – Sat, 9am – 7pm IST</div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.5 19.5 0 0 1 5.6 13 19.8 19.8 0 0 1 2.5 4.4 2 2 0 0 1 4.4 2.2h3a2 2 0 0 1 2 1.7c.1 1.2.4 2.3.8 3.4a2 2 0 0 1-.4 2.1L8.5 10.5a16 16 0 0 0 5.9 5.9l1.3-1.3a2 2 0 0 1 2.1-.4c1.1.4 2.2.7 3.4.8a2 2 0 0 1 1.8 2Z" stroke="currentColor" strokeWidth="1.4"/></svg>
              </div>
              <div>
                <div className="contact-info-label">Phone</div>
                <a href="tel:+918040001234" className="contact-info-val">+91 80 4000 1234</a>
                <div className="contact-info-sub">Mon – Sat, 9am – 7pm IST</div>
              </div>
            </div>

            <div className="contact-social">
              <div className="eyebrow" style={{ marginBottom: 16 }}>Follow along</div>
              <div style={{ display: 'flex', gap: 12 }}>
                {['Instagram', 'LinkedIn', 'Twitter'].map(s => (
                  <a key={s} href="#" className="contact-social-pill">{s}</a>
                ))}
              </div>
            </div>

            <div className="contact-host-box">
              <div className="eyebrow" style={{ marginBottom: 12, color: 'var(--clay)' }}>Own a property?</div>
              <h4 style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--linen)', marginBottom: 10, lineHeight: 1.1 }}>Host with Nivasa</h4>
              <p style={{ color: 'var(--clay-soft)', fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
                We lease properties long-term, furnish them ourselves, and handle everything.
                Consistent rent, zero hassle.
              </p>
              <a href="mailto:host@nivasa.co" className="btn-ghost" style={{ color: 'var(--linen)', borderColor: 'rgba(248,239,230,.4)', display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', fontSize: 14 }}>
                Talk to us about hosting →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
