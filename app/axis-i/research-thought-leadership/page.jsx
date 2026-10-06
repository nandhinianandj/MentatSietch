import Link from 'next/link';

export const metadata = {
  title: 'Research & Thought Leadership | Axis I | Mentat Commons (mentatcommons.com)',
  description: 'Developing frameworks and learning systems for decision-making under uncertainty. mentatcommons.com',
  alternates: {
    canonical: 'https://mentatcommons.com/axis-i/research-thought-leadership',
  },
};

export default function ResearchThoughtLeadershipPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Sublink Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/axis-i" className="hover:text-blue-600 transition-colors">Axis I</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">Research & Thought Leadership</span>
      </nav>

      <h2 className="text-3xl font-bold text-gray-900">Research & Thought Leadership</h2>
      <p className="mt-2 text-xl text-gray-600">Frameworks for decision-making under uncertainty</p>

      <div className="mt-8 space-y-4 text-lg">
        <p>Some problems can’t be solved with best practices.</p>
        <p>They require:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>exploration,</li>
          <li>reflection,</li>
          <li>and shared language.</li>
        </ul>
        <p className="font-medium text-gray-900">This work supports long-horizon thinking where uncertainty is unavoidable.</p>
      </div>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-900">Current focus areas</h3>
        <ul className="list-disc list-inside ml-4 mt-4 space-y-2 text-lg text-gray-700">
          <li>Decision quality under uncertainty</li>
          <li>Collaborative and inclusive decision-making</li>
          <li>Consensus building and negotiated trade-offs</li>
          <li>Learning systems inside institutions</li>
        </ul>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-900">How this work is used</h3>
        <ul className="list-disc list-inside ml-4 mt-4 space-y-2 text-lg text-gray-700">
          <li>Strategy and policy design</li>
          <li>Leadership development</li>
          <li>Internal learning programs</li>
          <li>Public writing and talks (when appropriate)</li>
        </ul>
      </section>

      <section className="mt-12 bg-gray-50 p-6 rounded-lg">
        <p className="text-lg italic text-gray-800">
          This is not academic work for its own sake.
          <br />
          It exists to inform practice.
        </p>
      </section>

      {/* Axis I Sister Sublinks Navigation */}
      <section className="mt-12 border-t pt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Axis I Sublinks</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/axis-i/ai-ml-data-consulting" className="block border p-4 rounded-lg hover:border-blue-500 transition-colors bg-white">
            <span className="text-xs font-semibold text-blue-600 block">← SUB-AREA</span>
            <span className="font-bold text-gray-900">AI / ML & Data Consulting</span>
            <p className="text-xs text-gray-600 mt-1">Data systems and ML models tied to real decision use.</p>
          </Link>
          <Link href="/axis-i/decision-systems-org-design" className="block border p-4 rounded-lg hover:border-blue-500 transition-colors bg-white">
            <span className="text-xs font-semibold text-blue-600 block">← SUB-AREA</span>
            <span className="font-bold text-gray-900">Decision Systems & Org Design</span>
            <p className="text-xs text-gray-600 mt-1">Making decision rules visible and improvable.</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
