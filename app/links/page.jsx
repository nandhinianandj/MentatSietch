export default function LinksPage(){
  return (
    <div className="py-12" style={{background:'#0f172a', minHeight: '60vh'}}>
      <div className="container">
        <h2 className="text-white text-2xl">Mentat Commons — Links</h2>
        <p className="text-muted mt-1">Data Scientist • Trainer • Writer • Facilitator</p>
        <div className="mt-6">
          <a className="link-card mb-3 block" href="/">🏠 Home</a>
          <a className="link-card mb-3 block" href="/portfolio">💼 Portfolio</a>
          <a className="link-card mb-3 block" href="/training">🎓 Training</a>
          <a className="link-card mb-3 block" href="https://github.com/nandhinianandj">💻 GitHub</a>
          <a className="link-card mb-3 block" href="https://gitlab.com/nandhinianandj">🧩 GitLab</a>
          <a className="link-card mb-3 block" href="https://www.kaggle.com/nandhinianandjeyahar">📊 Kaggle</a>
          <a className="link-card mb-3 block" href="https://softwaremechanic.wordpress.com">📝 WordPress Journal</a>
          <a className="link-card mb-3 block" href="/assets/Nandhini_Resume.pdf">📄 Resume</a>
        </div>
      </div>
    </div>
  )
}

