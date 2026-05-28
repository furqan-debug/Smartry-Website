import { Zap, Mail } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Solutions', href: '#platform' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Security', href: '#security' },
    { label: 'Integrations', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Contact', href: 'mailto:hello@smartry.io' },
    { label: 'Careers', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Security', href: '#security' },
  ],
}

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-border"
      style={{ background: 'rgba(5,20,48,0.95)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-electric rounded-lg rotate-12" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white relative z-10" strokeWidth={2.5} />
                </div>
              </div>
              <span className="text-xl font-bold text-soft-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Smart<span className="text-electric">ry</span>
              </span>
            </a>
            <p className="text-sm text-muted-400 leading-relaxed max-w-xs mb-6">
              AI-powered workforce coordination platform for hospitality and service operations.
            </p>
            {/* Contact */}
            <a
              href="mailto:hello@smartry.io"
              className="flex items-center gap-2.5 text-sm text-muted-400 hover:text-electric transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              hello@smartry.io
            </a>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3
                className="text-sm font-bold text-soft-white mb-5 uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-400 hover:text-soft-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Smartry. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Built for operational teams who demand excellence.
          </p>
        </div>
      </div>
    </footer>
  )
}
