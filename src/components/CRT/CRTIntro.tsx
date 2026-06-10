import { useEffect, useRef, useState } from 'react'
import p5 from 'p5'
import tvImg from '../../assets/tempcrt.png'
import { SCR } from '../../types/constants'
import CRTMenu from './CRTMenu'
import '../../styles/CRT.css'

const TV_SIZE = 500

const screenStyle: React.CSSProperties = {
  position: 'absolute',
  left: SCR.left,
  top: SCR.top,
  width: SCR.width,
  height: SCR.height,
}

export default function CRTIntro() {
  const containerRef = useRef<HTMLDivElement>(null)
  const p5Ref = useRef<p5 | null>(null)

  const [phase, setPhase] = useState<'static' | 'menu'>('static')

  useEffect(() => {
    if (phase !== 'static' || !containerRef.current) return
    if (containerRef.current.querySelector('canvas')) return //prevent duplicate static screen

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
    <div className="tvContainer">
      <div style={{ position: 'relative', width: TV_SIZE, height: TV_SIZE }}>
        <img
          src={tvImg}
          width={TV_SIZE}
          height={TV_SIZE}
          className="tvImage"
        />
        {phase === 'static' && (
          <div
            ref={containerRef}
            className="staticScreen"
            style={screenStyle}
          />
        )}
        {phase === 'menu' && (
          <CRTMenu style={screenStyle} />
        )}
      </div>
    </div>
  )
}
