export interface Project {
  code: string
  name: string
  tag: string
  role: string
  year: string
  org: string
  slug?: string
  comingSoon?: boolean
  blurb: string
  metric: string
  tags: string[]
}

export const PROJECTS: Project[] = [
  {
    code: '01',
    name: 'Enterprise Console Home',
    tag: 'Operational Hub',
    role: 'Lead Designer',
    year: '2024',
    org: 'Series-B SaaS',
    slug: '/work/compass',
    blurb: 'Turning a fragmented admin platform into an intent-driven operational hub',
    metric: '+50% Number of clients',
    tags: ['Product strategy', 'IA', 'Design System'],
  },
  {
    code: '02',
    name: 'Scaling Connectivity',
    tag: 'Onboarding + Maintenance Pattern',
    role: 'Senior Designer',
    year: '2024',
    org: 'Infra',
    slug: '/work/pulse',
    blurb: 'From Fragmented Modules to Account-Based Connectivity Lifecycle Management',
    metric: 'Adopted by 10+ enterprise products',
    tags: ['Workflow', 'Pattern', 'Notifications'],
  },
  {
    code: '03',
    name: 'App Registration',
    tag: 'App Lifecycle Management',
    role: 'Systems Designer',
    year: '2025',
    org: 'Public fintech',
    comingSoon: true,
    blurb: 'Transforming Legacy Enterprise App Registration & Management',
    metric: 'Shipped to internal teams',
    tags: ['Tokens', 'Figma plugin', 'Governance'],
  },
  {
    code: '04',
    name: 'United One',
    tag: 'K-1 Deliverables Management',
    role: 'Designer + Builder',
    year: '2023',
    org: 'R&D prototype',
    comingSoon: true,
    blurb: 'Reshape the K-1 management and delivery experience.',
    metric: 'Shipped',
    tags: ['Prototyping', 'LLM UX', 'React'],
  },
  {
    code: '05',
    name: 'Widget Design System',
    tag: 'Media & Market Components',
    role: 'Lead Systems Designer',
    year: '2023',
    org: 'Enterprise platform',
    slug: '/work/widgets',
    blurb: 'A unified widget library covering media widgets and market widgets — built once, adopted by 40+ teams across the platform.',
    metric: '40+ teams adopted',
    tags: ['Design System', 'Media widgets', 'Market widgets'],
  },
  {
    code: '06',
    name: 'Enterprise Profile',
    tag: 'Client Portal',
    role: 'Lead Product Designer',
    year: '2022',
    org: 'Enterprise platform',
    slug: '/work/enterprise-profile',
    blurb: 'A self-serve portal giving enterprise clients a single view of their firm\'s users, entitlements, and platform relationship.',
    metric: '−60% support tickets',
    tags: ['Portal', 'User management', 'Entitlements'],
  },
]
