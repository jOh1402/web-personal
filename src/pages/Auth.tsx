import React, { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Auth(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  async function signUp(){
    const { error } = await supabase.auth.signUp({ email, password })
    if(error) setMessage(error.message)
    else setMessage('Revisa el teu correu per confirmar (si està activat).')
  }

  async function signIn(){
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if(error) setMessage(error.message)
    else setMessage('Sessió iniciada')
  }

  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded">
      <h1 className="text-xl font-semibold mb-4">Entrar / Registrar</h1>
      <input className="block w-full p-2 border rounded mb-2" placeholder="Correu" value={email} onChange={e=>setEmail(e.target.value)} />
      <input className="block w-full p-2 border rounded mb-4" type="password" placeholder="Contrasenya" value={password} onChange={e=>setPassword(e.target.value)} />
      <div className="flex gap-2">
        <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={signIn}>Entrar</button>
        <button className="bg-gray-200 px-4 py-2 rounded" onClick={signUp}>Registrar</button>
      </div>
      {message && <div className="mt-3 text-sm">{message}</div>}
    </div>
  )
}