'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Building2, BarChart2, Globe, AlertCircle, CheckCircle2, Clock } from 'lucide-react'

const bullets = [
  { icon: TrendingUp, label: 'Real-time task tracking', color: '#2563FF' },
  { icon: Users, label: 'AI-based task routing', color: '#16A34A' },
  { icon: Building2, label: 'Multi-department coordination', color: '#D97706' },
  { icon: Clock, label: 'SLA compliance management', color: '#7C3AED' },
  { icon: BarChart2, label: 'Workforce analytics', color: '#0891B2' },
  { icon: AlertCircle, label: 'Escalation handling', color: '#DB2777' },
  { icon: Globe, label: 'Multi-location support', color: '#D97706' },
  { icon: CheckCircle2, label: 'Live operational reporting', color: '#16A34A' },
]

const liveItems = [
  { label: 'Task assigned to Sofia R.', time: '0:12', status: 'Assigned', color: '#2563FF' },
  { label: 'SLA warning — Room 208', time: '1:45', status: 'Warning', color: '#D97706' },
  { label: 'Maintenance completed', time: '3:22', status: 'Done', color: '#16A34A' },
  { label: 'New request from Lobby', time: '0:05', status: 'New', color: '#7C3AED' },
  { label: 'AI routed to Floor 3 HK', time: '0:30', status: 'In Progress', color: '#0891B2' },
]

export default function PlatformSection() {
  return (
    <section id="platform" className="section-grey py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55 }}>
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="dashboard-frame">
              <div className="dashboard-topbar justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="live-dot" />
                  <span className="text-xs font-semibold text-slate-600" style={{ fontFamily: 'var(--font-display)' }}>Operations Center</span>
                </div>
                <div className="px-2 py-0.5 bg-electric-50 border border-electric-200 rounded-full text-xs font-bold text-electric" style={{ fontFamily: 'var(--font-display)' }}>Live</div>
              </div>
              <div className="p-4 bg-slate-50">
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {[{ l: 'Total Tasks', v: '142', c: '#2563FF' }, { l: 'Completed', v: '121', c: '#16A34A' }, { l: 'SLA Breaches', v: '2', c: '#D97706' }].map((s) => (
                    <div key={s.l} className="bg-white rounded-xl border border-slate-200 p-3 text-center shadow-sm">
                      <div className="text-xl font-extrabold" style={{ color: s.c, fontFamily: 'var(--font-display)' }}>{s.v}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-3">
                  <div className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-3" style={{ fontFamily: 'var(--font-display)' }}>Live Activity</div>
                  <div className="space-y-2">
                    {liveItems.map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ delay: i * 0.08 + 0.3 }}
                        className="flex items-center justify-between py-2 px-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-xs text-slate-700">{item.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-400 font-mono">{item.time}</span>
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                            style={{ background: `${item.color}12`, color: item.color, fontFamily: 'var(--font-display)' }}>{item.status}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55 }}>
            <p className="section-label mb-3">One Platform</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              One Platform.{' '}<span className="gradient-text">Complete Operational Visibility.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Smartry centralizes workforce coordination, operational requests, AI automation, and live reporting into one intelligent system.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {bullets.map((b, i) => (
                <motion.div key={b.label} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.35 }}
                  className="flex items-center gap-2.5 py-2 px-3 bg-white rounded-lg border border-slate-200">
                  <b.icon className="w-4 h-4 flex-shrink-0" style={{ color: b.color }} />
                  <span className="text-sm text-slate-700 font-medium">{b.label}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex gap-3">
              <a href="#pricing" className="btn-primary">Start Free Trial</a>
              <a href="#how-it-works" className="btn-outline">How It Works</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
