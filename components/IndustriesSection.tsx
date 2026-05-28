'use client'

import { motion } from 'framer-motion'
import { Hotel, Hospital, UtensilsCrossed, Wrench, Building2, ShoppingBag, CalendarDays, Sparkles } from 'lucide-react'

const industries = [
  { id: 'hotels', icon: Hotel, name: 'Hotels & Hospitality', color: '#2563FF', bg: '#EFF6FF' },
  { id: 'hospitals', icon: Hospital, name: 'Hospitals & Clinics', color: '#16A34A', bg: '#F0FDF4' },
  { id: 'restaurants', icon: UtensilsCrossed, name: 'Restaurants', color: '#D97706', bg: '#FFFBEB' },
  { id: 'facilities', icon: Wrench, name: 'Facility Management', color: '#7C3AED', bg: '#F5F3FF' },
  { id: 'corporate', icon: Building2, name: 'Corporate Offices', color: '#0891B2', bg: '#ECFEFF' },
  { id: 'malls', icon: ShoppingBag, name: 'Shopping Malls', color: '#DB2777', bg: '#FDF2F8' },
  { id: 'events', icon: CalendarDays, name: 'Event Operations', color: '#D97706', bg: '#FFFBEB' },
  { id: 'cleaning', icon: Sparkles, name: 'Cleaning Services', color: '#0891B2', bg: '#ECFEFF' },
]

export default function IndustriesSection() {
  return (
    <section id="industries" className="section-light py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <p className="section-label mb-3">Industries</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
            Built for Modern Businesses
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-xl mx-auto">
            Smartry adapts to the unique operational needs of every service-based environment.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((ind, i) => (
            <motion.div key={ind.id} id={`industry-${ind.id}`}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.3 }}
              whileHover={{ y: -3, scale: 1.03 }}
              className="pro-card py-4 px-6 cursor-default flex flex-col items-center gap-2 min-w-[130px]">
              <div className="icon-badge" style={{ background: ind.bg, border: `1px solid ${ind.color}20` }}>
                <ind.icon className="w-5 h-5" style={{ color: ind.color }} />
              </div>
              <span className="text-sm font-semibold text-slate-700 text-center leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                {ind.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
