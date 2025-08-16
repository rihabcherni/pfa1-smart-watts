import React from 'react'
import ImgAbout from "../../../assets/user/internaute/about.jpg"

function About() {
  return (
    <div id='a-propos' className='inter-section'>
      <h1 className='title-internaute'>A propos</h1> 
      <div className='container-propos'>
        <div className='texte'>
          <p><b> SMART WATTS</b> est une entreprise spécialisée dans les solutions de gestion intelligente de l'électricité.</p> 
          <br/>
          <p>Nous sommes un entreprise engagés dans la promotion de l'utilisation des compteurs intelligents pour une 
          consommation d'énergie éléctrique plus efficace et durable.</p>
          <br/>
          <p>Nous travaillons avec des particuliers, des entreprises et des institutions pour optimiser leur consommation
          d'énergie et réduire leur impact environnemental.</p>
          <br/>
          <p>Notre équipe d'experts en énergie vous accompagne dans tous vos projets pour une consommation responsable et durable.</p>
        </div>
        <div><img src={ImgAbout} alt="about image" className="img-about"/></div>
      </div>
    </div>
  )
}

export default About
