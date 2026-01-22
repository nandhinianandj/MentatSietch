export default function LearningAndDecisionLabsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold">Decision & Learning Labs</h2>
      <p className="mt-2 text-xl text-gray-600">Practice-based training for better judgment and coordination</p>

      <div className="mt-8 space-y-4 text-lg">
        <p>Decision & Learning Labs are the core training format at Mentat Commons.</p>
        <p>They are designed for organizations that want learning to change:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>how decisions are made,</li>
          <li>how teams coordinate under uncertainty,</li>
          <li>and how insight carries forward into future work.</li>
        </ul>
        <p>These are not simulations for entertainment.</p>
        <p className="font-medium">They are structured environments for practicing real decisions.</p>
      </div>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">What a “lab” actually means</h3>
        <p className="mt-4 text-lg">A lab is a bounded space where teams:</p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-lg">
          <li>work with situations from their own context,</li>
          <li>slow down decision-making at critical moments,</li>
          <li>examine how data, stories, and incentives interact,</li>
          <li>and reflect before returning to execution.</li>
        </ul>
        <p className="mt-4 text-lg font-medium">The goal is not performance. It is clarity under pressure.</p>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">The core learning loop</h3>
        <p className="mt-4 text-lg">Every lab follows the same loop:</p>
        <ol className="list-decimal list-inside ml-4 mt-2 space-y-1 text-lg">
          <li>Situation framing</li>
          <li>Evidence and constraints</li>
          <li>Narrative construction</li>
          <li>Decision or action</li>
          <li>Reflection and revision</li>
        </ol>
        <p className="mt-4 text-lg">Teams leave not just with answers — but with a better process for the next decision.</p>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">What labs are used for</h3>
        <ul className="list-disc list-inside ml-4 mt-4 space-y-2 text-lg">
          <li>improve decision quality in uncertain environments,</li>
          <li>integrate data into real workflows,</li>
          <li>reduce friction between technical and non-technical roles,</li>
          <li>practice high-stakes decisions safely,</li>
          <li>surface trade-offs early.</li>
        </ul>
        <p className="mt-4 text-lg font-medium">They are especially effective where “more information” has not helped.</p>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">How labs are structured</h3>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div className="border p-6 rounded-lg bg-white shadow-sm">
            <h4 className="font-semibold text-xl">A typical engagement includes:</h4>
            <ul className="list-disc list-inside ml-4 mt-3 space-y-2 text-gray-700">
              <li>light pre-work to identify context,</li>
              <li>facilitated live sessions,</li>
              <li>creation of decision artifacts,</li>
              <li>a short synthesis capturing insights and risks.</li>
            </ul>
          </div>
          <div className="border p-6 rounded-lg bg-white shadow-sm">
            <h4 className="font-semibold text-xl">Labs can be:</h4>
            <ul className="list-disc list-inside ml-4 mt-3 space-y-2 text-gray-700">
              <li>single-session,</li>
              <li>multi-session,</li>
              <li>or embedded within longer programs.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">What makes this different</h3>
        <ul className="list-disc list-inside ml-4 mt-4 space-y-2 text-lg">
          <li>Decisions come before content</li>
          <li>Process is examined, not assumed</li>
          <li>Data and story are treated as complementary</li>
          <li>Disagreement is used as information</li>
          <li>Reflection is built in, not optional</li>
        </ul>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">Who this is for</h3>
        <ul className="list-disc list-inside ml-4 mt-4 space-y-2 text-lg">
          <li>Leadership teams</li>
          <li>Cross-functional groups</li>
          <li>Research and policy-adjacent teams</li>
          <li>Organizations navigating change or growth</li>
        </ul>
        <p className="mt-4 text-lg italic">No prior technical or facilitation background is required.</p>
      </section>

      <section className="mt-12 mb-8">
        <h3 className="text-2xl font-semibold">How to begin</h3>
        <p className="mt-4 text-lg">Most labs start with one question:</p>
        <blockquote className="mt-6 border-l-4 border-blue-500 pl-6 italic text-xl text-gray-700">
          “Which decision keeps recurring — and never quite improves?”
        </blockquote>
        <p className="mt-4 text-lg">That decision becomes the focus of the lab.</p>
      </section>
    </div>
  )
}
