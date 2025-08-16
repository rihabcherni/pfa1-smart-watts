import React from 'react'
import Faq from '../../../assets/user/internaute/faq.PNG'
import { Button, Typography } from '@mui/material';
function FAQ() {
  return (
    <div id='faq' className='inter-section'>
      <h1 className='title-internaute'>FAQ</h1>
      <div style={{ display:"grid", gridTemplateColumns:"40% 40%", gap:"10%" }}>
       <div>
       <p>
          Retrouvez les réponses aux questions les plus 
          fréquentes sur la gestion intelligente de l'électricité 
          et nos solutions  SMART WATTS. Nous avons compilé une liste de questions et réponses pour vous aider à mieux comprendre nos services et à prendre des décisions éclairées en matière d'énergie.
        </p>
        <br/>
        <Button type='submit' variant="contained" sx={{ padding:"10px 30px" }}>
            <Typography variant="button" style={{textTransform: 'capitalize'}}>Voir plus...</Typography>
          </Button>
       </div>

        <img src={Faq} width='100%' style={{ marginTop:"-10%" }}/>
      </div> 
    </div>
  )
}

export default FAQ;
