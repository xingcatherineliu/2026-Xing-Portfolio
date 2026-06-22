import Reveal from '../components/Reveal'
import Label from '../components/Label'
import { ABOUT } from '../data/content'

export default function AboutPage() {
  return (
    <section id="about" style={{ padding: '64px 32px 96px' }}>
      <div className="page-container">
        <Label as="div" style={{ display: 'block', marginBottom: 32 }}>About</Label>

        <div
          className="responsive-grid"
          style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 80, alignItems: 'start' }}
        >
          {/* Bio */}
          <Reveal>
            <div>
              <h2
                className="section-h2"
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 64,
                  lineHeight: 1.04,
                  margin: '0 0 32px',
                  color: 'var(--ink)',
                  letterSpacing: '-0.035em',
                }}
              >
                Half designer,<br />half engineer<span style={{ color: 'var(--accent)' }}>,</span><br />
                <span style={{ color: 'var(--muted)' }}>full collaborator.</span>
              </h2>

              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 18,
                  lineHeight: 1.55,
                  color: 'var(--ink2)',
                  margin: '0 0 24px',
                  maxWidth: 620,
                }}
              >
                {ABOUT.bio}
              </p>
              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 16,
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
