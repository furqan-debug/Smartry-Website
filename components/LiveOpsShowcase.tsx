'use client'

import { motion } from 'framer-motion'
import { Activity, Clock, Users, Building2, BarChart3 } from 'lucide-react'

const widgets = [
  { id: 'active', icon: Activity, title: 'Active Requests', value: '24', unit: 'open', color: '#2563FF', bg: '#EFF6FF' },
  { id: 'sla', icon: Clock, title: 'SLA Status', value: '3', unit: 'at risk', color: '#D97706', bg: '#FFFBEB' },
  { id: 'workers', icon: Users, title: 'Worker Availability', value: '18', unit: 'available', color: '#16A34A', bg: '#F0FDF4' },
  { id: 'dept', icon: Building2, title: 'Dept Performance', value: '94%', unit: 'efficiency', color: '#7C3AED', bg: '#F5F3FF' },
  { id: 'analytics', icon: BarChart3, title: 'Response Analytics', value: '4m 12s', unit: 'avg. time', color: '#DB2777', bg: '#FDF2F8' },
]

const deptData = [
  { name: 'Housekeeping', pct: 92, color: '#2563FF', tasks: 38 },
  { name: 'Food & Beverage', pct: 87, color: '#16A34A', tasks: 24 },
  { name: 'Engineering', pct: 78, color: '#D97706', tasks: 15 },
  { name: 'Front Office', pct: 96, color: '#7C3AED', tasks: 42 },
  { name: 'Concierge', pct: 88, color: '#DB2777', tasks: 19 },
]

export default function LiveOpsShowcase() {
  return (
    <section id="live-ops" className="section-grey py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 mb-4">
            <div className="live-dot" />
            <span className="text-xs font-semibold text-green-700" style={{ fontFamily: 'var(--font-display)' }}>Live Operational Data</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
            Real-time operational intelligence
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Complete visibility into your operations as they happen — no delays, no blind spots.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {widgets.map((w, i) => (
            <motion.div key={w.id} id={`widget-${w.id}`}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }} className="pro-card pro-card-hover p-5 cursor-default">
              <div className="icon-badge mb-3" style={{ background: w.bg, border: `1px solid ${w.color}20` }}>
                <w.icon className="w-5 h-5" style={{ color: w.color }} />
              </div>
              <div className="text-2xl font-extrabold mb-0.5" style={{ color: w.color, fontFamily: 'var(--font-display)' }}>{w.value}</div>
              <div className="text-xs text-slate-400 mb-2">{w.unit}</div>
              <div className="text-sm font-bold text-slate-800" style={{ fontFamily: 'var(--font-display)' }}>{w.title}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.25 }} className="pro-card p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-bold text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>Department Performance</h3>
              <p className="text-sm text-slate-500 mt-0.5">Operational efficiency by department</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-600 font-semibold">
              <div className="live-dot" /> Auto-refreshing
            </div>
          </div>
          <div className="space-y-4">
            {deptData.map((dept, i) => (
              <div key={dept.name}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: dept.color }} />
                    <span className="text-sm font-medium text-slate-700">{dept.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-slate-400">{dept.tasks} tasks</span>
                    <span className="text-sm font-bold" style={{ color: dept.color, fontFamily: 'var(--font-display)' }}>{dept.pct}%</span>
                  </div>
                </div>
                <div className="prog-bar">
                  <motion.div className="prog-bar-fill" initial={{ width: 0 }} whileInView={{ width: `${dept.pct}%` }}
                    viewport={{ once: true }} transition={{ duration: 1.1, delay: i * 0.12, ease: 'easeOut' }}
                    style={{ background: dept.color }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
