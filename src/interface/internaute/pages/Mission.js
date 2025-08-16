import React from 'react'
import Obj from '../../../assets/user/internaute/obj.jpeg'
function Mission() {
  return (
    <div id="mission-objectifs" className='inter-section'>
      <div className='mission-container'>
        <div>
          <p className='title-internaute'>Mission</p> 
          <ul>
            <li>Fournir une solution innovante de comptage d'électricité qui offre une gestion intelligente 
            de l'énergie et une meilleure expérience utilisateur pour nos clients.</li>
            <li>Aider nos clients à optimiser leur consommation d'énergie tout en préservant l'environnement.</li>
            <li>Nous croyons que la gestion intelligente de l'électricité est la clé pour un avenir durable</li>
            <li>Nous travaillons chaque jour pour offrir des solutions innovantes et efficaces pour nos clients.</li>
            <li>Prendre en charge les demandes de prestation et de renseignement</li>
          </ul>
          <p className='title-internaute'>Objectifs</p> 
          <ul>
            <li>Un service continu 24h/24h et 7j/7j</li>
            <li>Un gain de temps pour la clientèle</li>
            <li>Une facilité du contact</li>
            <li>Un moyen de communication efficace</li>
            <li>Un accueil personnalisé</li>
          </ul>
        </div>
        <div>
          <img src={Obj } alt="obj" style={{ width:"100%"}}/>
        </div>
      </div>
    </div>
  )
}
export default Mission
