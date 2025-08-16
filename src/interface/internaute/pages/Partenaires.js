import React from 'react'
import i1 from '../../../assets/user/internaute/partenaires/Schneider.png'
import i2 from '../../../assets/user/internaute/partenaires/engie.png'
import i3 from '../../../assets/user/internaute/partenaires/cpc.png'
import i4 from '../../../assets/user/internaute/partenaires/generale.png'
import i5 from '../../../assets/user/internaute/partenaires/ministere.jpeg'
import i6 from '../../../assets/user/internaute/partenaires/ANME.png'
import i7 from '../../../assets/user/internaute/partenaires/ctrne.png'
import i8 from '../../../assets/user/internaute/partenaires/interna.png'
const data=[
  {img :i5, width: "220px", height: "90px"},
  {img :i6, width: "220px", height: "90px"},
  {img :i7, width: "220px", height: "80px"},
  {img :i4, width: "220px", height: "80px"},
  {img :i2, width: "220px", height: "90px"},
  {img :i3, width: "220px", height: "90px"},
  {img :i8, width: "220px", height: "90px"},
  {img :i1, width: "220px", height: "90px"}
];
function Partenaires() {
  const items = [];
  data.forEach(element => {
    items.push(
        <img src={element.img} width={element.width} height={element.height} alt={Partenaires}/>
    );
  });
  return (
    <div id='partenaires' className='inter-section'>
      <h1 className='title-internaute'>Partenaires</h1> 
      <div className="partenaire-container"> 
        <div>
          <p>
            Nous sommes fiers de travailler avec des partenaires de premier plan dans le domaine de l'énergie 
            et de l'environnement. 
          </p>
            <br/>
          <p>
            Nos partenaires nous aident à offrir des solutions innovantes et efficaces pour nos clients, 
            tout en contribuant à la préservation de l'environnement et à la lutte contre la pollution.
          </p> 
        </div>
        <div className="contanier-partenaires-img">
          {items}
        </div>
      </div>
    </div>
  )
}

export default Partenaires
