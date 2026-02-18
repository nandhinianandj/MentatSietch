import './globals.css'
import Head from 'next/head'
import ChatWidget from './components/ChatWidget'

export const metadata = {
  title: 'Mentat Commons | Nandhini Anand — AI Architect & Consultant',
  description: 'Nandhini Anand is a Senior AI Architect building production AI infrastructure. From scaling to 2M users to running models on the edge.',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0f172a',
  openGraph: {
    images: '/images/mentat-commons-og.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-navy text-white py-8">
          <div className="container">
            <h1 className="text-2xl font-semibold">Mentat Commons</h1>
            <p className="text-sm text-muted">Designing decisions for collective intelligence</p>
            <nav className="mt-4">
              <a className="mr-4" href="/">Home</a>
              <a className="mr-4" href="/about">About</a>
              <a className="mr-4" href="/axis-i">Axis I</a>
              <a className="mr-4" href="/training">Training</a>
              <a href="/links">Links</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-navy text-white py-6 mt-12 text-center">
          <div className="container">
            <p>© 2025 Mentat Commons — Axis I • Training • Desert Intelligence • Sietch Protocol</p>
          </div>
        </footer>
        <ChatWidget />
      </body>
    </html>
  )
}
