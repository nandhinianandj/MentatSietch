import Link from 'next/link';

export default function Axis1Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold">Systems & Decision Design</h2>
      <p className="mt-2 text-xl text-gray-600">Helping organizations make decisions they can stand behind</p>

      <div className="mt-8 space-y-4 text-lg">
        <p>Most organizations don’t struggle because they lack intelligence, data, or tools.</p>
        <p>They struggle because:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>decisions are unclear or avoided,</li>
          <li>information arrives too late or in the wrong form,</li>
          <li>metrics reward the wrong behavior,</li>
          <li>and learning doesn’t carry forward.</li>
        </ul>
        <p className="font-medium">Axis I focuses on fixing that.</p>
        <p>This work is about designing decision systems — the combination of data, models, processes, and ownership that determines how choices are made in practice.</p>
      </div>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">The core idea (simple and explicit)</h3>
        <div className="mt-4 space-y-2 text-lg">
          <p>If decisions are slow, fragile, or contested, the problem is rarely technical.</p>
          <p>It’s usually a design problem — in how decisions are structured, supported, and owned.</p>
          <p className="font-semibold">Axis I exists to solve that.</p>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">What a “decision system” actually is</h3>
        <p className="mt-4 text-lg">A decision system includes:</p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-lg">
          <li>what information is available,</li>
          <li>how uncertainty is handled,</li>
          <li>who has authority to decide,</li>
          <li>what incentives shape behavior,</li>
          <li>and how outcomes are reviewed.</li>
        </ul>
        <div className="mt-4 space-y-2 text-lg">
          <p>Changing one part without the others rarely works.</p>
          <p>This work looks at the whole system, not isolated tools.</p>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">Two ways organizations typically engage</h3>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div className="border p-6 rounded-lg bg-white shadow-sm">
            <h4 className="font-semibold text-xl">1. Delivery & Architecture (mid-term, 3–12 months)</h4>
            <p className="mt-3 text-gray-700">For organizations that:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
              <li>are building or scaling core systems,</li>
              <li>want durable data and AI/ML capability,</li>
              <li>need decisions to work reliably over time.</li>
            </ul>
            <p className="mt-4 text-gray-700">This includes system design, implementation, and capability transfer.</p>
          </div>

          <div className="border p-6 rounded-lg bg-white shadow-sm">
            <h4 className="font-semibold text-xl">2. Diagnostic & Advisory (short-term, 2–8 weeks)</h4>
            <p className="mt-3 text-gray-700">For organizations that:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
              <li>feel stuck or uncertain,</li>
              <li>suspect the problem isn’t just technical,</li>
              <li>need clarity before committing to build.</li>
            </ul>
            <p className="mt-4 text-gray-700">This work surfaces decision bottlenecks and recommends focused next steps — including when not to build.</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">Core areas of work</h3>
        <p className="mt-2 text-lg text-gray-600">Each area supports the others.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <Link href="/axis-i/ai-ml-data-consulting" className="block border p-6 rounded-lg hover:shadow-md transition-shadow bg-white">
            <h4 className="font-semibold text-xl text-blue-600">AI / ML & Data Consulting</h4>
            <p className="mt-3 text-gray-700">Designing data and ML systems that support real decisions.</p>
          </Link>

          <Link href="/axis-i/decision-systems-org-design" className="block border p-6 rounded-lg hover:shadow-md transition-shadow bg-white">
            <h4 className="font-semibold text-xl text-blue-600">Decision Systems & Organizational Design</h4>
            <p className="mt-3 text-gray-700">Making decision-making explicit, improvable, and accountable.</p>
          </Link>

          <Link href="/axis-i/research-thought-leadership" className="block border p-6 rounded-lg hover:shadow-md transition-shadow bg-white">
            <h4 className="font-semibold text-xl text-blue-600">Research & Thought Leadership</h4>
            <p className="mt-3 text-gray-700">Developing frameworks for decision-making under uncertainty.</p>
          </Link>
        </div>
      </section>

      <section className="mt-12 bg-gray-50 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold">Anonymized case vignette</h3>
        <h4 className="text-xl font-medium mt-2 text-gray-800">“The model was accurate — and still unused”</h4>

        <div className="mt-6 space-y-3 text-lg">
          <p><strong>Situation:</strong> A team had a well-performing model, but leaders hesitated to act on its output.</p>
          <p><strong>What we found:</strong> No one could clearly explain when the model should be trusted — or what to do when it conflicted with intuition.</p>
          <p><strong>What changed:</strong> We redesigned how the model entered decisions, clarified ownership, and documented limits.</p>
          <p><strong>Result:</strong> The same model began to influence decisions within weeks.</p>
        </div>

        <div className="mt-6">
          <p className="font-semibold text-lg">What this revealed:</p>
          <p className="text-lg">Accuracy wasn’t the constraint. Decision design was.</p>
        </div>
      </section>

      <section className="mt-12 mb-8">
        <h3 className="text-2xl font-semibold">How to start</h3>
        <p className="mt-4 text-lg">Most Axis I engagements begin with one question:</p>
        <blockquote className="mt-6 border-l-4 border-blue-500 pl-6 italic text-xl text-gray-700">
          “Which decision matters most — and keeps breaking down?”
        </blockquote>
        <p className="mt-4 text-lg">That decision becomes the entry point.</p>
      </section>
    </div>
  )
}
