'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const roles = [
  'AI Engineer',
  'Computer Vision Developer',
  'Python Developer',
  'Deep Learning Researcher',
  'Image Processing Expert',
  'Full-Stack Developer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const cycle = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setRoleIndex(i => (i + 1) % roles.length)
        setIsVisible(true)
      }, 400)
    }, 2800)
    return () => clearInterval(cycle)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Ambient orbs */}
      <div className="orb w-96 h-96 top-20 left-1/4 opacity-20"
        style={{ background: 'radial-gradient(circle, #7C5CFF 0%, transparent 70%)' }} />
      <div className="orb w-80 h-80 bottom-20 right-1/4 opacity-15"
        style={{ background: 'radial-gradient(circle, #00E5FF 0%, transparent 70%)' }} />
      <div className="orb w-64 h-64 top-1/2 right-1/3 opacity-10"
        style={{ background: 'radial-gradient(circle, #FF9FFC 0%, transparent 70%)' }} />

      {/* Scan lines */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.008) 2px, rgba(255,255,255,0.008) 4px)',
          zIndex: 1,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto w-full">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center gap-2 mb-10"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--color-secondary)' }}>
            AVAILABLE FOR OPPORTUNITIES
          </span>
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-4"
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              fontWeight: 400,
              color: 'var(--color-secondary)',
              letterSpacing: '0.02em',
            }}
          >
            Hello.
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.7 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.03em',
            marginBottom: '0.2em',
          }}
        >
          I'm{' '}
          <span className="gradient-text">Sreedharan.</span>
        </motion.h1>

        {/* Rotating role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="h-16 flex items-center justify-center mt-2 mb-8"
        >
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                  color: 'var(--color-accent-cyan)',
                  letterSpacing: '0.04em',
                }}
              >
                {roles[roleIndex]}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Descriptor */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="max-w-xl mb-12"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            color: 'var(--color-secondary)',
            lineHeight: 1.7,
          }}
        >
          B.Tech CSE student at SRM Institute of Technology. Published researcher in
          AI-generated image detection. Building the future at the intersection
          of computer vision and deep learning.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <motion.a
            href="#projects"
            className="magnetic-btn group relative px-8 py-4 rounded-full font-medium text-sm overflow-hidden"
            style={{
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.08em',
              fontSize: '0.8rem',
              background: 'linear-gradient(135deg, #7C5CFF, #00E5FF)',
              color: '#fff',
              textTransform: 'uppercase',
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(124, 92, 255, 0.6), 0 0 80px rgba(0, 229, 255, 0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">Explore Portfolio</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #00E5FF, #FF9FFC)' }} />
          </motion.a>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn px-8 py-4 rounded-full font-medium text-sm transition-all duration-300"
            style={{
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.08em',
              fontSize: '0.8rem',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'var(--color-text)',
              textTransform: 'uppercase',
            }}
            whileHover={{ scale: 1.05, borderColor: 'rgba(0, 229, 255, 0.5)', color: '#00E5FF' }}
            whileTap={{ scale: 0.97 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(156, 163, 175, 0.5)' }}>
            SCROLL
          </span>
          <div className="w-px h-16 overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <motion.div
              className="w-full"
              style={{ background: 'linear-gradient(to bottom, #7C5CFF, #00E5FF)', height: '60%' }}
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 opacity-30" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-accent-purple)' }}>
        {`// init_portfolio.py`}
      </div>

    </section>
  )
}
