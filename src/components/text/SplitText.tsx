import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation, type Variants } from 'framer-motion'

interface SplitTextProps {
  text: string
  delay?: number
  staggerDelay?: number
  duration?: number
  className?: string
  charClassName?: string
  animateOnScroll?: boolean
  style?: React.CSSProperties
}

export default function SplitText({
  text,
  delay = 0,
  staggerDelay = 0.03,
  duration = 0.5,
  className = '',
  charClassName = '',
  animateOnScroll = true,
  style = {},
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const controls = useAnimation()
  const [hasAnimated, setHasAnimated] = useState(false)

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const charVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration,
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

  const words = text.split(' ')

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', perspective: '1000px', ...style }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-flex', marginRight: '0.3em' }}>
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              variants={charVariants}
              className={charClassName}
              style={{
                display: 'inline-block',
                transformOrigin: 'bottom center',
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  )
}
