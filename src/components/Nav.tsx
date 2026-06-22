import { NavLink } from 'react-router-dom'
import { CONTACT } from '../data/content'

const NAV_LINKS = [
  { to: '/', label: 'Work', end: true },
  { to: '/about', label: 'About', end: false },
  { to: '/process', label: 'Process', end: false },
  { to: '/resume', label: 'Resume', end: false },
]

export default function Nav() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'color-mix(in srgb, var(--bg) 93%, transparent)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--rule)',
        fontFamily: 'var(--sans)',
        fontSize: 14,
        color: 'var(--ink)',
      }}
    >
      <div
        className="page-container"
        style={{ display: 'flex', alignItems: 'center', padding: '0 32px', height: 64 }}
      >
        {/* Logo */}
        <NavLink
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'inherit' }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: 'var(--accent)',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>
            Xing Liu{' '}
            <span style={{ color: 'var(--muted)', fontWeight: 500 }}>— Senior Product Designer</span>
          </span>
        </NavLink>

        {/* Center links */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 4 }}>
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
              style={({ isActive }) => ({
                padding: '8px 18px',
                color: isActive ? 'var(--ink)' : 'var(--muted)',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: 14,
                borderRadius: 8,
              })}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Social icons — hidden ≤900px via CSS */}
        <div className="responsive-hide" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href={CONTACT.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ color: 'var(--ink)', display: 'flex' }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1 4.98 2.1 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.3-2.6 4.7-2.6 5 0 6 3.3 6 7.6V24h-5v-7.2c0-1.7 0-4-2.4-4s-2.8 1.9-2.8 3.8V24h-5V8z" />
            </svg>
          </a>
          <a href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="GitHub" style={{ color: 'var(--ink)', display: 'flex' }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 5 18 5.3 18 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
            </svg>
          </a>
          <a href={`mailto:${CONTACT.email}`} aria-label="Email" style={{ color: 'var(--ink)', display: 'flex' }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 6 10 7 10-7" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}
