// Case Study — Compass.
// Long-form case study page in the same visual system as the portfolio.

const { useEffect, useRef } = React;

// ── Tokens (kept inline so this page is independent of the portfolio file) ──
const T = {
  bg: '#f7f6f3',
  paper: '#ffffff',
  panel: '#eef0eb',
  panel2: '#f0eee9',
  ink: '#0a0a0a',
  ink2: '#2a2a2a',
  muted: '#6b6b6b',
  rule: 'rgba(10,10,10,0.12)',
  ruleSoft: 'rgba(10,10,10,0.06)',
  accent: '#4caf50',
  footerBg: '#0a0a0a',
  footerInk: '#f5f5f0',
  sans: '"DM Sans", -apple-system, system-ui, sans-serif',
};

// ── Page content, keyed by slug. window.CASE selects which case renders. ──
const CASES = {
  'compass.html': {
    project: {
      code: '01', name: 'Compass', tag: 'Analytics platform', year: '2024',
      org: 'Series-B SaaS', role: 'Lead Designer', timeline: '6 months', team: 'PM, 4 eng, 2 design',
      hero: 'A configurable canvas that replaced 47 screens, 11 settings panels, and an entire onboarding flow.',
      metric: '−96% time to insight',
    },
    problem: {
      title: 'A great product, buried under its own breadth.',
      lead: 'Compass had grown into a 47-screen analytics suite with eleven separate settings panels. Power users had bookmarks; new users had questions. Activation was at 18%, and falling.',
      paras: [
        'The product team had been shipping features for three years. Each new capability got its own page, its own settings, and its own URL. By the time I joined, the IA looked like a strata map: every layer was a quarter\'s worth of decisions.',
        'Sales demos worked. Trials didn\'t. We were great at telling people what the product could do, and bad at letting them feel it.',
      ],
      started: [
        'Activation: 18% (target: 40%)',
        'Time-to-first-insight: 14 min median',
        'Support tickets dominated by "how do I…" questions',
        '4 of last 6 churned accounts cited "confusing"',
      ],
    },
    research: {
      title: 'What 18 sessions told us.',
      lead: 'Two weeks of customer calls, four days of support-ticket archaeology, and a calendar full of empty-state screenshots.',
      insights: [
        { t: 'Power users were rebuilding the same dashboard, weekly.', d: 'In 18 sessions across customer types, 14 of them showed me a "starting point" dashboard they\'d cloned from a teammate. The product offered breadth; they wanted a sturdy default.' },
        { t: 'New users churned before they ever loaded data.', d: 'Mixpanel showed a 62% drop-off between signup and the first chart. Our onboarding asked seven questions before showing any value. Every question was a chance to leave.' },
        { t: 'The "right" chart wasn\'t the bottleneck.', d: 'Support tickets weren\'t about wrong visualizations — they were about not knowing where to start. The IA was the problem, not the rendering.' },
      ],
    },
    pullquote: {
      text: '"Honestly? I never use most of this. I just want the three charts I always look at, in one place, fast."',
      cite: 'Director of Growth · 200-person fintech · session 06',
    },
    approach: {
      title: 'Three bets that organized the whole project.',
      lead: 'We had ninety days before the next quarterly review. The bets had to be small enough to ship and big enough to matter.',
      bets: [
        { n: '01', t: 'One canvas, many lenses', d: 'Replace the screen-per-feature model with a single composable canvas. Every analysis is a tile; every tile is a block in a grid the user can rearrange.' },
        { n: '02', t: 'Smart defaults, escapable', d: 'Pre-fill the canvas based on the user\'s data shape. Show real charts in 10 seconds. Make every default cheap to change — but cheap to keep.' },
        { n: '03', t: 'Progressive complexity', d: 'Hide advanced controls behind a single "Configure" pane. 80% of users never open it. 20% open it constantly — give them keyboard shortcuts.' },
      ],
    },
    exploration: {
      title: 'Sketches, dead ends, and the one that worked.',
      lead: 'Four weeks of paper, Figma, and prototypes built in code. We tested three canvas models before the grid emerged as the obvious answer.',
      shots: ['Concept A · linear feed', 'Concept B · stack of cards', 'Concept C · grid canvas ✓'],
      closing: 'The grid won because it gave users a sense of place — a thing they could rearrange, name, and recognize a week later. The other two tested as "neat" but didn\'t survive a Monday.',
    },
    solution: {
      title: 'One canvas, smart defaults, two keyboard shortcuts.',
      lead: 'The shipped product replaced forty-seven screens with one. Every analysis is a tile; the tile knows what to do with your data; the canvas remembers where you left off.',
      shots: ['Canvas · default view', 'Tile configuration pane', 'Empty state — auto-populated'],
    },
    outcomes: {
      title: 'Eight weeks after launch.',
      lead: 'We measured the things we set out to move — activation, time-to-first-insight, weekly active users — and the things we hadn\'t thought to measure.',
      stats: [
        { v: '−96%', l: 'time to first insight', sub: '14 min → 38 sec' },
        { v: '3×', l: 'weekly active users', sub: 'within one quarter' },
        { v: '47 → 1', l: 'screens consolidated', sub: 'into a single canvas' },
        { v: '+22 NPS', l: 'point lift in 8 weeks', sub: 'from 14 to 36' },
      ],
    },
    reflection: {
      title: 'What I\'d carry forward.',
      items: [
        ['What worked', 'Shipping the canvas behind a flag at week six. Real usage data settled five design debates and killed two features we were about to build.'],
        ['What I\'d redo', 'I spent too long on the empty state. The right answer was: don\'t have one. Auto-populate the canvas the second a user connects data.'],
        ['What I learned', 'For data products, the design problem is almost always "where do I start" — not "what does this chart look like." Information architecture is the work.'],
      ],
    },
  },

  'pulse.html': {
    project: {
      code: '02', name: 'Pulse', tag: 'Realtime alerting', year: '2023',
      org: 'Infra startup', role: 'Senior Designer', timeline: '5 months', team: 'PM, 5 eng, 2 design',
      hero: 'An alerting console on-call engineers actually want open at 2am — alert grammar, escalation flows, and a calm dark theme for the worst moment of the night.',
      metric: '4.7★ in-app rating',
    },
    problem: {
      title: 'Alerts that cried wolf, all night long.',
      lead: 'Pulse\'s monitoring fired thousands of alerts a day. Most didn\'t matter, all looked the same, and the engineers who could tell the difference were burning out.',
      paras: [
        'The platform could detect anything, so it alerted on everything. Each new service added its own thresholds, its own noise, its own 3am pages. By the time I joined, on-call was the most-dreaded rotation in eng.',
        'Leadership saw it as a tooling problem. The engineers knew it was a trust problem: when most pages are noise, you stop reading them — including the one that matters.',
      ],
      started: [
        'In-app rating: 3.1 (down from 4.0)',
        'Mean time to acknowledge: 6.2 min',
        '70% of pages rated "not actionable"',
        '2 senior engineers left the rotation last quarter',
      ],
    },
    research: {
      title: 'What a week of on-call taught me.',
      lead: 'I shadowed three on-call rotations, read six months of incident retros, and got paged at 2am myself so I\'d stop designing for the demo.',
      insights: [
        { t: 'Alerts arrived without context.', d: 'Engineers got a ping and a cryptic title, then spent the first three minutes just working out what broke and whether it even mattered.' },
        { t: 'Pager fatigue was a staffing problem.', d: 'Two teams told me their best engineers were rotating off on-call because the noise was relentless — roughly 70% of pages were non-actionable.' },
        { t: 'Severity lived in tribal knowledge.', d: 'Whether an alert was drop-everything or a tomorrow-problem wasn\'t in the tool. It was in someone\'s head, or buried in a Slack thread.' },
      ],
    },
    pullquote: {
      text: '"By the time I figure out which of the forty alerts actually matters, the incident\'s already an hour old."',
      cite: 'Staff SRE · 80-person infra team · ride-along 02',
    },
    approach: {
      title: 'Three bets to make on-call survivable.',
      lead: 'We had a quarter and a skeptical eng team. The bets had to cut noise fast enough that people would give the tool another chance.',
      bets: [
        { n: '01', t: 'A grammar for alerts', d: 'Give every alert the same shape — what, where, how bad, since when. Structure the payload so the console can reason about it, not just display it.' },
        { n: '02', t: 'Group before you page', d: 'Roll related alerts into a single incident. Page once, with the whole picture — not forty times for one bad deploy.' },
        { n: '03', t: 'A calm theme for 2am', d: 'Design for the worst moment, not the demo. Low contrast where it doesn\'t matter, high where it does, and nothing that screams unless it should.' },
      ],
    },
    exploration: {
      title: 'Prototypes, paper, and one very loud dead end.',
      lead: 'Three weeks exploring how an incident should feel. We tried a feed, a kanban, and a timeline before the grouped-incident view won.',
      shots: ['Concept A · alert feed', 'Concept B · incident kanban', 'Concept C · grouped timeline ✓'],
      closing: 'The timeline won because it answered the only 2am question that matters: what is happening, and is it getting worse? The feed buried it; the kanban made it a chore.',
    },
    solution: {
      title: 'One incident view, grouped alerts, a calm dark theme.',
      lead: 'The shipped console rolls related alerts into incidents, routes by severity, and stays quiet until something genuinely needs a human awake.',
      shots: ['Incident · default view', 'Escalation policy editor', 'Alert grammar detail'],
    },
    outcomes: {
      title: 'Twelve weeks after rollout.',
      lead: 'We tracked the numbers that meant people trusted the tool again — acknowledgement time, alert noise, and whether anyone stayed on the rotation.',
      stats: [
        { v: '4.7★', l: 'in-app rating', sub: 'up from 3.1' },
        { v: '−41%', l: 'mean time to ack', sub: '6.2 min → 3.7 min' },
        { v: '−68%', l: 'alert noise', sub: 'after grouping rules' },
        { v: '0', l: 'rotation exits', sub: 'down from 2 a quarter' },
      ],
    },
    reflection: {
      title: 'What I\'d carry forward.',
      items: [
        ['What worked', 'The alert grammar. Once payloads had structure, grouping, routing, and the 2am view all fell out of the same model almost for free.'],
        ['What I\'d redo', 'We shipped escalation policies as a config page. It should have been a visual flow from day one — engineers kept redrawing it on whiteboards.'],
        ['What I learned', 'For on-call tools the design constraint isn\'t the happy path — it\'s the half-awake, high-stress one. Design for that and the rest gets easier.'],
      ],
    },
  },
};

