import { useEffect, useRef, CSSProperties } from 'react'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  style?: CSSProperties
  className?: string
}

export default function Reveal({ children, delay = 0, style, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const show = () => {
      const t = setTimeout(() => el.classList.add('is-in'), delay)
      return () => clearTimeout(t)
    }

    // Already in viewport (handles initial load and StrictMode double-invoke)
    const isVisible = () => {
      const r = el.getBoundingClientRect()
      return r.top < (window.innerHeight || document.documentElement.clientHeight) && r.bottom > 0
    }

    if (typeof IntersectionObserver === 'undefined' || isVisible()) {
      return show()
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add('is-in'), delay)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`reveal${className ? ` ${className}` : ''}`} style={style}>
      {children}
    </div>
  )
}
