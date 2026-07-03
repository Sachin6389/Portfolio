import { useState } from 'react'
import Header from '../Component/Header/Header.jsx'
import Footer from '../Component/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
