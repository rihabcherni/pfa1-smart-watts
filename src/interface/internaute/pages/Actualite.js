import React from 'react'
import ImgActualite from "../../../assets/user/internaute/actualite.png"
import Typography from '@mui/material/Typography';
import { FormControl, FormHelperText, InputAdornment, InputLabel, Button, OutlinedInput,Box, TextareaAutosize } from '@mui/material';

function Actualite() {
  return (
    <div id="actualite" className='inter-section'>
        <h1 className='title-internaute'>Actualité</h1> 
        <div className="container-actualite"> 
          <div>
            <p>Retrouvez toutes les dernières actualités et informations sur l'énergie et la gestion intelligente de 
            l'électricité. </p>
            <br/>
            <p>Nous publions régulièrement des articles et des études de cas pour vous informer sur les dernières tendances
            en matière d'énergie et pour vous donner des conseils pratiques pour optimiser votre consommation d'énergie.</p>
            <br/>
            <Button type='submit' variant="contained" sx={{ padding:"10px 30px" }}>
              <Typography variant="button" style={{textTransform: 'capitalize'}}>Voir plus...</Typography>
            </Button>
          </div>
          <div>
            <img src={ImgActualite} alt="actualite image" className="img-act"/>
          </div>
        </div>
       
    </div>
  )
}

export default Actualite;
