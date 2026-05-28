'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { id: 'how-assign', question: 'How does Smartry assign tasks?', answer: 'Smartry uses AI-powered allocation logic based on availability, departments, workload, and operational priorities. Tasks are routed instantly to the right available worker without any manual intervention.' },
  { id: 'only-hotels', question: 'Is Smartry only for hotels?', answer: 'No. Smartry is designed for hospitality and broader service-based operational environments including hospitals, restaurants, facility management, corporate offices, shopping malls, event operations, and cleaning services.' },
  { id: 'multi-location', question: 'Can Smartry support multiple locations?', answer: 'Yes. Businesses can manage multiple branches and operational teams centrally from a single dashboard. Each location has its own operational context while sharing cross-location analytics and reporting.' },
  { id: 'worker-training', question: 'Do workers need technical training?', answer: 'No. The worker app is designed to be simple and operationally efficient. Workers can receive, update, and complete tasks with minimal onboarding time.' },
  { id: 'live-monitoring', question: 'Can managers monitor operations live?', answer: 'Yes. Supervisors and managers can track operational activity, SLA status, and workforce performance in real time from the operations dashboard. All updates are reflected instantly.' },
  { id: 'custom-workflows', question: 'Does Smartry support custom workflows?', answer: 'Yes. Enterprise plans support custom operational workflows, department configurations, escalation rules, and API integrations with your existing systems.' },
]

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('how-assign')

  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }} id="faq" className="section-light py-24 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-500">
            Can&apos;t find what you&apos;re looking for?{' '}
            <a href="mailto:hello@smartry.io" className="text-electric hover:underline font-medium">hello@smartry.io</a>
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={faq.id} id={`faq-${faq.id}`}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="pro-card overflow-hidden">
              <button id={`faq-btn-${faq.id}`} aria-expanded={openId === faq.id} aria-controls={`faq-answer-${faq.id}`}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-slate-50 transition-colors duration-150">
                <span className="font-semibold text-slate-900 text-sm sm:text-base" style={{ fontFamily: 'var(--font-display)' }}>{faq.question}</span>
                <motion.div animate={{ rotate: openId === faq.id ? 180 : 0 }} transition={{ duration: 0.22 }} className="flex-shrink-0">
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div id={`faq-answer-${faq.id}`} role="region"
                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                    <div className="px-6 pb-5 border-t border-slate-100">
                      <p className="text-sm text-slate-600 leading-relaxed pt-4">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
