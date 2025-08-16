import React,{useState} from 'react'
import axios from 'axios';
import img from '../../../assets/marker-icon.png'
import Swal from 'sweetalert';
import { FormControl, FormHelperText, InputAdornment, InputLabel, Button, OutlinedInput,Box, TextareaAutosize } from '@mui/material';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Typography from '@mui/material/Typography';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
const containerStyle = {
  width: '95%',
  height: '42vh'
};
const icon = L.icon({ iconUrl: img });

function Contact() {
  const [contactInput, setcontactInput] = useState({
    nom: '',
    prenom: '',
    email: '',
    numero_telephone: '',
    message: '',
    error_list:[],
});
const handleInput =  (e) => {
    e.persist();
    setcontactInput({ ...contactInput, [e.target.name]: e.target.value });
};
const contactSubmit = (e) => {
    e.preventDefault();
    const data = {
        nom: contactInput.nom,
        prenom:contactInput.prenom,
        email:contactInput.email,
        numero_telephone:contactInput.numero_telephone,
        message:contactInput.message,
    }
      axios.post(`api/internaute/contact-us`,data).then(res =>{
        if(res.data.success === true){
            console.log(res.data.data)
            Swal("Success", "Votre message a bien été envoyé "+ res.data.data.nom+' '+res.data.data.prenom ,"success")
            setTimeout(function(){
                window.location.reload(1);
             }, 3000);
        }else{
            setcontactInput({...contactInput,error_list:res.data.validation_error});
            console.log(res.data.validation_error)
            Swal("Erreur", "Vérifiez votre champ de saisie " ,"error")
        }
      }) 
    
  };
  return (
    <div id='contact' className='inter-section'>
      <h1 className='title-internaute'>Contact</h1> 
      <div className='container-contact'>
        <div >
        <p style={{ fontSize:'12px' }}>N'hésitez pas à nous contacter pour en savoir plus sur nos services et solutions. Notre équipe d'experts en énergie est à votre disposition pour répondre à toutes vos questions et vous aider à trouver les solutions les plus efficaces pour vos besoins.
          <br/>Siège : Tunis<br/>
          Adresse : 38 rue Kamel Ataturk 1080 Tunis</p>
          <MapContainer center={[ 36.80482172041758, 10.183193953004679]} zoom={13} style={containerStyle}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery © <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
            />
            <Marker position={[36.80482172041758, 10.183193953004679]} icon={icon}>
              <Popup>
              STEG <br />38 rue Kamel Ataturk <br />1080 Tunis
              </Popup>
            </Marker>
          </MapContainer>
        </div>         
         <form onSubmit={contactSubmit}>
              <div style={{display:'grid',rowGap:'1rem'}}>
                  <Box sx={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', columnGap: '1rem'}}>
                      <FormControl fullWidth variant="outlined" color="success">
                          <InputLabel htmlFor="Nom" sx={{width:"200px"}} >Nom</InputLabel>
                          <OutlinedInput id="nom" type='text' name="nom" value={contactInput.nom}
                          onChange={handleInput} placeholder='Entrer votre nom'
                          startAdornment={<InputAdornment position="start"><PersonPinCircleIcon/></InputAdornment> }  
                          error={!!contactInput.error_list.nom} label="Nom" 
                          />
                          <FormHelperText error={true}>
                          {contactInput.error_list.nom}           
                          </FormHelperText> 
                      </FormControl>

                      <FormControl fullWidth variant="outlined" color="success">
                          <InputLabel htmlFor="prenom" sx={{width:"200px"}} >Prénom</InputLabel>
                          <OutlinedInput id="prenom" type='text' name="prenom" value={contactInput.prenom}
                          onChange={handleInput} placeholder='Entrer votre prénom'
                          startAdornment={<InputAdornment position="start"><PersonPinCircleIcon/></InputAdornment> }  
                          error={!!contactInput.error_list.prenom} label="prenom" 
                          />
                          <FormHelperText error={true}>
                          {contactInput.error_list.prenom}           
                          </FormHelperText> 
                      </FormControl>
                  </Box>
                  <FormControl fullWidth variant="outlined" color="success">
                      <InputLabel htmlFor="Email" sx={{width:"200px"}} >Adresse Email</InputLabel>
                      <OutlinedInput id="email" type='email' name="email" value={contactInput.email}
                      onChange={handleInput} placeholder='Entrer votre email'
                      startAdornment={<InputAdornment position="start"><AlternateEmailIcon/></InputAdornment> }  
                      error={!!contactInput.error_list.email} label="Adresse Email" 
                      />
                      <FormHelperText error={true}>
                      {contactInput.error_list.email}           
                      </FormHelperText> 
                  </FormControl>

                  <FormControl fullWidth variant="outlined" color="success">
                      <InputLabel htmlFor="numero_telephone" sx={{width:"200px"}} >Numero telephone</InputLabel>
                      <OutlinedInput id="numero_telephone" type='text' name="numero_telephone" value={contactInput.numero_telephone}
                      onChange={handleInput} placeholder='Entrer votre numero telephone'
                      startAdornment={<InputAdornment position="start"><LocalPhoneIcon/></InputAdornment> }  
                      error={!!contactInput.error_list.numero_telephone} label="numero_telephone" 
                      />
                      <FormHelperText error={true}>
                      {contactInput.error_list.numero_telephone}           
                      </FormHelperText> 
                  </FormControl>

                  <FormControl fullWidth variant="outlined" color="success">
                      <TextareaAutosize  id="message" minRows={4} type='text' name="message" value={contactInput.message}
                          onChange={handleInput} placeholder='Entrer votre message'
                          startAdornment={<InputAdornment position="start"><PersonPinCircleIcon/></InputAdornment> }  
                          error={!!contactInput.error_list.message} label="message" fullWidth
                          style={{padding:"10px", borderRadius:"5px", border:"1px solid #BEBEBE"}}
                      />                  
                      <FormHelperText error={true}>
                      {contactInput.error_list.message}           
                      </FormHelperText> 
                  </FormControl>
              </div>
              <br/>
              <Button type='submit' variant="contained" sx={{float:"right"}}>
                <Typography variant="button" style={{textTransform: 'capitalize'}}>
                  confirmer
                </Typography>
              </Button>
        </form>
      </div>

    </div>
  )
}

export default Contact
