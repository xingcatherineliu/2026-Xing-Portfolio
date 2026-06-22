import { useParams, Link, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Label from '../components/Label'
import PlaceholderImg from '../components/PlaceholderImg'
import { CASES, CaseStudy } from '../data/cases'
import { PROJECTS } from '../data/projects'
import { CONTACT } from '../data/content'

// ─── Section wrapper ─────────────────────────────────────────────────────────

function Section({
  id,
  label,
  title,
  lead,
  bg,
  titleColor,
  leadColor,
  children,
}: {
  id?: string
  label: string
  title: string
  lead?: string
  bg?: string
  titleColor?: string
  leadColor?: string
  children?: React.ReactNode
}) {
  return (
    <section id={id} style={{ padding: '80px 32px', background: bg ?? 'transparent' }}>
      <div className="page-container">
        <Reveal>
          <Label as="div" style={{ display: 'block', marginBottom: 20 }} color={leadColor ? 'rgba(240,239,233,0.5)' : undefined}>
            {label}
          </Label>
          <h2
            className="section-h2"
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 56,
              lineHeight: 1.04,
              letterSpacing: '-0.035em',
              color: titleColor ?? 'var(--ink)',
              margin: '0 0 24px',
              maxWidth: 880,
            }}
          >
            {title}
          </h2>
          {lead && (
            <p
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 20,
                lineHeight: 1.55,
                color: leadColor ?? 'var(--ink2)',
                margin: '0 0 48px',
                maxWidth: 760,
              }}
            >
              {lead}
            </p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  )
}

// ─── Case study sections ─────────────────────────────────────────────────────

function CaseHero({ c }: { c: CaseStudy }) {
  const p = c.project
  return (
    <section style={{ padding: '64px 32px 0' }}>
      <div className="page-container">
        <Reveal>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 12px',
              background: 'var(--paper)',
              border: '1px solid var(--rule)',
              borderRadius: 999,
              color: 'var(--ink2)',
              textDecoration: 'none',
              fontSize: 12.5,
              fontWeight: 500,
              marginBottom: 32,
            }}
          >
            Case study · {p.year} · {p.org}
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28, flexWrap: 'wrap' }}>
            <span
              style={{
                padding: '4px 12px',
                background: 'var(--ink)',
                color: 'var(--bg)',
                fontFamily: 'var(--sans)',
                fontSize: 12.5,
                fontWeight: 600,
                letterSpacing: '0.04em',
                borderRadius: 999,
              }}
            >
              № {p.code}
            </span>
            <span style={{ fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--muted)', fontWeight: 500 }}>
              {p.tag}
            </span>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <h1 className="hero-h1" style={{ margin: '0 0 32px' }}>
            {p.name}<span style={{ color: 'var(--accent)' }}>.</span>
          </h1>
        </Reveal>

        <Reveal delay={260}>
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 24,
              lineHeight: 1.4,
              color: 'var(--ink2)',
              margin: 0,
              maxWidth: 820,
              fontWeight: 400,
            }}
          >
            {p.hero}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function HeroImage({ c }: { c: CaseStudy }) {
  return (
    <section style={{ padding: '64px 32px 32px' }}>
      <div className="page-container">
        <Reveal>
          <PlaceholderImg label={`${c.project.name} · hero shot`} tone="paper" height={560} radius={20} />
        </Reveal>
      </div>
    </section>
  )
}

