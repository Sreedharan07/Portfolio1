'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    category: 'Languages',
    color: '#7C5CFF',
    items: ['Python', 'Java', 'C++', 'SQL', 'JavaScript'],
  },
  {
    category: 'AI / ML',
    color: '#00E5FF',
    items: ['TensorFlow', 'PyTorch', 'OpenCV', 'NumPy', 'Pandas', 'Scikit-learn', 'ONNX'],
  },
  {
    category: 'Web Dev',
    color: '#FF9FFC',
    items: ['React', 'Next.js', 'Node.js', 'Three.js', 'Tailwind CSS', 'Flask', 'Spring Boot'],
  },
  {
    category: 'Data & Tools',
    color: '#7C5CFF',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Linux'],
  },
  {
    category: 'Research',
    color: '#00E5FF',
    items: ['Hyperspectral Imaging', 'Computer Vision', 'Deep Learning', 'Image Processing', 'Deepfake Detection'],
  },
]

function SkillBubble({ skill, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
      className="skill-bubble"
      style={{
        '--bubble-color': color,
        color: 'rgba(255,255,255,0.8)',
      }}
      whileHover={{
        scale: 1.1,
        y: -4,
        color: '#fff',
        borderColor: color,
        boxShadow: `0 0 20px ${color}40, 0 0 40px ${color}20`,
        background: `${color}18`,
        transition: { duration: 0.2 },
      }}
    >
      {skill}
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-32 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
          style={{ background: 'radial-gradient(circle, #7C5CFF 0%, transparent 70%)' }} />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Arsenal</p>
          <h2 className="section-title mb-6">
            Technologies I <span className="gradient-text">master</span>
          </h2>
          <p style={{ color: 'var(--color-secondary)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            A curated set of tools I reach for when solving complex problems in AI, computer vision, and full-stack development.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ background: group.color, boxShadow: `0 0 8px ${group.color}` }} />
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  color: group.color,
                  textTransform: 'uppercase',
                }}>
                  {group.category}
                </span>
                <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${group.color}40, transparent)` }} />
              </div>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, si) => (
                  <SkillBubble
                    key={skill}
                    skill={skill}
                    color={group.color}
                    delay={gi * 0.08 + si * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative floating elements */}
        {['Python', 'PyTorch', 'OpenCV', 'CNN', 'Vision'].map((label, i) => (
          <motion.div
            key={label}
            className="absolute pointer-events-none opacity-5"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: `${2 + i}rem`,
              fontWeight: 800,
              color: i % 2 === 0 ? '#7C5CFF' : '#00E5FF',
              left: `${10 + i * 18}%`,
              top: `${20 + (i % 3) * 25}%`,
              zIndex: 0,
            }}
            animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
          >
            {label}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
