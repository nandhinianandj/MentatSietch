import Link from 'next/link';

export const metadata = {
  title: 'AI / ML & Data Consulting | Axis I | Mentat Commons (mentatcommons.com)',
  description: 'Designing data pipelines and machine learning models that support real decisions and human agency. mentatcommons.com',
  alternates: {
    canonical: 'https://mentatcommons.com/axis-i/ai-ml-data-consulting',
  },
};

export default function AiMlDataConsultingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Sublink Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/axis-i" className="hover:text-blue-600 transition-colors">Axis I</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">AI / ML & Data Consulting</span>
      </nav>

      <h2 className="text-3xl font-bold text-gray-900">AI / ML & Data Consulting</h2>
      <p className="mt-2 text-xl text-gray-600">Designing systems teams can trust, question, and use</p>

      <div className="mt-8 space-y-4 text-lg">
        <p>Most organizations don’t need “more AI.”</p>
        <p>They need data and ML systems that:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>fit how decisions are actually made,</li>
          <li>can be explained and challenged,</li>
          <li>and don’t collapse when conditions change.</li>
        </ul>
        <p className="font-medium text-gray-900">This work treats AI and data as decision infrastructure, not standalone products.</p>
      </div>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-900">The core idea</h3>
        <p className="mt-4 text-lg text-gray-700">If a system can’t be explained, monitored, or overridden, it’s not production-ready.</p>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-900">What this work focuses on</h3>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div className="border p-6 rounded-lg bg-white shadow-sm">
            <h4 className="font-semibold text-xl text-blue-600">Data systems & architecture</h4>
            <ul className="list-disc list-inside ml-4 mt-3 space-y-2 text-gray-700">
              <li>End-to-end pipelines tied to decision use</li>
              <li>Clear ownership, validation, and observability</li>
              <li>Data modeled around decisions, not tables</li>
            </ul>
          </div>

          <div className="border p-6 rounded-lg bg-white shadow-sm">
            <h4 className="font-semibold text-xl text-blue-600">Machine learning design</h4>
            <ul className="list-disc list-inside ml-4 mt-3 space-y-2 text-gray-700">
              <li>Models chosen for context and risk</li>
              <li>Assumptions and limits made explicit</li>
              <li>Evaluation beyond accuracy alone</li>
            </ul>
          </div>

          <div className="border p-6 rounded-lg bg-white shadow-sm">
            <h4 className="font-semibold text-xl text-blue-600">Production & governance</h4>
            <ul className="list-disc list-inside ml-4 mt-3 space-y-2 text-gray-700">
              <li>Monitoring for drift and failure modes</li>
              <li>Rollback paths and escalation logic</li>
              <li>Governance that scales with use</li>
            </ul>
          </div>

          <div className="border p-6 rounded-lg bg-white shadow-sm">
            <h4 className="font-semibold text-xl text-blue-600">Workflow integration</h4>
            <ul className="list-disc list-inside ml-4 mt-3 space-y-2 text-gray-700">
              <li>Embedding outputs into real processes</li>
              <li>Human-in-the-loop checkpoints</li>
              <li>Clear guidance on when to trust or question outputs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-900">How engagements typically run</h3>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <h4 className="font-semibold text-xl text-gray-800">Diagnostic (2–8 weeks)</h4>
            <ul className="list-disc list-inside ml-4 mt-3 space-y-2 text-gray-700">
              <li>Decision mapping</li>
              <li>Data readiness assessment</li>
              <li>Feasibility analysis</li>
              <li>Clear recommendation (including not using ML)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-xl text-gray-800">Delivery & Architecture (3–12 months)</h4>
            <ul className="list-disc list-inside ml-4 mt-3 space-y-2 text-gray-700">
              <li>Incremental system build</li>
              <li>Early validation of assumptions</li>
              <li>Team training alongside delivery</li>
              <li>Practical handover</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 bg-gray-50 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-900">Anonymized case vignette</h3>
        <h4 className="text-xl font-medium mt-2 text-gray-800">“We had dashboards everywhere — and clarity nowhere”</h4>

        <div className="mt-6 space-y-3 text-lg text-gray-700">
          <p><strong>Situation:</strong> Multiple teams produced analytics, but decisions stalled.</p>
          <p><strong>What changed:</strong> We redesigned how data entered one recurring decision and clarified ownership.</p>
          <p><strong>Result:</strong> Meetings shortened. Decisions sped up. Dashboards finally mattered.</p>
        </div>
      </section>

      {/* Axis I Sister Sublinks Navigation */}
      <section className="mt-12 border-t pt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Axis I Sublinks</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/axis-i/decision-systems-org-design" className="block border p-4 rounded-lg hover:border-blue-500 transition-colors bg-white">
            <span className="text-xs font-semibold text-blue-600 block">NEXT SUBLINK →</span>
            <span className="font-bold text-gray-900">Decision Systems & Org Design</span>
            <p className="text-xs text-gray-600 mt-1">Making decision rules visible and improvable.</p>
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
          “Which decision would benefit most from better information — and what happens if we get it wrong?”
        </blockquote>
      </section>
    </div>
  )
}
