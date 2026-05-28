'use client'

import { motion } from 'framer-motion'
import { Zap, ShieldCheck, LayoutPanelLeft, Users, Globe, LineChart } from 'lucide-react'

const benefits = [
  {
    id: 'speed',
    icon: Zap,
    title: 'Faster response times',
    description: 'Reduce delays with real-time intelligent task routing.',
    color: '#2563FF',
  },
  {
    id: 'accountability',
    icon: ShieldCheck,
    title: 'Better accountability',
    description: 'Track every request, assignment, and completion transparently.',
    color: '#22c55e',
  },
  {
    id: 'clarity',
    icon: LayoutPanelLeft,
    title: 'Reduced operational chaos',
    description: 'Replace fragmented communication systems with one unified platform.',
    color: '#f59e0b',
  },
  {
    id: 'efficiency',
    icon: Users,
    title: 'Improved workforce efficiency',
    description: 'Optimize task distribution and operational workflows automatically.',
    color: '#8b5cf6',
  },
  {
    id: 'scale',
    icon: Globe,
    title: 'Scalable operations',
    description: 'Manage multiple departments and locations seamlessly.',
    color: '#06b6d4',
  },
  {
    id: 'insights',
    icon: LineChart,
    title: 'Actionable operational insights',
    description: 'Gain real-time visibility into workforce and operational performance.',
    color: '#ec4899',
  },
]

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(37,99,255,0.03) 50%, transparent 100%)',
        }}
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
          <p className="section-label mb-4">Benefits</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-soft-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Designed for{' '}
            <span className="gradient-text">operational excellence</span>
          </h2>
          <p className="mt-5 text-lg text-muted-400 max-w-2xl mx-auto">
            Purpose-built for the operational realities of modern service businesses.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.article
              key={benefit.id}
              id={`benefit-${benefit.id}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group flex gap-5 p-6 glass-card rounded-2xl transition-all duration-300 cursor-default overflow-hidden relative"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${benefit.color}10 0%, transparent 60%)` }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 relative"
                style={{ background: `${benefit.color}15`, border: `1px solid ${benefit.color}30` }}
              >
                <benefit.icon className="w-6 h-6" style={{ color: benefit.color }} />
              </div>

              {/* Text */}
              <div className="relative">
                <h3
                  className="font-bold text-soft-white mb-2 text-base"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-400 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
