import React, { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function EventForm({ onSaved }: any){
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [startsAt, setStartsAt] = useState('')
  const [message, setMessage] = useState('')

  async function save(){
    if(!title || !startsAt) return setMessage('Títol i data obligatòria')
    const { data, error } = await supabase.from('events').insert([{ title, description, starts_at: startsAt, status: 'published' }]).select().single()
    if(error) setMessage(error.message)
    else {
      setMessage('Activitat desada')
      onSaved && onSaved(data)
      setTitle(''); setDescription(''); setStartsAt('')
    }
  }

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h2 className="font-semibold mb-2">Nova activitat</h2>
      <input className="block w-full p-2 border rounded mb-2" placeholder="Títol" value={title} onChange={e=>setTitle(e.target.value)} />
      <textarea className="block w-full p-2 border rounded mb-2" placeholder="Descripció" value={description} onChange={e=>setDescription(e.target.value)} />
      <input type="datetime-local" className="block w-full p-2 border rounded mb-2" value={startsAt} onChange={e=>setStartsAt(e.target.value)} />
      <div className="flex justify-end gap-2">
        <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={save}>Desar i publicar</button>
      </div>
      {message && <div className="mt-2 text-sm">{message}</div>}
    </div>
  )
}