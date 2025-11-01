export default function PortfolioPage(){
  return (
    <div className="container">
      <h2 className="text-2xl font-bold">Portfolio & Case Studies</h2>
      <p className="mt-2">Selected projects demonstrating applied ML, pipelines, and curriculum design.</p>
      <div className="mt-6">
        <div className="card">
          <h3 className="font-semibold">Smart Waste Detection</h3>
          <p className="mt-2">Raspberry Pi + GPU pipeline, license plate recognition, automated reporting.</p>
        </div>

        <div className="card mt-4">
          <h3 className="font-semibold">Solar Panel Optimization</h3>
          <p className="mt-2">Optimization engine integrated into policy recommender systems.</p>
        </div>
      </div>
    </div>
  )
}

