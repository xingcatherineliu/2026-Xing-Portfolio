import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Label from '../components/Label'
import PlaceholderImg from '../components/PlaceholderImg'
import { CASES } from '../data/cases'
import { PROJECTS } from '../data/projects'
import { CONTACT } from '../data/content'

const c = CASES['widgets']

// ─── DS-specific data ────────────────────────────────────────────────────────

const AUDIT_STATS = [
  { v: '17', label: 'ticker implementations', sub: 'across 9 product surfaces' },
  { v: '23', label: 'component reimplementations', sub: 'of conceptually identical pieces' },
  { v: '3 wks', label: 'to ship one new widget', sub: 'median, per team, from scratch' },
  { v: '0', label: 'shared a11y baseline', sub: 'across all market widgets' },
]

const TOKEN_LAYERS = [
  {
    n: '01',
    name: 'Foundation',
    description: 'Raw values — colors, spacing, type sizes, radii, motion curves. Named for what they are, not what they do.',
    items: ['Color primitives', 'Spacing scale', 'Type ramp', 'Border radii', 'Motion curves'],
  },
  {
    n: '02',
    name: 'Semantic',
    description: 'Meaning mapped to values. What "positive" looks like, what "dense" means, what "interactive" implies.',
    items: ['positive / negative / neutral', 'Data-density scale', 'Interactive states', 'Content hierarchy'],
  },
  {
    n: '03',
    name: 'Component',
    description: 'Component-scoped decisions that reference the semantic layer — never the foundation directly.',
    items: ['Per-component slots', 'Density variants', 'Dark / light theme maps'],
  },
]

const FAMILIES = [
  {
    name: 'Market family',
    tag: '18 components',
    description: 'Price, volume, and real-time data display for financial surfaces. Designed around edge cases: negative values, zero-volume states, market-close formatting.',
    components: ['Price ticker', 'Volume bar', 'Sparkline', 'Watchlist row', 'Market clock', 'Price badge', 'Bid/ask spread', 'Volume profile', 'Gainers/losers', 'Asset card'],
    tone: 'paper' as const,
  },
  {
    name: 'Media family',
    tag: '16 components',
    description: 'News, article, and video content blocks for editorial surfaces. Built around a shared content model so the same article looks like the same product everywhere.',
    components: ['News card', 'Article preview', 'Video player', 'Feed layout', 'Thumbnail', 'Author badge', 'Content list', 'Video grid', 'Breaking banner', 'Topic tag'],
    tone: 'bone' as const,
  },
]

// ─── Sections ────────────────────────────────────────────────────────────────

