'use client'

import { motion } from 'framer-motion'
import { Settings, Users, Bot, GitBranch, Monitor, TrendingUp } from 'lucide-react'

const steps = [
  {
    id: 'configure',
    number: '01',
    icon: Settings,
    title: 'Configure your organization',
    description: 'Set up departments, operational workflows, roles, and permissions.',
    color: '#2563FF',
  },
  {
    id: 'connect',
    number: '02',
    icon: Users,
    title: 'Connect your workforce',
    description: 'Invite managers, supervisors, and operational staff to the platform.',
    color: '#22c55e',
  },
  {
    id: 'enable-ai',
    number: '03',
    icon: Bot,
    title: 'Enable AI assistants',
    description:
      'Allow customers or teams to create requests naturally through AI-powered assistants.',
    color: '#8b5cf6',
  },
  {
    id: 'automate',
    number: '04',
    icon: GitBranch,
    title: 'Automate task coordination',
    description:
      'Smartry intelligently allocates tasks to the right available workers instantly.',
    color: '#f59e0b',
  },
  {
    id: 'monitor',
    number: '05',
    icon: Monitor,
    title: 'Monitor operations live',
    description:
      'Track active tasks, SLA performance, workforce activity, and operational efficiency.',
    color: '#06b6d4',
  },
  {
    id: 'optimize',
    number: '06',
    icon: TrendingUp,
    title: 'Optimize operational performance',
    description:
      'Use analytics and operational insights to continuously improve workflows.',
    color: '#ec4899',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">How It Works</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-soft-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Simple setup.{' '}
            <span className="gradient-text">Intelligent operations.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-400 max-w-2xl mx-auto">
            Get up and running in hours, not months. Smartry is designed for operational teams,
            not IT departments.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              id={`step-${step.id}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Connector line (desktop, horizontal) */}
              {i % 3 !== 2 && (
                <div className="hidden lg:block absolute top-10 left-full w-8 h-px bg-border z-0 -translate-y-1/2" />
              )}

              <div className="glass-card rounded-2xl p-7 h-full group-hover:border-border-light transition-all duration-300 relative overflow-hidden">
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top left, ${step.color}08 0%, transparent 60%)` }}
                />

                {/* Step number */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}
                  >
                    <step.icon className="w-6 h-6" style={{ color: step.color }} />
                  </div>
                  <span
                    className="text-4xl font-black opacity-15 leading-none"
                    style={{ color: step.color, fontFamily: 'var(--font-display)' }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold text-soft-white mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-muted-400 leading-relaxed">{step.description}</p>

                {/* Accent bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <a href="#pricing" className="btn-electric text-base px-8 py-3.5">
            <span className="relative z-10">Get Started Today</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
