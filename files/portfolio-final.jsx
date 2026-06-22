// Portfolio — production build.
// Single-page site with smooth-scroll nav, scroll-spy active state,
// reveal-on-scroll, hover micro-interactions, and a Tweaks panel
// (accent color, font, dark mode).

const { useEffect, useState, useRef, useMemo } = React;

// ─── Tweakable defaults — host can persist these ───
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#4caf50",
  "font": "DM Sans",
  "dark": false,
  "showGrid": true
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = [
  '#4caf50', // signal green (default)
  '#e85a3a', // signal orange
  '#3b82f6', // signal blue
  '#a855f7', // signal violet
];

const FONT_OPTIONS = ['DM Sans', 'Plus Jakarta Sans', 'Manrope'];

// ─── Theme tokens, computed from tweaks ───
function useTheme(t) {
  return useMemo(() => {
    const dark = !!t.dark;
    return {
      bg:    dark ? '#0c0d0a' : '#f7f6f3',
      paper: dark ? '#15171a' : '#ffffff',
      panel: dark ? '#1a1d18' : '#eef0eb',
      panel2:dark ? '#1c1b18' : '#f0eee9',
      ink:   dark ? '#f0efe9' : '#0a0a0a',
      ink2:  dark ? '#cfcec6' : '#2a2a2a',
      muted: dark ? '#8b8a82' : '#6b6b6b',
      rule:  dark ? 'rgba(240,239,233,0.12)' : 'rgba(10,10,10,0.12)',
      ruleSoft: dark ? 'rgba(240,239,233,0.06)' : 'rgba(10,10,10,0.06)',
      footerBg: dark ? '#050605' : '#0a0a0a',
      footerInk: '#f5f5f0',
      accent: t.accent,
      sans: `"${t.font}", -apple-system, system-ui, sans-serif`,
      dark,
    };
  }, [t]);
}

// ─── Small helpers ───
function Label({ T, children, style }) {
  return (
    <span style={{
      fontFamily: T.sans,
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: T.muted,
      ...style,
    }}>{children}</span>
  );
}

// ─── Hooks ───
function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids.join(',')]);
  return active;
}

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

// ─── Components ───
function Nav({ T, active }) {
  const links = [
    ['work', 'Work', 'index.html'],
    ['about', 'About', 'about.html'],
    ['process', 'Process', 'process.html'],
    ['resume', 'Resume', 'resume.html'],
  ];
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: T.bg + 'ee',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${T.rule}`,
      fontFamily: T.sans, fontSize: 14, color: T.ink,
    }}>
      <div className="page-container" style={{ display: 'flex', alignItems: 'center', padding: '0 32px', height: 64 }}>
        <a href="index.html" style={{
          display: 'flex', alignItems: 'center', gap: 10,
          textDecoration: 'none', color: 'inherit',
        }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: T.accent, display: 'inline-block' }} />
          <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: '-0.01em' }}>Xing Liu <span style={{ color: T.muted, fontWeight: 500 }}>— Senior Product Designer</span></span>
        </a>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 4 }}>
          {links.map(([id, label, href]) => (
            <a key={id} href={href} className={`nav-link ${active === id ? 'is-active' : ''}`}
              style={{
                padding: '8px 18px',
                color: active === id ? T.ink : T.muted,
                textDecoration: 'none', cursor: 'pointer',
                fontWeight: 500, fontSize: 14,
                borderRadius: 8,
              }}>
              {label}
            </a>
          ))}
        </div>
        <div className="responsive-hide" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href={CONTACT.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ color: T.ink, display: 'flex' }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1 4.98 2.1 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.3-2.6 4.7-2.6 5 0 6 3.3 6 7.6V24h-5v-7.2c0-1.7 0-4-2.4-4s-2.8 1.9-2.8 3.8V24h-5V8z"/></svg>
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" style={{ color: T.ink, display: 'flex' }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 5 18 5.3 18 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>
          </a>
          <a href={`mailto:${CONTACT.email}`} aria-label="Email" style={{ color: T.ink, display: 'flex' }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function GridLines({ T, cols = 12 }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`,
    }}>
      {Array.from({ length: cols + 1 }).map((_, i) => (
        <div key={i} style={{
          gridColumn: `${Math.min(i + 1, cols)}`,
          borderLeft: i < cols ? `1px dashed ${T.ruleSoft}` : 'none',
          borderRight: i === cols ? `1px dashed ${T.ruleSoft}` : 'none',
        }} />
      ))}
    </div>
  );
}

