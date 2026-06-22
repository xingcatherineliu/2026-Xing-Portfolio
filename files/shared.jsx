// Shared content + helpers across all three portfolio directions.
// Same case studies, same bio — only the design changes.

const PROJECTS = [
  {
    code: '01',
    name: 'Compass',
    tag: 'Analytics platform',
    role: 'Lead Designer',
    year: '2024',
    org: 'Series-B SaaS',
    slug: 'compass.html',
    blurb: 'Rebuilt a sprawling analytics product around a single configurable canvas. Cut time-to-first-insight from 14 minutes to 38 seconds.',
    metric: '−96% time to insight',
    tags: ['Product strategy', 'IA', 'Data viz'],
  },
  {
    code: '02',
    name: 'Pulse',
    tag: 'Realtime alerting',
    role: 'Senior Designer',
    year: '2023',
    org: 'Infra startup',
    slug: 'pulse.html',
    blurb: 'A monitoring console for on-call engineers. Designed the alert grammar, escalation flows, and a calm dark theme for 2am.',
    metric: '4.7★ in-app',
    tags: ['Workflow', 'Dark UI', 'Notifications'],
  },
  {
    code: '03',
    name: 'Atlas',
    tag: 'Design system + tooling',
    role: 'Systems Designer',
    year: '2022',
    org: 'Public fintech',
    comingSoon: true,
    blurb: 'Shipped a 240-component library, a token pipeline, and three Figma plugins. Adopted by 60+ designers across nine product surfaces.',
    metric: '60+ designers',
    tags: ['Tokens', 'Figma plugin', 'Governance'],
  },
  {
    code: '04',
    name: 'Field',
    tag: 'AI-assisted exploration',
    role: 'Designer + Builder',
    year: '2025',
    org: 'R&D prototype',
    comingSoon: true,
    blurb: 'A spatial canvas for poking at large datasets in plain English. Prototyped end-to-end with React + DuckDB-WASM; shipped to internal pilots.',
    metric: 'shipped to pilot',
    tags: ['Prototyping', 'LLM UX', 'React'],
  },
];

const PROCESS = [
  { n: '01', t: 'Frame the right problem', d: 'Talk to people who feel it. Read the support tickets. Find the question worth answering before reaching for a screen.' },
  { n: '02', t: 'Sketch the system, not the screen', d: 'Map flows, states, and edge cases on paper first. The interface is the last 20% — the model is the first 80%.' },
  { n: '03', t: 'Build to learn', d: 'I prototype in code as often as Figma. Real keyboards, real data, real latency surface what static mocks miss.' },
  { n: '04', t: 'Ship, watch, sharpen', d: 'Instrument early, talk to users weekly, cut what doesn\'t earn its place. A small, sharp thing beats a sprawling one.' },
];

const ABOUT = {
  bio: 'I\'m a senior product designer with eight years across fintech, infra, and data tools. I design and build — most weeks involve both Figma and a code editor. I care most about complex, ambient products that people use for hours: the kind where small frictions compound, and small clarities do too.',
  current: 'Currently exploring my next role — open to anything where craft matters and the problem is honestly interesting.',
  skills: [
    { g: 'Design', items: ['Product strategy', 'Interaction', 'Information architecture', 'Data visualization', 'Design systems'] },
    { g: 'Build', items: ['React + TypeScript', 'Tailwind / styled', 'Figma plugins', 'D3 / Observable Plot', 'Prototyping'] },
    { g: 'Working with', items: ['PMs & eng leads', 'Cross-functional research', 'Mentorship', 'Design ops'] },
  ],
};

const CONTACT = {
  email: 'xing.catherine.liu@gmail.com',
  linkedin: 'linkedin.com/in/xingcatherineliu',
  linkedinUrl: 'https://www.linkedin.com/in/xingcatherineliu/',
};

const RESUME = {
  summary: 'Senior product designer + builder with eight years across fintech, infrastructure, and data tools. I design and ship — equally at home in Figma and a code editor — and gravitate to complex, ambient products people live in for hours.',
  experience: [
    {
      role: 'Lead Product Designer',
      org: 'Series-B SaaS · Compass',
      period: '2023 — Present',
      loc: 'New York, NY',
      points: [
        'Rebuilt a sprawling analytics product around a single configurable canvas, cutting time-to-first-insight from 14 minutes to 38 seconds.',
        'Set product direction with the founder and led design for a team of three across IA, data viz, and onboarding.',
      ],
    },
    {
      role: 'Senior Product Designer',
      org: 'Infra startup · Pulse',
      period: '2021 — 2023',
      loc: 'Remote',
      points: [
        'Designed a realtime alerting console for on-call engineers — alert grammar, escalation flows, and a calm dark theme for 2am.',
        'Shipped to a 4.7★ in-app rating; partnered closely with platform eng on latency and live data.',
      ],
    },
    {
      role: 'Systems Designer',
      org: 'Public fintech · Atlas',
      period: '2019 — 2021',
      loc: 'New York, NY',
      points: [
        'Built a 240-component library, a token pipeline, and three Figma plugins adopted by 60+ designers across nine surfaces.',
        'Established design-system governance and contribution model still in use today.',
      ],
    },
    {
      role: 'Product Designer',
      org: 'Early-stage startups',
      period: '2017 — 2019',
      loc: 'New York, NY',
      points: [
        'First design hire on two seed-stage teams — research, end-to-end product design, and front-end prototyping in React.',
      ],
    },
  ],
  education: [
    { school: 'Rhode Island School of Design', detail: 'BFA, Graphic Design', period: '2013 — 2017' },
  ],
  recognition: [
    'Speaker, Config 2024 — "Prototyping in code as a design tool"',
    'Mentor, ADPList — 120+ sessions with early-career designers',
  ],
};

window.RESUME = RESUME;

// Generic striped placeholder for project imagery.
// `tone` lets each direction tint to its palette.
function PlaceholderImg({ label = 'project shot', tone = 'neutral', height = 360, radius = 0, fontFamily }) {
  const palettes = {
    cream: { bg: '#ebe4d6', fg: '#3a342a', stripe: 'rgba(58,52,42,0.06)' },
    paper: { bg: '#ececec', fg: '#1a1a1a', stripe: 'rgba(20,20,20,0.05)' },
    bone:  { bg: '#ecdfcc', fg: '#3a2e22', stripe: 'rgba(58,46,34,0.06)' },
    ink:   { bg: '#1f1d1a', fg: '#d6cdb9', stripe: 'rgba(214,205,185,0.05)' },
    neutral: { bg: '#e8e6e1', fg: '#3a3530', stripe: 'rgba(0,0,0,0.05)' },
  };
  const p = palettes[tone] || palettes.neutral;
  const bg = `repeating-linear-gradient(135deg, ${p.bg} 0 14px, ${p.stripe} 14px 15px)`;
  return (
    <div style={{
      width: '100%',
      height,
      background: bg,
      backgroundColor: p.bg,
      borderRadius: radius,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: p.fg,
      fontFamily: fontFamily || 'JetBrains Mono, ui-monospace, monospace',
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <span style={{ background: p.bg, padding: '6px 10px' }}>↳ {label}</span>
    </div>
  );
}

window.PROJECTS = PROJECTS;
window.PROCESS = PROCESS;
window.ABOUT = ABOUT;
window.CONTACT = CONTACT;
window.PlaceholderImg = PlaceholderImg;
