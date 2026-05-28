'use client'

import { motion } from 'framer-motion'
import {
  Hotel, Hospital, UtensilsCrossed, Wrench, Building2, ShoppingBag, CalendarDays, Sparkles
} from 'lucide-react'

const industries = [
  {
    id: 'hotels',
    icon: Hotel,
    name: 'Hotels & Hospitality',
    description: 'Improve guest experience with intelligent service coordination.',
    color: '#2563FF',
  },
  {
    id: 'hospitals',
    icon: Hospital,
    name: 'Hospitals & Clinics',
    description: 'Coordinate staff requests and operational workflows efficiently.',
    color: '#22c55e',
  },
  {
    id: 'restaurants',
    icon: UtensilsCrossed,
    name: 'Restaurants',
    description: 'Streamline front-of-house and back-of-house coordination.',
    color: '#f59e0b',
  },
  {
    id: 'facilities',
    icon: Wrench,
    name: 'Facility Management',
    description: 'Manage maintenance, cleaning, and operational requests centrally.',
    color: '#8b5cf6',
  },
  {
    id: 'corporate',
    icon: Building2,
    name: 'Corporate Offices',
    description: 'Coordinate internal service operations across departments.',
    color: '#06b6d4',
  },
  {
    id: 'malls',
    icon: ShoppingBag,
    name: 'Shopping Malls',
    description: 'Manage operational teams and vendor coordination in real time.',
    color: '#ec4899',
  },
  {
    id: 'events',
    icon: CalendarDays,
    name: 'Event Operations',
    description: 'Handle logistics and workforce coordination during live events.',
    color: '#FFC72C',
  },
  {
    id: 'cleaning',
    icon: Sparkles,
    name: 'Cleaning Services',
    description: 'Track assignments, worker activity, and operational performance.',
    color: '#34d399',
  },
]

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(circle, #2563FF 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Industries</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-soft-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Built for modern service operations
          </h2>
          <p className="mt-5 text-lg text-muted-400 max-w-2xl mx-auto">
            From hotels to hospitals, Smartry adapts to the unique operational needs of every
            service-based environment.
          </p>
        </motion.div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((industry, i) => (
            <motion.article
              key={industry.id}
              id={`industry-${industry.id}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative glass-card rounded-2xl p-6 cursor-default overflow-hidden transition-all duration-300"
            >
              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1px ${industry.color}40` }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${industry.color}15`, border: `1px solid ${industry.color}30` }}
              >
                <industry.icon className="w-6 h-6" style={{ color: industry.color }} />
              </div>

              <h3
                className="font-bold text-soft-white mb-2 leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {industry.name}
              </h3>
              <p className="text-sm text-muted-400 leading-relaxed">{industry.description}</p>

              {/* Bottom glow line */}
              <div
                className="absolute bottom-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${industry.color}60, transparent)` }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
