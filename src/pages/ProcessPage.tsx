import Reveal from '../components/Reveal'
import { PROCESS } from '../data/content'

export default function ProcessPage() {
  return (
    <section id="process" style={{ padding: '96px 32px' }}>
      <div className="page-container">
        <Reveal>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--ink)',
              paddingBottom: 20,
              marginBottom: 48,
            }}
          >
            <h2
              className="section-h2"
              style={{ fontFamily: 'var(--sans)', fontSize: 56, margin: 0, color: 'var(--ink)' }}
            >
              How I work
            </h2>
            <span style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)' }}>
              A loose loop, not a waterfall
            </span>
          </div>
        </Reveal>

        <div
          className="responsive-grid grid-4"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}
        >
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <div
                className="process-col"
                style={{
                  padding: '32px 28px 36px',
                  borderRight: i < 3 ? '1px solid var(--rule)' : 'none',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: i === 0 ? 'var(--accent)' : 'transparent',
                    border: `1px solid ${i === 0 ? 'var(--accent)' : 'var(--rule)'}`,
                    color: i === 0 ? 'var(--bg)' : 'var(--ink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--sans)',
                    fontWeight: 600,
                    fontSize: 14,
                    marginBottom: 20,
                  }}
                >
                  {p.n}
                </div>
                <h4
                  style={{
                    fontFamily: 'var(--sans)',
                    fontWeight: 600,
                    fontSize: 22,
                    lineHeight: 1.2,
                    margin: '0 0 14px',
                    color: 'var(--ink)',
                    letterSpacing: '-0.015em',
                  }}
                >
                  {p.t}
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    color: 'var(--muted)',
                    margin: 0,
                  }}
                >
                  {p.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
