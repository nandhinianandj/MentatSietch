import Link from 'next/link';

export const metadata = {
  title: 'Production AI Infrastructure & Decision Systems | Mentat Commons (mentatcommons.com)',
  description: 'Nandhini Anand is a Senior AI Architect turning experimental models into reliable infrastructure and decision systems. mentatcommons.com',
  alternates: {
    canonical: 'https://mentatcommons.com',
  },
};

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-20">
      
      {/* Hero Section */}
      <section className="max-w-4xl space-y-6">
        <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-200">
          mentatcommons.com
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Production AI that <span className="text-blue-600">Actually Works.</span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
          I'm a Senior AI Architect &amp; Engineer who turns experimental models into reliable infrastructure.
          From running "Garbage AI" on Raspberry Pis to scaling conversational agents to <span className="font-semibold text-gray-900">2 million users</span>.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a 
            href="https://calendly.com/nandhini-anand/15min" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Book a System Audit
          </a>
          <Link 
            href="#work" 
            className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            View Selected Work
          </Link>
          <Link 
            href="/links" 
            className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            Links Directory →
          </Link>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="space-y-8">
        <div className="flex items-baseline justify-between border-b pb-4">
          <h2 className="text-3xl font-bold text-gray-900">Selected Work</h2>
          <Link href="/portfolio" className="text-blue-600 hover:underline font-medium">View Full Portfolio →</Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Chatimity */}
          <div className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-sm font-bold text-blue-600 mb-2">SCALING</div>
            <h3 className="text-xl font-bold mb-3">Chatimity &amp; The Taboo Bot</h3>
            <p className="text-gray-600 mb-4">
              Scaled a conversational platform to <span className="font-semibold">2,000,000+ users</span>. 
              Built a real-time multiplayer Taboo game bot that handled massive concurrent traffic without melting the servers.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Real-time NLP</li>
              <li>• High-concurrency Architecture</li>
              <li>• Gamified AI Interactions</li>
            </ul>
          </div>

          {/* Card 2: Garbage AI */}
          <div className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-sm font-bold text-green-600 mb-2">EDGE COMPUTE</div>
            <h3 className="text-xl font-bold mb-3">"Garbage AI" &amp; IoT</h3>
            <p className="text-gray-600 mb-4">
              Running SOTA models on $35 potato-tier hardware (Raspberry Pi/Jetson). 
              Proving that constraints are just suggestions if you optimize hard enough.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Rust &amp; C++ Optimization</li>
              <li>• Edge Inference</li>
              <li>• Computer Vision</li>
            </ul>
          </div>

          {/* Card 3: PDF Chat */}
          <div className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-sm font-bold text-purple-600 mb-2">RAG PIONEER</div>
            <h3 className="text-xl font-bold mb-3">The OG "Chat with PDF"</h3>
            <p className="text-gray-600 mb-4">
              Built a Retrieval-Augmented Generation (RAG) system in 2020 before it was cool. 
              Allowed users to query massive documents with vector search at scale.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Vector Databases</li>
              <li>• Semantic Search</li>
              <li>• Early LLM Integration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services / Philosophy Section */}
      <section className="bg-gray-50 rounded-2xl p-8 md:p-12">
        <div className="md:flex gap-12 items-start">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold mb-4">How I Help</h2>
            <p className="text-gray-600">
              I don't just draw diagrams; I ship code. I help organizations treat data and AI as 
              <span className="font-semibold text-gray-900"> critical infrastructure</span>, not just toys.
            </p>
          </div>
          <div className="md:w-2/3 grid gap-6 mt-8 md:mt-0">
            <Link href="/axis-i" className="group block border p-5 rounded-xl bg-white hover:border-blue-500 transition-colors shadow-sm">
              <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">Axis I — Systems &amp; Decision Design →</h3>
              <p className="text-gray-600 mt-2 text-sm">Consulting on data architecture and organizational design. Sublinks: AI/ML, Decision Rights, Research.</p>
            </Link>
            <Link href="/training" className="group block border p-5 rounded-xl bg-white hover:border-blue-500 transition-colors shadow-sm">
              <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">Training &amp; Capability Building →</h3>
              <p className="text-gray-600 mt-2 text-sm">Project-led courses and practice-based Decision &amp; Learning Labs. Teaching teams to decide under pressure.</p>
            </Link>
            <Link href="/core" className="group block border p-5 rounded-xl bg-white hover:border-blue-500 transition-colors shadow-sm">
              <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">Sensemaking &amp; Containment →</h3>
              <p className="text-gray-600 mt-2 text-sm">Quiet, retainer-based engagements upstream of decisions where shared meaning has collapsed.</p>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
