import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './components/App.tsx'
import Thoughts from './components/Thoughts.tsx'
import About from './components/About.tsx'
import { SCR } from './types/constants.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/thoughts" element={<Thoughts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

const root = document.documentElement
root.style.setProperty('--scr-left', String(SCR.left));
root.style.setProperty('--scr-top', String(SCR.top));
root.style.setProperty('--scr-width', String(SCR.width));
root.style.setProperty('--scr-height', String(SCR.height));
