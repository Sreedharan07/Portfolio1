'use client'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative py-12 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{ background: 'linear-gradient(135deg, #7C5CFF, #00E5FF)', fontFamily: 'var(--font-display)' }}>
            S
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Sreedharan M
          </span>
        </motion.div>

        {/* Center */}
        <div className="text-center">
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-secondary)', letterSpacing: '0.1em' }}>
            © {new Date().getFullYear()} · BUILT WITH{' '}
            <span style={{ color: 'var(--color-accent-pink)' }}>♥</span>{' '}
            AND NEXT.JS
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(156,163,175,0.4)', letterSpacing: '0.08em', marginTop: '4px' }}>
            SRM INSTITUTE OF TECHNOLOGY · BATCH 2024–2028
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6">
          {[
            { label: 'GitHub', href: 'https://github.com/Sreedharan07' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/sreedharan-m' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
