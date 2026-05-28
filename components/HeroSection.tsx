'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, CheckCircle, Zap } from 'lucide-react'

const slides = [
  {
    id: 'hospitality',
    phrase: 'hospitality teams',
    sub: 'Automate task coordination, reduce response times, and give every department the operational clarity it needs.',
  },
  {
    id: 'workforce',
    phrase: 'workforce operations',
    sub: 'Route tasks intelligently, track SLA performance in real time, and keep your entire workforce in sync.',
  },
  {
    id: 'service',
    phrase: 'service businesses',
    sub: 'From hotels to hospitals to facilities — Smartry adapts to your operations and scales as you grow.',
  },
]

const activeTasks = [
  { dept: 'F&B', label: 'Room Service — Suite 8B', status: 'In Progress', pct: 65, color: '#2563FF' },
  { dept: 'HK', label: 'Housekeeping — Room 310', status: 'Assigned', pct: 30, color: '#16A34A' },
  { dept: 'ENG', label: 'Maintenance — Elevator A', status: 'In Progress', pct: 80, color: '#D97706' },
  { dept: 'FO', label: 'Concierge — Booking req.', status: 'Pending', pct: 10, color: '#7C3AED' },
]

export default function HeroSection() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 2800)
    return () => clearInterval(t)
  }, [])

  const current = slides[idx]
  return (
    <section id="hero" className="section-light pt-24 pb-16 lg:pt-28 lg:pb-24 relative overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #E2E8F0 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, rgba(37,99,255,0.05) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-50 border border-electric-200 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-electric" />
              <span className="text-xs font-semibold text-electric" style={{ fontFamily: 'var(--font-display)' }}>
                AI-Powered Workforce Coordination Platform
              </span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5">
              <h1
                className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-tight tracking-tight text-slate-900"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {/* Static first line */}
                The AI operating system for

                {/* Line break before animated phrase */}
                <br />

                {/* Animated cycling phrase */}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={current.id}
                    initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -24, filter: 'blur(6px)' }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="gradient-text"
                    style={{ display: 'inline-block' }}
                  >
                    {current.phrase}
                  </motion.span>
                </AnimatePresence>
              </h1>

              {/* Slide indicators */}
              <div className="flex items-center gap-1.5 mt-4">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setIdx(i)}
                    aria-label={`Show slide ${i + 1}`}
                    className="transition-all duration-400 rounded-full"
                    style={{
                      width: i === idx ? 24 : 8,
                      height: 8,
                      background: i === idx ? '#2563FF' : '#CBD5E1',
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Animated subtitle */}
            <div className="mb-8 max-w-lg" style={{ minHeight: '4rem' }}>
              <AnimatePresence mode="wait">
                <motion.p
                  key={current.id + '-sub'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="text-lg text-slate-600 leading-relaxed"
                >
                  {current.sub}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-7">
              <a id="hero-cta-trial" href="#pricing" className="btn-accent text-base px-6 py-3">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </a>
              <a id="hero-cta-demo" href="#pricing" className="btn-outline text-base px-6 py-3">
                <Play className="w-4 h-4" /> Book a Demo
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-2 text-sm text-slate-500">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              Built for hospitality, healthcare, facility management, and service operations
            </motion.div>
          </div>

          {/* Right: Dashboard */}
          <motion.div initial={{ opacity: 0, x: 30, scale: 0.97 }} animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }} className="relative hidden lg:block">
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="dashboard-frame">
              {/* Window Bar */}
              <div className="dashboard-topbar justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="live-dot" />
                  <span className="text-xs font-semibold text-slate-600" style={{ fontFamily: 'var(--font-display)' }}>Smartry Operations</span>
                </div>
                <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">Live</span>
              </div>

              <div className="p-4 bg-slate-50 space-y-3">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Active Tasks', value: '24', delta: '+3 today', color: '#2563FF' },
                    { label: 'Workers Online', value: '18', delta: '94% active', color: '#16A34A' },
                    { label: 'SLA Rate', value: '98.4%', delta: '↑2.1%', color: '#D97706' },
                  ].map((m) => (
                    <div key={m.label} className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm">
                      <div className="text-xl font-bold mb-0.5" style={{ color: m.color, fontFamily: 'var(--font-display)' }}>{m.value}</div>
                      <div className="text-xs text-slate-500">{m.label}</div>
                      <div className="text-xs mt-1 font-semibold" style={{ color: m.color }}>{m.delta}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-3">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-700" style={{ fontFamily: 'var(--font-display)' }}>Active Requests</span>
                    <span className="text-xs text-slate-400">Live</span>
                  </div>
                  <div className="space-y-2.5">
                    {activeTasks.map((task) => (
                      <div key={task.dept}>
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold px-1.5 py-0.5 rounded"
                              style={{ background: `${task.color}15`, color: task.color, fontFamily: 'var(--font-display)' }}>{task.dept}</span>
                            <span className="text-xs text-slate-600 truncate max-w-[120px]">{task.label}</span>
                          </div>
                          <span className="text-xs font-semibold" style={{ color: task.color, fontFamily: 'var(--font-display)' }}>{task.status}</span>
                        </div>
                        <div className="prog-bar">
                          <motion.div className="prog-bar-fill" initial={{ width: 0 }}
                            animate={{ width: `${task.pct}%` }} transition={{ duration: 1.2, delay: 0.7, ease: 'easeOut' }}
                            style={{ background: task.color }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-3">
                    <div className="text-xs text-slate-500 mb-1">Avg Response</div>
                    <div className="text-base font-bold text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>4m 12s</div>
                    <div className="text-xs text-green-600 font-semibold mt-0.5">↓ 18% this week</div>
                  </div>
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-3">
                    <div className="text-xs text-slate-500 mb-1">Completed Today</div>
                    <div className="text-base font-bold text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>142</div>
                    <div className="text-xs text-electric font-semibold mt-0.5">↑ 23 vs yesterday</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating pills */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0, y: [0, -4, 0] }}
              transition={{ opacity: { duration: 0.4, delay: 1 }, x: { duration: 0.4, delay: 1 }, y: { duration: 3.5, delay: 1.3, repeat: Infinity } }}
              className="absolute -right-8 top-20 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 flex items-center gap-3 z-10" style={{ minWidth: 190 }}>
              <div className="w-8 h-8 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800" style={{ fontFamily: 'var(--font-display)' }}>Task completed</div>
                <div className="text-xs text-slate-500">SLA met · 4m 32s</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
              transition={{ opacity: { duration: 0.4, delay: 1.3 }, x: { duration: 0.4, delay: 1.3 }, y: { duration: 4, delay: 1.7, repeat: Infinity } }}
              className="absolute -left-8 bottom-24 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 flex items-center gap-3 z-10" style={{ minWidth: 185 }}>
              <div className="w-8 h-8 bg-electric-50 border border-electric-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-electric" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800" style={{ fontFamily: 'var(--font-display)' }}>AI task routed</div>
                <div className="text-xs text-slate-500">Housekeeping · Floor 4</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
