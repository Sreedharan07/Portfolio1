'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const papers = [
  {
    id: 1,
    badge: 'PUBLISHED',
    title: 'DeepScan: AI-Generated Image and Deepfake Detection Using Hybrid CNN-FFT Architecture',
    journal: 'IJARCCE — International Journal of Advanced Research in Computer and Communication Engineering',
    volume: 'Vol. 15, Issue 4 | April 2026 | Impact Factor: 8.471',
    abstract: 'This paper presents DeepScan, a novel hybrid architecture combining Convolutional Neural Networks with Fast Fourier Transform analysis for robust detection of AI-generated images and deepfake content. The dual-stream approach extracts both spatial features and frequency-domain artifacts to achieve state-of-the-art detection accuracy.',
    methodology: ['Dual-stream CNN + FFT feature extraction', 'Transfer learning on EfficientNet backbone', 'Frequency spectrum anomaly detection', 'Flask-based deployment for real-world testing'],
    results: 'Achieved high accuracy on benchmark datasets with superior generalization to unseen deepfake methods.',
    future: 'Extension to video deepfake detection with temporal consistency analysis and rPPG signal integration.',
    color: '#7C5CFF',
    doi: 'IJARCCE/V15I4',
  },

]

function PaperCard({ paper, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [expanded, setExpanded] = require('react').useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
      className="paper-card p-8 cursor-pointer"
      style={{ borderLeftColor: paper.color }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-6 mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                fontFamily: 'var(--font-mono)',
                background: `${paper.color}18`,
                border: `1px solid ${paper.color}40`,
                color: paper.color,
                letterSpacing: '0.1em',
              }}
            >
              {paper.badge}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-secondary)' }}>
              {paper.doi}
            </span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.4, letterSpacing: '-0.01em' }}>
            {paper.title}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: paper.color, flexShrink: 0, marginTop: '4px' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </div>

      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: paper.color, marginBottom: '4px', letterSpacing: '0.03em' }}>
        {paper.journal}
      </p>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-secondary)', marginBottom: '16px', letterSpacing: '0.02em' }}>
        {paper.volume}
      </p>

      <p style={{ color: 'var(--color-secondary)', fontSize: '0.88rem', lineHeight: 1.7 }}>
        {paper.abstract}
      </p>

      {/* Expanded content */}
      <motion.div
        initial={false}
        animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        style={{ overflow: 'hidden' }}
      >
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em', color: paper.color, marginBottom: '12px', textTransform: 'uppercase' }}>
              Methodology
            </h4>
            <ul className="space-y-2">
              {paper.methodology.map((m, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span style={{ color: paper.color, flexShrink: 0, marginTop: '5px' }}>▸</span>
                  <span style={{ color: 'var(--color-secondary)', fontSize: '0.82rem', lineHeight: 1.5 }}>{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em', color: paper.color, marginBottom: '12px', textTransform: 'uppercase' }}>
              Results
            </h4>
            <p style={{ color: 'var(--color-secondary)', fontSize: '0.82rem', lineHeight: 1.6 }}>{paper.results}</p>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em', color: paper.color, marginBottom: '12px', textTransform: 'uppercase' }}>
              Future Scope
            </h4>
            <p style={{ color: 'var(--color-secondary)', fontSize: '0.82rem', lineHeight: 1.6 }}>{paper.future}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Research() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="research" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-20"
        >
          <p className="section-label mb-4">Research Lab</p>
          <h2 className="section-title mb-6">
            Published <span className="gradient-text">science</span>
          </h2>
          <p style={{ color: 'var(--color-secondary)', maxWidth: '520px', lineHeight: 1.7 }}>
            Contributing to the academic discourse at the frontier of AI safety and computer vision.
            Click any paper to expand methodology and results.
          </p>
        </motion.div>

        {/* Lab aesthetic decoration */}
        <div className="absolute top-32 right-8 opacity-10 pointer-events-none hidden lg:block">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#7C5CFF', lineHeight: 2 }}>
            {`model = DeepScan()`}<br />
            {`loss = criterion(y_hat, y)`}<br />
            {`loss.backward()`}<br />
            {`optimizer.step()`}<br />
            {`# PSNR: 25.88 dB`}<br />
            {`# Compression: 12.7x`}
          </div>
        </div>

        <div className="space-y-6">
          {papers.map((paper, i) => (
            <PaperCard key={paper.id} paper={paper} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
