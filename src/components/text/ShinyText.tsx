import { type ReactNode } from 'react'

interface ShinyTextProps {
  children: ReactNode
  shimmerColor?: string
  backgroundColor?: string
  className?: string
  speed?: number
}

export default function ShinyText({
  children,
  shimmerColor = 'rgba(255, 255, 255, 0.6)',
  backgroundColor = '#C62828',
  className = '',
  speed = 3,
}: ShinyTextProps) {
  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        position: 'relative',
        color: 'inherit',
        background: `linear-gradient(
          120deg,
          ${backgroundColor} 0%,
          ${backgroundColor} 25%,
          ${shimmerColor} 50%,
          ${backgroundColor} 75%,
          ${backgroundColor} 100%
        )`,
        backgroundSize: '200% 100%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: `shiny-text-shimmer ${speed}s ease-in-out infinite`,
      }}
    >
      {children}
      <style>{`
        @keyframes shiny-text-shimmer {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
      `}</style>
    </span>
  )
}
