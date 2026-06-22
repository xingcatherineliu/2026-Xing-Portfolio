import Reveal from '../components/Reveal'
import Label from '../components/Label'
import { RESUME, ABOUT, CONTACT } from '../data/content'

export default function ResumePage() {
  return (
    <section id="resume" style={{ padding: '64px 32px 96px' }}>
      <div className="page-container">
        {/* Header */}
        <Reveal>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--ink)',
              paddingBottom: 24,
              marginBottom: 12,
              flexWrap: 'wrap',
              gap: 24,
            }}
          >
            <div>
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
                Designer + Builder · New York, NY
              </div>
            </div>
            <button
              onClick={() => window.print()}
              className="read-btn no-print"
              style={{
                background: 'var(--ink)',
                color: 'var(--bg)',
                border: 'none',
                padding: '12px 20px',
                fontFamily: 'var(--sans)',
                fontSize: 14,
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                borderRadius: 999,
                cursor: 'pointer',
              }}
            >
              Download PDF <span style={{ fontSize: 15 }}>↓</span>
            </button>
          </div>
        </Reveal>

        {/* Summary */}
        <Reveal delay={60}>
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 17,
              lineHeight: 1.6,
              color: 'var(--ink2)',
              margin: '0 0 56px',
              maxWidth: 760,
            }}
          >
            {RESUME.summary}
          </p>
        </Reveal>

        {/* Two-column body */}
        <div
          className="responsive-grid"
          style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 72, alignItems: 'start' }}
        >
          {/* Experience */}
          <div>
            <Label as="div" style={{ display: 'block', marginBottom: 28 }}>Experience</Label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {RESUME.experience.map((e, i) => (
                <Reveal key={e.org} delay={i * 60}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr',
                      gap: 10,
                      padding: '24px 0',
                      borderTop: '1px solid var(--rule)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        gap: 16,
                        flexWrap: 'wrap',
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: 'var(--sans)',
                          fontWeight: 600,
                          fontSize: 22,
                          margin: 0,
                          color: 'var(--ink)',
                          letterSpacing: '-0.015em',
                        }}
                      >
                        {e.role}
                      </h3>
                      <span
                        style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)', whiteSpace: 'nowrap' }}
                      >
                        {e.period}
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        fontFamily: 'var(--sans)',
                        fontSize: 15,
                        color: 'var(--accent)',
                        fontWeight: 500,
                      }}
                    >
                      {e.org}
                      <span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: 13 }}>· {e.loc}</span>
                    </div>
                    <ul style={{ margin: '6px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {e.points.map((pt, k) => (
                        <li
                          key={k}
                          style={{
                            display: 'flex',
                            gap: 12,
                            fontFamily: 'var(--sans)',
                            fontSize: 15,
                            lineHeight: 1.55,
                            color: 'var(--ink2)',
                          }}
                        >
                          <span style={{ color: 'var(--accent)', flexShrink: 0 }}>—</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right rail */}
          <Reveal delay={120}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 44 }}>
              {/* Skills */}
              <div>
                <Label as="div" style={{ display: 'block', marginBottom: 18 }}>Skills</Label>
                {ABOUT.skills.map((g) => (
                  <div key={g.g} style={{ marginBottom: 18 }}>
                    <div
                      style={{
                        fontFamily: 'var(--sans)',
                        fontWeight: 600,
                        fontSize: 14,
                        color: 'var(--ink)',
                        marginBottom: 8,
                      }}
                    >
                      {g.g}
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
              </div>

              {/* Education */}
              <div>
                <Label as="div" style={{ display: 'block', marginBottom: 18 }}>Education</Label>
                {RESUME.education.map((ed) => (
                  <div key={ed.school} style={{ borderTop: '1px solid var(--rule)', paddingTop: 14 }}>
                    <div style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 15, color: 'var(--ink)' }}>
                      {ed.school}
                    </div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink2)', margin: '4px 0' }}>
                      {ed.detail}
                    </div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)' }}>{ed.period}</div>
                  </div>
                ))}
              </div>

              {/* Recognition */}
              <div>
                <Label as="div" style={{ display: 'block', marginBottom: 18 }}>Recognition</Label>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {RESUME.recognition.map((r, i) => (
                    <li
                      key={i}
                      style={{
                        fontFamily: 'var(--sans)',
                        fontSize: 14,
                        lineHeight: 1.5,
                        color: 'var(--ink2)',
                        borderTop: '1px solid var(--rule)',
                        paddingTop: 12,
                      }}
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <Label as="div" style={{ display: 'block', marginBottom: 18 }}>Contact</Label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: 14,
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      fontWeight: 500,
                    }}
                  >
                    {CONTACT.email}
                  </a>
                  <a
                    href={CONTACT.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: 14,
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      fontWeight: 500,
                    }}
                  >
                    {CONTACT.linkedin}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
