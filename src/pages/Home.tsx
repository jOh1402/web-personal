import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import EventCard from '../components/EventCard'

type Event = {
  id: string
  title: string
  description?: string
  starts_at: string
}

export default function Home(){
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    supabase
      .from('events')
      .select('*')
      .eq('status','published')
      .order('starts_at', {ascending:true})
      .then(({ data, error })=>{
        if(error) console.error(error)
        else setEvents(data || [])
      })
      .finally(()=>setLoading(false))
  },[])

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Properes activitats</h1>
      {loading && <div>Carregant...</div>}
      <div className="grid gap-4">
        {events.length === 0 && !loading && <div>No hi ha activitats publicades.</div>}
        {events.map(e => <EventCard key={e.id} event={e} />)}
      </div>
    </div>
  )
}