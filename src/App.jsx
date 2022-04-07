import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About'
import Experiencie from './components/experience/Experience'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experiencie />
        <Services />
        <Testimonials />
        <Contact />
    </>
  )
}

export default App