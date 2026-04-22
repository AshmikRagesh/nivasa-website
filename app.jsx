import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/nav'
import Footer from './components/footer'
import Tweaks from './components/tweaks'
import HomePage from './pages/HomePage'
import StaysPage from './pages/StaysPage'
import StayDetailPage from './pages/StayDetailPage'
import NeighbourhoodsPage from './pages/NeighbourhoodsPage'
import ContactPage from './pages/ContactPage'

const App = () => (
  <>
    <Nav />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stays" element={<StaysPage />} />
        <Route path="/stays/:id" element={<StayDetailPage />} />
        <Route path="/neighbourhoods" element={<NeighbourhoodsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main>
    <Footer />
    <Tweaks />
  </>
)

export default App
