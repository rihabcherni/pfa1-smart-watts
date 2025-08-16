import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../Styles/internaute/Footer.css'
import logo from '../../../assets/logo.PNG'
import { faEnvelope, faMap, faPhone , faFax} from '@fortawesome/free-solid-svg-icons';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { faFacebookF, faGoogle, faYoutube } from '@fortawesome/free-brands-svg-icons';
function FooterInter() {
  return (
    <footer>
              <div className="footerSection">
            <div className='logo-footer'>
                    <p className='title-logo-footer'> SMART WATTS</p>
                    <img src={logo} alt="logo image" className='logo'/>
            </div>

            <div className='section'>
                <p className='title-footer'>Menu</p>
                <div className='container2'>
                  <div>
                    <a className="footerLink" href="/">Acceuil</a>
                    <a className="footerLink" href="/#a-propos" >A propos</a>
                    <a className="footerLink" href="/#actualite" >Actualité</a>
                    <a className="footerLink" href="/#mission-objectifs" >Mission et Objectifs</a>
                    <a className="footerLink"href="/#services" >Services</a>
                  </div>
                  <div>
                    <a className="footerLink" href="/#partenaires" >Partenaires</a>
                    <a className="footerLink" href="/#faq" >FAQ</a>
                    <a className="footerLink" href="/#equipe" >Equipe</a>
                    <a className="footerLink"href="/#contact" >Contactez-nous </a>
                  </div>
                </div>
            </div>
                        
      

            <div className='section-last'>
              <p className='title-footer'>Information Contact</p>  
                <div className="section-last-left">
                  <li><FontAwesomeIcon icon={faMap} className="icon" /><b>Adresse siège:</b>  38 rue Kamel Ataturk 1080 Tunis</li>
                  <li><FontAwesomeIcon icon={faPhone} className="icon"/><b>Téléphone :</b>(+216) 71 341 311</li>                 
                  <li><FontAwesomeIcon icon={faFax} className="icon"/><b>Fax :</b>(+216) 71 330 174 - (+216) 71 349 981</li>                 
                  <li><FontAwesomeIcon icon={faEnvelope} className="icon"  /><b>Email :</b> dpsc@steg.com.tn</li> 
                </div>
                <div className="wrapper">
                  <ul>
                    <li className="facebook"><a className="facebook" to="https://www.facebook.com/RESCHOOL.EDUCATION"><FontAwesomeIcon icon={faFacebookF} className='fa fa-facebook'/></a></li>                 
                    <li className="youtube"><a href=" https://www.youtube.com/channel/UCVz1D9WyNVZAFCB6cxqpDGQ"><FontAwesomeIcon icon={faYoutube} className='fa fa-youtube'/></a></li>                 
                    <li className="google"><a href="https://reschoolwethink.education/"><FontAwesomeIcon icon={faGoogle} className='fa fa-google'/></a></li>                 
                  </ul>
                </div>
            </div>
            <div className='scroll-icon'>
                <a href='#bottom' className='top-btn'><KeyboardArrowDownIcon  sx={{ fontSize: 40 }}/></a> 
                <a href='#top' className='bottom-btn'><KeyboardArrowDownIcon  sx={{ fontSize: 40 }}/></a> 
            </div>
        </div>
             

        <div id="bottom" className='copy-right'>
          <p>@copyright 2023 par l'équipe de  SMART WATTS, Tous droits réservés</p>
        </div>
    </footer>
  )
}

export default FooterInter;
