import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import EventPage from './pages/Event'
import Admin from './pages/Admin'

export default function App(){
  return (
    <div>
      <header className="bg-green-700 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <Link to="/" className="font-semibold">Fitostesi</Link>
          <nav className="space-x-4">
            <Link to="/auth">Entrar</Link>
            <Link to="/admin">Admin</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/events/:id" element={<EventPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      <footer className="text-sm text-gray-600 p-6 text-center">Fet amb ♥ per Fitostesi</footer>
    </div>
  )
}