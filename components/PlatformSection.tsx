'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, TrendingUp, Users, Clock, Building2, BarChart2, Globe, AlertCircle } from 'lucide-react'

const bullets = [
  { icon: TrendingUp, label: 'Real-time task tracking', color: '#2563FF' },
  { icon: Users, label: 'AI-based task routing', color: '#22c55e' },
  { icon: Building2, label: 'Multi-department coordination', color: '#f59e0b' },
  { icon: Clock, label: 'SLA compliance management', color: '#8b5cf6' },
  { icon: BarChart2, label: 'Workforce analytics', color: '#06b6d4' },
  { icon: AlertCircle, label: 'Escalation handling', color: '#ec4899' },
  { icon: Globe, label: 'Multi-location support', color: '#FFC72C' },
  { icon: CheckCircle2, label: 'Live operational reporting', color: '#34d399' },
]

const miniTasks = [
  { label: 'Task assigned to Sofia R.', time: '0:12', status: 'Assigned', color: '#2563FF' },
  { label: 'SLA warning — Room 208', time: '1:45', status: 'Warning', color: '#f59e0b' },
  { label: 'Maintenance completed', time: '3:22', status: 'Done', color: '#22c55e' },
  { label: 'New request from Lobby', time: '0:05', status: 'New', color: '#8b5cf6' },
  { label: 'AI routed to Floor 3 HK', time: '0:30', status: 'In Progress', color: '#06b6d4' },
]

export default function PlatformSection() {
  return (
    <section
      id="platform"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,255,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Platform Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div
                className="dash-card rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(37,99,255,0.12)' }}
              >
                {/* Header */}
                <div className="px-5 py-4 border-b border-border flex items-center justify-between bg-surface">
                  <div className="flex items-center gap-2">
                    <div className="live-dot" />
                    <span className="text-sm font-semibold text-soft-white" style={{ fontFamily: 'var(--font-display)' }}>
                      Operations Center
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted">Today</span>
                    <div className="px-2 py-0.5 rounded bg-electric/20 text-electric text-xs font-semibold">Live</div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 p-4">
                  {[
                    { label: 'Total Tasks', val: '142', color: '#2563FF' },
                    { label: 'Completed', val: '121', color: '#22c55e' },
                    { label: 'SLA Breaches', val: '2', color: '#f59e0b' },
                  ].map((s) => (
                    <div key={s.label} className="bg-surface-2 rounded-xl p-3 border border-border text-center">
                      <div className="text-2xl font-extrabold" style={{ color: s.color, fontFamily: 'var(--font-display)' }}>
                        {s.val}
                      </div>
                      <div className="text-xs text-muted mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Task Feed */}
                <div className="px-4 pb-4 space-y-2">
                  <div className="text-xs font-semibold text-muted-400 mb-3 uppercase tracking-wide">
                    Live Activity
                  </div>
                  {miniTasks.map((task, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.4 }}
                      className="flex items-center justify-between py-2.5 px-3 bg-surface-2 rounded-xl border border-border"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: task.color, boxShadow: `0 0 6px ${task.color}` }}
                        />
                        <span className="text-xs text-soft-white font-medium">{task.label}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs text-muted font-mono">{task.time}</span>
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={{ background: `${task.color}18`, color: task.color, fontFamily: 'var(--font-display)' }}
                        >
                          {task.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label mb-4">Complete Platform</p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-soft-white leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              One platform.{' '}
              <span className="gradient-text">Complete operational visibility.</span>
            </h2>
            <p className="text-lg text-muted-400 leading-relaxed mb-10">
              Smartry centralizes workforce coordination, operational requests, AI automation, and
              live reporting into one intelligent operational system.
            </p>

            {/* Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {bullets.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-center gap-3 py-2.5 px-4 bg-surface/50 rounded-xl border border-border/50"
                >
                  <b.icon className="w-4 h-4 flex-shrink-0" style={{ color: b.color }} />
                  <span className="text-sm text-soft-white font-medium">{b.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex gap-4"
            >
              <a href="#pricing" className="btn-electric text-sm">
                <span className="relative z-10">Start Free Trial</span>
              </a>
              <a href="#how-it-works" className="btn-outline text-sm">
                See How It Works
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
