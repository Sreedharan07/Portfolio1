'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedCounter({ target, label, color, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = Date.now()
    const animate = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, target])

  return (
    <div ref={ref} className="text-center">
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        fontWeight: 800,
        color,
        lineHeight: 1,
        letterSpacing: '-0.02em',
      }}>
        {count}{suffix}
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        color: 'var(--color-secondary)',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        marginTop: '8px',
      }}>
        {label}
      </div>
    </div>
  )
}

const languages = [
  { name: 'Python', pct: 48, color: '#7C5CFF' },
  { name: 'JavaScript', pct: 20, color: '#00E5FF' },
  { name: 'Java', pct: 14, color: '#FF9FFC' },
  { name: 'C++', pct: 10, color: '#7C5CFF' },
  { name: 'SQL', pct: 8, color: '#00E5FF' },
]

export default function GitHub() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  // Initialize contributions grid with zeros for SSR/initial render
  const [contributions, setContributions] = useState(() =>
    Array.from({ length: 52 }, () => Array.from({ length: 7 }, () => 0))
  )

  useEffect(() => {
    // Generate random contributions only on the client
    const grid = Array.from({ length: 52 }, () =>
      Array.from({ length: 7 }, () => {
        const val = Math.random()
        if (val > 0.85) return 4
        if (val > 0.7) return 3
        if (val > 0.55) return 2
        if (val > 0.35) return 1
        return 0
      })
    )
    setContributions(grid)
  }, [])

  const colors = ['rgba(255,255,255,0.04)', '#3d1f82', '#5c35b8', '#7C5CFF', '#9d85ff']

  return (
    <section id="github" className="relative py-32 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Open Source</p>
          <h2 className="section-title">
            Code I <span className="gradient-text">ship daily</span>
          </h2>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          <AnimatedCounter target={8} label="Repositories" color="#7C5CFF" suffix="+" />
          <AnimatedCounter target={1} label="Publications" color="#00E5FF" suffix="+" />
          <AnimatedCounter target={2} label="Years Coding" color="#7C5CFF" suffix="+" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contribution graph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 glass-card p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700 }}>Contribution Activity</h3>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-secondary)', letterSpacing: '0.08em' }}>
                github.com/Sreedharan07
              </span>
            </div>
            <div className="overflow-x-auto">
              <div className="flex gap-1" style={{ minWidth: '600px' }}>
                {contributions.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-1">
                    {week.map((day, di) => (
                      <motion.div
                        key={di}
                        className="w-2.5 h-2.5 rounded-sm"
                        style={{ background: colors[day] }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: (wi * 7 + di) * 0.001 + 0.3, duration: 0.2 }}
                        whileHover={{ scale: 1.5, background: '#00E5FF' }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 mt-3 justify-end">
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-secondary)' }}>Less</span>
              {colors.map((c, i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-sm" style={{ background: c }} />
              ))}
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-secondary)' }}>More</span>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass-card p-6"
          >
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, marginBottom: '20px' }}>Languages</h3>
            {/* Bar chart */}
            <div className="flex h-2 rounded-full overflow-hidden mb-6">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.name}
                  style={{ background: i % 2 === 0 ? lang.color : `${lang.color}99`, width: `${lang.pct}%` }}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                />
              ))}
            </div>
            <div className="space-y-3">
              {languages.map((lang, i) => (
                <div key={lang.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: lang.color }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-secondary)' }}>{lang.name}</span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: lang.color }}>{lang.pct}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