function Hero({ T, tweaks }) {
  return (
    <section id="top" style={{ position: 'relative', padding: '80px 32px 120px', borderBottom: `1px solid ${T.rule}` }}>
      {tweaks.showGrid && <GridLines T={T} />}
      <div className="page-container">
        <div className="responsive-hero" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <Reveal>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '6px 14px',
                background: T.paper,
                border: `1px solid ${T.rule}`,
                borderRadius: 999,
                fontFamily: T.sans, fontSize: 13, color: T.ink2,
                marginBottom: 36,
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: T.accent }} />
                Senior Product Designer + Builder · NYC
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="hero-h1" style={{
                fontFamily: T.sans, fontWeight: 500,
                fontSize: 104, lineHeight: 0.98,
                letterSpacing: '-0.04em', color: T.ink,
                margin: '0 0 24px',
              }}>
                Xing Liu.<br/>
                <span style={{ color: T.muted }}>I design the surface</span><br/>
                <span>and build it too<span style={{ color: T.accent }}>.</span></span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, maxWidth: 820, marginTop: 48 }}>
                <p style={{ fontFamily: T.sans, fontSize: 16, lineHeight: 1.6, color: T.ink2, margin: 0 }}>
                  Eight years of product design across <strong>fintech</strong>, <strong>infrastructure</strong>, and <strong>data tools</strong>. I gravitate to complex, ambient products — the kind people use for hours.
                </p>
                <p style={{ fontFamily: T.sans, fontSize: 16, lineHeight: 1.6, color: T.ink2, margin: 0 }}>
                  I prototype in code as often as Figma. Real keyboards, real data, real latency — that's where the design hides.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work({ T }) {
  return (
    <section id="work" style={{ padding: '96px 32px 56px' }}>
      <div className="page-container">
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: `1px solid ${T.ink}`, paddingBottom: 20, marginBottom: 40 }}>
            <h2 className="section-h2" style={{ fontFamily: T.sans, fontWeight: 500, fontSize: 56, margin: 0, color: T.ink, letterSpacing: '-0.03em' }}>
              Selected work
            </h2>
            <div style={{ fontFamily: T.sans, fontSize: 13, color: T.muted, display: 'flex', gap: 24 }}>
              <span>4 projects</span><span>2022 — 2025</span>
            </div>
          </div>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.code} delay={i * 60}>
              <WorkCard T={T} project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ T, project, index }) {
  const isWide = index === 0 || index === 3;
  const bgs = [T.paper, T.panel, T.paper, T.panel2];
  const bg = bgs[index];
  return (
    <article className="work-card responsive-grid" style={{
      background: bg,
      borderRadius: 20,
      padding: 32,
      display: 'grid',
      gridTemplateColumns: isWide ? '1fr 1.2fr' : '1.2fr 1fr',
      gap: 32,
      alignItems: 'stretch',
      border: `1px solid ${T.rule}`,
    }}>
      {isWide ? (
        <>
          <WorkBody T={T} project={project} />
          <PlaceholderImg label={`${project.name} · ${project.tag}`} tone={T.dark ? 'ink' : 'paper'} height={380} radius={14} fontFamily={T.sans} />
        </>
      ) : (
        <>
          <PlaceholderImg label={`${project.name} · ${project.tag}`} tone={T.dark ? 'ink' : 'paper'} height={380} radius={14} fontFamily={T.sans} />
          <WorkBody T={T} project={project} />
        </>
      )}
    </article>
  );
}

