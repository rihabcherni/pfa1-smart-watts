import React from 'react'
import S1 from '../../../assets/user/internaute/s1.jpeg'
import S2 from '../../../assets/user/internaute/s2.jpg'
import S3 from '../../../assets/user/internaute/s3.jpeg'
function Services() {
  return (
    <div id='services' className='inter-section'>
      <h1 className='title-internaute'>Services</h1> 
      <p>
        Nous offrons une gamme complète de services pour la gestion intelligente de l'électricité, y compris l'installation de compteurs intelligents, la surveillance de la consommation d'énergie, l'analyse de données et le développement de solutions personnalisées pour nos clients. Nous travaillons avec des particuliers, des entreprises et des institutions pour trouver les solutions les plus efficaces pour leurs besoins en matière d'énergie.
      </p>
      <br/>
      <div class="services-container">
        <div class="service-card">
          <img src={S1} alt="Installation de compteurs intelligents"/>
          <h3>Installation de compteurs intelligents</h3>
          <p>Nous offrons l'installation de compteurs intelligents pour une gestion plus efficace de votre consommation d'électricité.</p>
        </div>
        <div class="service-card">
          <img src={S2} alt="Surveillance de la consommation d'énergie"/>
          <h3>Surveillance de la consommation d'énergie</h3>
          <p>Nous proposons des outils de surveillance de la consommation d'énergie pour une gestion plus économe et responsable.</p>
        </div>
        <div class="service-card">
          <img src={S3} alt="Développement de solutions personnalisées"/>
          <h3>Développement de solutions personnalisées</h3>
          <p>Nous travaillons avec nos clients pour développer des solutions sur mesure pour répondre à leurs besoins énergétiques spécifiques.</p>
        </div>
      </div>   
    </div>


  )
}

export default Services
