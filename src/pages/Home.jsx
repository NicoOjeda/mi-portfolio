import React from 'react'
import About from '../components/About'
import Home1 from '../components/Home1'
import Proyects from '../components/Proyects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
        <Home1/>
        <About/>
        <Proyects/>
        <Contact />
        <Footer/>
    </div>
)
}
