import { useEffect, useRef, useState } from 'react'
import p5 from 'p5'
import tvImg from '../../assets/tempcrt.png'
import { SCR } from '../../types/constants'
import CRTMenu from './CRTMenu'
import '../../styles/CRT.css'

const TV_SIZE = 500

export default function CRTIntro() {
  const containerRef = useRef<HTMLDivElement>(null)
  const p5Ref = useRef<p5 | null>(null)

  const [phase, setPhase] = useState<'static' | 'menu'>('static')

  useEffect(() => {
    if (phase !== 'static' || !containerRef.current || p5Ref.current) return

    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(SCR.width, SCR.height)
        p.noStroke()
        p.pixelDensity(1)
        setTimeout(() => setPhase('menu'), 2500)
      }

      p.draw = () => {
        const ps = 3
        for (let x = 0; x < SCR.width; x += ps) {
          for (let y = 0; y < SCR.height; y += ps) {
            const v = p.random(255)
            p.fill(v)
            p.rect(x, y, ps, ps)
          }
        }
      }
    }

    p5Ref.current = new p5(sketch, containerRef.current)
    return () => {
      p5Ref.current?.remove()
      p5Ref.current = null
    }
  }, [phase])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
      <div style={{ position: 'relative', width: TV_SIZE, height: TV_SIZE }}>
        <img
          src={tvImg}
          width={TV_SIZE}
          height={TV_SIZE}
          style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
        />
        {phase === 'static' && (
          <div
            ref={containerRef}
            className="staticScreen"
          />
        )}
        {phase === 'menu' && (
          <CRTMenu />
        )}

      </div>
    </div>
  )
}
