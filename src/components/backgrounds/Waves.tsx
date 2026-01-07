
import { useEffect, useRef } from 'react'

interface WavesProps {
  lineColor?: string
  backgroundColor?: string
  waveSpeedX?: number
  waveSpeedY?: number
  waveAmpX?: number
  waveAmpY?: number
  friction?: number
  tension?: number
  maxCursorMove?: number
  xGap?: number
  yGap?: number
  className?: string
}

class Grad {
  x: number
  y: number
  z: number

  constructor(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }

  dot2(x: number, y: number): number {
    return this.x * x + this.y * y
  }
}

class Noise {
  private grad3: Grad[]
  private p: number[]
  private perm: number[]
  private gradP: Grad[]

  constructor(seed = 0) {
    this.grad3 = [
      new Grad(1, 1, 0),
      new Grad(-1, 1, 0),
      new Grad(1, -1, 0),
      new Grad(-1, -1, 0),
      new Grad(1, 0, 1),
      new Grad(-1, 0, 1),
      new Grad(1, 0, -1),
      new Grad(-1, 0, -1),
      new Grad(0, 1, 1),
      new Grad(0, -1, 1),
      new Grad(0, 1, -1),
      new Grad(0, -1, -1),
    ]
    this.p = [
      151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225,
      140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247,
      120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177,
      33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165,
      71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211,
      133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25,
      63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196,
      135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217,
      226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206,
      59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248,
      152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22,
      39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218,
      246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241,
      81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157,
      184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93,
      222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180,
    ]
    this.perm = new Array(512)
    this.gradP = new Array(512)
    this.seed(seed)
  }

  seed(seed: number): void {
    if (seed > 0 && seed < 1) seed *= 65536
    seed = Math.floor(seed)
    if (seed < 256) seed |= seed << 8
    for (let i = 0; i < 256; i++) {
      const v = i & 1 ? this.p[i] ^ (seed & 255) : this.p[i] ^ ((seed >> 8) & 255)
      this.perm[i] = this.perm[i + 256] = v
      this.gradP[i] = this.gradP[i + 256] = this.grad3[v % 12]
    }
  }

  simplex2(xin: number, yin: number): number {
    const F2 = 0.5 * (Math.sqrt(3) - 1)
    const G2 = (3 - Math.sqrt(3)) / 6
    
    let n0: number, n1: number, n2: number
    const s = (xin + yin) * F2
    let i = Math.floor(xin + s)
    let j = Math.floor(yin + s)
    const t = (i + j) * G2
    const x0 = xin - i + t
    const y0 = yin - j + t
    
    let i1: number, j1: number
    if (x0 > y0) {
      i1 = 1
      j1 = 0
    } else {
      i1 = 0
      j1 = 1
    }
    
    const x1 = x0 - i1 + G2
    const y1 = y0 - j1 + G2
    const x2 = x0 - 1 + 2 * G2
    const y2 = y0 - 1 + 2 * G2
    
    i &= 255
    j &= 255
    
    const gi0 = this.gradP[i + this.perm[j]]
    const gi1 = this.gradP[i + i1 + this.perm[j + j1]]
    const gi2 = this.gradP[i + 1 + this.perm[j + 1]]
    
    let t0 = 0.5 - x0 * x0 - y0 * y0
    if (t0 < 0) {
      n0 = 0
    } else {
      t0 *= t0
      n0 = t0 * t0 * gi0.dot2(x0, y0)
    }
    
    let t1 = 0.5 - x1 * x1 - y1 * y1
    if (t1 < 0) {
      n1 = 0
    } else {
      t1 *= t1
      n1 = t1 * t1 * gi1.dot2(x1, y1)
    }
    
    let t2 = 0.5 - x2 * x2 - y2 * y2
    if (t2 < 0) {
      n2 = 0
    } else {
      t2 *= t2
      n2 = t2 * t2 * gi2.dot2(x2, y2)
    }
    
    return 70 * (n0 + n1 + n2)
  }
}

