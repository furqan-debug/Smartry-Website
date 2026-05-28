'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Activity, Clock, Users, Building2, BarChart3 } from 'lucide-react'

const widgets = [
  {
    id: 'active-requests',
    icon: Activity,
    title: 'Active Requests',
    description: 'Live requests currently being processed',
    color: '#2563FF',
    value: '24',
    unit: 'open',
  },
  {
    id: 'sla-status',
    icon: Clock,
    title: 'SLA Status',
    description: 'Tasks approaching SLA deadlines',
    color: '#f59e0b',
    value: '3',
    unit: 'at risk',
  },
  {
    id: 'worker-availability',
    icon: Users,
    title: 'Worker Availability',
    description: 'Available vs busy workforce status',
    color: '#22c55e',
    value: '18',
    unit: 'available',
  },
  {
    id: 'dept-performance',
    icon: Building2,
    title: 'Department Performance',
    description: 'Operational metrics by department',
    color: '#8b5cf6',
    value: '94%',
    unit: 'efficiency',
  },
  {
    id: 'response-analytics',
    icon: BarChart3,
    title: 'Response Time Analytics',
    description: 'Average completion and response performance',
    color: '#ec4899',
    value: '4m 12s',
    unit: 'avg. time',
  },
]

const deptData = [
  { name: 'Housekeeping', pct: 92, color: '#2563FF', tasks: 38 },
  { name: 'Food & Beverage', pct: 87, color: '#22c55e', tasks: 24 },
  { name: 'Engineering', pct: 78, color: '#f59e0b', tasks: 15 },
  { name: 'Front Office', pct: 96, color: '#8b5cf6', tasks: 42 },
  { name: 'Concierge', pct: 88, color: '#ec4899', tasks: 19 },
]

export default function LiveOpsShowcase() {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="live-ops" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[1000px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(37,99,255,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-electric/10 mb-6">
            <div className="live-dot" />
            <span className="text-xs font-semibold text-electric-400 tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
              Live Operational Data
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-soft-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Real-time{' '}
            <span className="gradient-text">operational intelligence</span>
          </h2>
          <p className="mt-5 text-lg text-muted-400 max-w-2xl mx-auto">
            Get complete visibility into your operations as they happen — no delays, no blind spots.
          </p>
        </motion.div>

        {/* Widget Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {widgets.map((w, i) => (
            <motion.div
              key={w.id}
              id={`widget-${w.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card rounded-2xl p-5 cursor-default transition-all duration-300 group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${w.color}15`, border: `1px solid ${w.color}30` }}
              >
                <w.icon className="w-5 h-5" style={{ color: w.color }} />
              </div>

              <div
                className="text-2xl font-extrabold mb-0.5"
                style={{ color: w.color, fontFamily: 'var(--font-display)' }}
              >
                {w.value}
              </div>
              <div className="text-xs text-muted mb-2">{w.unit}</div>
              <div className="text-sm font-semibold text-soft-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                {w.title}
              </div>
              <div className="text-xs text-muted-400 leading-relaxed">{w.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Department Performance Panel */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-2xl p-6 lg:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3
                className="text-lg font-bold text-soft-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Department Performance
              </h3>
              <p className="text-sm text-muted-400 mt-1">Operational efficiency by department — live</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="live-dot" />
              <span className="text-xs text-muted font-medium">Auto-refreshing</span>
            </div>
          </div>

          <div className="space-y-4">
            {deptData.map((dept, i) => (
              <div key={dept.name} className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: dept.color, boxShadow: `0 0 8px ${dept.color}` }}
                    />
                    <span className="text-sm text-soft-white font-medium">{dept.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-muted">{dept.tasks} tasks</span>
                    <span
                      className="text-sm font-bold"
                      style={{ color: dept.color, fontFamily: 'var(--font-display)' }}
                    >
                      {dept.pct}%
                    </span>
                  </div>
                </div>
                <div className="sla-bar">
                  <motion.div
                    className="sla-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${dept.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.15, ease: 'easeOut' }}
                    style={{ background: `linear-gradient(90deg, ${dept.color}80, ${dept.color})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
