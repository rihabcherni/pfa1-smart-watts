import React , {useState , useEffect} from 'react'
import Carousel from 'react-material-ui-carousel'
import m1 from '../../../assets/user/internaute/equipe/m1.jpg'
import m2 from '../../../assets/user/internaute/equipe/m2.jpg'
import m3 from '../../../assets/user/internaute/equipe/m3.jpg'
import w1 from '../../../assets/user/internaute/equipe/w1.jpg'
import w2 from '../../../assets/user/internaute/equipe/w2.jpeg'
import w3 from '../../../assets/user/internaute/equipe/w3.PNG'
const data=[
  {
    img:m3,
    travail : "Directeur général",
    nom : " Ahmed Ben Ali",
    formation : "Ingénieur en Énergie",
    experience : " Plus de 20 ans dans le secteur de l'énergie électrique",
    resp : "Supervision générale des opérations de la STEG",
  },
  {
    img:w1,
    travail : "Responsable des opérations techniques",
    nom : "Fatma Ben Ammar",
    formation : "Ingénieur en Énergie",
    experience : " Plus de 15 ans dans le secteur de l'énergie électrique",
    resp : "Supervision des opérations quotidiennes et de la maintenance des infrastructures de la STEG",
  },
  {
    img:m1,
    travail : "Responsable des finances ",
    nom : "Mohamed Nasri",
    formation : "Diplôme en Finance",
    experience : "Plus de 10 ans dans le secteur financier",
    resp : "Gestion des finances de la STEG, y compris la comptabilité, les budgets et la planification financière",
  },
  {
    img:w2,
    travail : "Responsable des ressources humaines",
    nom : "Amina Ben Ahmed",
    formation : "Diplôme en Ressources Humaines",
    experience : "Plus de 8 ans dans la gestion des ressources humaines",
    resp : "Responsabilités: Gestion des politiques de ressources humaines de la STEG, y compris le recrutement, la formation et le développement des employés",
  },
  {
    img:m2,
    travail : "Responsable de la planification stratégique",
    nom : "Omar Mansour",
    formation : "Master en Administration des Affaires",
    experience : "Plus de 10 ans dans la planification stratégique",
    resp : "Développement de la stratégie d'entreprise de la STEG, y compris la planification à long terme et la mise en œuvre des objectifs stratégiques",
  },
  {
    img:w3,
    travail : "Responsable de la communication",
    nom : "Nadia Ben Said",
    formation : "Diplôme en communication",
    experience : "Plus de 12 ans dans la communication et les relations publiques",
    resp : "Responsable de la communication interne et externe de la STEG, y compris la gestion de l'image de l'entreprise et la coordination avec les médias",
  }
];
function Equipe() {
    const sliderItems = data.length > 3 ? 3 : data.length;
    const items = [];
    for (let i = 0; i < data.length; i += sliderItems) {
      if (i % sliderItems === 0) {
        items.push(
          <div className='equipe-container' key={i.toString()}>
            {data.slice(i, i + sliderItems).map((da, index) => {
              return (
              <div className='card' key={index.toString()} item={da} style={{
                padding:"2px 20px",border:"2px solid grey", borderRadius:"10px", fontSize:'0.8rem',
                display: "flex",boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
                 }}>
                <h3 style={{ }}>{da.travail}</h3>
                <h4>{da.nom}</h4>
                <ul>
                <img src={da.img} style={{width: '230px', height:"200px", margin:"0 auto" }} alt={`${da.nom}`} />
                    <li>Formation:  {da.formation}</li>
                </ul>
              </div>
              );
            })}
          </div>
        );
      }
    }
    return (
      <div id='equipe' className='inter-section'>
         <h1 className='title-internaute'>Notre équipe</h1> 
        <p> 
          Nous sommes une équipe passionnée et engagée dans la mise en place de solutions intelligentes pour la gestion de l'énergie électrique. Nous avons des compétences variées dans les domaines de l'ingénierie, de la gestion de projet, de la communication et du marketing.
        </p>
        <Carousel indicators={false}>
          {items}
        </Carousel>
      </div>
      
    );
}export default Equipe;
