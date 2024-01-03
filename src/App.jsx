import './App.scss'
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Specials from './Components/Specials/Specials'
import Chef from './Components/Chef/Chef'
import Contact from './Components/Contact/Contact'
import Awards from './Components/Awards/Awards'
import Video from './Components/Video/Video'
import Gallery from './Components/PhotoGallery/Gallery'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Specials />
    <Chef />
    <Video />
    <Awards />
    <Gallery />
    <Contact />
    <Footer />


    </>
  )
}

export default App
