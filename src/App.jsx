import React from 'react'
import './App.css'
import Home from './components/home/Home'
import Portfolio from './components/portfolio/Portfolio'
import Resume from './components/resume/Resume'
import Header from './components/header/Header'
import Contact from './components/contact/contact'

function App() {
  

  return (
   <main className="main">
    <Header/>
    <Home/>
    <Portfolio/>
    <Resume/>
    <Contact />
   </main>
  )
}

export default App
