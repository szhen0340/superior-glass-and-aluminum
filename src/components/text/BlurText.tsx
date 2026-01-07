import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation, type Variants } from 'framer-motion'

interface BlurTextProps {
  text: string
  delay?: number
  duration?: number
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  animateOnScroll?: boolean
  style?: React.CSSProperties
}

export default function BlurText({
  text,
  delay = 0,
  duration = 0.8,
  className = '',
  as: Component = 'span',
  animateOnScroll = true,
  style = {},
}: BlurTextProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const controls = useAnimation()
  const [hasAnimated, setHasAnimated] = useState(false)

  const variants: Variants = {
    hidden: {
      filter: 'blur(20px)',
      opacity: 0,
      y: 20,
    },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  useEffect(() => {
    if (animateOnScroll && isInView && !hasAnimated) {
      controls.start('visible')
      setHasAnimated(true)
    } else if (!animateOnScroll && !hasAnimated) {
      controls.start('visible')
      setHasAnimated(true)
    }
  }, [isInView, animateOnScroll, controls, hasAnimated])

  return (
    <motion.span
      ref={ref as React.RefObject<HTMLSpanElement>}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
      style={{ display: 'inline-block' }}
    >
      <Component style={{ margin: 0, ...style }}>{text}</Component>
    </motion.span>
  )
}