const CURRENT_SLUG = (typeof window !== 'undefined' && window.CASE) || 'compass.html';
const C = CASES[CURRENT_SLUG] || CASES['compass.html'];
const PROJECT = C.project;

// ─── Reveal hook ───
function Reveal({ children, delay = 0, style }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add('is-in'), delay);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <div ref={ref} className="reveal" style={style}>{children}</div>;
}

function Label({ children, style, color }) {
  return (
    <span style={{
      fontFamily: T.sans,
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: color || T.muted,
      ...style,
    }}>{children}</span>
  );
}

// ─── Components ───
function Nav() {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: T.bg + 'ee',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${T.rule}`,
      fontFamily: T.sans,
    }}>
      <div className="page" style={{ display: 'flex', alignItems: 'center', padding: '0 32px', height: 64 }}>
        <a href="index.html" className="back-link" style={{
          display: 'flex', alignItems: 'center', gap: 10,
          textDecoration: 'none', color: T.ink,
        }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: T.accent, display: 'inline-block' }} />
          <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: '-0.01em' }}>Xing Liu <span style={{ color: T.muted, fontWeight: 500 }}>— Senior Product Designer</span></span>
        </a>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 4 }}>
          {[['work', 'Work', 'index.html'], ['about', 'About', 'about.html'], ['process', 'Process', 'process.html'], ['resume', 'Resume', 'resume.html']].map(([id, label, href]) => (
            <a key={id} href={href} className="nav-link"
              style={{
                padding: '8px 18px',
                color: T.muted,
                textDecoration: 'none', cursor: 'pointer',
                fontWeight: 500, fontSize: 14,
                borderRadius: 8,
              }}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section style={{ padding: '64px 32px 0' }}>
      <div className="page">
        <Reveal>
          <a href="index.html" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 12px',
            background: T.paper,
            border: `1px solid ${T.rule}`,
            borderRadius: 999,
            color: T.ink2, textDecoration: 'none',
            fontSize: 12.5, fontWeight: 500,
            marginBottom: 32,
          }}>
            Case study · {PROJECT.year} · {PROJECT.org}
          </a>
        </Reveal>
        <Reveal delay={100}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28, flexWrap: 'wrap' }}>
            <span style={{
              padding: '4px 12px', background: T.ink, color: T.bg,
              fontFamily: T.sans, fontSize: 12.5, fontWeight: 600, letterSpacing: '0.04em',
              borderRadius: 999,
            }}>№ {PROJECT.code}</span>
            <span style={{ fontFamily: T.sans, fontSize: 16, color: T.muted, fontWeight: 500 }}>
              {PROJECT.tag}
            </span>
          </div>
        </Reveal>
        <Reveal delay={180}>
          <h1 className="hero-h1" style={{
            fontFamily: T.sans, fontWeight: 500,
            fontSize: 112, lineHeight: 0.95,
            letterSpacing: '-0.04em', color: T.ink,
            margin: '0 0 32px',
          }}>
            {PROJECT.name}<span style={{ color: T.accent }}>.</span>
          </h1>
        </Reveal>
        <Reveal delay={260}>
          <p style={{ fontFamily: T.sans, fontSize: 24, lineHeight: 1.4, color: T.ink2, margin: 0, maxWidth: 820, fontWeight: 400 }}>
            {PROJECT.hero}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function HeroImage() {
  return (
    <section style={{ padding: '64px 32px 32px' }}>
      <div className="page">
        <Reveal>
          <PlaceholderImg label={`${PROJECT.name} · hero shot`} tone="paper" height={560} radius={20} fontFamily={T.sans} />
        </Reveal>
      </div>
    </section>
  );
}

function MetaBar() {
  const rows = [
    ['Role', PROJECT.role],
    ['Year', PROJECT.year],
    ['Timeline', PROJECT.timeline],
    ['Team', PROJECT.team],
    ['Outcome', <span style={{ color: T.accent }}>{PROJECT.metric}</span>],
  ];
  return (
    <section style={{ padding: '32px 32px 80px' }}>
      <div className="page">
        <Reveal>
          <div style={{
            display: 'grid', gridTemplateColumns: `repeat(${rows.length}, 1fr)`,
            gap: 0, borderTop: `1px solid ${T.rule}`, borderBottom: `1px solid ${T.rule}`,
          }}
          className="grid-4"
          >
            {rows.map(([k, v], i) => (
              <div key={k} style={{
                padding: '24px 20px',
                borderRight: i < rows.length - 1 ? `1px solid ${T.rule}` : 'none',
              }}>
                <Label style={{ marginBottom: 8, display: 'block' }}>{k}</Label>
                <div style={{ fontFamily: T.sans, fontWeight: 500, fontSize: 16, color: T.ink }}>{v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Section({ id, label, title, lead, children, bg }) {
  return (
    <section id={id} style={{ padding: '80px 32px', background: bg || 'transparent' }}>
      <div className="page">
        <Reveal>
          <Label style={{ display: 'block', marginBottom: 20 }}>{label}</Label>
          <h2 className="section-h2" style={{
            fontFamily: T.sans, fontWeight: 500, fontSize: 56, lineHeight: 1.04,
            letterSpacing: '-0.035em', color: T.ink, margin: '0 0 24px', maxWidth: 880,
          }}>
            {title}
          </h2>
          {lead && (
            <p style={{ fontFamily: T.sans, fontSize: 20, lineHeight: 1.55, color: T.ink2, margin: '0 0 48px', maxWidth: 760 }}>
              {lead}
            </p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function Problem() {
  const c = C.problem;
  return (
    <Section
      id="problem"
      label="The problem"
      title={c.title}
      lead={c.lead}
    >
      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'start' }}>
        <Reveal>
          <div style={{ display: 'grid', rowGap: 20 }}>
            {c.paras.map((p, i) => (
              <p key={i} style={{ fontFamily: T.sans, fontSize: 17, lineHeight: 1.6, color: T.ink2, margin: 0 }}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div style={{
            background: T.paper,
            border: `1px solid ${T.rule}`,
            borderRadius: 16,
            padding: 28,
          }}>
            <Label style={{ display: 'block', marginBottom: 16 }}>Where I started</Label>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', rowGap: 14 }}>
              {c.started.map(line => (
                <li key={line} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontFamily: T.sans, fontSize: 14.5, color: T.ink2, lineHeight: 1.5 }}>
                  <span style={{ color: T.accent, fontWeight: 600 }}>—</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Research() {
  const c = C.research;
  return (
    <Section
      id="research"
      label="Research"
      title={c.title}
      lead={c.lead}
      bg={T.paper}
    >
      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {c.insights.map((ins, i) => (
          <Reveal key={i} delay={i * 80}>
            <div style={{
              background: T.bg,
              border: `1px solid ${T.rule}`,
              borderRadius: 16,
              padding: 28,
              height: '100%',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: T.accent,
                color: T.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: T.sans, fontWeight: 600, fontSize: 14,
                marginBottom: 20,
              }}>{i + 1}</div>
              <h4 style={{ fontFamily: T.sans, fontWeight: 600, fontSize: 20, lineHeight: 1.25, margin: '0 0 14px', color: T.ink, letterSpacing: '-0.015em' }}>
                {ins.t}
              </h4>
              <p style={{ fontFamily: T.sans, fontSize: 15, lineHeight: 1.6, color: T.ink2, margin: 0 }}>
                {ins.d}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Pullquote() {
  const c = C.pullquote;
  return (
    <section style={{ padding: '80px 32px' }}>
      <div className="page">
        <Reveal>
          <blockquote style={{
            margin: 0, padding: '40px 0',
            borderTop: `1px solid ${T.ink}`,
            borderBottom: `1px solid ${T.ink}`,
          }}>
            <p style={{
              fontFamily: T.sans, fontWeight: 500,
              fontSize: 42, lineHeight: 1.2, letterSpacing: '-0.025em',
              color: T.ink, margin: '0 0 20px', maxWidth: 900,
            }}>
              {c.text}
            </p>
            <Label>{c.cite}</Label>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

function Approach() {
  const c = C.approach;
  return (
    <Section
      id="approach"
      label="The approach"
      title={c.title}
      lead={c.lead}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {c.bets.map((a, i) => (
          <Reveal key={a.n} delay={i * 80}>
            <div style={{
              background: i === 0 ? T.paper : (i === 1 ? T.panel : T.panel2),
              border: `1px solid ${T.rule}`,
              borderRadius: 20,
              padding: 32,
              display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32, alignItems: 'start',
            }} className="grid-2">
              <div>
                <Label>Bet {a.n}</Label>
                <div style={{ fontFamily: T.sans, fontWeight: 600, fontSize: 56, color: T.ink, letterSpacing: '-0.04em', lineHeight: 1, marginTop: 8 }}>
                  {a.n}
                </div>
              </div>
              <div>
                <h3 style={{ fontFamily: T.sans, fontWeight: 600, fontSize: 30, lineHeight: 1.15, margin: '0 0 12px', color: T.ink, letterSpacing: '-0.02em' }}>
                  {a.t}
                </h3>
                <p style={{ fontFamily: T.sans, fontSize: 17, lineHeight: 1.6, color: T.ink2, margin: 0, maxWidth: 720 }}>
                  {a.d}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Exploration() {
  const c = C.exploration;
  return (
    <Section
      id="exploration"
      label="Exploration"
      title={c.title}
      lead={c.lead}
      bg={T.paper}
    >
      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 16 }}>
        <Reveal>
          <PlaceholderImg label={c.shots[0]} tone="bone" height={280} radius={14} fontFamily={T.sans} />
        </Reveal>
        <Reveal delay={80}>
          <PlaceholderImg label={c.shots[1]} tone="bone" height={280} radius={14} fontFamily={T.sans} />
        </Reveal>
        <Reveal delay={160}>
          <PlaceholderImg label={c.shots[2]} tone="cream" height={280} radius={14} fontFamily={T.sans} />
        </Reveal>
      </div>
      <Reveal delay={240}>
        <p style={{ fontFamily: T.sans, fontSize: 16, lineHeight: 1.6, color: T.muted, margin: '32px 0 0', maxWidth: 820 }}>
          {c.closing}
        </p>
      </Reveal>
    </Section>
  );
}

function Solution() {
  const c = C.solution;
  return (
    <Section
      id="solution"
      label="The solution"
      title={c.title}
      lead={c.lead}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Reveal>
          <PlaceholderImg label={c.shots[0]} tone="paper" height={520} radius={20} fontFamily={T.sans} />
        </Reveal>
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <Reveal delay={80}>
            <PlaceholderImg label={c.shots[1]} tone="paper" height={360} radius={16} fontFamily={T.sans} />
          </Reveal>
          <Reveal delay={160}>
            <PlaceholderImg label={c.shots[2]} tone="paper" height={360} radius={16} fontFamily={T.sans} />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function Outcomes() {
  const c = C.outcomes;
  return (
    <Section
      id="outcomes"
      label="Outcomes"
      title={c.title}
      lead={c.lead}
      bg={T.ink}
    >
      <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {c.stats.map((s, i) => (
          <Reveal key={i} delay={i * 80}>
            <div style={{
              background: 'rgba(245,245,240,0.04)',
              border: '1px solid rgba(245,245,240,0.12)',
              borderRadius: 16, padding: 28,
              height: '100%',
            }}>
              <div style={{ fontFamily: T.sans, fontWeight: 600, fontSize: 56, color: T.accent, letterSpacing: '-0.035em', lineHeight: 1, marginBottom: 16 }}>
                {s.v}
              </div>
              <div style={{ fontFamily: T.sans, fontWeight: 500, fontSize: 15, color: T.footerInk, marginBottom: 6 }}>
                {s.l}
              </div>
              <div style={{ fontFamily: T.sans, fontSize: 13, color: 'rgba(245,245,240,0.55)' }}>
                {s.sub}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// Override Section's text colors when used on dark bg — done above with inline override.
// Patch Outcomes section title color: render manually.

function Reflection() {
  const c = C.reflection;
  return (
    <Section
      id="reflection"
      label="Reflection"
      title={c.title}
    >
      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {c.items.map(([title, body], i) => (
          <Reveal key={i} delay={i * 80}>
            <div style={{
              borderTop: `2px solid ${T.ink}`,
              paddingTop: 20,
              height: '100%',
            }}>
              <Label style={{ display: 'block', marginBottom: 12 }}>{title}</Label>
              <p style={{ fontFamily: T.sans, fontSize: 16, lineHeight: 1.6, color: T.ink2, margin: 0 }}>
                {body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function NextCase() {
  const idx = PROJECTS.findIndex(p => p.slug === CURRENT_SLUG);
  const prev = idx > 0 ? PROJECTS[idx - 1] : null;
  const next = idx >= 0 && idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null;
  const cell = (p, dir) => {
    const isNext = dir === 'next';
    const soon = p && p.comingSoon;
    const href = p && !soon ? (p.slug || 'index.html#work') : (p ? null : 'index.html#work');
    const eyebrow = isNext ? 'Next' : 'Previous';
    const title = p ? p.name : 'All work';
    const sub = p ? (soon ? 'Coming soon' : p.tag) : 'Back to the index';
    const inner = (
      <>
        <span style={{
          fontFamily: T.sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: T.muted,
          display: 'inline-flex', alignItems: 'center', gap: 8,
        }}>
          {!isNext && <span style={{ color: T.accent }}>←</span>}
          {eyebrow}
          {isNext && <span style={{ color: T.accent }}>→</span>}
        </span>
        <span className="section-h2" style={{
          fontFamily: T.sans, fontWeight: 500, fontSize: p && !soon ? 44 : 32, lineHeight: 1.02,
          letterSpacing: '-0.03em', color: 'inherit',
        }}>
          {title}
        </span>
        <span style={{ fontFamily: T.sans, fontSize: 15, color: T.muted }}>{sub}</span>
      </>
    );
    const baseStyle = {
      flex: '1 1 320px',
      display: 'flex', flexDirection: 'column', gap: 10,
      textDecoration: 'none', color: p && !soon ? T.ink : T.muted,
      padding: '32px 0',
      alignItems: isNext ? 'flex-end' : 'flex-start',
      textAlign: isNext ? 'right' : 'left',
    };
    return href
      ? <a href={href} style={baseStyle}>{inner}</a>
      : <div style={{ ...baseStyle, cursor: 'default' }}>{inner}</div>;
  };
  return (
    <section style={{ padding: '40px 32px', borderTop: `1px solid ${T.rule}` }}>
      <div className="page" style={{
        display: 'flex', flexWrap: 'wrap', gap: 24,
        justifyContent: 'space-between',
      }}>
        <Reveal>{cell(prev, 'prev')}</Reveal>
        <div style={{ width: 1, background: T.rule, alignSelf: 'stretch' }} className="responsive-hide" />
        <Reveal delay={80}>{cell(next, 'next')}</Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: T.footerBg, color: T.footerInk, padding: '64px 32px 40px', fontFamily: T.sans }}>
      <div className="page">
        <Reveal delay={100}>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, borderTop: '1px solid rgba(245,245,240,0.2)', paddingTop: 28 }}>
            <div>
              <Label color="rgba(245,245,240,0.5)" style={{ display: 'block', marginBottom: 8 }}>Email</Label>
              <a href={`mailto:${CONTACT.email}`} style={{ color: T.accent, textDecoration: 'none', fontSize: 17, fontWeight: 500 }}>{CONTACT.email}</a>
            </div>
            <div>
              <Label color="rgba(245,245,240,0.5)" style={{ display: 'block', marginBottom: 8 }}>LinkedIn</Label>
              <a href={CONTACT.linkedinUrl} target="_blank" rel="noreferrer" style={{ color: T.accent, textDecoration: 'none', fontSize: 17, fontWeight: 500 }}>{CONTACT.linkedin}</a>
            </div>
            <div>
              <Label color="rgba(245,245,240,0.5)" style={{ display: 'block', marginBottom: 8 }}>Work</Label>
              <a href="index.html" style={{ color: T.footerInk, textDecoration: 'none', fontSize: 17, fontWeight: 500 }}>All projects →</a>
            </div>
          </div>
        </Reveal>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 64, paddingTop: 24, borderTop: '1px solid rgba(245,245,240,0.1)', color: 'rgba(245,245,240,0.4)', fontSize: 12.5, flexWrap: 'wrap', gap: 12 }}>
          <span>© Xing Liu, 2026</span>
          <span>Case study · {PROJECT.name}</span>
          <span style={{ color: T.accent }}>● online</span>
        </div>
      </div>
    </footer>
  );
}

function SocialCircle({ href, label, bg, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} style={{
      width: 38, height: 38, borderRadius: '50%',
      background: bg || '#f5f5f0', color: '#0a0a0a',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      textDecoration: 'none', flexShrink: 0,
    }}>
      {children}
    </a>
  );
}

function SiteFooter() {
  return (
    <footer style={{ background: '#0a0a0a', color: '#f5f5f0', padding: '64px 32px', fontFamily: T.sans }}>
      <div className="page" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 40, flexWrap: 'wrap' }}>
        <div>
          <h3 className="section-h2" style={{ fontFamily: T.sans, fontWeight: 500, fontSize: 40, margin: '0 0 28px', letterSpacing: '-0.03em' }}>Contact Xing Liu</h3>
          <a href={`mailto:${CONTACT.email}`} style={{ display: 'block', color: 'rgba(245,245,240,0.85)', textDecoration: 'none', fontSize: 16, marginBottom: 8 }}>{CONTACT.email}</a>
          <a href="tel:+13058781966" style={{ display: 'block', color: 'rgba(245,245,240,0.85)', textDecoration: 'none', fontSize: 16 }}>(305) 878-1966</a>
        </div>
        <div>
          <h3 className="section-h2" style={{ fontFamily: T.sans, fontWeight: 500, fontSize: 40, margin: '0 0 28px', letterSpacing: '-0.03em' }}>let's work together</h3>
          <div style={{ display: 'flex', gap: 10 }}>
            <SocialCircle href={CONTACT.linkedinUrl} label="LinkedIn">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1 4.98 2.1 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.3-2.6 4.7-2.6 5 0 6 3.3 6 7.6V24h-5v-7.2c0-1.7 0-4-2.4-4s-2.8 1.9-2.8 3.8V24h-5V8z"/></svg>
            </SocialCircle>
            <SocialCircle href="https://github.com/" label="GitHub">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 5 18 5.3 18 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>
            </SocialCircle>
            <SocialCircle href={`mailto:${CONTACT.email}`} label="Email">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></svg>
            </SocialCircle>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Outcomes uses a dark background; the shared Section component renders title in
// dark ink. Override by re-rendering Outcomes header inline above.
// Easier: wrap Section with style overrides via a CSS rule.
const darkSectionCSS = `
  #outcomes h2, #outcomes p { color: #f0efe9; }
  #outcomes p { color: rgba(240,239,233,0.7); }
`;

function App() {
  return (
    <>
      <style>{darkSectionCSS}</style>
      <Nav />
      <Hero />
      <HeroImage />
      <MetaBar />
      <Problem />
      <Research />
      <Pullquote />
      <Approach />
      <Exploration />
      <Solution />
      <Outcomes />
      <Reflection />
      <NextCase />
      <SiteFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
