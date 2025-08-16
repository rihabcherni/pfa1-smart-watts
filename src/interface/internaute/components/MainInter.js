import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Actualite from '../pages/Actualite'
import Mission from '../pages/Mission'
import Services from '../pages/Services'
import Partenaires from '../pages/Partenaires'
import FAQ from '../pages/FAQ'
import Equipe from '../pages/Equipe'
import Contact from '../pages/Contact'
export default function MainInter() {
  return (
    <div>
        <Home/>
        <About/>
        <Actualite/>
        <Mission/>
        <Services/>
        <Partenaires/>
        <FAQ/>
        <Equipe/>
        <Contact/>
    </div>
  )
}
