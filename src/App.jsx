import React from 'react'
import Index from './pages/Index'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='./pages/Index.jsx' element={<Index />}></Route>
        <Route path='./pages/About.jsx' element={<About />}></Route>
        <Route path='./pages/Services.jsx' element={<Services />}></Route>
        <Route path='./pages/Contact.jsx' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App