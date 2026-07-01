'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const events = [
  {
    year: '2026',
    month: 'May–Jun',
    type: 'internship',
    color: '#00E5FF',
    title: 'Software Development Intern',
    org: 'SpectraGaze Systems Private Limited',
    description: 'Mentored by Soumya Bhattacharya. Built PyQt5 Image Enhancement & Noise Analysis Tool and CNN-Transformer hyperspectral image compression model (PaviaU dataset, 12.7× compression, ~25.88 dB PSNR).',
    icon: '🔭',
  },
  {
    year: '2026',
    month: 'April',
    type: 'research',
    color: '#FF9FFC',
    title: 'Research Paper Published',
    org: 'IJARCCE — Impact Factor 8.471',
    description: 'Published "DeepScan: AI-Generated Image and Deepfake Detection Using Hybrid CNN-FFT Architecture" in IJARCCE Volume 15, Issue 4.',
    icon: '📄',
  },
  {
    year: '2026',
    month: 'Jan–Apr',
    type: 'project',
    color: '#7C5CFF',
    title: 'Major Project Sprint',
    org: 'Self-Directed',
    description: 'Built GharMol (XGBoost property AI), DeepShield (deepfake detector), HumanGuard (multimodal detection), MediCore (hospital management), BidVault (real-time auction platform), and JARVIS AI assistant.',
    icon: '⚡',
  },
  {
    year: '2025',
    month: 'Aug',
    type: 'education',
    color: '#00E5FF',
    title: 'Semester 4 Completed',
    org: 'SRM Institute of Technology, Vadapalani',
    description: 'Completed Semester 4 with courses including Design & Analysis of Algorithms, Artificial Intelligence, DBMS, Digital Image Processing, and Probability & Queueing Theory.',
    icon: '🎓',
  },
  {
    year: '2025',
    month: 'Jul',
    type: 'certificate',
    color: '#FF9FFC',
    title: 'AI-ML Virtual Internship',
    org: 'EduSkills / AICTE / Google',
    description: 'Completed AI-ML Virtual Internship certification through EduSkills in partnership with AICTE and Google, building ML pipelines and deploying models on Google Cloud.',
    icon: '🏆',
  },
  {
    year: '2024',
    month: 'Aug',
    type: 'education',
    color: '#7C5CFF',
    title: 'B.Tech CSE Enrolled',
    org: 'SRM Institute of Technology, Vadapalani',
    description: 'Began Bachelor of Technology in Computer Science Engineering. Batch 2024–2028. Immediately began pursuing ML/AI projects alongside coursework.',
    icon: '🚀',
  },
]

const typeColors = {
  education: '#7C5CFF',
  internship: '#00E5FF',
  research: '#FF9FFC',
  project: '#7C5CFF',
  certificate: '#00E5FF',
}

function TimelineItem({ event, index, isLeft }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className={`flex items-start gap-0 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-row`}
    >
      {/* Content */}
      <div className={`flex-1 pb-10 ${isLeft ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'} pl-8 lg:pl-0`}>
        <div className={`glass-card p-6 inline-block w-full lg:max-w-md ${isLeft ? 'lg:ml-auto' : ''} gradient-border`}>
          <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'lg:justify-end' : ''}`}>
            <span className="text-2xl">{event.icon}</span>
            <span
              className="px-2 py-0.5 rounded text-xs"
              style={{
                fontFamily: 'var(--font-mono)',
                background: `${event.color}18`,
                border: `1px solid ${event.color}30`,
                color: event.color,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {event.type}
            </span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>
            {event.title}
          </h3>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: event.color, marginBottom: '8px', letterSpacing: '0.04em' }}>
            {event.org}
          </p>
          <p style={{ color: 'var(--color-secondary)', fontSize: '0.83rem', lineHeight: 1.6 }}>
            {event.description}
          </p>
        </div>
      </div>

      {/* Center dot and date */}
      <div className="flex-shrink-0 flex flex-col items-center absolute left-0 lg:relative">
        <div
          className="w-4 h-4 rounded-full border-2 z-10 lg:mt-6"
          style={{
            borderColor: event.color,
            background: event.color,
            boxShadow: `0 0 12px ${event.color}80`,
          }}
        />
      </div>

      {/* Date (hidden on mobile, shown on desktop as opposite side) */}
      <div className={`flex-1 hidden lg:flex items-start ${isLeft ? 'pl-12' : 'pr-12 justify-end'}`}>
        <div className="mt-5">
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: event.color }}>
            {event.year}
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-secondary)', letterSpacing: '0.1em' }}>
            {event.month}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Timeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="timeline" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Journey</p>
          <h2 className="section-title">
            The <span className="gradient-text">path</span> so far
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-2 lg:left-1/2 top-0 bottom-0 w-px transform lg:-translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, transparent, #7C5CFF, #00E5FF, #FF9FFC, transparent)' }}
          />

          <div className="space-y-0">
            {events.map((event, i) => (
              <TimelineItem
                key={event.title}
                event={event}
                index={i}
                isLeft={i % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
