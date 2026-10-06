import Link from 'next/link';

export const metadata = {
  title: 'Decision Systems & Org Design | Axis I | Mentat Commons (mentatcommons.com)',
  description: 'Making decision-making explicit, improvable, and accountable across human and technical organizations. mentatcommons.com',
  alternates: {
    canonical: 'https://mentatcommons.com/axis-i/decision-systems-org-design',
  },
};

export default function DecisionSystemsOrgDesignPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Sublink Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/axis-i" className="hover:text-blue-600 transition-colors">Axis I</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">Decision Systems & Org Design</span>
      </nav>

      <h2 className="text-3xl font-bold text-gray-900">Decision Systems & Organizational Design</h2>
      <p className="mt-2 text-xl text-gray-600">Making decision-making visible and improvable</p>

      <div className="mt-8 space-y-4 text-lg">
        <p>Most organizations rely on implicit decision rules:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>who decides,</li>
          <li>what counts as evidence,</li>
          <li>how trade-offs are handled.</li>
        </ul>
        <p>When those rules stay implicit, decisions stall or repeat.</p>
        <p className="font-medium text-gray-900">This work makes them explicit.</p>
      </div>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-900">The core idea</h3>
        <p className="mt-4 text-lg text-gray-700">Most decision problems aren’t disagreements about goals — they’re disagreements about process.</p>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-900">What this work involves</h3>
        <ul className="list-disc list-inside ml-4 mt-4 space-y-2 text-lg text-gray-700">
          <li>Mapping how key decisions are actually made</li>
          <li>Identifying breakdowns in information, authority, or incentives</li>
          <li>Redesigning decision rights and escalation paths</li>
          <li>Aligning metrics with real priorities</li>
        </ul>
        <p className="mt-4 text-lg text-gray-700">This work combines analysis with structured conversations.</p>
      </section>

      <section className="mt-12 bg-gray-50 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-900">Anonymized case vignette</h3>
        <h4 className="text-xl font-medium mt-2 text-gray-800">“Everyone agreed — and nothing changed”</h4>

        <div className="mt-6 space-y-3 text-lg text-gray-700">
          <p><strong>Situation:</strong> A leadership team left meetings aligned, but execution didn’t improve.</p>
          <p><strong>What we found:</strong> Decision ownership was never explicit.</p>
          <p><strong>What changed:</strong> We redesigned the decision process around one critical choice.</p>
          <p><strong>Result:</strong> Follow-through improved without adding oversight.</p>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-900">Outcomes organizations see</h3>
        <ul className="list-disc list-inside ml-4 mt-4 space-y-2 text-lg text-gray-700">
          <li>Clearer ownership</li>
          <li>Fewer stalled discussions</li>
          <li>Decisions that survive execution</li>
        </ul>
      </section>

      {/* Axis I Sister Sublinks Navigation */}
      <section className="mt-12 border-t pt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Axis I Sublinks</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/axis-i/ai-ml-data-consulting" className="block border p-4 rounded-lg hover:border-blue-500 transition-colors bg-white">
            <span className="text-xs font-semibold text-blue-600 block">← PREVIOUS SUBLINK</span>
            <span className="font-bold text-gray-900">AI / ML & Data Consulting</span>
            <p className="text-xs text-gray-600 mt-1">Data systems and ML models tied to real decision use.</p>
          </Link>
          <Link href="/axis-i/research-thought-leadership" className="block border p-4 rounded-lg hover:border-blue-500 transition-colors bg-white">
            <span className="text-xs font-semibold text-blue-600 block">NEXT SUBLINK →</span>
            <span className="font-bold text-gray-900">Research & Thought Leadership</span>
            <p className="text-xs text-gray-600 mt-1">Frameworks for decision-making under uncertainty.</p>
          </Link>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <blockquote className="border-l-4 border-blue-500 pl-6 italic text-lg text-gray-700">
          “Which decision keeps coming back — without improving?”
        </blockquote>
      </section>
    </div>
  )
}
