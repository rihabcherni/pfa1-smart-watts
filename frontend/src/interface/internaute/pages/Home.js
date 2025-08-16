import React from 'react'
import img1 from '../../../../src/assets/user/internaute/compteur.PNG'
import img2 from '../../../../src/assets/user/internaute/acceuil1.PNG'
import img3 from '../../../../src/assets/user/internaute/agent.PNG'
import Carousel from 'react-material-ui-carousel'

function Item(props){
  return (<div className='container-carousel' style={{ backgroundImage:`url(${props.item.image})` }}>
            <div className='center-carousel'>
              <h2>Bienvenue sur notre site <b>  SMART WATTS</b> dédié à la gestion d'energie électrique avec des compteurs intelligents.</h2> 
              <br/>
              <h4 className='text-carousel'>{props.item.text}</h4> 
            </div>
          </div>  
      )
}

function Home() {
  var data = [ 
    { id:1, image:img1 , color:"red", text:"Nous offrons une platforme avancée pour vous aider à suivre et optimiser votre consommation d'energie électrique."},
    { id:2, image:img2 , color:"blue", text:"Nous aidons nos clients à optimiser leur consommation d'énergie et à réaliser des économies tout en préservant l'environnement."},
    { id:3, image:img3 , color:"green", text:"Nous aidons nos clients à optimiser leur consommation d'énergie et à réaliser des économies tout en préservant l'environnement."},
    { id:4, image:img1 , color:"yellow", text:"Découvrez comment nous pouvons vous aider à réduire vos coûts d'énergie tout en assurant une consommation responsable."}
  ]
  return (
    <div id='acceuil' className='inter-section'>
        <Carousel fullHeightHover={true}  
              sx={{ overflowY: 'visible', overflowX: 'clip' }} 
              indicators={false}
              navButtonsProps={{          
                style: {
                    backgroundColor: 'cornflowerblue',
                    borderRadius: 0
                }
              }} >
            { data.map( (item, i) => <Item key={i} item={item} /> )  }
        </Carousel>    
    </div>
  )
}

export default Home;
