'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ArrowRight, Play, CheckCircle, Clock, Users, TrendingUp, Bell, Zap } from 'lucide-react'

const floatingPills = [
  { icon: Bell, color: '#2563FF', label: 'Room 412 — Service requested', sub: 'Assigned to Housekeeping', delay: 0 },
  { icon: CheckCircle, color: '#22c55e', label: 'Task completed in 4m 32s', sub: 'SLA met ✓', delay: 1.5 },
  { icon: Zap, color: '#FFC72C', label: 'AI routed to Floor 4 Team', sub: '3 workers available', delay: 3 },
]

const activeTasks = [
  { id: 'T-1041', label: 'Room Service — Suite 8B', dept: 'F&B', status: 'In Progress', pct: 65, color: '#2563FF' },
  { id: 'T-1042', label: 'Housekeeping — Room 310', dept: 'HK', status: 'Assigned', pct: 30, color: '#22c55e' },
  { id: 'T-1043', label: 'Maintenance — Elevator A', dept: 'ENG', status: 'In Progress', pct: 80, color: '#f59e0b' },
  { id: 'T-1044', label: 'Concierge — Booking req.', dept: 'FO', status: 'Pending', pct: 10, color: '#8b5cf6' },
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 overflow-hidden grid-bg"
      aria-label="Hero"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-12"
          style={{ background: 'radial-gradient(circle, rgba(37,99,255,0.35) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, rgba(255,199,44,0.15) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-6"
          style={{ background: 'radial-gradient(circle, rgba(37,99,255,0.2) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text Content */}
          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-electric/10 mb-8"
            >
              <div className="live-dot" />
              <span className="text-xs font-semibold text-electric-400 tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
                AI-Powered Operational Intelligence
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              AI-powered{' '}
              <span className="gradient-text">workforce coordination</span>{' '}
              for modern service businesses
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg text-muted-400 leading-relaxed mb-8 max-w-xl"
            >
              Smartry helps hotels, hospitals, restaurants, and operational teams automate task
              coordination, optimize workforce response times, and manage daily operations through
              one intelligent platform.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                id="hero-cta-trial"
                href="#pricing"
                className="btn-electric flex items-center justify-center gap-2 text-base"
              >
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="w-4 h-4 relative z-10" />
              </a>
              <a
                id="hero-cta-demo"
                href="#pricing"
                className="btn-outline flex items-center justify-center gap-2 text-base"
              >
                <Play className="w-4 h-4" />
                Book a Demo
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-sm text-muted font-medium"
            >
              Built for hospitality, healthcare, facility management, and service operations
            </motion.p>
          </div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 hidden lg:block"
          >
            <DashboardMockup />

            {/* Floating Pills */}
            {floatingPills.map((pill, i) => (
              <FloatingPill key={i} {...pill} index={i} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #071B3B)' }} />
    </section>
  )
}

function DashboardMockup() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative"
    >
      {/* Main Dashboard Window */}
      <div className="dash-card rounded-2xl overflow-hidden shadow-2xl"
        style={{ boxShadow: '0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(37,99,255,0.15)' }}
      >
        {/* Window Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <div className="flex items-center gap-2">
            <div className="live-dot" />
            <span className="text-xs text-muted font-medium" style={{ fontFamily: 'var(--font-display)' }}>
              Smartry Operations
            </span>
          </div>
          <div className="text-xs text-muted">Live</div>
        </div>

        {/* Dashboard Body */}
        <div className="p-4 space-y-4">
          {/* Metrics Row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Active Tasks', value: '24', icon: TrendingUp, color: '#2563FF', delta: '+3' },
              { label: 'Workers Online', value: '18', icon: Users, color: '#22c55e', delta: '94%' },
              { label: 'SLA Rate', value: '98.4%', icon: CheckCircle, color: '#FFC72C', delta: '↑2.1%' },
            ].map((m) => (
              <div key={m.label} className="bg-surface-2 rounded-xl p-3 border border-border">
                <div className="flex items-start justify-between mb-2">
                  <m.icon className="w-4 h-4" style={{ color: m.color }} />
                  <span className="text-xs font-semibold" style={{ color: m.color }}>{m.delta}</span>
                </div>
                <div className="text-xl font-bold text-soft-white" style={{ fontFamily: 'var(--font-display)' }}>{m.value}</div>
                <div className="text-xs text-muted mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Active Tasks */}
          <div className="bg-surface-2 rounded-xl border border-border p-3">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-soft-white" style={{ fontFamily: 'var(--font-display)' }}>Active Requests</span>
              <span className="text-xs text-muted">Last 30m</span>
            </div>
            <div className="space-y-2.5">
              {activeTasks.map((task) => (
                <div key={task.id} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-bold px-1.5 py-0.5 rounded"
                        style={{ background: `${task.color}20`, color: task.color, fontFamily: 'var(--font-display)' }}
                      >
                        {task.dept}
                      </span>
                      <span className="text-xs text-muted-400 truncate max-w-[130px]">{task.label}</span>
                    </div>
                    <span className="text-xs font-medium" style={{ color: task.color, fontFamily: 'var(--font-display)' }}>
                      {task.status}
                    </span>
                  </div>
                  <div className="sla-bar">
                    <motion.div
                      className="sla-bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${task.pct}%` }}
                      transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
                      style={{ background: task.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-surface-2 rounded-xl border border-border p-3">
              <div className="text-xs text-muted mb-1">Avg Response</div>
              <div className="text-lg font-bold text-soft-white" style={{ fontFamily: 'var(--font-display)' }}>4m 12s</div>
              <div className="text-xs text-green-400 font-medium mt-0.5">↓ 18% this week</div>
            </div>
            <div className="bg-surface-2 rounded-xl border border-border p-3">
              <div className="text-xs text-muted mb-1">Completed Today</div>
              <div className="text-lg font-bold text-soft-white" style={{ fontFamily: 'var(--font-display)' }}>142</div>
              <div className="text-xs text-electric-400 font-medium mt-0.5">↑ 23 vs yesterday</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function FloatingPill({ icon: Icon, color, label, sub, delay, index }: {
  icon: React.ElementType
  color: string
  label: string
  sub: string
  delay: number
  index: number
}) {
  const positions = [
    { top: '-16px', left: '-40px' },
    { bottom: '120px', right: '-32px' },
    { bottom: '20px', left: '-28px' },
  ]
  const pos = positions[index] || {}

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 0.5, delay: delay + 0.8 },
        scale: { duration: 0.5, delay: delay + 0.8 },
        y: { duration: 4, delay: delay + 1, repeat: Infinity, ease: 'easeInOut' },
      }}
      className="notif-pill absolute z-20"
      style={{ ...pos }}
    >
      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: `${color}20` }}>
        <Icon className="w-3.5 h-3.5" style={{ color }} />
      </div>
      <div>
        <div className="text-xs font-semibold text-soft-white" style={{ fontFamily: 'var(--font-display)' }}>{label}</div>
        <div className="text-xs text-muted">{sub}</div>
      </div>
    </motion.div>
  )
}