function WorkBody({ T, project }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '8px 8px 8px 16px' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
          <span style={{
            padding: '4px 10px', background: T.ink, color: T.bg,
            fontFamily: T.sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.04em',
            borderRadius: 999,
          }}>№ {project.code}</span>
          <Label T={T}>{project.year}</Label>
          <span style={{ color: T.muted, fontSize: 11 }}>•</span>
          <Label T={T}>{project.org}</Label>
        </div>
        <h3 style={{ fontFamily: T.sans, fontWeight: 600, fontSize: 56, lineHeight: 0.98, margin: '0 0 8px', color: T.ink, letterSpacing: '-0.035em' }}>
          {project.name}
        </h3>
        <div style={{ fontFamily: T.sans, fontWeight: 500, fontSize: 18, color: T.accent, marginBottom: 24, fontStyle: 'italic' }}>
          {project.tag}
        </div>
        <p style={{ fontFamily: T.sans, fontSize: 16, lineHeight: 1.6, color: T.ink2, margin: '0 0 24px' }}>
          {project.blurb}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.tags.map(t => (
            <span key={t} style={{
              fontFamily: T.sans, fontSize: 12.5, color: T.ink2, fontWeight: 500,
              padding: '5px 12px',
              background: T.dark ? 'rgba(240,239,233,0.06)' : 'rgba(255,255,255,0.7)',
              border: `1px solid ${T.rule}`,
              borderRadius: 999,
            }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 32, paddingTop: 24, borderTop: `1px solid ${T.rule}`, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <Label T={T} style={{ marginBottom: 4, display: 'block' }}>Outcome</Label>
          <div style={{ fontFamily: T.sans, fontWeight: 600, fontSize: 20, color: T.ink, letterSpacing: '-0.01em' }}>{project.metric}</div>
        </div>
        {project.comingSoon ? (
          <span style={{
            background: 'transparent', color: T.muted, border: `1px solid ${T.rule}`,
            padding: '12px 20px',
            fontFamily: T.sans, fontSize: 14, fontWeight: 500,
            display: 'flex', alignItems: 'center', gap: 10,
            borderRadius: 999, cursor: 'default',
          }}>
            Coming soon
          </span>
        ) : (
          <a className="read-btn" href={project.slug || 'compass.html'} style={{
            background: T.ink, color: T.bg, border: 'none',
            padding: '12px 20px',
            fontFamily: T.sans, fontSize: 14, fontWeight: 500,
            display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer',
            borderRadius: 999, textDecoration: 'none',
          }}>
            Read case study
            <span style={{ fontSize: 15 }}>→</span>
          </a>
        )}
      </div>
    </div>
  );
}

function About({ T }) {
  return (
    <section id="about" style={{ padding: '64px 32px 96px' }}>
      <div className="page-container">
        <Label T={T} style={{ display: 'block', marginBottom: 32 }}>About</Label>
        <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 80, alignItems: 'start' }}>
          <Reveal>
            <div>
              <h2 className="section-h2" style={{ fontFamily: T.sans, fontWeight: 500, fontSize: 64, lineHeight: 1.04, margin: '0 0 32px', color: T.ink, letterSpacing: '-0.035em' }}>
                Half designer,<br/>half engineer<span style={{ color: T.accent }}>,</span><br/>
                <span style={{ color: T.muted }}>full collaborator.</span>
              </h2>
              <p style={{ fontFamily: T.sans, fontSize: 18, lineHeight: 1.55, color: T.ink2, margin: '0 0 24px', maxWidth: 620 }}>
                {ABOUT.bio}
              </p>
              <p style={{ fontFamily: T.sans, fontSize: 16, lineHeight: 1.6, color: T.muted, margin: 0, maxWidth: 620 }}>
                {ABOUT.current}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              {ABOUT.skills.map((g, i) => (
                <div key={g.g} style={{ borderTop: `1px solid ${T.rule}`, padding: '20px 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
                    <span style={{ fontFamily: T.sans, fontWeight: 600, fontSize: 15, color: T.ink, letterSpacing: '-0.005em' }}>
                      {g.g}
                    </span>
                    <span style={{ fontFamily: T.sans, fontSize: 13, color: T.muted }}>{g.items.length} skills</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {g.items.map(it => (
                      <span key={it} style={{
                        fontFamily: T.sans, fontSize: 12.5, color: T.ink2, fontWeight: 500,
                        padding: '5px 11px', background: T.paper,
                        border: `1px solid ${T.ruleSoft}`,
                        borderRadius: 999,
                      }}>{it}</span>
                    ))}
                  </div>
                </div>
              ))}
              <div style={{ borderTop: `1px solid ${T.rule}` }} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Process({ T }) {
  return (
    <section id="process" style={{ padding: '96px 32px' }}>
      <div className="page-container">
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: `1px solid ${T.ink}`, paddingBottom: 20, marginBottom: 48 }}>
            <h2 className="section-h2" style={{ fontFamily: T.sans, fontWeight: 500, fontSize: 56, margin: 0, color: T.ink, letterSpacing: '-0.03em' }}>
              How I work
            </h2>
            <span style={{ fontFamily: T.sans, fontSize: 13, color: T.muted }}>A loose loop, not a waterfall</span>
          </div>
        </Reveal>
        <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <div style={{
                padding: '32px 28px 36px',
                borderRight: i < 3 ? `1px solid ${T.rule}` : 'none',
                height: '100%',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: i === 0 ? T.accent : 'transparent',
                  border: `1px solid ${i === 0 ? T.accent : T.rule}`,
                  color: i === 0 ? T.bg : T.ink,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: T.sans, fontWeight: 600, fontSize: 14,
                  marginBottom: 20,
                }}>
                  {p.n}
                </div>
                <h4 style={{ fontFamily: T.sans, fontWeight: 600, fontSize: 22, lineHeight: 1.2, margin: '0 0 14px', color: T.ink, letterSpacing: '-0.015em' }}>
                  {p.t}
                </h4>
                <p style={{ fontFamily: T.sans, fontSize: 14.5, lineHeight: 1.6, color: T.muted, margin: 0 }}>
                  {p.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resume({ T }) {
  return (
    <section id="resume" style={{ padding: '64px 32px 96px' }}>
      <div className="page-container">
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', borderBottom: `1px solid ${T.ink}`, paddingBottom: 24, marginBottom: 12, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <h2 className="section-h2" style={{ fontFamily: T.sans, fontWeight: 500, fontSize: 56, margin: '0 0 10px', color: T.ink, letterSpacing: '-0.03em' }}>
                Xing Liu <span style={{ color: T.muted }}>— Senior Product Designer</span>
              </h2>
              <div style={{ fontFamily: T.sans, fontSize: 16, color: T.muted }}>
                Designer + Builder · New York, NY
              </div>
            </div>
            <button onClick={() => window.print()} className="read-btn" style={{
              background: T.ink, color: T.bg, border: 'none',
              padding: '12px 20px',
              fontFamily: T.sans, fontSize: 14, fontWeight: 500,
              display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer',
              borderRadius: 999,
            }}>
              Download PDF <span style={{ fontSize: 15 }}>↓</span>
            </button>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <p style={{ fontFamily: T.sans, fontSize: 17, lineHeight: 1.6, color: T.ink2, margin: '0 0 56px', maxWidth: 760 }}>
            {RESUME.summary}
          </p>
        </Reveal>

        <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 72, alignItems: 'start' }}>
          {/* Experience */}
          <div>
            <Label T={T} style={{ display: 'block', marginBottom: 28 }}>Experience</Label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {RESUME.experience.map((e, i) => (
                <Reveal key={e.org} delay={i * 60}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 10, padding: '24px 0', borderTop: `1px solid ${T.rule}` }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                      <h3 style={{ fontFamily: T.sans, fontWeight: 600, fontSize: 22, margin: 0, color: T.ink, letterSpacing: '-0.015em' }}>{e.role}</h3>
                      <span style={{ fontFamily: T.sans, fontSize: 13, color: T.muted, whiteSpace: 'nowrap' }}>{e.period}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: T.sans, fontSize: 15, color: T.accent, fontWeight: 500 }}>
                      {e.org}
                      <span style={{ color: T.muted, fontWeight: 400, fontSize: 13 }}>· {e.loc}</span>
                    </div>
                    <ul style={{ margin: '6px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {e.points.map((pt, k) => (
                        <li key={k} style={{ display: 'flex', gap: 12, fontFamily: T.sans, fontSize: 15, lineHeight: 1.55, color: T.ink2 }}>
                          <span style={{ color: T.accent, flexShrink: 0 }}>—</span>
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
              <div>
                <Label T={T} style={{ display: 'block', marginBottom: 18 }}>Skills</Label>
                {ABOUT.skills.map((g) => (
                  <div key={g.g} style={{ marginBottom: 18 }}>
                    <div style={{ fontFamily: T.sans, fontWeight: 600, fontSize: 14, color: T.ink, marginBottom: 8 }}>{g.g}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {g.items.map(it => (
                        <span key={it} style={{
                          fontFamily: T.sans, fontSize: 12.5, color: T.ink2, fontWeight: 500,
                          padding: '5px 11px', background: T.paper,
                          border: `1px solid ${T.ruleSoft}`, borderRadius: 999,
                        }}>{it}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <Label T={T} style={{ display: 'block', marginBottom: 18 }}>Education</Label>
                {RESUME.education.map((ed) => (
                  <div key={ed.school} style={{ borderTop: `1px solid ${T.rule}`, paddingTop: 14 }}>
                    <div style={{ fontFamily: T.sans, fontWeight: 600, fontSize: 15, color: T.ink }}>{ed.school}</div>
                    <div style={{ fontFamily: T.sans, fontSize: 14, color: T.ink2, margin: '4px 0' }}>{ed.detail}</div>
                    <div style={{ fontFamily: T.sans, fontSize: 13, color: T.muted }}>{ed.period}</div>
                  </div>
                ))}
              </div>
              <div>
                <Label T={T} style={{ display: 'block', marginBottom: 18 }}>Recognition</Label>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {RESUME.recognition.map((r, i) => (
                    <li key={i} style={{ fontFamily: T.sans, fontSize: 14, lineHeight: 1.5, color: T.ink2, borderTop: `1px solid ${T.rule}`, paddingTop: 12 }}>{r}</li>
                  ))}
                </ul>
              </div>
              <div>
                <Label T={T} style={{ display: 'block', marginBottom: 18 }}>Contact</Label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <a href={`mailto:${CONTACT.email}`} style={{ fontFamily: T.sans, fontSize: 14, color: T.accent, textDecoration: 'none', fontWeight: 500 }}>{CONTACT.email}</a>
                  <a href={CONTACT.linkedinUrl} target="_blank" rel="noreferrer" style={{ fontFamily: T.sans, fontSize: 14, color: T.accent, textDecoration: 'none', fontWeight: 500 }}>{CONTACT.linkedin}</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
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

function SiteFooter({ T }) {
  return (
    <footer style={{ background: '#0a0a0a', color: '#f5f5f0', padding: '64px 32px', fontFamily: T.sans }}>
      <div className="page-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 40, flexWrap: 'wrap' }}>
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

function Contact({ T }) {
  return (
    <footer id="contact" style={{ background: T.footerBg, color: T.footerInk, padding: '120px 32px 40px', fontFamily: T.sans }}>
      <div className="page-container">
        <Reveal>
          <Label T={T} style={{ color: 'rgba(245,245,240,0.5)', display: 'block', marginBottom: 32 }}>Get in touch</Label>
          <h2 className="section-h2" style={{ fontFamily: T.sans, fontWeight: 500, fontSize: 112, lineHeight: 0.95, margin: '0 0 64px', letterSpacing: '-0.04em' }}>
            Let's make<br/>
            <span style={{ color: T.accent }}>something good.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, borderTop: '1px solid rgba(245,245,240,0.2)', paddingTop: 32 }}>
            <div>
              <div style={{ color: 'rgba(245,245,240,0.5)', marginBottom: 8, fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Email</div>
              <a href={`mailto:${CONTACT.email}`} style={{ color: T.accent, textDecoration: 'none', fontSize: 18, fontWeight: 500 }}>{CONTACT.email}</a>
            </div>
            <div>
              <div style={{ color: 'rgba(245,245,240,0.5)', marginBottom: 8, fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}>LinkedIn</div>
              <a href={CONTACT.linkedinUrl} target="_blank" rel="noreferrer" style={{ color: T.accent, textDecoration: 'none', fontSize: 18, fontWeight: 500 }}>{CONTACT.linkedin}</a>
            </div>
            <div>
              <div style={{ color: 'rgba(245,245,240,0.5)', marginBottom: 8, fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Status</div>
              <span style={{ color: T.footerInk, fontSize: 18, fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: T.accent }}>●</span> Open · senior IC roles
              </span>
            </div>
          </div>
        </Reveal>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 96, paddingTop: 28, borderTop: '1px solid rgba(245,245,240,0.1)', color: 'rgba(245,245,240,0.4)', fontSize: 12.5, flexWrap: 'wrap', gap: 12 }}>
          <span>© Xing Liu, 2026</span>
          <span>Designed + built by Xing</span>
          <span style={{ color: T.accent }}>● online</span>
        </div>
      </div>
    </footer>
  );
}

// ─── App ───
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const T = useTheme(tweaks);
  const page = (typeof window !== 'undefined' && window.PAGE) || 'work';

  useEffect(() => {
    document.documentElement.style.setProperty('--bg', T.bg);
    document.documentElement.style.setProperty('--ink', T.ink);
    document.documentElement.style.setProperty('--accent', T.accent);
    document.body.style.background = T.bg;
    document.body.style.color = T.ink;
    document.body.style.fontFamily = T.sans;
    document.documentElement.style.colorScheme = tweaks.dark ? 'dark' : 'light';
  }, [T, tweaks.dark]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Nav T={T} active={page} />
        <main style={{ flex: '1 0 auto' }}>
          {page === 'work' && (
            <>
              <Hero T={T} tweaks={tweaks} />
              <Work T={T} />
            </>
          )}
          {page === 'about' && <About T={T} />}
          {page === 'process' && <Process T={T} />}
          {page === 'resume' && <Resume T={T} />}
        </main>
        <SiteFooter T={T} />
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Brand">
          <TweakColor label="Accent" value={tweaks.accent} options={ACCENT_OPTIONS}
            onChange={(v) => setTweak('accent', v)} />
          <TweakRadio label="Theme" value={tweaks.dark ? 'dark' : 'light'}
            options={[{ label: 'Light', value: 'light' }, { label: 'Dark', value: 'dark' }]}
            onChange={(v) => setTweak('dark', v === 'dark')} />
        </TweakSection>
        <TweakSection label="Type">
          <TweakSelect label="Body font" value={tweaks.font}
            options={FONT_OPTIONS.map(f => ({ label: f, value: f }))}
            onChange={(v) => setTweak('font', v)} />
        </TweakSection>
        <TweakSection label="Layout">
          <TweakToggle label="Show hero grid lines" value={tweaks.showGrid}
            onChange={(v) => setTweak('showGrid', v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
