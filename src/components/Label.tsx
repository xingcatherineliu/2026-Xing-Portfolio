import { CSSProperties } from 'react'

interface LabelProps {
  children: React.ReactNode
  style?: CSSProperties
  color?: string
  as?: 'span' | 'div'
}

export default function Label({ children, style, color, as: Tag = 'span' }: LabelProps) {
  return (
    <Tag
      style={{
        fontFamily: 'var(--sans)',
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: color ?? 'var(--muted)',
        ...style,
      }}
    >
      {children}
    </Tag>
  )
}
