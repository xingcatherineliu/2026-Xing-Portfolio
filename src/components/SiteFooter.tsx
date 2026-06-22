import { CONTACT } from '../data/content'

function SocialCircle({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      style={{
        width: 38,
        height: 38,
        borderRadius: '50%',
        background: '#f5f5f0',
        color: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        flexShrink: 0,
        transition: 'opacity 0.15s ease',
      }}
    >
      {children}
    </a>
  )
}

export default function SiteFooter() {
  return (
    <footer
      style={{
        background: '#0a0a0a',
        color: '#f5f5f0',
        padding: '64px 32px',
        fontFamily: 'var(--sans)',
      }}
    >
      <div
        className="page-container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 40,
          flexWrap: 'wrap',
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: 'var(--sans)',
              fontWeight: 500,
              fontSize: 40,
              margin: '0 0 28px',
              letterSpacing: '-0.03em',
            }}
          >
            Contact Xing Liu
          </h3>
          <a
            href={`mailto:${CONTACT.email}`}
            style={{ display: 'block', color: 'rgba(245,245,240,0.85)', textDecoration: 'none', fontSize: 16, marginBottom: 8 }}
          >
            {CONTACT.email}
          </a>
          <a
            href={CONTACT.phoneTel}
            style={{ display: 'block', color: 'rgba(245,245,240,0.85)', textDecoration: 'none', fontSize: 16 }}
          >
            {CONTACT.phone}
          </a>
        </div>

        <div>
          <h3
            style={{
              fontFamily: 'var(--sans)',
              fontWeight: 500,
              fontSize: 40,
              margin: '0 0 28px',
              letterSpacing: '-0.03em',
            }}
          >
            let's work together
          </h3>
          <div style={{ display: 'flex', gap: 10 }}>
            <SocialCircle href={CONTACT.linkedinUrl} label="LinkedIn">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1 4.98 2.1 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.3-2.6 4.7-2.6 5 0 6 3.3 6 7.6V24h-5v-7.2c0-1.7 0-4-2.4-4s-2.8 1.9-2.8 3.8V24h-5V8z" />
              </svg>
            </SocialCircle>
            <SocialCircle href={CONTACT.github} label="GitHub">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 5 18 5.3 18 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
              </svg>
            </SocialCircle>
            <SocialCircle href={`mailto:${CONTACT.email}`} label="Email">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 6 10 7 10-7" />
              </svg>
            </SocialCircle>
          </div>
        </div>
      </div>
    </footer>
  )
}
