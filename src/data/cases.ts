export interface CaseShot {
  src?: string
  alt?: string
  caption: string
}

export interface CaseStudy {
  project: {
    code: string
    name: string
    tag: string
    year: string
    org: string
    role: string
    timeline: string
    team: string
    hero: string
    metric: string
  }
  problem: {
    title: string
    lead: string
    paras: string[]
    started: string[]
  }
  research: {
    title: string
    lead: string
    insights: { t: string; d: string }[]
  }
  pullquote: { text: string; cite: string }
  approach: {
    title: string
    lead: string
    bets: { n: string; t: string; d: string }[]
  }
  exploration: {
    title: string
    lead: string
    shots: CaseShot[]
    closing: string
  }
  solution: {
    title: string
    lead: string
    shots: CaseShot[]
  }
  outcomes: {
    title: string
    lead: string
    stats: { v: string; l: string; sub: string }[]
  }
  reflection: {
    title: string
    items: [string, string][]
  }
}

export const CASES: Record<string, CaseStudy> = {
  compass: {
    project: {
      code: '01',
      name: 'Compass',
      tag: 'Analytics platform',
      year: '2024',
      org: 'Series-B SaaS',
      role: 'Lead Designer',
      timeline: '6 months',
      team: 'PM, 4 eng, 2 design',
      hero: 'A configurable canvas that replaced 47 screens, 11 settings panels, and an entire onboarding flow.',
      metric: '−96% time to insight',
    },
    problem: {
      title: 'A great product, buried under its own breadth.',
      lead: 'Compass had grown into a 47-screen analytics suite with eleven separate settings panels. Power users had bookmarks; new users had questions. Activation was at 18%, and falling.',
      paras: [
        "The product team had been shipping features for three years. Each new capability got its own page, its own settings, and its own URL. By the time I joined, the IA looked like a strata map: every layer was a quarter's worth of decisions.",
        "Sales demos worked. Trials didn't. We were great at telling people what the product could do, and bad at letting them feel it.",
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
        {
          t: 'Power users were rebuilding the same dashboard, weekly.',
          d: `In 18 sessions across customer types, 14 of them showed me a “starting point” dashboard they'd cloned from a teammate. The product offered breadth; they wanted a sturdy default.`,
        },
        {
          t: 'New users churned before they ever loaded data.',
          d: 'Mixpanel showed a 62% drop-off between signup and the first chart. Our onboarding asked seven questions before showing any value. Every question was a chance to leave.',
        },
        {
          t: 'The "right" chart wasn\'t the bottleneck.',
          d: "Support tickets weren't about wrong visualizations — they were about not knowing where to start. The IA was the problem, not the rendering.",
        },
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
        {
          n: '01',
          t: 'One canvas, many lenses',
          d: "Replace the screen-per-feature model with a single composable canvas. Every analysis is a tile; every tile is a block in a grid the user can rearrange.",
        },
        {
          n: '02',
          t: 'Smart defaults, escapable',
          d: "Pre-fill the canvas based on the user's data shape. Show real charts in 10 seconds. Make every default cheap to change — but cheap to keep.",
        },
        {
          n: '03',
          t: 'Progressive complexity',
          d: 'Hide advanced controls behind a single "Configure" pane. 80% of users never open it. 20% open it constantly — give them keyboard shortcuts.',
        },
      ],
    },
    exploration: {
      title: 'Sketches, dead ends, and the one that worked.',
      lead: 'Four weeks of paper, Figma, and prototypes built in code. We tested three canvas models before the grid emerged as the obvious answer.',
      shots: [
        { caption: 'Concept A · linear feed' },
        { caption: 'Concept B · stack of cards' },
        { caption: 'Concept C · grid canvas ✓' },
      ],
      closing:
        `The grid won because it gave users a sense of place — a thing they could rearrange, name, and recognize a week later. The other two tested as "neat" but didn't survive a Monday.`,
    },
    solution: {
      title: 'One canvas, smart defaults, two keyboard shortcuts.',
      lead: 'The shipped product replaced forty-seven screens with one. Every analysis is a tile; the tile knows what to do with your data; the canvas remembers where you left off.',
      shots: [
        { caption: 'Canvas · default view' },
        { caption: 'Tile configuration pane' },
        { caption: 'Empty state — auto-populated' },
      ],
    },
    outcomes: {
      title: 'Eight weeks after launch.',
      lead: "We measured the things we set out to move — activation, time-to-first-insight, weekly active users — and the things we hadn't thought to measure.",
      stats: [
        { v: '−96%', l: 'time to first insight', sub: '14 min → 38 sec' },
        { v: '3×', l: 'weekly active users', sub: 'within one quarter' },
        { v: '47 → 1', l: 'screens consolidated', sub: 'into a single canvas' },
        { v: '+22 NPS', l: 'point lift in 8 weeks', sub: 'from 14 to 36' },
      ],
    },
    reflection: {
      title: "What I'd carry forward.",
      items: [
        [
          'What worked',
          'Shipping the canvas behind a flag at week six. Real usage data settled five design debates and killed two features we were about to build.',
        ],
        [
          "What I'd redo",
          "I spent too long on the empty state. The right answer was: don't have one. Auto-populate the canvas the second a user connects data.",
        ],
        [
          'What I learned',
          'For data products, the design problem is almost always "where do I start" — not "what does this chart look like." Information architecture is the work.',
        ],
      ],
    },
  },

  pulse: {
    project: {
      code: '02',
      name: 'Pulse',
      tag: 'Realtime alerting',
      year: '2023',
      org: 'Infra startup',
      role: 'Senior Designer',
      timeline: '5 months',
      team: 'PM, 5 eng, 2 design',
      hero: 'An alerting console on-call engineers actually want open at 2am — alert grammar, escalation flows, and a calm dark theme for the worst moment of the night.',
      metric: '4.7★ in-app rating',
    },
    problem: {
      title: 'Alerts that cried wolf, all night long.',
      lead: "Pulse's monitoring fired thousands of alerts a day. Most didn't matter, all looked the same, and the engineers who could tell the difference were burning out.",
      paras: [
        'The platform could detect anything, so it alerted on everything. Each new service added its own thresholds, its own noise, its own 3am pages. By the time I joined, on-call was the most-dreaded rotation in eng.',
        "Leadership saw it as a tooling problem. The engineers knew it was a trust problem: when most pages are noise, you stop reading them — including the one that matters.",
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
      lead: "I shadowed three on-call rotations, read six months of incident retros, and got paged at 2am myself so I'd stop designing for the demo.",
      insights: [
        {
          t: 'Alerts arrived without context.',
          d: 'Engineers got a ping and a cryptic title, then spent the first three minutes just working out what broke and whether it even mattered.',
        },
        {
          t: 'Pager fatigue was a staffing problem.',
          d: 'Two teams told me their best engineers were rotating off on-call because the noise was relentless — roughly 70% of pages were non-actionable.',
        },
        {
          t: 'Severity lived in tribal knowledge.',
          d: "Whether an alert was drop-everything or a tomorrow-problem wasn't in the tool. It was in someone's head, or buried in a Slack thread.",
        },
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
        {
          n: '01',
          t: 'A grammar for alerts',
          d: 'Give every alert the same shape — what, where, how bad, since when. Structure the payload so the console can reason about it, not just display it.',
        },
        {
          n: '02',
          t: 'Group before you page',
          d: 'Roll related alerts into a single incident. Page once, with the whole picture — not forty times for one bad deploy.',
        },
        {
          n: '03',
          t: 'A calm theme for 2am',
          d: "Design for the worst moment, not the demo. Low contrast where it doesn't matter, high where it does, and nothing that screams unless it should.",
        },
      ],
    },
    exploration: {
      title: 'Prototypes, paper, and one very loud dead end.',
      lead: 'Three weeks exploring how an incident should feel. We tried a feed, a kanban, and a timeline before the grouped-incident view won.',
      shots: [
        { caption: 'Concept A · alert feed' },
        { caption: 'Concept B · incident kanban' },
        { caption: 'Concept C · grouped timeline ✓' },
      ],
      closing:
        "The timeline won because it answered the only 2am question that matters: what is happening, and is it getting worse? The feed buried it; the kanban made it a chore.",
    },
    solution: {
      title: 'One incident view, grouped alerts, a calm dark theme.',
      lead: 'The shipped console rolls related alerts into incidents, routes by severity, and stays quiet until something genuinely needs a human awake.',
      shots: [
        { caption: 'Incident · default view' },
        { caption: 'Escalation policy editor' },
        { caption: 'Alert grammar detail' },
      ],
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
      title: "What I'd carry forward.",
      items: [
        [
          'What worked',
          'The alert grammar. Once payloads had structure, grouping, routing, and the 2am view all fell out of the same model almost for free.',
        ],
        [
          "What I'd redo",
          'We shipped escalation policies as a config page. It should have been a visual flow from day one — engineers kept redrawing it on whiteboards.',
        ],
        [
          'What I learned',
          "For on-call tools the design constraint isn't the happy path — it's the half-awake, high-stress one. Design for that and the rest gets easier.",
        ],
      ],
    },
  },

  widgets: {
    project: {
      code: '05',
      name: 'Widget Design System',
      tag: 'Media & Market Components',
      year: '2023',
      org: 'Enterprise platform',
      role: 'Lead Systems Designer',
      timeline: '8 months',
      team: '2 PMs, 8 eng, 3 design',
      hero: 'A unified widget library that gave 40+ product teams a shared vocabulary for displaying market data and media content — built once, deployed everywhere.',
      metric: '40+ teams adopted',
    },
    problem: {
      title: 'Twenty teams. Twenty versions of the same ticker.',
      lead: 'Market data widgets and media content blocks were being built from scratch — repeatedly — across product surfaces. No shared tokens, no shared API, no shared anything.',
      paras: [
        'The platform had grown through acquisition and fast shipping. Every team that needed a price ticker built their own. Every team that needed a news card designed a new one. By 2023, we had 17 price ticker implementations and none of them agreed on what "up" looked like.',
        "The problem wasn't lack of skill — it was lack of infrastructure. Teams couldn't afford to coordinate; they had features to ship. The design debt was invisible until it wasn't: a color-blind audit found three tickers using the same red for both gains and losses.",
      ],
      started: [
        '17 unique price ticker implementations across 9 surfaces',
        'Median time to ship a new widget: 3 weeks per team',
        'Zero shared accessibility baseline across market widgets',
        'Media content unstyled or re-styled by each consuming team',
      ],
    },
    research: {
      title: 'What 12 teams had in common.',
      lead: 'Three weeks of design audits, engineering interviews, and component inventory — mapping every market and media widget across the platform.',
      insights: [
        {
          t: 'The same widget, different everywhere.',
          d: 'An audit of six major surfaces found 23 distinct implementations of components that were conceptually identical — price badges, news headlines, video cards. Every team had quietly reinvented the same wheel, with slightly different visual decisions each time.',
        },
        {
          t: 'Market widgets carried invisible risk.',
          d: 'Price and volume displays had inconsistent handling of edge cases: negative values, zero-volume states, market-close formatting. Some surfaces showed the wrong color for a loss; a few showed the wrong sign entirely.',
        },
        {
          t: 'Media components had no content model.',
          d: 'News cards, article previews, and video thumbnails were assembled differently per surface — different truncation, different metadata, different fallback states. The same article looked like three different products.',
        },
      ],
    },
    pullquote: {
      text: '"We spent two weeks building a news card last quarter. I guarantee another team did the same thing the week before us."',
      cite: 'Staff Engineer · Platform team · audit session 04',
    },
    approach: {
      title: 'Three layers that made adoption work.',
      lead: 'We needed teams to adopt fast. That meant the system had to reduce work, not add it — every abstraction had to pay for itself on day one.',
      bets: [
        {
          n: '01',
          t: 'Shared token layer first',
          d: 'Before components, establish the semantic tokens that market and media widgets share — color meanings (positive/negative/neutral), data density scales, motion curves. Get agreement on these before writing a single component. Naming is the real work.',
        },
        {
          n: '02',
          t: 'Unified widget API',
          d: "Build a component API that works consistently across both families. A price ticker and a news card are different, but their prop contracts should feel the same: data in, display config, event callbacks out. Teams shouldn't have to relearn the pattern.",
        },
        {
          n: '03',
          t: 'Zero-friction handoff',
          d: "Ship Figma components, Storybook documentation, and copy-pasteable code snippets simultaneously. If the handoff isn't zero-friction, teams will keep rolling their own — the system has to be the path of least resistance.",
        },
      ],
    },
    exploration: {
      title: 'Token architecture, component APIs, two widget families.',
      lead: 'Six weeks prototyping the token system and testing the component API with three pilot teams before building the full library.',
      shots: [
        { caption: 'Token architecture · semantic layer' },
        { caption: 'Market widget family · price + volume' },
        { caption: 'Media widget family · news + video ✓' },
      ],
      closing:
        "The token layer unlocked the market widget family fastest — once positive/negative/neutral had semantic names, the tickers fell into place almost automatically. Media took longer: the content model required alignment with editorial teams, not just engineering, and editorial had strong opinions about truncation.",
    },
    solution: {
      title: 'One system. Two families. Zero rebuilds.',
      lead: 'The Widget Design System shipped with 34 components across two families — Market (price tickers, volume bars, watchlists, sparklines) and Media (news cards, article previews, video players, feed layouts) — plus a full token set, Figma library, and Storybook.',
      shots: [
        { caption: 'Market family · full component set' },
        { caption: 'Media family · full component set' },
        { caption: 'Token documentation · Storybook' },
      ],
    },
    outcomes: {
      title: 'One year after launch.',
      lead: "We tracked adoption, build time, and the things that were harder to count — like no longer hearing 'which ticker should I use?' in design review.",
      stats: [
        { v: '40+', l: 'teams adopted', sub: 'within 12 months of launch' },
        { v: '−83%', l: 'widget build time', sub: '3 weeks → 3 days median' },
        { v: '34', l: 'components shipped', sub: 'across 2 widget families' },
        { v: '1', l: 'source of truth', sub: 'replacing 17 ticker variants' },
      ],
    },
    reflection: {
      title: "What I'd carry forward.",
      items: [
        [
          'What worked',
          'The token layer — getting teams to agree on semantic names before touching components meant the API debates were low-stakes. Everyone already shared a vocabulary before we shipped a single component.',
        ],
        [
          "What I'd redo",
          "I underestimated content modeling for media widgets. The engineering API came together quickly; aligning on article metadata fields with editorial took twice as long and nearly blocked the launch.",
        ],
        [
          'What I learned',
          "Design systems ship when they reduce work for the teams adopting them, not when they're complete. Ship the 20% that unlocks 80% of use cases; add the rest in response to real demand — not anticipated need.",
        ],
      ],
    },
  },

  'enterprise-profile': {
    project: {
      code: '06',
      name: 'Enterprise Profile',
      tag: 'Client Portal',
      year: '2022',
      org: 'Enterprise platform',
      role: 'Lead Product Designer',
      timeline: '7 months',
      team: 'PM, 6 eng, 2 design',
      hero: "A self-serve portal giving enterprise clients a single view of their firm's users, entitlements, and platform relationship — replacing a phone call and three internal tools.",
      metric: '−60% admin support tickets',
    },
    problem: {
      title: "Enterprise clients couldn't see their own relationship with the platform.",
      lead: 'To answer "how many licenses does my firm have?" a client admin had to call account management. The information existed — it was just locked in internal tools no client could access.',
      paras: [
        "Enterprise clients range from 10-person funds to 5,000-person asset managers. Every one of them has a firm profile: contract terms, user seats, entitlement packages, usage data. None of them could see it without asking a person.",
        'This created a support bottleneck that scaled badly. As the client base grew, so did the inbox. Account managers were spending the majority of their time on status questions that should have had self-serve answers.',
      ],
      started: [
        '1,200+ admin queries routed to account management per month',
        'Average response time: 1.3 business days for basic entitlement questions',
        'No client-facing view of user seat usage or contract status',
        'Onboarding new firm admins required a dedicated setup call',
      ],
    },
    research: {
      title: 'What admins actually needed to do.',
      lead: 'Twenty interviews with firm admins across client tiers — from a two-person family office to a 3,000-seat global asset manager.',
      insights: [
        {
          t: 'Admins had three recurring jobs.',
          d: 'Across 20 interviews, every admin described the same core needs: see who has access and to what, add or remove users, and understand what the firm is contracted for. Everything else was rare and could wait.',
        },
        {
          t: 'Entitlement complexity was the real pain.',
          d: "Large firms had layered entitlement packages — some users had terminal access, some had API, some had both plus specialist data feeds. Admins couldn't reliably tell you which user had which without calling us.",
        },
        {
          t: "Uncertainty was stalling clients' internal rollouts.",
          d: 'New clients were delaying their own user invitations while waiting to understand their setup. One admin described holding a "welcome to the platform" email for two weeks pending entitlement confirmation.',
        },
      ],
    },
    pullquote: {
      text: '"I manage a 400-seat deployment and I can\'t even see a list of who has access. My IT team asks me; I ask you."',
      cite: 'Head of Market Data · Global asset manager · interview 07',
    },
    approach: {
      title: 'Three capabilities that unlocked the rest.',
      lead: "We had one quarter to ship something clients could use and account management could stop answering questions about. Ruthless prioritization — only what the top-20 admin queries had in common.",
      bets: [
        {
          n: '01',
          t: 'Firm overview as the anchor',
          d: "Start with the question every admin asks first: who are we as a firm on this platform? Contract tier, total seats, active users, key contacts. Make this the landing state — a fact page, not a dashboard.",
        },
        {
          n: '02',
          t: 'User + entitlement roster',
          d: "Give admins a full list of their firm's users with entitlements in plain language — not product codes. Searchable, filterable, exportable. Built to replace the spreadsheet every admin was maintaining manually.",
        },
        {
          n: '03',
          t: 'Self-serve user management',
          d: "Let admins add, remove, and modify users directly. Every action that required a support ticket becomes a self-serve action in the portal. Build the audit trail so admins feel confident doing it themselves.",
        },
      ],
    },
    exploration: {
      title: 'Three portal models, tested with real admins.',
      lead: 'Five weeks testing three navigation architectures with pilot admins. The central debate: how much complexity to surface upfront vs. reveal progressively.',
      shots: [
        { caption: 'Model A · unified dashboard' },
        { caption: 'Model B · task-led navigation' },
        { caption: 'Model C · overview + roster ✓' },
      ],
      closing:
        "Model C won because admins needed two modes: a quick status check (the firm overview) and a deep-dive (the roster). A unified dashboard tried to do both at once and did neither well. Task-led navigation tested as disorienting — admins wanted to see the state before deciding what to do with it.",
    },
    solution: {
      title: 'Firm overview, entitlement roster, self-serve user management.',
      lead: 'The Enterprise Profile launched with three core views: a firm overview showing contract and usage at a glance, a user roster with plain-language entitlements, and a user management flow that handled the ten most common support requests without a call.',
      shots: [
        { caption: 'Firm overview · landing view' },
        { caption: 'User roster · entitlements view' },
        { caption: 'User management · add/edit flow' },
      ],
    },
    outcomes: {
      title: 'Six months post-launch.',
      lead: 'We measured the three things that mattered: ticket volume, task completion time, and whether the portal was actually being used week over week.',
      stats: [
        { v: '−60%', l: 'admin support tickets', sub: 'within 3 months of launch' },
        { v: '3 min', l: 'to complete user audit', sub: 'vs. 1.3-day avg before' },
        { v: '78%', l: 'monthly active admins', sub: 'of total eligible firm admins' },
        { v: '+31', l: 'NPS point lift', sub: 'enterprise segment, 6-month delta' },
      ],
    },
    reflection: {
      title: "What I'd carry forward.",
      items: [
        [
          'What worked',
          'Starting with the firm overview as the anchor. It gave the portal a clear answer to "what is this?" — something every onboarding admin needed before they could trust anything else they saw.',
        ],
        [
          "What I'd redo",
          "We built the entitlement display around our internal product codes and translated to plain language as a second pass. Should have designed the plain-language model first and mapped codes to it — not the reverse.",
        ],
        [
          'What I learned',
          'For enterprise admin tools, the hierarchy of needs is always: show me the state, let me understand it, then let me change it. If the first step is wrong or missing, nothing else in the portal matters.',
        ],
      ],
    },
  },
}
