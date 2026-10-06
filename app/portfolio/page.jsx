import Link from 'next/link';

export const metadata = {
  title: 'Portfolio & Case Studies | Mentat Commons (mentatcommons.com)',
  description: 'Selected projects in production AI, edge compute, high-concurrency chatbots, and decision systems by Nandhini Anand. mentatcommons.com',
  alternates: {
    canonical: 'https://mentatcommons.com/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">Portfolio</span>
      </nav>

      <h2 className="text-3xl font-bold text-gray-900">Portfolio &amp; Case Studies</h2>
      <p className="mt-2 text-xl text-gray-600">Selected work demonstrating production AI, high-concurrency systems, and edge inference</p>

      <div className="mt-8 grid gap-6">
        <div className="card border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">High Concurrency • 2M Users</span>
            <span className="text-xs text-gray-400">Scaling</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">Chatimity &amp; The Taboo Game Bot</h3>
          <p className="mt-2 text-gray-700">
            Architected and scaled conversational bots for 2,000,000+ registered users. Built real-time multiplayer NLP game bots handling concurrent surges without latency degradation.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-gray-600">
            <span className="bg-gray-100 px-2.5 py-1 rounded">Distributed Systems</span>
            <span className="bg-gray-100 px-2.5 py-1 rounded">NLP Engine</span>
            <span className="bg-gray-100 px-2.5 py-1 rounded">Real-Time Messaging</span>
          </div>
        </div>

        <div className="card border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-green-600">Edge Compute • IoT</span>
            <span className="text-xs text-gray-400">Hardware Constrained</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">“Garbage AI” &amp; Edge Computer Vision</h3>
          <p className="mt-2 text-gray-700">
            Deployed state-of-the-art vision models onto $35 Raspberry Pi and Nvidia Jetson edge units. License plate detection, waste stream tracking, and lightweight embedded inference without continuous cloud reliance.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-gray-600">
            <span className="bg-gray-100 px-2.5 py-1 rounded">Raspberry Pi</span>
            <span className="bg-gray-100 px-2.5 py-1 rounded">Rust / C++</span>
            <span className="bg-gray-100 px-2.5 py-1 rounded">YOLO / OpenCV</span>
          </div>
        </div>

        <div className="card border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600">Retrieval Architecture</span>
            <span className="text-xs text-gray-400">Pioneer RAG</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">Early RAG &amp; Document Intelligence (2020)</h3>
          <p className="mt-2 text-gray-700">
            Built precursor retrieval-augmented generation systems allowing natural language semantic search across dense PDF corpuses, patents, and technical documentation.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-gray-600">
            <span className="bg-gray-100 px-2.5 py-1 rounded">Vector Search</span>
            <span className="bg-gray-100 px-2.5 py-1 rounded">Semantic Embeddings</span>
            <span className="bg-gray-100 px-2.5 py-1 rounded">Doc Pipeline</span>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link href="/axis-i" className="text-blue-600 hover:underline font-medium">
          ← Explore Axis I Consulting Systems
        </Link>
        <Link href="/contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow">
          Inquire for Your Architecture →
        </Link>
      </div>
    </div>
  )
}
