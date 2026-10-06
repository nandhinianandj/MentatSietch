import Link from 'next/link'

export const metadata = {
  title: 'All Links & Directory | Mentat Commons (mentatcommons.com)',
  description: 'Complete directory of links and sublinks for Mentat Commons, Axis I systems, capability training, research, and contact points.',
  alternates: {
    canonical: 'https://mentatcommons.com/links',
  },
}

export default function LinksPage() {
  return (
    <div className="py-12 px-4" style={{ background: '#0f172a', minHeight: '85vh' }}>
      <div className="max-w-2xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-900/60 text-blue-300 border border-blue-700/50">
            mentatcommons.com
          </div>
          <h1 className="text-white text-3xl font-bold tracking-tight">Mentat Commons — Links Directory</h1>
          <p className="text-slate-400 text-sm">
            Nandhini Anand • Senior AI Architect • Decision Systems • Facilitator
          </p>
        </div>

        {/* Core Pages */}
        <div className="space-y-3">
          <h2 className="text-xs uppercase font-bold tracking-wider text-slate-400 px-1">Primary Navigation</h2>
          <Link className="link-card hover:bg-slate-800 transition-colors border border-slate-800" href="/">
            🏠 Home — Production AI Infrastructure
          </Link>
          <Link className="link-card hover:bg-slate-800 transition-colors border border-slate-800" href="/core">
            🧭 Sensemaking & Pre-Decision Containment
          </Link>
          <Link className="link-card hover:bg-slate-800 transition-colors border border-slate-800" href="/portfolio">
            💼 Selected Work & Case Studies
          </Link>
          <Link className="link-card hover:bg-slate-800 transition-colors border border-slate-800" href="/about">
            🏢 About Mentat Commons & Philosophy
          </Link>
          <Link className="link-card hover:bg-slate-800 transition-colors border border-slate-800" href="/contact">
            📬 Contact & Collaboration Proposal
          </Link>
        </div>

        {/* Axis I Section & Sublinks */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs uppercase font-bold tracking-wider text-blue-400">Axis I — Systems & Decision Design</h2>
            <Link href="/axis-i" className="text-xs text-slate-400 hover:text-white transition-colors">Overview →</Link>
          </div>
          <Link className="link-card hover:bg-slate-800 transition-colors border border-slate-800" href="/axis-i">
            📐 Axis I Hub — Systems & Decision Design
          </Link>
          <div className="grid grid-cols-1 gap-2 pl-3 border-l-2 border-blue-900/60">
            <Link className="link-card text-left text-sm hover:bg-slate-800 transition-colors border border-slate-800/80" href="/axis-i/ai-ml-data-consulting">
              ↳ 🤖 Sublink: AI / ML & Data Consulting
            </Link>
            <Link className="link-card text-left text-sm hover:bg-slate-800 transition-colors border border-slate-800/80" href="/axis-i/decision-systems-org-design">
              ↳ 🏛️ Sublink: Decision Systems & Organizational Design
            </Link>
            <Link className="link-card text-left text-sm hover:bg-slate-800 transition-colors border border-slate-800/80" href="/axis-i/research-thought-leadership">
              ↳ 🔬 Sublink: Research & Thought Leadership
            </Link>
          </div>
        </div>

        {/* Training Section & Sublinks */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs uppercase font-bold tracking-wider text-green-400">Training & Capability Building</h2>
            <Link href="/training" className="text-xs text-slate-400 hover:text-white transition-colors">Overview →</Link>
          </div>
          <Link className="link-card hover:bg-slate-800 transition-colors border border-slate-800" href="/training">
            🎓 Training Hub — Capability & Team Practice
          </Link>
          <div className="grid grid-cols-1 gap-2 pl-3 border-l-2 border-emerald-900/60">
            <Link className="link-card text-left text-sm hover:bg-slate-800 transition-colors border border-slate-800/80" href="/training/learning-and-decision-labs">
              ↳ 🧪 Sublink: Decision & Learning Labs
            </Link>
          </div>
        </div>

        {/* Professional Profiles & Direct Channels */}
        <div className="space-y-3">
          <h2 className="text-xs uppercase font-bold tracking-wider text-slate-400 px-1">External Profiles & Booking</h2>
          <a className="link-card hover:bg-slate-800 transition-colors border border-slate-800 text-blue-300" href="https://calendly.com/nandhini-anand/15min" target="_blank" rel="noopener noreferrer">
            📅 Book a 15-Min System Audit (Calendly)
          </a>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a className="link-card hover:bg-slate-800 transition-colors border border-slate-800 text-sm" href="https://github.com/nandhinianandj" target="_blank" rel="noopener noreferrer">
              💻 GitHub (@nandhinianandj)
            </a>
            <a className="link-card hover:bg-slate-800 transition-colors border border-slate-800 text-sm" href="https://gitlab.com/nandhinianandj" target="_blank" rel="noopener noreferrer">
              🧩 GitLab (@nandhinianandj)
            </a>
            <a className="link-card hover:bg-slate-800 transition-colors border border-slate-800 text-sm" href="https://www.kaggle.com/nandhinianandjeyahar" target="_blank" rel="noopener noreferrer">
              📊 Kaggle Profile
            </a>
            <a className="link-card hover:bg-slate-800 transition-colors border border-slate-800 text-sm" href="https://softwaremechanic.wordpress.com" target="_blank" rel="noopener noreferrer">
              📝 WordPress Journal
            </a>
          </div>
          <a className="link-card hover:bg-slate-800 transition-colors border border-slate-800" href="/assets/Nandhini_Resume.pdf" target="_blank" rel="noopener noreferrer">
            📄 Curriculum Vitae / Resume (PDF)
          </a>
        </div>

        {/* Footer info */}
        <div className="text-center pt-4 text-xs text-slate-500 border-t border-slate-800">
          Canonical domain: <a href="https://mentatcommons.com" className="text-blue-400 hover:underline">https://mentatcommons.com</a>
        </div>

      </div>
    </div>
  )
}
