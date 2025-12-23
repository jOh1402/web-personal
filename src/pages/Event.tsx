import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

export default function EventPage(){
  const { id } = useParams()
  const [event, setEvent] = useState<any>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(()=>{
    if(!id) return
    supabase.from('events').select('*').eq('id', id).single().then(({data, error})=>{
      if(error) console.error(error)
      else setEvent(data)
    })
  },[id])

  async function register(){
    if(!event) return
    const { error } = await supabase.from('registrations').insert([{ event_id: event.id, name, email }])
    if(error) setMessage('Error: ' + error.message)
    else setMessage('Inscripció rebuda!')
  }

  if(!event) return <div>Carregant activitat...</div>

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">{event.title}</h1>
      <div className="text-sm text-gray-600">{new Date(event.starts_at).toLocaleString()}</div>
      <p>{event.description}</p>

      <div className="bg-white p-4 rounded shadow-sm">
        <h2 className="font-semibold mb-2">Inscriu-te</h2>
        <input className="block w-full p-2 border rounded mb-2" placeholder="Nom" value={name} onChange={e=>setName(e.target.value)} />
        <input className="block w-full p-2 border rounded mb-2" placeholder="Correu electrònic" value={email} onChange={e=>setEmail(e.target.value)} />
        <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={register}>Inscriure'm</button>
        {message && <div className="mt-2 text-sm">{message}</div>}
      </div>
    </div>
  )
}