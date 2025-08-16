import React from 'react'
import Logo from '../../../assets/logo.svg'
import Image404 from '../../../assets/error/page 404.jpg'
import { useNavigate } from 'react-router-dom'
import '../../../Styles/Error.css'
import { Button, Typography } from '@mui/material'
function Page404() {
  const navigate = useNavigate();
  let linkPagePrincipale='';
  if(localStorage.getItem('Role')==='administrateur'){
    linkPagePrincipale='/administrateur'
  }else if(localStorage.getItem('Role')==='client'){
    linkPagePrincipale='/client'
  }else if(localStorage.getItem('Role')==='agent-maintenance'){
    linkPagePrincipale='/agent-maintenance'
  }
  return (
    <div>
      <img src={Logo} alt="logo" width="120px"/>
      <div className='container-error'>
        <h1 className='messgae-error1'>Page non trouvée</h1>
        <img src={Image404} alt='404 image' className='image-error'/>    
        <br/>
        <Button type='submit' variant="contained" onClick={() => navigate(linkPagePrincipale)}>
            <Typography variant="button" style={{textTransform: 'capitalize'}}>
            Revenir à la page principale
            </Typography>
        </Button>
        <Button type='submit' variant="contained" onClick={() => navigate(-1)} sx={{ marginLeft:"10px" }} >
            <Typography variant="button" style={{textTransform: 'capitalize'}}>
            Allons à la dernière page visitée
            </Typography>
        </Button>
      </div>
    </div>
  )
}

export default Page404
