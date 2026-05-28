'use client'

import { motion, type Variants } from 'framer-motion'
import { Brain, Route, Clock, Smartphone, LayoutDashboard, BarChart3 } from 'lucide-react'

const features = [
  {
    id: 'ai-request',
    icon: Brain,
    title: 'AI-powered request handling',
    description:
      'Allow guests, customers, or internal teams to create requests naturally through intelligent AI assistants.',
    color: '#2563FF',
    gradient: 'from-electric/20 to-transparent',
  },
  {
    id: 'smart-alloc',
    icon: Route,
    title: 'Intelligent workforce coordination',
    description:
      'Automatically assign tasks based on availability, department, workload, and operational rules.',
    color: '#22c55e',
    gradient: 'from-green-500/20 to-transparent',
  },
  {
    id: 'sla',
    icon: Clock,
    title: 'Real-time SLA monitoring',
    description:
      'Track response and completion times with live SLA timers and automated escalation systems.',
    color: '#f59e0b',
    gradient: 'from-amber-500/20 to-transparent',
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile workforce management',
    description:
      'Workers receive, update, and complete assigned tasks directly from their mobile devices.',
    color: '#8b5cf6',
    gradient: 'from-violet-500/20 to-transparent',
  },
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    title: 'Centralized operational visibility',
    description:
      'Supervisors and managers monitor active tasks, departments, and workforce activity in real time.',
    color: '#06b6d4',
    gradient: 'from-cyan-500/20 to-transparent',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Performance intelligence',
    description:
      'Analyze operational efficiency, response trends, workforce productivity, and bottlenecks.',
    color: '#ec4899',
    gradient: 'from-pink-500/20 to-transparent',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'circOut' } },
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="section-label mb-4">Powerful Features</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-soft-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Everything your operations team needs
          </h2>
          <p className="mt-5 text-lg text-muted-400 max-w-2xl mx-auto">
            A complete operational intelligence platform built for speed, reliability, and scale.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.article
              key={feature.id}
              id={`feature-${feature.id}`}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-7 cursor-default group transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
              style={{
                '--hover-color': feature.color,
              } as React.CSSProperties}
            >
              {/* Background gradient on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${feature.color}10 0%, transparent 60%)` }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative z-10 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${feature.color}18`, border: `1px solid ${feature.color}35` }}
              >
                <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
              </div>

              {/* Content */}
              <h3
                className="text-lg font-bold text-soft-white mb-3 relative z-10"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {feature.title}
              </h3>
              <p className="text-sm text-muted-400 leading-relaxed relative z-10">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)` }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
