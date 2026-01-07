import { useRef, type ReactNode, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
  spotlightColor?: string
  spotlightSize?: number
}

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(27, 94, 32, 0.15)',
  spotlightSize = 300,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 500, damping: 100 })
  const springY = useSpring(mouseY, { stiffness: 500, damping: 100 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    mouseX.set(-1000)
    mouseY.set(-1000)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border-steel)',
        borderRadius: 'var(--radius-lg)',
      }}
      whileHover={{
        borderColor: 'var(--border-steel-light)',
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          background: `radial-gradient(${spotlightSize}px circle at ${springX.get()}px ${springY.get()}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          opacity: 0,
        }}
        animate={{
          background: `radial-gradient(${spotlightSize}px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${spotlightColor}, transparent 80%)`,
        }}
      />
      <SpotlightGradient springX={springX} springY={springY} spotlightColor={spotlightColor} spotlightSize={spotlightSize} />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </motion.div>
  )
}

function SpotlightGradient({
  springX,
  springY,
  spotlightColor,
  spotlightSize,
}: {
  springX: ReturnType<typeof useSpring>
  springY: ReturnType<typeof useSpring>
  spotlightColor: string
  spotlightSize: number
}) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        background: 'transparent',
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          width: spotlightSize * 2,
          height: spotlightSize * 2,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${spotlightColor} 0%, transparent 70%)`,
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </motion.div>
  )
}
