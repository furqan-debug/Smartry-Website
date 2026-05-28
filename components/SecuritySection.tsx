'use client'

import { motion } from 'framer-motion'
import { Lock, Shield, Eye, FileSearch, Key, Database, CheckCircle2 } from 'lucide-react'

const points = [
  { icon: Lock, label: 'End-to-end encrypted communication', color: '#2563FF' },
  { icon: Key, label: 'Role-based access control', color: '#16A34A' },
  { icon: Database, label: 'Secure cloud infrastructure', color: '#D97706' },
  { icon: FileSearch, label: 'Activity logging & auditing', color: '#7C3AED' },
  { icon: Shield, label: 'Multi-level permissions', color: '#0891B2' },
  { icon: Eye, label: 'Real-time data protection', color: '#DB2777' },
]

export default function SecuritySection() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }} id="security" className="section-light py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="text-center mb-14">
          <p className="section-label mb-3">Security</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
            Enterprise-Grade Security &amp; Privacy
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Built for operational environments where security and reliability are non-negotiable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }} className="lg:col-span-3 pro-card p-8 lg:p-10">
            <div className="icon-badge mb-6" style={{ width: 52, height: 52, background: '#EFF6FF', border: '1px solid #BFDBFE' }}>
              <Shield className="w-6 h-6 text-electric" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>Infrastructure built for trust</h3>
            <p className="text-slate-500 leading-relaxed mb-8 max-w-lg">
              Smartry is built with secure cloud infrastructure, real-time architecture, and enterprise-grade access control.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {points.map((p, i) => (
                <motion.div key={p.label} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 py-2.5 px-4 bg-slate-50 rounded-xl border border-slate-200">
                  <p.icon className="w-4 h-4 flex-shrink-0" style={{ color: p.color }} />
                  <span className="text-sm text-slate-700 font-medium">{p.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
              className="flex-1 pro-card p-7" style={{ borderColor: '#BFDBFE' }}>
              <div className="icon-badge mb-5" style={{ background: '#EFF6FF', border: '1px solid #BFDBFE' }}>
                <Lock className="w-5 h-5 text-electric" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>Privacy Commitment</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Operational and workforce data remains protected through enterprise-grade security and controlled access management.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.2 }}
              className="pro-card p-7" style={{ borderColor: '#A7F3D0' }}>
              <div className="flex items-start gap-4">
                <div className="icon-badge" style={{ background: '#F0FDF4', border: '1px solid #A7F3D0' }}>
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-display)' }}>Enterprise-ready</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Designed for organizations with strict security and compliance requirements.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