function MetaBar({ c }: { c: CaseStudy }) {
  const p = c.project
  const rows: [string, React.ReactNode][] = [
    ['Role', p.role],
    ['Year', p.year],
    ['Timeline', p.timeline],
    ['Team', p.team],
    ['Outcome', <span key="metric" style={{ color: 'var(--accent)' }}>{p.metric}</span>],
  ]
  return (
    <section style={{ padding: '32px 32px 80px' }}>
      <div className="page-container">
        <Reveal>
          <div
            className="grid-4"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${rows.length}, 1fr)`,
              gap: 0,
              borderTop: '1px solid var(--rule)',
              borderBottom: '1px solid var(--rule)',
            }}
          >
            {rows.map(([k, v], i) => (
              <div
                key={k}
                style={{
                  padding: '24px 20px',
                  borderRight: i < rows.length - 1 ? '1px solid var(--rule)' : 'none',
                }}
              >
                <Label as="div" style={{ marginBottom: 8, display: 'block' }}>{k}</Label>
                <div style={{ fontFamily: 'var(--sans)', fontWeight: 500, fontSize: 16, color: 'var(--ink)' }}>{v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Problem({ c }: { c: CaseStudy }) {
  const pr = c.problem
  return (
    <Section id="problem" label="The problem" title={pr.title} lead={pr.lead}>
      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'start' }}>
        <Reveal>
          <div style={{ display: 'grid', rowGap: 20 }}>
            {pr.paras.map((p, i) => (
              <p key={i} style={{ fontFamily: 'var(--sans)', fontSize: 17, lineHeight: 1.6, color: 'var(--ink2)', margin: 0 }}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div
            style={{
              background: 'var(--paper)',
              border: '1px solid var(--rule)',
              borderRadius: 16,
              padding: 28,
            }}
          >
            <Label as="div" style={{ display: 'block', marginBottom: 16 }}>Where I started</Label>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', rowGap: 14 }}>
              {pr.started.map((line) => (
                <li
                  key={line}
                  style={{
                    display: 'flex',
                    gap: 12,
                    alignItems: 'flex-start',
                    fontFamily: 'var(--sans)',
                    fontSize: 14.5,
                    color: 'var(--ink2)',
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: 'var(--accent)', fontWeight: 600 }}>—</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

function Research({ c }: { c: CaseStudy }) {
  const r = c.research
  return (
    <Section id="research" label="Research" title={r.title} lead={r.lead} bg="var(--paper)">
      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {r.insights.map((ins, i) => (
          <Reveal key={i} delay={i * 80}>
            <div
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--rule)',
                borderRadius: 16,
                padding: 28,
                height: '100%',
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  color: 'var(--bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--sans)',
                  fontWeight: 600,
                  fontSize: 14,
                  marginBottom: 20,
                }}
              >
                {i + 1}
              </div>
              <h4
                style={{
                  fontFamily: 'var(--sans)',
                  fontWeight: 600,
                  fontSize: 20,
                  lineHeight: 1.25,
                  margin: '0 0 14px',
                  color: 'var(--ink)',
                  letterSpacing: '-0.015em',
                }}
              >
                {ins.t}
              </h4>
              <p style={{ fontFamily: 'var(--sans)', fontSize: 15, lineHeight: 1.6, color: 'var(--ink2)', margin: 0 }}>
                {ins.d}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Pullquote({ c }: { c: CaseStudy }) {
  const q = c.pullquote
  return (
    <section style={{ padding: '80px 32px' }}>
      <div className="page-container">
        <Reveal>
          <blockquote
            style={{
              margin: 0,
              padding: '40px 0',
              borderTop: '1px solid var(--ink)',
              borderBottom: '1px solid var(--ink)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--sans)',
                fontWeight: 500,
                fontSize: 42,
                lineHeight: 1.2,
                letterSpacing: '-0.025em',
                color: 'var(--ink)',
                margin: '0 0 20px',
                maxWidth: 900,
              }}
            >
              {q.text}
            </p>
            <Label>{q.cite}</Label>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}

function Approach({ c }: { c: CaseStudy }) {
  const a = c.approach
  const bgMap = ['var(--paper)', 'var(--panel)', 'var(--panel2)']
  return (
    <Section id="approach" label="The approach" title={a.title} lead={a.lead}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {a.bets.map((bet, i) => (
          <Reveal key={bet.n} delay={i * 80}>
            <div
              className="grid-2"
              style={{
                background: bgMap[i] ?? 'var(--paper)',
                border: '1px solid var(--rule)',
                borderRadius: 20,
                padding: 32,
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                gap: 32,
                alignItems: 'start',
              }}
            >
              <div>
                <Label>Bet {bet.n}</Label>
                <div
                  style={{
                    fontFamily: 'var(--sans)',
                    fontWeight: 600,
                    fontSize: 56,
                    color: 'var(--ink)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    marginTop: 8,
                  }}
                >
                  {bet.n}
                </div>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--sans)',
                    fontWeight: 600,
                    fontSize: 30,
                    lineHeight: 1.15,
                    margin: '0 0 12px',
                    color: 'var(--ink)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {bet.t}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: 17,
                    lineHeight: 1.6,
                    color: 'var(--ink2)',
                    margin: 0,
                    maxWidth: 720,
                  }}
                >
                  {bet.d}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Exploration({ c }: { c: CaseStudy }) {
  const ex = c.exploration
  return (
    <Section id="exploration" label="Exploration" title={ex.title} lead={ex.lead} bg="var(--paper)">
      <div
        className="grid-3"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 16 }}
      >
        {ex.shots.map((shot, i) => (
          <Reveal key={i} delay={i * 80}>
            <PlaceholderImg shot={shot} tone={i < 2 ? 'bone' : 'cream'} height={280} radius={14} />
          </Reveal>
        ))}
      </div>
      <Reveal delay={240}>
        <p
          style={{
            fontFamily: 'var(--sans)',
            fontSize: 16,
            lineHeight: 1.6,
            color: 'var(--muted)',
            margin: '32px 0 0',
            maxWidth: 820,
          }}
        >
          {ex.closing}
        </p>
      </Reveal>
    </Section>
  )
}

function Solution({ c }: { c: CaseStudy }) {
  const s = c.solution
  return (
    <Section id="solution" label="The solution" title={s.title} lead={s.lead}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Reveal>
          <PlaceholderImg shot={s.shots[0]} tone="paper" height={520} radius={20} />
        </Reveal>
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <Reveal delay={80}>
            <PlaceholderImg shot={s.shots[1]} tone="paper" height={360} radius={16} />
          </Reveal>
          <Reveal delay={160}>
            <PlaceholderImg shot={s.shots[2]} tone="paper" height={360} radius={16} />
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

function Outcomes({ c }: { c: CaseStudy }) {
  const o = c.outcomes
  return (
    <Section
      id="outcomes"
      label="Outcomes"
      title={o.title}
      lead={o.lead}
      bg="var(--ink)"
      titleColor="#f0efe9"
      leadColor="rgba(240,239,233,0.7)"
    >
      <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {o.stats.map((s, i) => (
          <Reveal key={i} delay={i * 80}>
            <div
              style={{
                background: 'rgba(245,245,240,0.04)',
                border: '1px solid rgba(245,245,240,0.12)',
                borderRadius: 16,
                padding: 28,
                height: '100%',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--sans)',
                  fontWeight: 600,
                  fontSize: 56,
                  color: 'var(--accent)',
                  letterSpacing: '-0.035em',
                  lineHeight: 1,
                  marginBottom: 16,
                }}
              >
                {s.v}
              </div>
              <div style={{ fontFamily: 'var(--sans)', fontWeight: 500, fontSize: 15, color: '#f5f5f0', marginBottom: 6 }}>
                {s.l}
              </div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'rgba(245,245,240,0.55)' }}>
                {s.sub}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Reflection({ c }: { c: CaseStudy }) {
  const r = c.reflection
  return (
    <Section id="reflection" label="Reflection" title={r.title}>
      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {r.items.map(([title, body], i) => (
          <Reveal key={i} delay={i * 80}>
            <div style={{ borderTop: '2px solid var(--ink)', paddingTop: 20, height: '100%' }}>
              <Label as="div" style={{ display: 'block', marginBottom: 12 }}>{title}</Label>
              <p style={{ fontFamily: 'var(--sans)', fontSize: 16, lineHeight: 1.6, color: 'var(--ink2)', margin: 0 }}>
                {body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function NextCase({ slug }: { slug: string }) {
  const idx = PROJECTS.findIndex((p) => p.slug === `/work/${slug}`)
  const prev = idx > 0 ? PROJECTS[idx - 1] : null
  const next = idx >= 0 && idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null

  type Dir = 'prev' | 'next'
  const cell = (p: typeof PROJECTS[0] | null, dir: Dir) => {
    const isNext = dir === 'next'
    const soon = p?.comingSoon
    const href = p && !soon ? p.slug : null
    const title = p ? p.name : 'All work'
    const sub = p ? (soon ? 'Coming soon' : p.tag) : 'Back to the index'
    const eyebrow = isNext ? 'Next' : 'Previous'
    const defaultLink = '/'

    const inner = (
      <>
        <span
          style={{
            fontFamily: 'var(--sans)',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          {!isNext && <span style={{ color: 'var(--accent)' }}>←</span>}
          {eyebrow}
          {isNext && <span style={{ color: 'var(--accent)' }}>→</span>}
        </span>
        <span
          style={{
            fontFamily: 'var(--sans)',
            fontWeight: 500,
            fontSize: p && !soon ? 44 : 32,
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
          }}
        >
          {title}
        </span>
        <span style={{ fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--muted)' }}>{sub}</span>
      </>
    )

    const baseStyle: React.CSSProperties = {
      flex: '1 1 320px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      textDecoration: 'none',
      color: p && !soon ? 'var(--ink)' : 'var(--muted)',
      padding: '32px 0',
      alignItems: isNext ? 'flex-end' : 'flex-start',
      textAlign: isNext ? 'right' : 'left',
    }

    const destination = href ?? defaultLink
    return soon || !p ? (
      <div style={{ ...baseStyle, cursor: href ? 'pointer' : 'default' }}>{inner}</div>
    ) : (
      <Link to={destination} style={baseStyle}>{inner}</Link>
    )
  }

  return (
    <section style={{ padding: '40px 32px', borderTop: '1px solid var(--rule)' }}>
      <div
        className="page-container"
        style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'space-between' }}
      >
        <Reveal>{cell(prev, 'prev')}</Reveal>
        <div
          className="responsive-hide"
          style={{ width: 1, background: 'var(--rule)', alignSelf: 'stretch' }}
        />
        <Reveal delay={80}>{cell(next, 'next')}</Reveal>
      </div>
    </section>
  )
}

function CaseFooter({ name }: { name: string }) {
  return (
    <footer
      style={{
        background: 'var(--footer-bg)',
        color: 'var(--footer-ink)',
        padding: '64px 32px 40px',
        fontFamily: 'var(--sans)',
      }}
    >
      <div className="page-container">
        <Reveal delay={100}>
          <div
            className="grid-3"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
              borderTop: '1px solid rgba(245,245,240,0.2)',
              paddingTop: 28,
            }}
          >
            <div>
              <Label color="rgba(245,245,240,0.5)" style={{ display: 'block', marginBottom: 8 }}>Email</Label>
              <a
                href={`mailto:${CONTACT.email}`}
                style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: 17, fontWeight: 500 }}
              >
                {CONTACT.email}
              </a>
            </div>
            <div>
              <Label color="rgba(245,245,240,0.5)" style={{ display: 'block', marginBottom: 8 }}>LinkedIn</Label>
              <a
                href={CONTACT.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: 17, fontWeight: 500 }}
              >
                {CONTACT.linkedin}
              </a>
            </div>
            <div>
              <Label color="rgba(245,245,240,0.5)" style={{ display: 'block', marginBottom: 8 }}>Work</Label>
              <Link
                to="/"
                style={{ color: 'var(--footer-ink)', textDecoration: 'none', fontSize: 17, fontWeight: 500 }}
              >
                All projects →
              </Link>
            </div>
          </div>
        </Reveal>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 64,
            paddingTop: 24,
            borderTop: '1px solid rgba(245,245,240,0.1)',
            color: 'rgba(245,245,240,0.4)',
            fontSize: 12.5,
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <span>© Xing Liu, 2026</span>
          <span>Case study · {name}</span>
          <span style={{ color: 'var(--accent)' }}>● online</span>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  const c = slug ? CASES[slug] : undefined

  if (!c) return <Navigate to="/" replace />

  return (
    <>
      <CaseHero c={c} />
      <HeroImage c={c} />
      <MetaBar c={c} />
      <Problem c={c} />
      <Research c={c} />
      <Pullquote c={c} />
      <Approach c={c} />
      <Exploration c={c} />
      <Solution c={c} />
      <Outcomes c={c} />
      <Reflection c={c} />
      <NextCase slug={slug!} />
      <CaseFooter name={c.project.name} />
    </>
  )
}
