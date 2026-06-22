import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Label from '../components/Label'
import PlaceholderImg from '../components/PlaceholderImg'
import { PROJECTS, Project } from '../data/projects'

// ─── Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="top"
      className="hero-section"
      style={{
        position: 'relative',
        padding: '80px 32px 120px',
        borderBottom: '1px solid var(--rule)',
      }}
    >
      <div className="page-container">
        <div
          className="responsive-hero"
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 56,
            alignItems: 'start',
          }}
        >
          <div>
            <Reveal>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '6px 14px',
                  background: 'var(--paper)',
                  border: '1px solid var(--rule)',
                  borderRadius: 999,
                  fontFamily: 'var(--sans)',
                  fontSize: 13,
                  color: 'var(--ink2)',
                  marginBottom: 36,
                }}
              >
                <span
                  style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)' }}
                />
                Senior Product Designer + Builder · NYC
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1
                className="hero-h1"
                style={{ margin: '0 0 24px' }}
              >
                Xing Liu.<br />
                <span style={{ color: 'var(--muted)' }}>I design the experience</span><br />
                <span>and build it too<span style={{ color: 'var(--accent)' }}>.</span></span>
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <p style={{ fontFamily: 'var(--sans)', fontSize: 16, lineHeight: 1.6, color: 'var(--ink2)', margin: '48px 0 0', maxWidth: 620 }}>
                Product designer with <strong>8+ years of experience</strong> building data visualization, Fintech infrastructure, developer tools, admin systems, and enterprise platform. I enjoy tackling complex systems and workflows, turning technical complexity into clear, usable experiences. These days, I prototype in Claude Code as often as I do in Figma, using code to explore ideas, validate interactions, and shape product direction.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Work card ──────────────────────────────────────────────────────────────

const CARD_BGS = ['var(--paper)', 'var(--panel)', 'var(--paper)', 'var(--panel2)', 'var(--panel)', 'var(--paper)']

function WorkBody({ project }: { project: Project }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '8px 8px 8px 16px',
      }}
    >
      <div>
        {/* Meta row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
          <span
            style={{
              padding: '4px 10px',
              background: 'var(--ink)',
              color: 'var(--bg)',
              fontFamily: 'var(--sans)',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.04em',
              borderRadius: 999,
            }}
          >
            № {project.code}
          </span>
          <Label>{project.year}</Label>
          <span style={{ color: 'var(--muted)', fontSize: 11 }}>•</span>
          <Label>{project.org}</Label>
        </div>

        <h3
          className="work-card-title"
          style={{
            fontFamily: 'var(--sans)',
            fontWeight: 600,
            fontSize: 56,
            lineHeight: 0.98,
            margin: '0 0 8px',
            color: 'var(--ink)',
            letterSpacing: '-0.035em',
          }}
        >
          {project.name}
        </h3>
        <div
          style={{
            fontFamily: 'var(--sans)',
            fontWeight: 500,
            fontSize: 18,
            color: 'var(--accent)',
            marginBottom: 24,
            fontStyle: 'italic',
          }}
        >
          {project.tag}
        </div>
        <p style={{ fontFamily: 'var(--sans)', fontSize: 16, lineHeight: 1.6, color: 'var(--ink2)', margin: '0 0 24px' }}>
          {project.blurb}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.tags.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 12.5,
                color: 'var(--ink2)',
                fontWeight: 500,
                padding: '5px 12px',
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid var(--rule)',
                borderRadius: 999,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom row: metric + CTA */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 32,
          paddingTop: 24,
          borderTop: '1px solid var(--rule)',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div>
          <Label as="div" style={{ marginBottom: 4 }}>Outcome</Label>
          <div
            style={{
              fontFamily: 'var(--sans)',
              fontWeight: 600,
              fontSize: 20,
              color: 'var(--ink)',
              letterSpacing: '-0.01em',
            }}
          >
            {project.metric}
          </div>
        </div>

        {project.comingSoon ? (
          <span
            style={{
              background: 'transparent',
              color: 'var(--muted)',
              border: '1px solid var(--rule)',
              padding: '12px 20px',
              fontFamily: 'var(--sans)',
              fontSize: 14,
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              borderRadius: 999,
              cursor: 'default',
            }}
          >
            Coming soon
          </span>
        ) : (
          <Link
            to={project.slug!}
            className="read-btn"
            style={{
              background: 'var(--ink)',
              color: 'var(--bg)',
              padding: '12px 20px',
              fontFamily: 'var(--sans)',
              fontSize: 14,
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              borderRadius: 999,
              textDecoration: 'none',
            }}
          >
            Read case study
            <span className="arrow" style={{ fontSize: 15 }}>→</span>
          </Link>
        )}
      </div>
    </div>
  )
}

function WorkCard({ project, index }: { project: Project; index: number }) {
  const isWide = index === 0 || index === 3 || index === 5
  const bg = CARD_BGS[index]

  return (
    <article
      className="work-card responsive-grid"
      style={{
        background: bg,
        borderRadius: 20,
        padding: 32,
        display: 'grid',
        gridTemplateColumns: isWide ? '1fr 1.2fr' : '1.2fr 1fr',
        gap: 32,
        alignItems: 'stretch',
        border: '1px solid var(--rule)',
      }}
    >
      {isWide ? (
        <>
          <WorkBody project={project} />
          <PlaceholderImg
            label={`${project.name} · ${project.tag}`}
            tone="paper"
            height={380}
            radius={14}
          />
        </>
      ) : (
        <>
          <PlaceholderImg
            label={`${project.name} · ${project.tag}`}
            tone="paper"
            height={380}
            radius={14}
          />
          <WorkBody project={project} />
        </>
      )}
    </article>
  )
}

// ─── Work section ───────────────────────────────────────────────────────────

function WorkList() {
  return (
    <section id="work" className="work-list-section" style={{ padding: '96px 32px 56px' }}>
      <div className="page-container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.code} delay={i * 60}>
              <WorkCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function WorkPage() {
  return (
    <>
      <Hero />
      <WorkList />
    </>
  )
}
