'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

// Dynamic imports for performance
const Galaxy = dynamic(() => import('@/components/three/Galaxy'), { ssr: false })
const Cursor = dynamic(() => import('@/components/ui/Cursor'), { ssr: false })

import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Research from '@/components/sections/Research'
import Experience from '@/components/sections/Experience'
import GitHub from '@/components/sections/GitHub'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      {/* Custom cursor */}
      <Cursor />

      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Galaxy background — stays behind everything */}
      <div className="fixed inset-0 z-0" style={{ background: 'var(--color-bg)' }}>
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
      </div>

      {/* Site content */}
      <div className="relative z-10">
        <Nav />

        <main>
          <Hero />

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
            <About />
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
            <Skills />
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
            <Projects />
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
            <Research />
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
            <Experience />
          </div>



          <div style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
            <GitHub />
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
