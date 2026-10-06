import './globals.css'
import Link from 'next/link'
import ChatWidget from './components/ChatWidget'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
}

export const metadata = {
  metadataBase: new URL('https://mentatcommons.com'),
  title: 'Mentat Commons | Nandhini Anand — AI Architect & Decision Systems',
  description: 'Nandhini Anand is a Senior AI Architect building production AI infrastructure, decision systems, and capability training. mentatcommons.com',
  alternates: {
    canonical: 'https://mentatcommons.com',
  },
  openGraph: {
    title: 'Mentat Commons | Nandhini Anand — AI Architect & Decision Systems',
    description: 'Nandhini Anand is a Senior AI Architect building production AI infrastructure, decision systems, and capability training.',
    url: 'https://mentatcommons.com',
    siteName: 'Mentat Commons',
    images: [{
      url: '/images/mentat-commons-og.png',
      width: 1200,
      height: 630,
      alt: 'Mentat Commons',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mentat Commons | Nandhini Anand — AI Architect & Decision Systems',
    description: 'Nandhini Anand is a Senior AI Architect building production AI infrastructure, decision systems, and capability training.',
    images: ['/images/mentat-commons-og.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <header className="bg-navy text-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <Link href="/" className="text-2xl font-semibold tracking-tight hover:text-blue-200 transition-colors">
                  Mentat Commons
                </Link>
                <p className="text-xs text-gray-300 mt-0.5">Designing decisions for collective intelligence • mentatcommons.com</p>
              </div>
              <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
                <Link className="hover:text-blue-300 transition-colors" href="/">Home</Link>
                <Link className="hover:text-blue-300 transition-colors" href="/axis-i">Axis I</Link>
                <Link className="hover:text-blue-300 transition-colors" href="/training">Training</Link>
                <Link className="hover:text-blue-300 transition-colors" href="/core">Sensemaking</Link>
                <Link className="hover:text-blue-300 transition-colors" href="/portfolio">Portfolio</Link>
                <Link className="hover:text-blue-300 transition-colors" href="/about">About</Link>
                <Link className="hover:text-blue-300 transition-colors" href="/contact">Contact</Link>
                <Link className="px-2.5 py-1 rounded bg-blue-600/40 border border-blue-400/40 hover:bg-blue-600/70 transition-colors" href="/links">
                  Links Hub
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-navy text-white py-12 mt-16 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-sm">
              <div>
                <h4 className="font-semibold text-white mb-3">Mentat Commons</h4>
                <p className="text-gray-400 text-xs leading-relaxed mb-3">
                  Production AI infrastructure, decision systems, and high-agency capability training.
                </p>
                <Link href="https://mentatcommons.com" className="text-xs text-blue-400 hover:underline">
                  mentatcommons.com
                </Link>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Axis I — Systems</h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  <li><Link className="hover:text-white transition-colors" href="/axis-i">Axis I Overview</Link></li>
                  <li><Link className="hover:text-white transition-colors" href="/axis-i/ai-ml-data-consulting">AI/ML & Data Consulting</Link></li>
                  <li><Link className="hover:text-white transition-colors" href="/axis-i/decision-systems-org-design">Decision Systems & Org Design</Link></li>
                  <li><Link className="hover:text-white transition-colors" href="/axis-i/research-thought-leadership">Research & Frameworks</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Training & Practice</h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  <li><Link className="hover:text-white transition-colors" href="/training">Training & Capability</Link></li>
                  <li><Link className="hover:text-white transition-colors" href="/training/learning-and-decision-labs">Decision & Learning Labs</Link></li>
                  <li><Link className="hover:text-white transition-colors" href="/core">Sensemaking & Containment</Link></li>
                  <li><Link className="hover:text-white transition-colors" href="/portfolio">Selected Case Studies</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Connect & Links</h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  <li><Link className="hover:text-white transition-colors" href="/about">About Nandhini Anand</Link></li>
                  <li><Link className="hover:text-white transition-colors" href="/contact">Contact / Collaborate</Link></li>
                  <li><Link className="hover:text-white transition-colors" href="/links">All Links & Resources</Link></li>
                  <li><a className="hover:text-white transition-colors" href="https://calendly.com/nandhini-anand/15min" target="_blank" rel="noopener noreferrer">Book System Audit ↗</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 text-center text-xs text-gray-400">
              <p>© 2026 Mentat Commons (<a href="https://mentatcommons.com" className="hover:underline text-blue-400">mentatcommons.com</a>) — Axis I • Training • Desert Intelligence • Sietch Protocol</p>
            </div>
          </div>
        </footer>
        <ChatWidget />
      </body>
    </html>
  )
}
