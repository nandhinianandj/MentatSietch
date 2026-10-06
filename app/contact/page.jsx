'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage(){
  const [state, setState] = useState({name:'', email:'', message:'', status: null})

  async function submit(e){
    e.preventDefault()
    setState({...state, status:'sending'})
    const res = await fetch('/api/contact', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({name: state.name, email: state.email, message: state.message})
    })
    if (res.ok) setState({name:'', email:'', message:'', status:'sent'})
    else setState({...state, status:'error'})
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">Contact</span>
      </nav>

      <h2 className="text-3xl font-bold text-gray-900">Contact / Collaborate</h2>
      <p className="mt-2 text-gray-600 text-lg">Send a concise proposal: one-line problem, timeline, and your availability.</p>

      {/* Alternative direct booking */}
      <div className="my-6 p-4 rounded-lg bg-blue-50 border border-blue-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block">Fast-Track Discussion</span>
          <span className="text-sm text-blue-900">Book an introductory 15-minute system audit directly.</span>
        </div>
        <a 
          href="https://calendly.com/nandhini-anand/15min" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-600 text-white text-sm px-4 py-2 rounded font-medium hover:bg-blue-700 transition-colors whitespace-nowrap shadow-sm"
        >
          Open Calendly ↗
        </a>
      </div>

      <form onSubmit={submit} className="mt-6 card border border-gray-200">
        <label className="block text-sm font-semibold text-gray-700">Your Name</label>
        <input 
          required 
          className="w-full p-2.5 border rounded-md mt-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          value={state.name} 
          onChange={e=>setState({...state, name:e.target.value})} 
          placeholder="Jane Doe"
        />

        <label className="block mt-4 text-sm font-semibold text-gray-700">Email Address</label>
        <input 
          required 
          type="email"
          className="w-full p-2.5 border rounded-md mt-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          value={state.email} 
          onChange={e=>setState({...state, email:e.target.value})} 
          placeholder="jane@organization.com"
        />

        <label className="block mt-4 text-sm font-semibold text-gray-700">Proposal / Challenge</label>
        <textarea 
          required 
          className="w-full p-2.5 border rounded-md mt-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          rows={5} 
          value={state.message} 
          onChange={e=>setState({...state, message:e.target.value})} 
          placeholder="One-line problem description, your goals, and timeline..."
        />

        <div className="mt-5 flex items-center justify-between">
          <button 
            type="submit" 
            disabled={state.status === 'sending'} 
            className="cta bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
          >
            {state.status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {state.status === 'sent' && (
            <span className="text-sm font-semibold text-green-600">✓ Message sent successfully!</span>
          )}
          {state.status === 'error' && (
            <span className="text-sm font-semibold text-red-600">Error sending. Please use Calendly or email directly.</span>
          )}
        </div>
      </form>

      <div className="mt-8 text-center text-xs text-gray-500">
        Mentat Commons • <a href="https://mentatcommons.com" className="text-blue-600 hover:underline">mentatcommons.com</a>
      </div>
    </div>
  )
}
