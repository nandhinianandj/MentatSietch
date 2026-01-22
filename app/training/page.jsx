import Link from 'next/link';

export default function TrainingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold">Training & Capability Building</h2>
      <p className="mt-2 text-xl text-gray-600">Helping teams make progress when they’re under pressure to act — but unclear what problem they’re solving</p>

      <div className="mt-8 space-y-4 text-lg">
        <p>Most organizations don’t fail because they lack skill, data, or tools.</p>
        <p>They fail because:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>decisions are made without shared understanding,</li>
          <li>goals are pursued before the problem is clear,</li>
          <li>data is produced but not trusted,</li>
          <li>and teams move fast without learning.</li>
        </ul>
        <p className="font-medium">This training is designed to fix that.</p>
        <p>Not by adding more content — but by improving how teams think, decide, and learn together.</p>
      </div>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">The core idea (simple and explicit)</h3>
        <div className="mt-4 space-y-2 text-lg">
          <p>If you don’t know what problem you’re solving, that’s a decision problem.</p>
          <p>If you’re using data or GenAI just to show progress, that’s a framing problem.</p>
          <p className="font-medium">Training should address those first.</p>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">Two tensions we work with deliberately</h3>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div className="border p-6 rounded-lg bg-white shadow-sm">
            <h4 className="font-semibold text-xl text-blue-600">1. Process vs Goal</h4>
            <div className="mt-3 space-y-2 text-gray-700">
              <p>Goals matter. But when teams rush to goals too early, they:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>hide uncertainty,</li>
                <li>skip sense-making,</li>
                <li>and optimize metrics instead of outcomes.</li>
              </ul>
              <p className="mt-2">This training teaches teams to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>slow down at the right moments,</li>
                <li>make their reasoning visible,</li>
                <li>and build decision processes that still work when goals shift.</li>
              </ul>
              <p className="mt-2 font-medium">Goals become checkpoints — not starting points.</p>
            </div>
          </div>

          <div className="border p-6 rounded-lg bg-white shadow-sm">
            <h4 className="font-semibold text-xl text-blue-600">2. Data vs Story</h4>
            <div className="mt-3 space-y-2 text-gray-700">
              <p>Every decision relies on both data and story.</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Data without story overwhelms and stalls action.</li>
                <li>Story without data drifts and resists correction.</li>
              </ul>
              <p className="mt-2">Teams are trained to move deliberately between the two:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>using data to test and refine narratives,</li>
                <li>using narrative to decide what data matters — and why.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">What training looks like in practice</h3>
        <p className="mt-4 text-lg">Training sessions are not lectures or slide decks.</p>
        <p className="text-lg">They are structured around real situations from the organization’s work.</p>
        <p className="mt-4 text-lg">A typical session includes:</p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-lg">
          <li>A concrete situation the team recognizes</li>
          <li>The data, signals, and constraints involved</li>
          <li>Competing interpretations of what’s happening</li>
          <li>A decision or recommendation</li>
          <li>Reflection on assumptions and consequences</li>
        </ul>
        <p className="mt-4 text-lg font-medium">Learning happens in the movement between these steps.</p>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">Two training streams (not separate programs)</h3>

        <div className="mt-6 space-y-8">
          <div>
            <h4 className="font-semibold text-xl">Decision & Data Practice</h4>
            <p className="text-lg italic text-gray-600">How teams reason with evidence, uncertainty, and trade-offs</p>
            <div className="mt-3 space-y-2 text-lg">
              <p>This stream helps teams who:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>have data but argue about what it means,</li>
                <li>defer decisions because of uncertainty,</li>
                <li>or struggle to explain decisions clearly.</li>
              </ul>
              <p className="mt-2">Participants practice:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>asking better questions of data and models,</li>
                <li>distinguishing signal from noise,</li>
                <li>explaining decisions in plain language,</li>
                <li>revising conclusions when evidence changes.</li>
              </ul>
              <p className="mt-2 font-medium">The focus is not technical mastery — it’s reasoning quality.</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xl">Collaboration & Sense-Making Practice</h4>
            <p className="text-lg italic text-gray-600">How teams decide together under pressure</p>
            <div className="mt-3 space-y-2 text-lg">
              <p>This stream helps teams who:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>experience cross-functional friction,</li>
                <li>avoid disagreement until it explodes,</li>
                <li>or repeat the same coordination failures.</li>
              </ul>
              <p className="mt-2">Participants practice:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>making decisions with incomplete information,</li>
                <li>negotiating trade-offs without forced consensus,</li>
                <li>clarifying decision ownership,</li>
                <li>reflecting on how decisions were made.</li>
              </ul>
              <p className="mt-2">Methods draw from facilitation, theatre-based practice, and applied improvisation — always grounded in real work.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
          <Link href="/training/learning-and-decision-labs" className="block border p-6 rounded-lg hover:shadow-md transition-shadow bg-blue-50 border-blue-100">
            <h4 className="font-semibold text-xl text-blue-800">Explore Decision & Learning Labs →</h4>
            <p className="mt-2 text-blue-900">Practice-based training for better judgment and coordination.</p>
          </Link>
      </section>

      <section className="mt-12 bg-gray-50 p-8 rounded-lg mb-8">
        <h3 className="text-2xl font-semibold">Anonymized case vignettes (stories as simulations)</h3>
        <h4 className="text-xl font-medium mt-4 text-gray-800">Case 1: “We had the data — and still couldn’t decide”</h4>

        <div className="mt-4 space-y-3 text-lg">
          <p><strong>Situation:</strong> A mid-sized organization had dashboards across teams, but meetings stalled.</p>
          <p>Different people told different stories using the same numbers.</p>
        </div>
      </section>
    </div>
  )
}
