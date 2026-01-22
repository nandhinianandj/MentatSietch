export default function DecisionSystemsOrgDesignPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold">Decision Systems & Organizational Design</h2>
      <p className="mt-2 text-xl text-gray-600">Making decision-making visible and improvable</p>

      <div className="mt-8 space-y-4 text-lg">
        <p>Most organizations rely on implicit decision rules:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>who decides,</li>
          <li>what counts as evidence,</li>
          <li>how trade-offs are handled.</li>
        </ul>
        <p>When those rules stay implicit, decisions stall or repeat.</p>
        <p className="font-medium">This work makes them explicit.</p>
      </div>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">The core idea</h3>
        <p className="mt-4 text-lg">Most decision problems aren’t disagreements about goals — they’re disagreements about process.</p>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">What this work involves</h3>
        <ul className="list-disc list-inside ml-4 mt-4 space-y-2 text-lg">
          <li>Mapping how key decisions are actually made</li>
          <li>Identifying breakdowns in information, authority, or incentives</li>
          <li>Redesigning decision rights and escalation paths</li>
          <li>Aligning metrics with real priorities</li>
        </ul>
        <p className="mt-4 text-lg">This work combines analysis with structured conversations.</p>
      </section>

      <section className="mt-12 bg-gray-50 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold">Anonymized case vignette</h3>
        <h4 className="text-xl font-medium mt-2 text-gray-800">“Everyone agreed — and nothing changed”</h4>

        <div className="mt-6 space-y-3 text-lg">
          <p><strong>Situation:</strong> A leadership team left meetings aligned, but execution didn’t improve.</p>
          <p><strong>What we found:</strong> Decision ownership was never explicit.</p>
          <p><strong>What changed:</strong> We redesigned the decision process around one critical choice.</p>
          <p><strong>Result:</strong> Follow-through improved without adding oversight.</p>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">Outcomes organizations see</h3>
        <ul className="list-disc list-inside ml-4 mt-4 space-y-2 text-lg">
          <li>Clearer ownership</li>
          <li>Fewer stalled discussions</li>
          <li>Decisions that survive execution</li>
        </ul>
      </section>

      <section className="mt-12 mb-8">
        <h3 className="text-2xl font-semibold">How to start</h3>
        <blockquote className="mt-6 border-l-4 border-blue-500 pl-6 italic text-xl text-gray-700">
          “Which decision keeps coming back — without improving?”
        </blockquote>
      </section>
    </div>
  )
}
