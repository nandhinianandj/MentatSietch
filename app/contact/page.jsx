'use client'
import { useState } from 'react'

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
    <div className="container">
      <h2 className="text-2xl font-bold">Contact / Collaborate</h2>
      <p className="mt-2">Send a concise proposal: one-line problem, timeline, and your availability.</p>

      <form onSubmit={submit} className="mt-6 card">
        <label className="block">Name</label>
        <input required className="w-full p-2 border rounded mt-1" value={state.name} onChange={e=>setState({...state, name:e.target.value})} />

        <label className="block mt-4">Email</label>
        <input required className="w-full p-2 border rounded mt-1" value={state.email} onChange={e=>setState({...state, email:e.target.value})} />

        <label className="block mt-4">Message</label>
        <textarea required className="w-full p-2 border rounded mt-1" rows={6} value={state.message} onChange={e=>setState({...state, message:e.target.value})} />

        <div className="mt-4">
          <button type="submit" className="cta">Send</button>
          <span className="ml-4">{state.status}</span>
        </div>
      </form>
    </div>
  )
}

