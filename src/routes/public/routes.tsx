import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../pages/home'
import Hero from '../../pages/hero'

export default function PublicRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:heroName" element={<Home />} />
        <Route path="/hero/:id" element={<Hero />} />
      </Routes>
    </Router>
  )
}