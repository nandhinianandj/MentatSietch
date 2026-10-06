import Link from 'next/link';

export const metadata = {
  title: 'About Mentat Commons | Nandhini Anand (mentatcommons.com)',
  description: 'Bridging data systems and human systems. Making decision-making explicit, robust, and collective. mentatcommons.com',
  alternates: {
    canonical: 'https://mentatcommons.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">About</span>
      </nav>

      <h2 className="text-3xl font-bold text-gray-900">About Mentat Commons</h2>
      <p className="mt-2 text-xl text-gray-600">Bridging data systems and human systems</p>

      <div className="mt-8 space-y-4 text-lg text-gray-700 leading-relaxed">
        <p>Mentat Commons works with organizations to improve how decisions are made, learned from, and acted on.</p>
        <p>Most organizations already have data, tools, and processes. What they often lack is coherence:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>metrics that reflect real goals,</li>
          <li>decision processes that account for human behavior,</li>
          <li>and learning systems that translate insight into action.</li>
        </ul>
        <p>My work sits at that intersection — where technical systems meet human systems.</p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 gap-6 border-t pt-8">
        <div className="border p-6 rounded-lg bg-white shadow-sm space-y-2">
          <h3 className="font-bold text-xl text-gray-900">Axis I — Systems</h3>
          <p className="text-gray-600 text-sm">Consulting on data architecture, AI/ML pipelines, and decision ownership.</p>
          <Link href="/axis-i" className="text-blue-600 hover:underline text-sm font-semibold inline-block pt-2">
            Explore Axis I Systems →
          </Link>
        </div>

        <div className="border p-6 rounded-lg bg-white shadow-sm space-y-2">
          <h3 className="font-bold text-xl text-gray-900">Training & Labs</h3>
          <p className="text-gray-600 text-sm">Practice-based labs and courses to sharpen judgment under uncertainty.</p>
          <Link href="/training" className="text-blue-600 hover:underline text-sm font-semibold inline-block pt-2">
            Explore Training & Labs →
          </Link>
        </div>
      </div>

      <div className="mt-10 border-t pt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Work With Mentat Commons</h3>
        <p className="text-gray-700 text-lg mb-6">Reach out to discuss a specific decision bottleneck, system audit, or training engagement.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow">
            Contact / Collaborate →
          </Link>
          <Link href="/links" className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
            View All Links & Resources
          </Link>
        </div>
      </div>
    </div>
  );
}
