'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight, Sparkles } from 'lucide-react'

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For small operational teams',
    cta: 'Start Free Trial',
    ctaHref: '#',
    featured: false,
    features: ['Basic workforce coordination', 'Mobile worker app', 'Task management', 'Limited analytics', 'Email support'],
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'For growing businesses',
    cta: 'Book a Demo',
    ctaHref: '#',
    featured: true,
    features: ['AI task allocation', 'SLA tracking & alerts', 'Advanced analytics', 'Multi-department support', 'Live operational dashboard', 'Priority support'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For large-scale operations',
    cta: 'Contact Sales',
    ctaHref: '#',
    featured: false,
    features: ['Multi-location deployment', 'Custom workflows', 'API integrations', 'Dedicated infrastructure', 'Advanced permissions', 'Enterprise onboarding', '24/7 dedicated support'],
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="section-grey py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="text-center mb-14">
          <p className="section-label mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
            Flexible Plans for Every Team
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your operational scale. Upgrade as you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div key={plan.id} id={`plan-${plan.id}`}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden flex flex-col ${plan.featured ? 'shadow-xl' : ''}`}>
              {plan.featured && (
                <div className="bg-electric py-1.5 text-center">
                  <span className="text-xs font-bold text-white tracking-wide flex items-center justify-center gap-1.5" style={{ fontFamily: 'var(--font-display)' }}>
                    <Sparkles className="w-3.5 h-3.5" /> MOST POPULAR
                  </span>
                </div>
              )}
              <div className={`flex flex-col flex-1 p-7 lg:p-8 bg-white border border-slate-200 ${plan.featured ? 'border-electric/40' : ''}`}
                style={plan.featured ? { boxShadow: '0 8px 40px rgba(37,99,255,0.12)' } : {}}>
                <div className="mb-6">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-1" style={{ fontFamily: 'var(--font-display)' }}>{plan.name}</h3>
                  <p className="text-sm text-slate-500">{plan.tagline}</p>
                </div>

                <div className="mb-7 p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                  <div className="text-sm font-semibold text-slate-500" style={{ fontFamily: 'var(--font-display)' }}>Custom Pricing</div>
                  <div className="text-xs text-slate-400 mt-1">Contact us for tailored pricing</div>
                </div>

                <ul className="space-y-3 mb-7 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: plan.featured ? '#2563FF' : '#16A34A' }} />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href={plan.ctaHref}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 ${plan.featured ? 'btn-primary' : 'btn-outline'}`}
                  style={{ fontFamily: 'var(--font-display)' }}>
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
          className="text-center text-sm text-slate-500 mt-8">
          All plans include a free trial. No credit card required to get started.
        </motion.p>
      </div>
    </section>
  )
}
