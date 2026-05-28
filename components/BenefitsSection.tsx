'use client'

import { motion } from 'framer-motion'
import { Zap, ShieldCheck, LayoutPanelLeft, Users, Globe, LineChart } from 'lucide-react'

const benefits = [
  { id: 'speed', icon: Zap, title: 'Faster response times', description: 'Reduce delays with real-time intelligent task routing.', color: '#2563FF', bg: '#EFF6FF' },
  { id: 'accountability', icon: ShieldCheck, title: 'Better accountability', description: 'Track every request, assignment, and completion transparently.', color: '#16A34A', bg: '#F0FDF4' },
  { id: 'clarity', icon: LayoutPanelLeft, title: 'Reduced operational chaos', description: 'Replace fragmented communication with one unified platform.', color: '#D97706', bg: '#FFFBEB' },
  { id: 'efficiency', icon: Users, title: 'Improved workforce efficiency', description: 'Optimize task distribution and workflows automatically.', color: '#7C3AED', bg: '#F5F3FF' },
  { id: 'scale', icon: Globe, title: 'Scalable operations', description: 'Manage multiple departments and locations seamlessly.', color: '#0891B2', bg: '#ECFEFF' },
  { id: 'insights', icon: LineChart, title: 'Actionable operational insights', description: 'Gain real-time visibility into workforce performance.', color: '#DB2777', bg: '#FDF2F8' },
]

export default function BenefitsSection() {
  return (
    <section id="benefits" className="section-light py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="text-center mb-14">
          <p className="section-label mb-3">Benefits</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
            Designed for operational excellence
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Purpose-built for the operational realities of modern service businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.article key={b.id} id={`benefit-${b.id}`}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -3 }} className="pro-card pro-card-hover p-6 cursor-default flex gap-4">
              <div className="icon-badge flex-shrink-0" style={{ background: b.bg, border: `1px solid ${b.color}20` }}>
                <b.icon className="w-5 h-5" style={{ color: b.color }} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1.5 text-sm" style={{ fontFamily: 'var(--font-display)' }}>{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
