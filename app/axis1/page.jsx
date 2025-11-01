export default function Axis1Page(){
  return (
    <div className="container">
      <h2 className="text-2xl font-bold">Axis I — Bene Data Collective</h2>
      <p className="mt-2">End-to-end data, AI, and decision architecture for organizations seeking practical, ethical, and maintainable systems.</p>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="card">
          <h4 className="font-semibold">AI/ML Consulting</h4>
          <p className="mt-2">Delivery + architecture (3–12 months) and diagnostics/advisory (2–8 weeks).</p>
          <a className="mt-3 inline-block cta" href="/axis1/ai-ml-consulting">Read more →</a>
        </div>

        <div className="card">
          <h4 className="font-semibold">Decision Systems</h4>
          <p className="mt-2">Mapping incentives, metrics, and feedback loops to realign decisions with mission.</p>
          <a className="mt-3 inline-block cta" href="/axis1/decision-systems">Read more →</a>
        </div>

        <div className="card">
          <h4 className="font-semibold">Research — Desert Intelligence</h4>
          <p className="mt-2">Research programs and frameworks (Sietch Protocol, Six Axes of Control) for collaborative governance.</p>
          <a className="mt-3 inline-block cta" href="/axis1/research-frameworks">Read more →</a>
        </div>
      </div>
    </div>
  )
}

