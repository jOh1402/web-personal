import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import EventForm from '../components/EventForm'

export default function Admin(){
  const [events, setEvents] = useState<any[]>([])

  useEffect(()=>{
    supabase.from('events').select('*').order('created_at',{ascending:false}).then(({data,error})=>{
      if(error) console.error(error)
      else setEvents(data || [])
    })
  },[])

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Panel Admin</h1>
      <EventForm onSaved={(e:any)=> setEvents(prev=>[e,...prev])} />
      <div className="space-y-2">
        {events.map(ev=> (
          <div key={ev.id} className="bg-white p-3 rounded shadow-sm">
            <div className="flex justify-between">
              <div>
                <div className="font-semibold">{ev.title}</div>
                <div className="text-sm text-gray-600">{new Date(ev.starts_at).toLocaleString()}</div>
              </div>
              <div className="text-sm">{ev.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}