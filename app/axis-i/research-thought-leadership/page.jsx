export default function ResearchThoughtLeadershipPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold">Research & Thought Leadership</h2>
      <p className="mt-2 text-xl text-gray-600">Frameworks for decision-making under uncertainty</p>

      <div className="mt-8 space-y-4 text-lg">
        <p>Some problems can’t be solved with best practices.</p>
        <p>They require:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>exploration,</li>
          <li>reflection,</li>
          <li>and shared language.</li>
        </ul>
        <p className="font-medium">This work supports long-horizon thinking where uncertainty is unavoidable.</p>
      </div>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">Current focus areas</h3>
        <ul className="list-disc list-inside ml-4 mt-4 space-y-2 text-lg">
          <li>Decision quality under uncertainty</li>
          <li>Collaborative and inclusive decision-making</li>
          <li>Consensus building and negotiated trade-offs</li>
          <li>Learning systems inside institutions</li>
        </ul>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">How this work is used</h3>
        <ul className="list-disc list-inside ml-4 mt-4 space-y-2 text-lg">
          <li>Strategy and policy design</li>
          <li>Leadership development</li>
          <li>Internal learning programs</li>
          <li>Public writing and talks (when appropriate)</li>
        </ul>
      </section>

      <section className="mt-12 mb-8 bg-gray-50 p-6 rounded-lg">
        <p className="text-lg italic">
          This is not academic work for its own sake.
          <br />
          It exists to inform practice.
        </p>
      </section>
    </div>
  )
}
