export const PROCESS = [
  {
    n: '01',
    t: 'Frame the right problem',
    d: 'Talk to people who feel it. Read the support tickets. Find the question worth answering before reaching for a screen.',
  },
  {
    n: '02',
    t: 'Sketch the system, not the screen',
    d: 'Map flows, states, and edge cases on paper first. The interface is the last 20% — the model is the first 80%.',
  },
  {
    n: '03',
    t: 'Build to learn',
    d: 'I prototype in code as often as Figma. Real keyboards, real data, real latency surface what static mocks miss.',
  },
  {
    n: '04',
    t: 'Ship, watch, sharpen',
    d: "Instrument early, talk to users weekly, cut what doesn't earn its place. A small, sharp thing beats a sprawling one.",
  },
]

export const ABOUT = {
  bio: "I'm a senior product designer with eight years across fintech, infra, and data tools. I design and build — most weeks involve both Figma and a code editor. I care most about complex, ambient products that people use for hours: the kind where small frictions compound, and small clarities do too.",
  current: 'Currently exploring my next role — open to anything where craft matters and the problem is honestly interesting.',
  skills: [
    {
      g: 'Design',
      items: ['Product strategy', 'Interaction', 'Information architecture', 'Data visualization', 'Design systems'],
    },
    {
      g: 'Build',
      items: ['React + TypeScript', 'Tailwind / styled', 'Figma plugins', 'D3 / Observable Plot', 'Prototyping'],
    },
    {
      g: 'Working with',
      items: ['PMs & eng leads', 'Cross-functional research', 'Mentorship', 'Design ops'],
    },
  ],
}

export const CONTACT = {
  email: 'xing.catherine.liu@gmail.com',
  phone: '(305) 878-1966',
  phoneTel: 'tel:+13058781966',
  linkedin: 'linkedin.com/in/xingcatherineliu',
  linkedinUrl: 'https://www.linkedin.com/in/xingcatherineliu/',
  github: 'https://github.com/',
}

export const RESUME = {
  summary:
    'Senior product designer + builder with eight years across fintech, infrastructure, and data tools. I design and ship — equally at home in Figma and a code editor — and gravitate to complex, ambient products people live in for hours.',
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
}
