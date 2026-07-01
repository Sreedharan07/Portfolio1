'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    title: 'Software Development Intern',
    company: 'SpectraGaze Systems Private Limited',
    period: 'May 2026 – June 2026',
    type: 'Internship',
    color: '#00E5FF',
    mentor: 'Soumya Bhattacharya',
    responsibilities: [
      'Built a professional PyQt5-based Image Enhancement & Noise Analysis Tool with spatial filtering, noise generation (Gaussian, Salt-Pepper, Poisson, Speckle), MSE/PSNR/SNR metrics computation, and batch processing with automated Excel reporting',
      'Developed a hybrid CNN-Transformer model for hyperspectral image compression on the PaviaU remote sensing dataset, achieving ~12.7× compression ratio with ~25.88 dB PSNR',
      'Resolved CUDA OOM errors, architecture mismatches, and evaluation pipeline issues through systematic debugging',
      'Produced comprehensive documentation including technical PPT study guides covering spatial/frequency domain filtering, noise types, and remote sensing pipelines',
    ],
    tech: ['Python', 'PyQt5', 'OpenCV', 'PyTorch', 'NumPy', 'CUDA', 'CNN', 'Transformer'],
    icon: '🔭',
  },
]

const certs = [
  { name: 'AI-ML Virtual Internship', org: 'EduSkills / AICTE / Google', year: '2025', color: '#7C5CFF' },
  { name: 'Deep Learning Specialization', org: 'Coursera / deeplearning.ai', year: '2025', color: '#00E5FF' },
  { name: 'Computer Vision Fundamentals', org: 'OpenCV University', year: '2025', color: '#7C5CFF' },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="relative py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-20"
        >
          <p className="section-label mb-4">Work</p>
          <h2 className="section-title">
            Where I've <span className="gradient-text">worked</span>
          </h2>
        </motion.div>

        {/* Experience cards */}
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="glass-card gradient-border p-8 mb-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{exp.icon}</span>
                  <span
                    className="px-2 py-0.5 rounded text-xs"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      background: `${exp.color}18`,
                      border: `1px solid ${exp.color}30`,
                      color: exp.color,
                      letterSpacing: '0.08em',
                    }}
                  >
                    {exp.type}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.01em' }}>
                  {exp.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: exp.color, letterSpacing: '0.04em', marginTop: '4px' }}>
                  {exp.company}
                </p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-secondary)', marginTop: '2px' }}>
                  Mentored by {exp.mentor}
                </p>
              </div>
              <div className="text-right">
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-secondary)' }}>
                  {exp.period}
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {exp.responsibilities.map((r, ri) => (
                <li key={ri} className="flex items-start gap-3">
                  <span style={{ color: exp.color, flexShrink: 0, marginTop: '5px' }}>▸</span>
                  <span style={{ color: 'var(--color-secondary)', fontSize: '0.88rem', lineHeight: 1.7 }}>{r}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              {exp.tech.map(t => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'var(--color-secondary)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <p className="section-label mb-8">Certifications</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="glass-card flex items-center gap-4 p-5"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}30` }}>
                  <span style={{ color: cert.color, fontSize: '1.1rem' }}>🏆</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem' }}>{cert.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: cert.color, letterSpacing: '0.04em' }}>{cert.org}</div>
                </div>
                <div className="ml-auto" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-secondary)' }}>
                  {cert.year}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
