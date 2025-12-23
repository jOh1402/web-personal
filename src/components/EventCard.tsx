import React from 'react'
import { Link } from 'react-router-dom'

export default function EventCard({ event }: any){
  return (
    <article className="bg-white p-4 rounded shadow-sm">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">{event.title}</h3>
          <p className="text-sm text-gray-600">{event.description}</p>
        </div>
        <div className="text-sm text-gray-500">
          <div>{new Date(event.starts_at).toLocaleString()}</div>
          <Link to={`/events/${event.id}`} className="text-green-600">Veure</Link>
        </div>
      </div>
    </article>
  )
}