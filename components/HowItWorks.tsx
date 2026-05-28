'use client'

import { motion } from 'framer-motion'
import { Settings, Users, Bot, GitBranch, Monitor, TrendingUp, ArrowRight } from 'lucide-react'

const steps = [
  { id: 'configure', number: '01', icon: Settings, title: 'Configure your organization', description: 'Set up departments, workflows, roles, and permissions.', color: '#2563FF', bg: '#EFF6FF' },
  { id: 'connect', number: '02', icon: Users, title: 'Connect your workforce', description: 'Invite managers, supervisors, and operational staff.', color: '#16A34A', bg: '#F0FDF4' },
  { id: 'enable-ai', number: '03', icon: Bot, title: 'Enable AI assistants', description: 'Allow teams to create requests through AI-powered interfaces.', color: '#7C3AED', bg: '#F5F3FF' },
  { id: 'automate', number: '04', icon: GitBranch, title: 'Automate task coordination', description: 'Smartry intelligently routes tasks to available workers instantly.', color: '#D97706', bg: '#FFFBEB' },
  { id: 'monitor', number: '05', icon: Monitor, title: 'Monitor operations live', description: 'Track active tasks, SLA performance, and workforce activity.', color: '#0891B2', bg: '#ECFEFF' },
  { id: 'optimize', number: '06', icon: TrendingUp, title: 'Optimize performance', description: 'Use analytics to continuously improve workflows.', color: '#DB2777', bg: '#FDF2F8' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-grey py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="text-center mb-14">
          <p className="section-label mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
            Simple Setup. Powerful Insights.
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-xl mx-auto">
            Get up and running in hours. Designed for operational teams, not IT departments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {steps.map((step, i) => (
            <motion.div key={step.id} id={`step-${step.id}`}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.09, duration: 0.4 }}
              className="pro-card pro-card-hover p-6 cursor-default">
              <div className="flex items-start justify-between mb-4">
                <div className="icon-badge" style={{ background: step.bg, border: `1px solid ${step.color}20` }}>
                  <step.icon className="w-5 h-5" style={{ color: step.color }} />
                </div>
                <span className="text-3xl font-black opacity-10 leading-none" style={{ color: step.color, fontFamily: 'var(--font-display)' }}>
                  {step.number}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-base" style={{ fontFamily: 'var(--font-display)' }}>{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center">
          <a href="#pricing" className="btn-primary text-base px-7 py-3">
            Get Started Today <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
