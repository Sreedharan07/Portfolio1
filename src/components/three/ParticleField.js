'use client'
import { useEffect, useRef } from 'react'

export default function ParticleField() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const animRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight

    const COUNT = 600
    const MOUSE_RADIUS = 140
    const COLORS = ['#7C5CFF', '#00E5FF', '#FF9FFC', '#9B7DFF', '#33EAFF']

    class Particle {
      constructor() {
        this.reset()
        // Scatter initially
        this.y = Math.random() * height
        this.opacity = Math.random() * 0.8 + 0.1
      }

      reset() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.ox = this.x  // origin x
        this.oy = this.y  // origin y
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.size = Math.random() * 1.8 + 0.4
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
        this.opacity = Math.random() * 0.7 + 0.15
        this.pulse = Math.random() * Math.PI * 2
        this.pulseSpeed = Math.random() * 0.02 + 0.01
      }

      update(mouse, time) {
        this.pulse += this.pulseSpeed
        
        // Drift
        this.ox += this.vx
        this.oy += this.vy

        // Wrap
        if (this.ox < 0) this.ox = width
        if (this.ox > width) this.ox = 0
        if (this.oy < 0) this.oy = height
        if (this.oy > height) this.oy = 0

        // Mouse repulsion
        const dx = mouse.x - this.ox
        const dy = mouse.y - this.oy
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS
          const angle = Math.atan2(dy, dx)
          this.x = this.ox - Math.cos(angle) * force * 60
          this.y = this.oy - Math.sin(angle) * force * 60
        } else {
          this.x += (this.ox - this.x) * 0.05
          this.y += (this.oy - this.y) * 0.05
        }

        this.currentSize = this.size * (1 + Math.sin(this.pulse) * 0.3)
        this.currentOpacity = this.opacity * (0.7 + Math.sin(this.pulse) * 0.3)
      }

      draw(ctx) {
        ctx.save()
        ctx.globalAlpha = this.currentOpacity
        ctx.fillStyle = this.color
        ctx.shadowBlur = 8
        ctx.shadowColor = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.currentSize, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    // Connection lines between nearby particles
    function drawConnections(particles) {
      const maxDist = 90
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.12
            ctx.save()
            ctx.globalAlpha = opacity
            ctx.strokeStyle = '#7C5CFF'
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }
    }

    const particles = Array.from({ length: COUNT }, () => new Particle())
    let time = 0

    function animate() {
      animRef.current = requestAnimationFrame(animate)
      time += 0.01

      // Subtle background rotation effect via gradient shift
      ctx.clearRect(0, 0, width, height)

      // Draw connections (only for nearby subset to keep 60fps)
      const subset = particles.slice(0, 200)
      drawConnections(subset)

      particles.forEach(p => {
        p.update(mouseRef.current, time)
        p.draw(ctx)
      })
    }

    animate()

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onResize)

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  )
}
