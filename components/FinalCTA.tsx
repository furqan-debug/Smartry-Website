'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export default function FinalCTA() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }} id="final-cta" className="cta-blue py-24 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/30 mb-7">
            <span className="text-xs font-bold text-white tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
              Trusted by operational teams globally
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5" style={{ fontFamily: 'var(--font-display)' }}>
            Gain Complete Workforce Visibility
          </h2>

          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Improve operational efficiency, reduce delays, and operate with confidence using Smartry.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a id="final-cta-trial" href="mailto:hello@smartry.io"
              className="inline-flex items-center gap-2 bg-white text-electric font-bold px-7 py-3.5 rounded-xl text-base hover:bg-blue-50 transition-all duration-200 hover:shadow-xl"
              style={{ fontFamily: 'var(--font-display)' }}>
              Get in Touch <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
