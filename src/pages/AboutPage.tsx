import Reveal from '../components/Reveal'
import { ABOUT } from '../data/content'

export default function AboutPage() {
  return (
    <section id="about" style={{ padding: '64px 32px 96px' }}>
      <div className="page-container">
        <Reveal>
          <div
            style={{
              borderBottom: '1px solid var(--ink)',
              paddingBottom: 24,
              marginBottom: 56,
            }}
          >
            <h2
              className="section-h2"
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 56,
                margin: '0 0 10px',
                color: 'var(--ink)',
              }}
            >
              Xing Liu{' '}
              <span style={{ color: 'var(--muted)' }}>— Senior Product Designer</span>
            </h2>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--muted)' }}>
              Designer + Builder · New York + New Jersey
            </div>
          </div>
        </Reveal>

        <div
          className="responsive-grid"
          style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 80, alignItems: 'start' }}
        >
          {/* Bio */}
          <Reveal>
            <div>
              <h2
                className="section-h2 about-h2"
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 64,
                  lineHeight: 1.04,
                  margin: '0 0 32px',
                  color: 'var(--ink)',
                  letterSpacing: '-0.035em',
                }}
              >
                I think in products,<br />design in systems<span style={{ color: 'var(--accent)' }}>,</span><br />
                <span style={{ color: 'var(--muted)' }}>and prototype in code.</span>
              </h2>

              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 18,
                  lineHeight: 1.55,
                  color: 'var(--ink2)',
                  margin: '0 0 28px',
                  maxWidth: 620,
                }}
              >
                {ABOUT.bio}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {ABOUT.bullets.map((b, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      gap: 12,
                      alignItems: 'flex-start',
                      fontFamily: 'var(--sans)',
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: 'var(--ink2)',
                      maxWidth: 620,
                    }}
                  >
                    <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 1 }}>—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: 'var(--muted)',
                  margin: 0,
                  maxWidth: 620,
                }}
              >
                {ABOUT.current}
              </p>
            </div>
          </Reveal>

          {/* Skills */}
          <Reveal delay={120}>
            <div>
              {ABOUT.skills.map((g) => (
                <div key={g.g} style={{ borderTop: '1px solid var(--rule)', padding: '20px 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
                    <span
                      style={{
                        fontFamily: 'var(--sans)',
                        fontWeight: 600,
                        fontSize: 15,
                        color: 'var(--ink)',
                        letterSpacing: '-0.005em',
                      }}
                    >
                      {g.g}
                    </span>
                    <span style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)' }}>
                      {g.items.length} skills
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {g.items.map((it) => (
                      <span
                        key={it}
                        style={{
                          fontFamily: 'var(--sans)',
                          fontSize: 12.5,
                          color: 'var(--ink2)',
                          fontWeight: 500,
                          padding: '5px 11px',
                          background: 'var(--paper)',
                          border: '1px solid var(--rule-soft)',
                          borderRadius: 999,
                        }}
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div style={{ borderTop: '1px solid var(--rule)' }} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
