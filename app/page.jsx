export default function HomePage() {
  return (
    <div className="container">
      <section>
        <h2 className="text-2xl font-bold">Mentat Commons</h2>
        <p className="mt-2">A studio & lab that builds decision design — combining data systems, facilitation, and storytelling so organizations can think together.</p>
      </section>

      <section className="mt-6">
        <h3 className="text-xl font-semibold">Two Axes</h3>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="card">
            <h4 className="font-semibold">Axis I — Bene Data Collective</h4>
            <p className="mt-2">Consulting, data architecture, and model governance for startups, research orgs, NGOs, and policy advocates.</p>
            <a className="cta mt-4 inline-block" href="/axis1">Explore Bene Data →</a>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-xl font-semibold">Training & Workshops</h3>
        <p className="mt-2">Project-led courses in Python, SQL, Data Science, and AI & ML — designed for practical impact and institutional learning.</p>
        <a className="cta mt-3 inline-block" href="/training">View Programs →</a>
      </section>
    </div>
  )
}