function CaseHero() {
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
            ← Case study · {p.year} · {p.org}
          </Link>
        </Reveal>

        <Reveal delay={80}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28, flexWrap: 'wrap' }}>
            <span
              style={{
                padding: '4px 12px',
                background: 'var(--ink)',
                color: 'var(--bg)',
                fontSize: 12.5,
                fontWeight: 600,
                letterSpacing: '0.04em',
                borderRadius: 999,
                fontFamily: 'var(--sans)',
              }}
            >
              № {p.code}
            </span>
            <span style={{ fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--muted)', fontWeight: 500 }}>
              {p.tag}
            </span>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <h1 className="hero-h1" style={{ margin: '0 0 32px' }}>
            {p.name}<span style={{ color: 'var(--accent)' }}>.</span>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 22,
              lineHeight: 1.45,
              color: 'var(--ink2)',
              margin: 0,
              maxWidth: 800,
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

function HeroImage() {
  return (
    <section style={{ padding: '64px 32px 32px' }}>
      <div className="page-container">
        <Reveal>
          <PlaceholderImg
            shot={c.solution.shots[0]}
            label={`${c.project.name} · hero shot`}
            tone="neutral"
            height={560}
            radius={20}
          />
        </Reveal>
      </div>
    </section>
  )
}

function MetaBar() {
  const p = c.project
  const rows: [string, React.ReactNode][] = [
    ['Role', p.role],
    ['Year', p.year],
    ['Timeline', p.timeline],
    ['Team', p.team],
    ['Outcome', <span key="m" style={{ color: 'var(--accent)' }}>{p.metric}</span>],
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
              borderTop: '1px solid var(--rule)',
              borderBottom: '1px solid var(--rule)',
            }}
          >
            {rows.map(([k, v], i) => (
              <div
                key={k}
                className="meta-cell"
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

function FragmentationAudit() {
  return (
    <section style={{ padding: '0 32px 80px' }}>
      <div className="page-container">
        {/* Audit numbers */}
        <Reveal>
          <div
            style={{
              background: 'var(--ink)',
              borderRadius: 20,
              padding: '56px 48px',
              marginBottom: 64,
            }}
          >
            <Label color="rgba(245,245,240,0.45)" style={{ display: 'block', marginBottom: 40 }}>
              The audit · before
            </Label>
            <div
              className="grid-2"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}
            >
              {AUDIT_STATS.map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: '32px 0',
                    borderTop: i >= 2 ? '1px solid rgba(245,245,240,0.1)' : undefined,
                    paddingRight: i % 2 === 0 ? 48 : 0,
                    paddingLeft: i % 2 === 1 ? 48 : 0,
                    borderLeft: i % 2 === 1 ? '1px solid rgba(245,245,240,0.1)' : undefined,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--sans)',
                      fontWeight: 600,
                      fontSize: 64,
                      lineHeight: 1,
                      color: i === 2 ? 'var(--accent)' : '#f0efe9',
                      letterSpacing: '-0.04em',
                      marginBottom: 12,
                    }}
                  >
                    {s.v}
                  </div>
                  <div style={{ fontFamily: 'var(--sans)', fontWeight: 500, fontSize: 15, color: 'rgba(245,245,240,0.85)', marginBottom: 4 }}>
                    {s.label}
                  </div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'rgba(245,245,240,0.45)' }}>
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Problem text */}
        <div
          className="responsive-grid"
          style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'start' }}
        >
          <Reveal>
            <div>
              <Label as="div" style={{ display: 'block', marginBottom: 24 }}>The problem</Label>
              <h2
                className="section-h2"
                style={{ fontFamily: 'var(--sans)', fontSize: 44, lineHeight: 1.08, letterSpacing: '-0.03em', color: 'var(--ink)', margin: '0 0 32px' }}
              >
                {c.problem.title}
              </h2>
              {c.problem.paras.map((p, i) => (
                <p key={i} style={{ fontFamily: 'var(--sans)', fontSize: 17, lineHeight: 1.65, color: 'var(--ink2)', margin: '0 0 20px' }}>
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
                marginTop: 64,
              }}
            >
              <Label as="div" style={{ display: 'block', marginBottom: 16 }}>Where I started</Label>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', rowGap: 14 }}>
                {c.problem.started.map((line) => (
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
                    <span style={{ color: 'var(--accent)', fontWeight: 600, flexShrink: 0 }}>—</span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Research() {
  const r = c.research
  return (
    <section style={{ padding: '80px 32px', background: 'var(--paper)' }}>
      <div className="page-container">
        <Reveal>
          <Label as="div" style={{ display: 'block', marginBottom: 20 }}>Research</Label>
          <h2
            className="section-h2"
            style={{ fontFamily: 'var(--sans)', fontSize: 56, lineHeight: 1.04, letterSpacing: '-0.035em', color: 'var(--ink)', margin: '0 0 16px', maxWidth: 880 }}
          >
            {r.title}
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 18, lineHeight: 1.55, color: 'var(--ink2)', margin: '0 0 48px', maxWidth: 720 }}>
            {r.lead}
          </p>
        </Reveal>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
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
                <h4 style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 19, lineHeight: 1.25, margin: '0 0 12px', color: 'var(--ink)', letterSpacing: '-0.015em' }}>
                  {ins.t}
                </h4>
                <p style={{ fontFamily: 'var(--sans)', fontSize: 15, lineHeight: 1.6, color: 'var(--ink2)', margin: 0 }}>
                  {ins.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pullquote() {
  const q = c.pullquote
  return (
    <section style={{ padding: '80px 32px' }}>
      <div className="page-container">
        <Reveal>
          <blockquote style={{ margin: 0, padding: '40px 0', borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)' }}>
            <p
              className="pullquote-text"
              style={{ fontFamily: 'var(--sans)', fontWeight: 500, fontSize: 40, lineHeight: 1.22, letterSpacing: '-0.025em', color: 'var(--ink)', margin: '0 0 20px', maxWidth: 900 }}
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

function TokenArchitecture() {
  return (
    <section style={{ padding: '80px 32px', background: 'var(--panel)' }}>
      <div className="page-container">
        <Reveal>
          <Label as="div" style={{ display: 'block', marginBottom: 20 }}>System architecture</Label>
          <h2
            className="section-h2"
            style={{ fontFamily: 'var(--sans)', fontSize: 56, lineHeight: 1.04, letterSpacing: '-0.035em', color: 'var(--ink)', margin: '0 0 16px' }}
          >
            Token layer first.<br />
            <span style={{ color: 'var(--muted)' }}>Always.</span>
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 18, lineHeight: 1.55, color: 'var(--ink2)', margin: '0 0 56px', maxWidth: 680 }}>
            Before a single component was designed, we established three layers of tokens. Getting teams to agree on semantic names up front meant every API debate was low-stakes — everyone shared a vocabulary before we shipped anything.
          </p>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {TOKEN_LAYERS.map((layer, i) => (
            <Reveal key={layer.n} delay={i * 100}>
              <div
                className="responsive-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '220px 1fr',
                  gap: 0,
                  borderTop: '1px solid var(--rule)',
                  padding: '36px 0',
                  alignItems: 'start',
                }}
              >
                {/* Left: number + name */}
                <div style={{ paddingRight: 32 }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: i === 0 ? 'var(--accent)' : 'transparent',
                      border: `1px solid ${i === 0 ? 'var(--accent)' : 'var(--rule)'}`,
                      color: i === 0 ? 'white' : 'var(--ink)',
                      fontFamily: 'var(--sans)',
                      fontWeight: 600,
                      fontSize: 13,
                      marginBottom: 14,
                    }}
                  >
                    {layer.n}
                  </div>
                  <div style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 20, color: 'var(--ink)', letterSpacing: '-0.01em' }}>
                    {layer.name}
                  </div>
                </div>

                {/* Right: description + chips */}
                <div>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: 16, lineHeight: 1.6, color: 'var(--ink2)', margin: '0 0 20px' }}>
                    {layer.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        style={{
                          fontFamily: 'var(--mono)',
                          fontSize: 12,
                          color: 'var(--ink2)',
                          padding: '5px 12px',
                          background: 'var(--paper)',
                          border: '1px solid var(--rule)',
                          borderRadius: 999,
                          letterSpacing: '0.01em',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <div style={{ borderTop: '1px solid var(--rule)' }} />
        </div>
      </div>
    </section>
  )
}

function ComponentFamilies() {
  return (
    <section style={{ padding: '80px 32px' }}>
      <div className="page-container">
        <Reveal>
          <Label as="div" style={{ display: 'block', marginBottom: 20 }}>What we built</Label>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--ink)',
              paddingBottom: 20,
              marginBottom: 40,
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <h2
              className="section-h2"
              style={{ fontFamily: 'var(--sans)', fontSize: 56, margin: 0, color: 'var(--ink)' }}
            >
              Two families.<br />One system.
            </h2>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)' }}>
              34 components total
            </div>
          </div>
        </Reveal>

        <div
          className="responsive-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}
        >
          {FAMILIES.map((family, i) => (
            <Reveal key={family.name} delay={i * 100}>
              <div
                style={{
                  border: '1px solid var(--rule)',
                  borderRadius: 20,
                  overflow: 'hidden',
                  background: 'var(--paper)',
                }}
              >
                <PlaceholderImg
                  label={`${family.name} · component set`}
                  tone={family.tone}
                  height={260}
                  radius={0}
                />
                <div style={{ padding: 28 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
                    <h3
                      style={{
                        fontFamily: 'var(--sans)',
                        fontWeight: 600,
                        fontSize: 22,
                        color: 'var(--ink)',
                        margin: 0,
                        letterSpacing: '-0.015em',
                      }}
                    >
                      {family.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'var(--sans)',
                        fontSize: 12.5,
                        color: 'var(--accent)',
                        fontWeight: 600,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {family.tag}
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--muted)', margin: '0 0 20px' }}>
                    {family.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {family.components.map((comp) => (
                      <span
                        key={comp}
                        style={{
                          fontFamily: 'var(--sans)',
                          fontSize: 12,
                          color: 'var(--ink2)',
                          fontWeight: 500,
                          padding: '4px 10px',
                          background: 'var(--bg)',
                          border: '1px solid var(--rule)',
                          borderRadius: 999,
                        }}
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Exploration() {
  const ex = c.exploration
  return (
    <section style={{ padding: '80px 32px', background: 'var(--paper)' }}>
      <div className="page-container">
        <Reveal>
          <Label as="div" style={{ display: 'block', marginBottom: 20 }}>Exploration</Label>
          <h2
            className="section-h2"
            style={{ fontFamily: 'var(--sans)', fontSize: 56, lineHeight: 1.04, letterSpacing: '-0.035em', color: 'var(--ink)', margin: '0 0 16px', maxWidth: 880 }}
          >
            {ex.title}
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 18, lineHeight: 1.55, color: 'var(--ink2)', margin: '0 0 40px', maxWidth: 720 }}>
            {ex.lead}
          </p>
        </Reveal>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 16 }}>
          {ex.shots.map((shot, i) => (
            <Reveal key={i} delay={i * 80}>
              <PlaceholderImg shot={shot} tone={i === 1 ? 'bone' : 'neutral'} height={260} radius={14} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={240}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 16, lineHeight: 1.6, color: 'var(--muted)', margin: '32px 0 0', maxWidth: 820 }}>
            {ex.closing}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function Outcomes() {
  const o = c.outcomes
  return (
    <section style={{ padding: '80px 32px', background: 'var(--ink)' }}>
      <div className="page-container">
        <Reveal>
          <Label color="rgba(245,245,240,0.45)" style={{ display: 'block', marginBottom: 20 }}>Outcomes</Label>
          <h2
            className="section-h2"
            style={{ fontFamily: 'var(--sans)', fontSize: 56, lineHeight: 1.04, letterSpacing: '-0.035em', color: '#f0efe9', margin: '0 0 16px', maxWidth: 880 }}
          >
            {o.title}
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 18, lineHeight: 1.55, color: 'rgba(240,239,233,0.65)', margin: '0 0 48px', maxWidth: 720 }}>
            {o.lead}
          </p>
        </Reveal>
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
                    fontSize: 52,
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
                <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'rgba(245,245,240,0.45)' }}>
                  {s.sub}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reflection() {
  const r = c.reflection
  return (
    <section style={{ padding: '80px 32px' }}>
      <div className="page-container">
        <Reveal>
          <Label as="div" style={{ display: 'block', marginBottom: 20 }}>Reflection</Label>
          <h2
            className="section-h2"
            style={{ fontFamily: 'var(--sans)', fontSize: 56, lineHeight: 1.04, letterSpacing: '-0.035em', color: 'var(--ink)', margin: '0 0 48px' }}
          >
            {r.title}
          </h2>
        </Reveal>
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
      </div>
    </section>
  )
}

function NextCase() {
  const idx = PROJECTS.findIndex((p) => p.slug === '/work/widgets')
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

    const inner = (
      <>
        <span style={{ fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--muted)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          {!isNext && <span style={{ color: 'var(--accent)' }}>←</span>}
          {eyebrow}
          {isNext && <span style={{ color: 'var(--accent)' }}>→</span>}
        </span>
        <span style={{ fontFamily: 'var(--sans)', fontWeight: 500, fontSize: p && !soon ? 40 : 28, lineHeight: 1.02, letterSpacing: '-0.03em' }}>
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

    return href ? (
      <Link to={href} style={baseStyle}>{inner}</Link>
    ) : (
      <Link to="/" style={baseStyle}>{inner}</Link>
    )
  }

  return (
    <section style={{ padding: '40px 32px', borderTop: '1px solid var(--rule)' }}>
      <div className="page-container" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'space-between' }}>
        <Reveal>{cell(prev, 'prev')}</Reveal>
        <div className="responsive-hide" style={{ width: 1, background: 'var(--rule)', alignSelf: 'stretch' }} />
        <Reveal delay={80}>{cell(next, 'next')}</Reveal>
      </div>
    </section>
  )
}

function CaseFooter() {
  return (
    <footer style={{ background: 'var(--footer-bg)', color: 'var(--footer-ink)', padding: '64px 32px 40px', fontFamily: 'var(--sans)' }}>
      <div className="page-container">
        <Reveal delay={100}>
          <div
            className="grid-3"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, borderTop: '1px solid rgba(245,245,240,0.2)', paddingTop: 28 }}
          >
            <div>
              <Label color="rgba(245,245,240,0.5)" style={{ display: 'block', marginBottom: 8 }}>Email</Label>
              <a href={`mailto:${CONTACT.email}`} style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: 17, fontWeight: 500 }}>
                {CONTACT.email}
              </a>
            </div>
            <div>
              <Label color="rgba(245,245,240,0.5)" style={{ display: 'block', marginBottom: 8 }}>LinkedIn</Label>
              <a href={CONTACT.linkedinUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: 17, fontWeight: 500 }}>
                {CONTACT.linkedin}
              </a>
            </div>
            <div>
              <Label color="rgba(245,245,240,0.5)" style={{ display: 'block', marginBottom: 8 }}>Work</Label>
              <Link to="/" style={{ color: 'var(--footer-ink)', textDecoration: 'none', fontSize: 17, fontWeight: 500 }}>
                All projects →
              </Link>
            </div>
          </div>
        </Reveal>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 64, paddingTop: 24, borderTop: '1px solid rgba(245,245,240,0.1)', color: 'rgba(245,245,240,0.4)', fontSize: 12.5, flexWrap: 'wrap', gap: 12 }}>
          <span>© Xing Liu, 2026</span>
          <span>Case study · {c.project.name}</span>
          <span style={{ color: 'var(--accent)' }}>● online</span>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function DesignSystemCaseStudyPage() {
  return (
    <>
      <CaseHero />
      <HeroImage />
      <MetaBar />
      <FragmentationAudit />
      <Research />
      <Pullquote />
      <TokenArchitecture />
      <ComponentFamilies />
      <Exploration />
      <Outcomes />
      <Reflection />
      <NextCase />
      <CaseFooter />
    </>
  )
}
