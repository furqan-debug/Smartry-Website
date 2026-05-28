import { Mail } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Solutions', href: '#platform' },

    { label: 'Security', href: '#security' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Contact', href: 'mailto:hello@smartry.io' },
    { label: 'Careers', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
  Contact: [
    { label: 'hello@smartry.io', href: 'mailto:hello@smartry.io' },
  ],
}

export default function Footer() {
  return (
    <footer id="footer" style={{ background: '#0F172A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-5">
              <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Smartry</span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-5">
              AI-powered workforce coordination platform for hospitality and service operations.
            </p>
            <a href="mailto:hello@smartry.io" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200">
              <Mail className="w-4 h-4" /> hello@smartry.io
            </a>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-bold text-white mb-4 uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-200">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Smartry. All rights reserved.</p>
          <p className="text-sm text-slate-500">Built for operational teams who demand excellence.</p>
        </div>
      </div>
    </footer>
  )
}
