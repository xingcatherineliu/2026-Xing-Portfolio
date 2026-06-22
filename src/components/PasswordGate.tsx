import { useState, useEffect, useRef } from 'react'

const PASSWORD_HASH = 'd50fa4fb20b1ca542cbec097b94ea566117c38e960915f1c265ccc92ad29804a'
const SESSION_KEY = 'portfolio_unlocked'

async function sha256(str: string) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str))
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false)
  const [ready, setReady] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === 'true') {
      setUnlocked(true)
    }
    setReady(true)
  }, [])

  useEffect(() => {
    if (ready && !unlocked) {
      inputRef.current?.focus()
    }
  }, [ready, unlocked])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const hash = await sha256(input.trim())
    if (hash === PASSWORD_HASH) {
      sessionStorage.setItem(SESSION_KEY, 'true')
      setUnlocked(true)
    } else {
      setError(true)
      setShake(true)
      setInput('')
      setTimeout(() => setShake(false), 420)
    }
  }

  if (!ready) return null
  if (unlocked) return <>{children}</>

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 24px',
        background: 'var(--bg)',
      }}
    >
      <div style={{ width: '100%', maxWidth: 400, textAlign: 'center' }}>
        {/* Lock icon */}
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            border: '1.5px solid var(--rule)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 28px',
            color: 'var(--muted)',
          }}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>

        <h2
          style={{
            fontFamily: 'var(--sans)',
            fontWeight: 600,
            fontSize: 22,
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            margin: '0 0 10px',
          }}
        >
          Case study
        </h2>
        <p
          style={{
            fontFamily: 'var(--sans)',
            fontSize: 14,
            color: 'var(--muted)',
            margin: '0 0 36px',
            lineHeight: 1.5,
          }}
        >
          This work is password protected.<br />
          Enter the password to continue.
        </p>

        <form onSubmit={handleSubmit}>
          <div
            style={{
              animation: shake ? 'shake 0.42s ease' : 'none',
            }}
          >
            <input
              ref={inputRef}
              type="password"
              value={input}
              onChange={(e) => { setInput(e.target.value); setError(false) }}
              placeholder="Password"
              autoComplete="off"
              style={{
                width: '100%',
                padding: '14px 16px',
                fontFamily: 'var(--sans)',
                fontSize: 15,
                color: 'var(--ink)',
                background: 'var(--paper)',
                border: `1.5px solid ${error ? '#e05c5c' : 'var(--rule)'}`,
                borderRadius: 10,
                outline: 'none',
                marginBottom: 12,
                boxSizing: 'border-box',
                transition: 'border-color 0.15s ease',
              }}
            />
          </div>

          {error && (
            <p
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 13,
                color: '#e05c5c',
                margin: '-4px 0 12px',
              }}
            >
              Incorrect password — try again.
            </p>
          )}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              background: 'var(--ink)',
              color: 'var(--bg)',
              border: 'none',
              borderRadius: 10,
              fontFamily: 'var(--sans)',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: '-0.01em',
            }}
          >
            Unlock
          </button>
        </form>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%       { transform: translateX(-8px); }
          40%       { transform: translateX(8px); }
          60%       { transform: translateX(-6px); }
          80%       { transform: translateX(4px); }
        }
      `}</style>
    </div>
  )
}
