import React , {useState , useEffect} from 'react'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
// import ProfilePhoto from "../images/default_profile_image.jpg"
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
export default function AffichageRightProfile({toggleDrawer}) {
  var show1=[];
  var user ="";
  var fileName ="";
  if("auth_token" in localStorage){
    if(localStorage.getItem("Role")=== "administrateur"){
          show1=[ ["Nom","nom"],  ["Prénom","prenom"], ["Carte d'identité nationnale","CIN"],  ["Numéro de téléphone","numero_telephone"], ["Email","email"],];
          user="administrateur";
          fileName="administrateur";
    }else if(localStorage.getItem("Role")=== "client"){
          show1=[ ["Nom","nom"],  ["Prénom","prenom"],["Numéro de téléphone","numero_telephone"],["Numero fixe","numero_fixe"], ["Email","email"],];
          user="client"
          fileName="client"
    }else if(localStorage.getItem("Role")=== "agent-maintenance"){
          show1=[ ["Nom","nom"], ["Prénom","prenom"],  ["nom entreprise","nom_entreprise"], ["matricule fiscale","matricule_fiscale"],  ["Numéro de téléphone","numero_telephone"],["Numero fixe","numero_fixe"],["Email","email"]];
          user="agent-maintenance"
          fileName="agent-maintenance"
    }
  }
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);
  var requestOptions = { method: 'GET',headers: myHeaders,redirect: 'follow' };
  const [profile, setProfile] = useState(null)
  const getData = () => {
    fetch(`http://127.0.0.1:8000/api/profile`, requestOptions)
    .then(response => response.json())
    .then(result => setProfile(result))
    .catch(error => console.log('error', error));
  }
useEffect(() => {getData()}, [])
if(profile!==null){
    return (
     <>    
        {/* {profile.photo===null?
            // <img src={ProfilePhoto} alt="default images profile" style={{margin:"2% 18%" , borderRadius:"50%", width:"200px", height:"200px"}}/>: 
            <img src={`http://127.0.0.1:8000/storage/images/${fileName}/${profile.photo}`} style={{margin:"2% 18%" , borderRadius:"50%", width:"200px", height:"200px"}} alt="utilisateur image"/>
        } */}
        <ul style={{fontSize:"16px", margin:"20px -10px", color:"#444444"}}>
            {show1.length!==0?(show1.map((sh, key) =>   
                ((sh[1]!=="created_at" && sh[1]!=="updated_at" && sh[1]!=="photo" && sh[1]!=="qrcode"  && sh[1]!=="mot_de_passe")?(
                <li key={key}><b>{sh[0]}: </b>{profile[sh[1]]}</li>
                ): null)
            )):null
            }
        </ul>
        <Link to ={`/${user}/profile`} style={{color:"white"}}>
            <Button  onClick={toggleDrawer} sx={{ position: 'relative', width:"100%", top:"10px", justifyContent:"center"}} color="primary" variant="contained">Modifier profile</Button> 
        </Link>    
     </>
    )
  }else {
      return (
        <Box sx={{padding:"1px 30px"}}>
              <Skeleton  sx={{height:"250px", width:"250px"}}  variant="circular"/>     
              <Skeleton sx={{height:60}} />
              <Skeleton animation="wave" sx={{height:60}} />                      
              <Skeleton sx={{height:60}} />
              <Skeleton animation="wave" sx={{height:60}} />                      
              <Skeleton sx={{height:60}} />
        </Box>
      )
  }


}
