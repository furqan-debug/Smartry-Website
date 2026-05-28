'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight, Sparkles } from 'lucide-react'

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For small operational teams',
    price: null,
    cta: 'Start Free Trial',
    ctaHref: '#',
    featured: false,
    features: [
      'Basic workforce coordination',
      'Mobile worker app',
      'Task management',
      'Limited analytics',
      'Email support',
    ],
    color: '#2563FF',
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'For growing businesses',
    price: null,
    cta: 'Book Demo',
    ctaHref: '#',
    featured: true,
    features: [
      'AI task allocation',
      'SLA tracking & alerts',
      'Advanced analytics',
      'Multi-department support',
      'Live operational dashboard',
      'Priority support',
    ],
    color: '#2563FF',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For large-scale operations',
    price: null,
    cta: 'Contact Sales',
    ctaHref: '#',
    featured: false,
    features: [
      'Multi-location deployment',
      'Custom workflows',
      'API integrations',
      'Dedicated infrastructure',
      'Advanced permissions',
      'Enterprise onboarding',
      '24/7 dedicated support',
    ],
    color: '#8b5cf6',
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
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
          <p className="section-label mb-4">Pricing</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-soft-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Flexible plans for{' '}
            <span className="gradient-text">growing operations</span>
          </h2>
          <p className="mt-5 text-lg text-muted-400 max-w-2xl mx-auto">
            Choose the plan that fits your operational scale. Upgrade or customize as you grow.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              id={`plan-${plan.id}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className={`relative rounded-2xl overflow-hidden flex flex-col ${
                plan.featured ? 'scale-105 md:scale-105' : ''
              }`}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div
                  className="absolute top-0 left-0 right-0 py-1.5 text-center z-10"
                  style={{ background: 'linear-gradient(135deg, #2563FF, #1d50e0)' }}
                >
                  <span className="text-xs font-bold text-white tracking-wide flex items-center justify-center gap-1.5" style={{ fontFamily: 'var(--font-display)' }}>
                    <Sparkles className="w-3.5 h-3.5" />
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div
                className={`flex flex-col flex-1 p-7 lg:p-8 ${plan.featured ? 'pt-12' : ''}`}
                style={{
                  background: plan.featured
                    ? 'linear-gradient(135deg, #0f3070 0%, #0a2450 60%)'
                    : 'rgba(13, 37, 73, 0.6)',
                  border: plan.featured
                    ? '1px solid rgba(37,99,255,0.5)'
                    : '1px solid rgba(37,99,255,0.15)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: plan.featured
                    ? '0 24px 60px rgba(37,99,255,0.25), 0 0 0 1px rgba(37,99,255,0.3)'
                    : 'none',
                }}
              >
                {/* Plan Info */}
                <div className="mb-7">
                  <h3
                    className="text-2xl font-extrabold text-soft-white mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-400">{plan.tagline}</p>
                </div>

                {/* Price Placeholder */}
                <div className="mb-8">
                  <div
                    className="text-lg font-bold text-muted-400 border border-border/50 rounded-xl px-4 py-3 text-center"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Custom Pricing
                  </div>
                  <p className="text-xs text-muted text-center mt-2">
                    Contact us for tailored pricing
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: plan.featured ? '#2563FF' : '#22c55e' }}
                      />
                      <span className="text-sm text-muted-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.ctaHref}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.featured
                      ? 'btn-electric'
                      : 'btn-outline'
                  }`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <span className="relative z-10">{plan.cta}</span>
                  <ArrowRight className="w-4 h-4 relative z-10" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted mt-10"
        >
          All plans include a free trial. No credit card required to get started.
        </motion.p>
      </div>
    </section>
  )
}