export default function Waves({
  lineColor = 'rgba(27, 94, 32, 0.3)',
  backgroundColor = 'transparent',
  waveSpeedX = 0.015,
  waveSpeedY = 0.005,
  waveAmpX = 40,
  waveAmpY = 15,
  friction = 0.9,
  tension = 0.01,
  maxCursorMove = 120,
  xGap = 12,
  yGap = 36,
  className = '',
}: WavesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const boundingRef = useRef({ width: 0, height: 0, left: 0, top: 0 })
  const noiseRef = useRef(new Noise(Math.random()))
  const linesRef = useRef<
    Array<{
      points: Array<{
        x: number
        y: number
        wave: { x: number; y: number }
        cursor: { x: number; y: number; vx: number; vy: number }
      }>
      color: string
    }>
  >([])
  const mouseRef = useRef({ x: -1000, y: -1000, lx: 0, ly: 0, sx: 0, sy: 0, v: 0, vs: 0, a: 0, set: false })
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    ctxRef.current = canvas.getContext('2d')
    if (!ctxRef.current) return

    const setSize = () => {
      const rect = container.getBoundingClientRect()
      boundingRef.current = {
        width: rect.width,
        height: rect.height,
        left: rect.left,
        top: rect.top,
      }
      canvas.width = rect.width
      canvas.height = rect.height
    }

    const setLines = () => {
      const { width, height } = boundingRef.current
      linesRef.current = []
      const yCount = Math.round(height / yGap) || 1

      for (let i = 0; i <= yCount; i++) {
        const points: Array<{
          x: number
          y: number
          wave: { x: number; y: number }
          cursor: { x: number; y: number; vx: number; vy: number }
        }> = []
        const xCount = Math.round(width / xGap) || 1

        for (let j = 0; j <= xCount; j++) {
          points.push({
            x: j * xGap,
            y: i * yGap,
            wave: { x: 0, y: 0 },
            cursor: { x: 0, y: 0, vx: 0, vy: 0 },
          })
        }

        linesRef.current.push({ points, color: lineColor })
      }
    }

    const movePoints = (time: number) => {
      const noise = noiseRef.current
      const mouse = mouseRef.current

      linesRef.current.forEach((line, lineIndex) => {
        line.points.forEach((point, pointIndex) => {
          const noiseX = noise.simplex2(
            (lineIndex + time * waveSpeedX) * 0.1,
            (pointIndex + time * waveSpeedY) * 0.1
          )
          const noiseY = noise.simplex2(
            (pointIndex + time * waveSpeedX) * 0.1,
            (lineIndex + time * waveSpeedY) * 0.1
          )

          point.wave.x = noiseX * waveAmpX
          point.wave.y = noiseY * waveAmpY

          if (mouse.set) {
            const dx = point.x - mouse.sx
            const dy = point.y - mouse.sy
            const dist = Math.sqrt(dx * dx + dy * dy)
            const maxDist = 200

            if (dist < maxDist) {
              const factor = 1 - dist / maxDist
              const angle = Math.atan2(dy, dx)
              const targetX = Math.cos(angle) * maxCursorMove * factor * (mouse.vs * 0.2)
              const targetY = Math.sin(angle) * maxCursorMove * factor * (mouse.vs * 0.2)

              point.cursor.vx += (targetX - point.cursor.x) * tension
              point.cursor.vy += (targetY - point.cursor.y) * tension
            }
          }

          point.cursor.vx *= friction
          point.cursor.vy *= friction
          point.cursor.x += point.cursor.vx
          point.cursor.y += point.cursor.vy
        })
      })
    }

    const drawLines = () => {
      const ctx = ctxRef.current
      const { width, height } = boundingRef.current
      if (!ctx) return

      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, width, height)

      linesRef.current.forEach((line) => {
        ctx.beginPath()
        ctx.strokeStyle = line.color
        ctx.lineWidth = 1

        line.points.forEach((point, index) => {
          const px = point.x + point.wave.x + point.cursor.x
          const py = point.y + point.wave.y + point.cursor.y

          if (index === 0) {
            ctx.moveTo(px, py)
          } else {
            const prev = line.points[index - 1]
            const prevX = prev.x + prev.wave.x + prev.cursor.x
            const prevY = prev.y + prev.wave.y + prev.cursor.y
            const cpx = (prevX + px) / 2
            const cpy = (prevY + py) / 2
            ctx.quadraticCurveTo(prevX, prevY, cpx, cpy)
          }
        })

        ctx.stroke()
      })
    }

    let time = 0
    const tick = () => {
      time += 1
      movePoints(time)
      drawLines()
      animationRef.current = requestAnimationFrame(tick)
    }

    const onMouseMove = (e: MouseEvent) => {
      const mouse = mouseRef.current
      const { left, top } = boundingRef.current

      mouse.x = e.clientX - left
      mouse.y = e.clientY - top

      if (!mouse.set) {
        mouse.sx = mouse.x
        mouse.sy = mouse.y
        mouse.lx = mouse.x
        mouse.ly = mouse.y
        mouse.set = true
      }

      mouse.sx += (mouse.x - mouse.sx) * 0.1
      mouse.sy += (mouse.y - mouse.sy) * 0.1

      const dx = mouse.x - mouse.lx
      const dy = mouse.y - mouse.ly
      mouse.v = Math.sqrt(dx * dx + dy * dy)
      mouse.vs += (mouse.v - mouse.vs) * 0.1
      mouse.lx = mouse.x
      mouse.ly = mouse.y
    }

    const onResize = () => {
      setSize()
      setLines()
    }

    setSize()
    setLines()
    tick()

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
    }
  }, [
    lineColor,
    backgroundColor,
    waveSpeedX,
    waveSpeedY,
    waveAmpX,
    waveAmpY,
    friction,
    tension,
    maxCursorMove,
    xGap,
    yGap,
  ])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  )
}
