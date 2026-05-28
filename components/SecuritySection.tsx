'use client'

import { motion } from 'framer-motion'
import { Lock, Shield, Eye, FileSearch, Key, Database, CheckCircle2 } from 'lucide-react'

const securityPoints = [
  { icon: Lock, label: 'End-to-end encrypted communication', color: '#2563FF' },
  { icon: Key, label: 'Role-based access control', color: '#22c55e' },
  { icon: Database, label: 'Secure cloud infrastructure', color: '#f59e0b' },
  { icon: FileSearch, label: 'Activity logging & auditing', color: '#8b5cf6' },
  { icon: Shield, label: 'Multi-level permissions', color: '#06b6d4' },
  { icon: Eye, label: 'Real-time data protection', color: '#ec4899' },
]

export default function SecuritySection() {
  return (
    <section id="security" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(37,99,255,0.04) 0%, transparent 50%, rgba(37,99,255,0.02) 100%)',
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Security</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-soft-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Enterprise-grade security{' '}
            <span className="gradient-text">&amp; infrastructure</span>
          </h2>
          <p className="mt-5 text-lg text-muted-400 max-w-2xl mx-auto">
            Built from the ground up for operational environments where security and reliability
            are non-negotiable.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left Large Card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 glass-card rounded-2xl p-8 lg:p-10 relative overflow-hidden"
          >
            {/* Background Shield Decoration */}
            <div
              className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full opacity-5"
              style={{ background: '#2563FF', filter: 'blur(40px)' }}
            />
            <div className="absolute right-8 bottom-8 opacity-5">
              <Shield className="w-48 h-48 text-electric" />
            </div>

            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7"
              style={{ background: 'rgba(37,99,255,0.15)', border: '1px solid rgba(37,99,255,0.3)' }}
            >
              <Shield className="w-7 h-7 text-electric" />
            </div>

            <h3
              className="text-2xl font-extrabold text-soft-white mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Infrastructure built for trust
            </h3>
            <p className="text-muted-400 leading-relaxed mb-8 max-w-lg">
              Smartry is built with secure cloud infrastructure, real-time architecture, and
              enterprise-grade access control to support critical operational environments.
            </p>

            {/* Security Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {securityPoints.map((point, i) => (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 py-2.5 px-4 bg-surface/50 rounded-xl border border-border/60"
                >
                  <point.icon className="w-4 h-4 flex-shrink-0" style={{ color: point.color }} />
                  <span className="text-sm text-soft-white font-medium">{point.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Cards Stack */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Privacy Card */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex-1 rounded-2xl p-7 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #0a2450 0%, #122d5c 100%)',
                border: '1px solid rgba(37,99,255,0.2)',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at top right, rgba(37,99,255,0.15) 0%, transparent 60%)' }}
              />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(37,99,255,0.2)', border: '1px solid rgba(37,99,255,0.35)' }}
              >
                <Lock className="w-6 h-6 text-electric" />
              </div>
              <h3
                className="text-xl font-bold text-soft-white mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Privacy Commitment
              </h3>
              <p className="text-muted-400 text-sm leading-relaxed">
                Operational and workforce data remains protected through enterprise-grade security
                standards and controlled access management.
              </p>
            </motion.div>

            {/* Compliance Card */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-2xl p-7 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,199,44,0.08) 0%, rgba(10,36,80,0.8) 60%)',
                border: '1px solid rgba(255,199,44,0.2)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,199,44,0.15)', border: '1px solid rgba(255,199,44,0.3)' }}
                >
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4
                    className="font-bold text-soft-white mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Enterprise-ready
                  </h4>
                  <p className="text-sm text-muted-400 leading-relaxed">
                    Designed for organizations with strict security and compliance requirements.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
