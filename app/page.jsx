import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="max-w-3xl">
        <h2 className="text-4xl font-bold">Mentat Commons</h2>
        <p className="mt-4 text-xl leading-relaxed text-gray-700">A studio & lab that builds decision design — combining data systems, facilitation, and storytelling so organizations can think together.</p>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">Core Areas</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/axis-i" className="block card border p-6 rounded-lg hover:shadow-lg transition-all bg-white group">
            <h4 className="font-bold text-2xl group-hover:text-blue-600 transition-colors">Axis I — Systems & Decision Design</h4>
            <p className="mt-3 text-lg text-gray-600">Consulting, data architecture, and organizational design for startups, research orgs, NGOs, and policy advocates.</p>
            <span className="inline-block mt-4 text-blue-600 font-medium group-hover:underline">Explore Axis I →</span>
          </Link>

          <Link href="/training" className="block card border p-6 rounded-lg hover:shadow-lg transition-all bg-white group">
            <h4 className="font-bold text-2xl group-hover:text-blue-600 transition-colors">Training & Capability Building</h4>
            <p className="mt-3 text-lg text-gray-600">Project-led courses and practice-based labs designed for practical impact and institutional learning.</p>
            <span className="inline-block mt-4 text-blue-600 font-medium group-hover:underline">View Programs →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
