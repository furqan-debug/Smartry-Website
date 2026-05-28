'use client'

import { motion, type Variants } from 'framer-motion'
import { Brain, Route, Clock, Smartphone, LayoutDashboard, BarChart3 } from 'lucide-react'

const features = [
  { id: 'ai-request', icon: Brain, title: 'AI-powered request handling', description: 'Allow guests, customers, or internal teams to create requests naturally through intelligent AI assistants.', color: '#2563FF', bg: '#EFF6FF' },
  { id: 'smart-alloc', icon: Route, title: 'Intelligent workforce coordination', description: 'Automatically assign tasks based on availability, department, workload, and operational rules.', color: '#16A34A', bg: '#F0FDF4' },
  { id: 'sla', icon: Clock, title: 'Real-time SLA monitoring', description: 'Track response and completion times with live SLA timers and automated escalation systems.', color: '#D97706', bg: '#FFFBEB' },
  { id: 'mobile', icon: Smartphone, title: 'Mobile workforce management', description: 'Workers receive, update, and complete assigned tasks directly from their mobile devices.', color: '#7C3AED', bg: '#F5F3FF' },
  { id: 'dashboard', icon: LayoutDashboard, title: 'Centralized operational visibility', description: 'Supervisors and managers monitor active tasks, departments, and workforce activity in real time.', color: '#0891B2', bg: '#ECFEFF' },
  { id: 'analytics', icon: BarChart3, title: 'Performance intelligence', description: 'Analyze operational efficiency, response trends, workforce productivity, and bottlenecks.', color: '#DB2777', bg: '#FDF2F8' },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function FeaturesSection() {
  return (
    <section id="features" className="section-light py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="text-center mb-14">
          <p className="section-label mb-3">Powerful Features</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
            Everything your operations team needs
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            A complete operational intelligence platform built for speed, reliability, and scale.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-40px' }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <motion.article key={f.id} id={`feature-${f.id}`} variants={cardVariants}
              whileHover={{ y: -3 }} className="pro-card pro-card-hover p-6 cursor-default">
              <div className="icon-badge mb-4" style={{ background: f.bg, border: `1px solid ${f.color}20` }}>
                <f.icon className="w-5 h-5" style={{ color: f.color }} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem' }}>{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
