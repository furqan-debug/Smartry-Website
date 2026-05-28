'use client'

import { motion } from 'framer-motion'
import { Activity, Cpu, Route, Shield } from 'lucide-react'

const metrics = [
  {
    id: 'uptime',
    icon: Activity,
    value: '99.9%',
    label: 'Operational uptime',
    color: '#22c55e',
  },
  {
    id: 'realtime',
    icon: Cpu,
    value: 'Real-time',
    label: 'Coordination engine',
    color: '#2563FF',
  },
  {
    id: 'routing',
    icon: Route,
    value: 'AI-powered',
    label: 'Task routing',
    color: '#FFC72C',
  },
  {
    id: 'enterprise',
    icon: Shield,
    value: 'Enterprise',
    label: 'Ready infrastructure',
    color: '#8b5cf6',
  },
]

export default function TrustBar() {
  return (
    <section
      id="trust"
      className="py-12 relative"
      aria-label="Platform metrics"
    >
      <div className="absolute inset-0 border-y border-border/50 bg-surface/30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/30 rounded-2xl overflow-hidden border border-border/30">
          {metrics.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-4 p-6 bg-surface/60 backdrop-blur-sm"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${m.color}15`, border: `1px solid ${m.color}30` }}
              >
                <m.icon className="w-5 h-5" style={{ color: m.color }} />
              </div>
              <div>
                <div
                  className="text-lg font-bold leading-tight"
                  style={{ fontFamily: 'var(--font-display)', color: m.color }}
                >
                  {m.value}
                </div>
                <div className="text-sm text-muted-400 font-medium">{m.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
