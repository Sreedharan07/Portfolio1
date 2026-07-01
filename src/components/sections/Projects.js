'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Hyperspectral Image Compression',
    subtitle: 'CNN-Transformer Hybrid Model',
    description: 'Developed a hybrid CNN-Transformer architecture for hyperspectral image compression achieving 12.7× compression ratio with ~25.88 dB PSNR on the PaviaU dataset. Trained on CUDA with custom evaluation pipeline.',
    tags: ['PyTorch', 'CNN', 'Transformer', 'Python', 'CUDA', 'Remote Sensing'],
    accent: '#7C5CFF',
    github: 'https://github.com/Sreedharan07',
    demo: null,
    icon: '🛰️',
    featured: true,
  },
  {
    id: 2,
    title: 'Image Enhancement GUI',
    subtitle: 'PyQt5 Image Processing Suite',
    description: 'A professional PyQt5-based Image Enhancement & Noise Analysis Tool featuring spatial filtering, noise generation (Gaussian, Salt-Pepper, Poisson), MSE/PSNR/SNR metrics, and batch processing with Excel reporting.',
    tags: ['PyQt5', 'OpenCV', 'NumPy', 'Python', 'Excel Automation'],
    accent: '#00E5FF',
    github: 'https://github.com/Sreedharan07',
    demo: null,
    icon: '🔬',
    featured: true,
  },
  {
    id: 3,
    title: 'DeepShield — Deepfake Detector',
    subtitle: 'CNN + FFT Hybrid Detection System',
    description: 'Published research project implementing a hybrid CNN+FFT deepfake detection system. Achieved state-of-the-art detection accuracy. Published in IJARCCE Volume 15, Issue 4, April 2026 (IF: 8.471).',
    tags: ['CNN', 'FFT', 'Flask', 'TensorFlow', 'Research'],
    accent: '#FF9FFC',
    github: 'https://github.com/Sreedharan07',
    demo: null,
    icon: '🛡️',
    featured: true,
  },

  {
    id: 5,
    title: 'Heritage Marketplace',
    subtitle: 'E-Commerce Platform for Artisans',
    description: 'Full-stack e-commerce platform built with Node.js and MongoDB, connecting heritage artisans with buyers. Features product listings, cart management, authentication, and payment integration.',
    tags: ['Node.js', 'MongoDB', 'React', 'Tailwind CSS', 'JWT'],
    accent: '#00E5FF',
    github: 'https://github.com/Sreedharan07',
    demo: null,
    icon: '🎨',
    featured: false,
  },
  {
    id: 6,
    title: 'This Portfolio',
    subtitle: 'Cinematic Next.js Experience',
    description: 'A cinematic, award-worthy portfolio website built with Next.js 15, Framer Motion, Three.js, and GSAP. Features particle physics, WebGL backgrounds, smooth scroll, and premium glassmorphism design.',
    tags: ['Next.js', 'Three.js', 'Framer Motion', 'GSAP', 'Tailwind CSS'],
    accent: '#FF9FFC',
    github: 'https://github.com/Sreedharan07',
    demo: 'https://sreedharan.dev',
    icon: '✨',
    featured: false,
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20
    setTilt({ x, y })
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className={`relative ${project.featured ? 'lg:col-span-1' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false) }}
      style={{
        transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: 'transform 0.2s ease',
      }}
    >
      {/* Gradient border glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${project.accent}, transparent)`,
          opacity: hovered ? 0.15 : 0,
          zIndex: 0,
        }}
      />
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-500"
        style={{
          boxShadow: `0 0 40px ${project.accent}30`,
          opacity: hovered ? 1 : 0,
        }}
      />

      <div
        className="relative z-10 glass-card p-8 h-full flex flex-col"
        style={{
          border: hovered ? `1px solid ${project.accent}40` : '1px solid rgba(255,255,255,0.06)',
          transition: 'border 0.3s ease',
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="text-4xl">{project.icon}</div>
          {project.featured && (
            <span
              className="px-3 py-1 rounded-full text-xs"
              style={{
                fontFamily: 'var(--font-mono)',
                background: `${project.accent}18`,
                border: `1px solid ${project.accent}40`,
                color: project.accent,
                letterSpacing: '0.1em',
              }}
            >
              FEATURED
            </span>
          )}
        </div>

        {/* Content */}
        <div className="mb-4">
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: project.accent, letterSpacing: '0.1em', marginBottom: '6px' }}>
            {project.subtitle}
          </p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '12px' }}>
            {project.title}
          </h3>
          <p style={{ color: 'var(--color-secondary)', fontSize: '0.88rem', lineHeight: 1.7 }}>
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto mb-6">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 rounded text-xs"
              style={{
                fontFamily: 'var(--font-mono)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'var(--color-secondary)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs transition-all duration-200 hover:scale-105"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-secondary)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs transition-all duration-200 hover:scale-105"
              style={{ fontFamily: 'var(--font-mono)', color: project.accent }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Portfolio</p>
          <h2 className="section-title">
            Projects I've <span className="gradient-text">shipped</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
