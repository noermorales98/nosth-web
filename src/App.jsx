import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import SecondSection from './pages/section/SecondSection'
import Services from './pages/services/Services'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <SecondSection/>
      <Services/>
    </div>
  )
}

export default App
