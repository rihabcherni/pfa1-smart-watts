import React from 'react'
import '../../../Styles/internaute/Nav.css'
import Logo from '../../../assets/logo.PNG'

import { Link, useLocation } from 'react-router-dom'
function HeaderInter() {
  const location = useLocation();
  return (
    <div>
      <div className="navbar">
         <div className="nav-header">
            <div className="nav-logo">
            <Link to="/"><img src={Logo} width="87px" alt="logo"/></Link>
            </div>
          </div>
            <input type="checkbox" id="nav-check"/>
            <div className="nav-btn">
              <label htmlFor="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
            <div className="nav-links">
                <a className={location.hash === '' ? 'active' : ''} href="/">Acceuil</a>
                <a className={location.hash === '#a-propos' ? 'active' : ''} href="/#a-propos" >A propos</a>
                <a className={location.hash === '#actualite' ? 'active' : ''} href="/#actualite" >Actualité</a>
                <a className={location.hash === '#mission-objectifs' ? 'active' : ''} href="/#mission-objectifs" >Mission et Objectifs</a>
                <a className={location.hash === '#services' ? 'active' : ''} href="/#services" >Services</a>
                <a className={location.hash === '#partenaires' ? 'active' : ''} href="/#partenaires" >Partenaires</a>
                <a className={location.hash === '#faq' ? 'active' : ''} href="/#faq" >FAQ</a>
                <a className={location.hash === '#equipe' ? 'active' : ''} href="/#equipe" >Equipe</a>
                <a className={location.hash === '#contact' ? 'active' : ''} href="/#contact" >Contact</a>
                <button className="loginBtn"><a href="/login" >Connexion</a></button>
            </div>
      </div>
    </div>
  )
}
export default HeaderInter;
