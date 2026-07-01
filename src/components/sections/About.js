'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  { name: 'Python', level: 95, color: '#7C5CFF' },
  { name: 'Machine Learning', level: 88, color: '#00E5FF' },
  { name: 'Deep Learning', level: 85, color: '#FF9FFC' },
  { name: 'Computer Vision', level: 90, color: '#7C5CFF' },
  { name: 'Image Processing', level: 92, color: '#00E5FF' },
  { name: 'OpenCV', level: 88, color: '#FF9FFC' },
  { name: 'TensorFlow / PyTorch', level: 84, color: '#7C5CFF' },
  { name: 'Research & Publications', level: 82, color: '#00E5FF' },
  { name: 'Modern Web Development', level: 78, color: '#FF9FFC' },
]

function SkillBar({ skill, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
      className="flex items-center gap-4"
    >
      <div className="w-36 text-right flex-shrink-0"
        style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-secondary)', letterSpacing: '0.04em' }}>
        {skill.name}
      </div>
      <div className="flex-1 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}, rgba(255,255,255,0.4))` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.08 + 0.3, ease: [0.23, 1, 0.32, 1] }}
        />
      </div>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: skill.color, width: '32px' }}>
        {skill.level}%
      </span>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Identity card */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            {/* Decorative card */}
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute inset-0 blur-3xl opacity-30 rounded-3xl"
                style={{ background: 'linear-gradient(135deg, #7C5CFF, #00E5FF)' }} />

              <div className="relative glass-card p-10 gradient-border">
                {/* Photo placeholder with gradient avatar */}
                <div className="w-28 h-28 rounded-2xl mb-6 flex items-center justify-center overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #7C5CFF, #00E5FF, #FF9FFC)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 800, color: 'white' }}>S</span>
                </div>

                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '8px' }}>
                  Sreedharan M
                </h2>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent-cyan)', letterSpacing: '0.1em', marginBottom: '20px' }}>
                  B.Tech CSE @ SRM Institute, Vadapalani
                </p>

                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                  A second-year Computer Science student fascinated by the intersection of artificial
                  intelligence and visual computing. I build systems that see, understand, and reason
                  about the visual world — from hyperspectral image compression to deepfake detection.
                  Published researcher with a paper in IJARCCE (Impact Factor 8.471).
                </p>

                {/* Stats row */}
                <div className="flex gap-8 mt-8 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  {[
                    { value: '1+', label: 'Papers', color: '#00E5FF' },
                    { value: '8+', label: 'Projects', color: '#FF9FFC' },
                  ].map(stat => (
                    <div key={stat.label}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: stat.color, lineHeight: 1 }}>
                        {stat.value}
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-secondary)', letterSpacing: '0.1em', marginTop: '4px' }}>
                        {stat.label.toUpperCase()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating tag */}
            <motion.div
              className="absolute -top-4 -right-4 px-4 py-2 rounded-full text-xs"
              style={{
                fontFamily: 'var(--font-mono)',
                background: 'rgba(0, 229, 255, 0.1)',
                border: '1px solid rgba(0, 229, 255, 0.3)',
                color: 'var(--color-accent-cyan)',
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              Batch 2024–2028
            </motion.div>
          </motion.div>

          {/* Right: Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-10"
            >
              <p className="section-label mb-3">Who I Am</p>
              <h2 className="section-title mb-6">
                Built on <span className="gradient-text">curiosity</span><br />
                and code.
              </h2>
              <p style={{ color: 'var(--color-secondary)', lineHeight: 1.8 }}>
                From hyperspectral satellite imaging to real-time deepfake detection,
                I architect systems at the bleeding edge of computer vision. Currently
                interning at SpectraGaze Systems, working on CNN-Transformer hybrid models
                for remote sensing applications.
              </p>
            </motion.div>

            <div className="space-y-5">
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
