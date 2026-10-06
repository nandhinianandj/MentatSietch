import Link from 'next/link';

export const metadata = {
  title: 'Sensemaking & Pre-Decision Containment | Mentat Commons (mentatcommons.com)',
  description: 'Quiet, retainer-based engagement upstream of decisions, narratives, and strategies. mentatcommons.com',
  alternates: {
    canonical: 'https://mentatcommons.com/core',
  },
};

export default function SensemakingPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">Sensemaking & Containment</span>
      </nav>

      <section className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Sensemaking &amp; Pre-Decision Containment</h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          This is a quiet, retainer-based engagement for individuals or small
          groups navigating complex, high-stakes questions where the problem is
          not lack of intelligence or effort, but collapse of shared meaning.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          I work upstream of decisions, narratives, and strategies — in the
          space where things are still forming and can still be changed without
          force.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold text-gray-900">What this helps with</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
          <li>Noticing when the framing of a problem is wrong or incomplete</li>
          <li>Surfacing hidden assumptions before they harden</li>
          <li>Slowing premature certainty without stalling movement</li>
          <li>Holding moral, ecological, and strategic ambiguity without panic</li>
          <li>Protecting fragile ideas until they are ready to take shape</li>
        </ul>

        <p className="text-gray-700 text-lg pt-2">
          My role is not to provide answers, but to keep the thinking space
          intact long enough for better decisions to become possible.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold text-gray-900">What this is not</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
          <li>Consulting with predefined deliverables</li>
          <li>Facilitation with agendas or outcomes</li>
          <li>Leadership coaching</li>
          <li>Content creation</li>
          <li>Urgency-driven or crisis-response work</li>
        </ul>

        <p className="text-gray-700 text-lg pt-2">
          If you are looking for speed, clarity on demand, or polished
          conclusions, this will not be a good fit.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold text-gray-900">How the engagement works</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
          <li>Retainer-based, month-to-month or fixed-term</li>
          <li>Typically 2–4 conversations per month</li>
          <li>Individual or very small group settings</li>
          <li>Focus on pre-decision moments, not execution or delivery phases</li>
          <li>No required artifacts, reports, or summaries</li>
        </ul>

        <p className="text-gray-700 text-lg pt-2">
          Written reflections may emerge, but only if they feel necessary.
          The value is in presence and containment, not output volume.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold text-gray-900">Pricing &amp; commitment</h2>

        <p className="text-gray-700 text-lg">
          This work is offered on a retainer basis, reflecting that its value
          lies in availability, continuity, and trust rather than hours or
          deliverables.
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
          <li>
            <strong>Individual retainers:</strong> typically <strong>$1,500 – $3,000 / month</strong>
          </li>
          <li>
            <strong>Small group retainers:</strong> typically <strong>$3,000 – $6,000 / month</strong>
          </li>
        </ul>

        <p className="text-gray-700 text-lg pt-2">
          Pricing is discussed openly during an initial conversation and adjusted
          based on scope, frequency, and depth of involvement.
        </p>

        <p className="text-gray-700 text-lg">
          I take on very few concurrent engagements to protect the quality of
          the work. If the terms don’t feel sustainable or aligned on either
          side, we don’t proceed.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold text-gray-900">What success looks like</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
          <li>Fewer irreversible decisions made too early</li>
          <li>Conversations that become slower, deeper, and more honest</li>
          <li>Unexamined narratives losing their grip</li>
          <li>New options quietly appearing</li>
          <li>Some failures simply never happening</li>
        </ul>

        <p className="text-gray-700 text-lg pt-2">
          Much of this work remains invisible by design.
        </p>
      </section>

      <section className="mt-12 mb-8 border-t pt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Next step</h2>
        <p className="text-gray-700 text-lg mt-2">
          If this resonates, the next step is a short conversation to see
          whether the conditions are right on both sides.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow">
            Reach Out for a Conversation →
          </Link>
          <a href="https://calendly.com/nandhini-anand/15min" target="_blank" rel="noopener noreferrer" className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
            Book 15 Min on Calendly ↗
          </a>
        </div>
      </section>
    </main>
  );
}
