'use client'

import { motion } from 'framer-motion'
import { Activity, Shield, Route, Cpu } from 'lucide-react'

const metrics = [
  { id: 'uptime', icon: Activity, value: '99.9%', label: 'Platform Uptime', color: '#16A34A' },
  { id: 'realtime', icon: Cpu, value: 'Real-Time', label: 'Workforce Insights', color: '#2563FF' },
  { id: 'security', icon: Shield, value: 'Enterprise-Grade', label: 'Security', color: '#7C3AED' },
  { id: 'routing', icon: Route, value: 'AI-Powered', label: 'Task Routing', color: '#D97706' },
]

export default function TrustBar() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }} id="trust" className="section-grey py-10" aria-label="Platform metrics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200">
          {metrics.map((m, i) => (
            <motion.div key={m.id}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="trust-badge py-4 justify-center lg:justify-start">
              <div className="icon-badge" style={{ background: `${m.color}12`, border: `1px solid ${m.color}25` }}>
                <m.icon className="w-5 h-5" style={{ color: m.color }} />
              </div>
              <div>
                <div className="font-bold text-sm" style={{ fontFamily: 'var(--font-display)', color: m.color }}>{m.value}</div>
                <div className="text-xs text-slate-500 font-medium">{m.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
