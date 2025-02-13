import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Valentine from './pages/Valentine'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/valentine" element={<Valentine />} />
      </Routes>
    </Router>
  )
}

export default App
