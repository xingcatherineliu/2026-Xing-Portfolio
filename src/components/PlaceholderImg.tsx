import { CSSProperties } from 'react'
import { CaseShot } from '../data/cases'

type Tone = 'cream' | 'paper' | 'bone' | 'ink' | 'neutral'

const PALETTES: Record<Tone, { bg: string; fg: string; stripe: string }> = {
  cream:   { bg: '#ebe4d6', fg: '#3a342a', stripe: 'rgba(58,52,42,0.06)' },
  paper:   { bg: '#ececec', fg: '#1a1a1a', stripe: 'rgba(20,20,20,0.05)' },
  bone:    { bg: '#ecdfcc', fg: '#3a2e22', stripe: 'rgba(58,46,34,0.06)' },
  ink:     { bg: '#1f1d1a', fg: '#d6cdb9', stripe: 'rgba(214,205,185,0.05)' },
  neutral: { bg: '#e8e6e1', fg: '#3a3530', stripe: 'rgba(0,0,0,0.05)' },
}

interface PlaceholderImgProps {
  shot?: CaseShot
  label?: string
  tone?: Tone
  height?: number
  radius?: number
  style?: CSSProperties
}

export default function PlaceholderImg({
  shot,
  label,
  tone = 'neutral',
  height = 360,
  radius = 0,
  style,
}: PlaceholderImgProps) {
  // If we have a real image src, render it
  if (shot?.src) {
    return (
      <img
        src={shot.src}
        alt={shot.alt ?? shot.caption}
        loading="lazy"
        style={{ width: '100%', height, objectFit: 'cover', borderRadius: radius, display: 'block', ...style }}
      />
    )
  }

  const caption = shot?.caption ?? label ?? 'project shot'
  const p = PALETTES[tone]
  const bg = `repeating-linear-gradient(135deg, ${p.bg} 0 14px, ${p.stripe} 14px 15px)`

  return (
    <div
      style={{
        width: '100%',
        height,
        background: bg,
        backgroundColor: p.bg,
        borderRadius: radius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: p.fg,
        fontFamily: 'var(--mono)',
        fontSize: 11,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      <span style={{ background: p.bg, padding: '6px 10px' }}>↳ {caption}</span>
    </div>
  )
}
