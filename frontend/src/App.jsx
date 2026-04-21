import React from 'react'
import Navbar from './components/Navbar'

import Home from './components/Home'
import Services from './pages/Services'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes.jsx'
import ServiceCard from './components/ServiceCard.jsx'

const App = () => {
  return (
    <>
        <Navbar/>
        <AppRoutes/>
        <Footer/>
    </>
  )
}

export default App
