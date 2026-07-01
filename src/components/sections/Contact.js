'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const socials = [
  {
    name: 'GitHub',
    handle: '@Sreedharan07',
    href: 'https://github.com/Sreedharan07',
    color: '#7C5CFF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'sreedharan-m',
    href: 'https://linkedin.com/in/sreedharan-m',
    color: '#00E5FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    handle: 'sreedharan@srm.edu',
    href: 'mailto:sreedharan@srm.edu',
    color: '#FF9FFC',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    await new Promise(r => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Giant glowing orb */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 92, 255, 0.15) 0%, rgba(0, 229, 255, 0.08) 40%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Rotating ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          className="w-96 h-96 rounded-full border opacity-10"
          style={{ borderColor: '#7C5CFF', borderStyle: 'dashed' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-8 rounded-full border opacity-10"
          style={{ borderColor: '#00E5FF', borderStyle: 'dashed' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Get In Touch</p>
          <h2 className="section-title mb-6">
            Let's build something <span className="gradient-text">remarkable</span>
          </h2>
          <p style={{ color: 'var(--color-secondary)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            Whether you have an opportunity, a collaboration idea, or just want to talk AI — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-5xl mb-4">✨</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: 'var(--color-secondary)' }}>I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', color: 'var(--color-secondary)', display: 'block', marginBottom: '8px' }}>
                      YOUR NAME
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', color: 'var(--color-secondary)', display: 'block', marginBottom: '8px' }}>
                      EMAIL ADDRESS
                    </label>
                    <input
                      className="form-input"
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', color: 'var(--color-secondary)', display: 'block', marginBottom: '8px' }}>
                      MESSAGE
                    </label>
                    <textarea
                      className="form-input"
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      required
                      style={{ resize: 'none' }}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 rounded-xl font-medium relative overflow-hidden"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      letterSpacing: '0.1em',
                      background: 'linear-gradient(135deg, #7C5CFF, #00E5FF)',
                      color: 'white',
                      textTransform: 'uppercase',
                      border: 'none',
                      cursor: sending ? 'wait' : 'pointer',
                    }}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(124, 92, 255, 0.5)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {sending ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </span>
                    ) : 'Send Message →'}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-center gap-6"
          >
            <div className="mb-4">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>
                Or find me here
              </h3>
              <p style={{ color: 'var(--color-secondary)', fontSize: '0.9rem' }}>
                Open to internships, research collaborations, and freelance projects.
              </p>
            </div>
            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-card flex items-center gap-5 p-5 group"
                whileHover={{ x: 6, borderColor: `${social.color}40` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${social.color}18`,
                    border: `1px solid ${social.color}30`,
                    color: social.color,
                  }}
                >
                  {social.icon}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '2px' }}>{social.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: social.color, letterSpacing: '0.04em' }}>{social.handle}</div>
                </div>
                <svg className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: social.color }}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
