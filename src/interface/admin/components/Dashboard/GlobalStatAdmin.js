import React, { useState, useEffect } from 'react'
import {RiBuildingLine} from "react-icons/ri"
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Skeleton } from '@mui/material';
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { FaTrashAlt,FaUserAlt,FaBuilding ,FaTrash, FaUserTie,FaTruckMoving } from "react-icons/fa";
import { MdOutlineRecycling} from "react-icons/md";
import { TiSpanner} from "react-icons/ti";
import EngineeringIcon from '@mui/icons-material/Engineering';
import '../../../../Styles/GlobalStatistiques.css'
const CardStatistique =( {data , nom ,icon})=>{
    return (
       <div>
           <div style={{display:"flex" , justifyContent:"center"}}>   
               {icon}<Typography color="primary" variant='h5' sx={{fontSize:"30px",marginTop:"-10px", fontWeight:"500", fontFamily:"Fredoka"}}  >{data}</Typography>  
           </div>
           <Typography variant='p' sx={{fontSize:"14px",fontWeight:"500", fontFamily:"Fredoka"}} color="primary">{nom}</Typography>
       </div>
    )
   }
const BoxCard = styled(Box)(({ theme }) => ({backgroundColor: theme.palette.mode === 'dark' ? 'rgba(254, 250, 250, 0.958)':  'rgba(254, 250, 250, 0.958)',padding:'10px', borderRadius:"10px", textAlign:"center", padding:"7px", color:'white',margin:"3px 0px",}));

export default function GlobalStatAdmin() {
    const [data, setData] = useState(null)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);
    var requestOptions = {method: 'GET', headers: myHeaders, redirect: 'follow'};
    const getData = () => {
      fetch(`http://127.0.0.1:8000/api/glob-stat-client`, requestOptions).then(response => response.json())
      .then(result => setData(result)).catch(error => console.log('error', error)); 
    }
    useEffect(() => { getData()}, [])
    console.log(data)
    if(data!==null){
        return (
            <>
              <div className="container-globale-stat">
                <BoxCard > 
                    <Typography variant='h6' >f</Typography>  
                    <Typography variant='body2'>Nombre poubelles</Typography>
                </BoxCard> 
                <BoxCard > 
                    <Typography variant='h6' >f</Typography>  
                    <Typography variant='body2'>Nombre poubelles</Typography>
                </BoxCard>  
                <BoxCard > 
                    <Typography variant='h6' >f</Typography>  
                    <Typography variant='body2'>Nombre poubelles</Typography>
                </BoxCard>  
                <BoxCard > 
                    <Typography variant='h6' >f</Typography>  
                    <Typography variant='body2'>Nombre poubelles</Typography>
                </BoxCard>   
              </div>
              <br/>
              <div className="container">
            <div className="card-dashboard" >
                <Typography color="orange" variant='h5' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"20px"}}>Gestion des ressources humaines</Typography>
                <div className="card-div">
                    <CardStatistique data={data.nbr_ouvrier} nom='Ouvriers' 
                        icon={ <FaUserAlt className='card-icon' style={{color:'#0025ff'}}/>}/>
                    <CardStatistique data={data.nbr_client_dechet} nom='Acheteurs Déchets'
                        icon={ <FaUserTie className='card-icon' style={{color:'green'}}/>}/>
                    <CardStatistique data={data.nbr_mecanicien} nom='Mécaniciens'
                        icon={ <EngineeringIcon className='card-icon' sx={{color:'red', fontSize:"60px "}}/>}/>    
                </div>    
            </div>
            <div className="card-dashboard" >
                <Typography color="orange" variant='h5' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"20px"}}>Gestion des établissement</Typography>
                <div className="card-div">

                    <CardStatistique data={data.nbr_etablissement} nom='Etablissements'
                        icon={  <ApartmentIcon className='card-icon' style={{fontSize:"50px",color:'gray'}}/>}/>

                    <CardStatistique data={data.nbr_bloc_etablissement} nom='Blocs'
                        icon={ <FaBuilding className='card-icon' style={{width:"30px",color:'gray'}}/>}/>


                    <CardStatistique data={data.nbr_etage_etablissement} nom='Etages'
                        icon={ <RiBuildingLine className='card-icon' style={{width:"40px",color:'gray'}}/>}/>

                    <CardStatistique data={data.nbr_bloc_poubelle} nom='Blocs Poubelles'
                        icon={ <FaTrashAlt className='card-icon' style={{width:"40px",color:'gray'}}/>}/>

                    <CardStatistique data={data.nbr_poubelle_vendus} nom='Poubelles en Terrain'
                        icon={ <FaTrash className='card-icon' style={{width:"40px",color:'gray'}}/>}/>
                </div>    
            </div>
            
            <div className="card-dashboard" >
                <Typography color="orange" variant='h5' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"20px"}}>Gestion du Transport déchets</Typography>
                
                <div className='container2'>
                  <div>
                    <Typography color="orange" variant='h6' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"8px"}}>Gestion commandes</Typography>
                    <div style={{textAligne:"center"}}>
                        <CardStatistique data={data.nbr_commande_dechet} nom='Commandes déchets'
                            icon={ <MdOutlineRecycling className='card-icon' style={{color:'green'}}/>}/>
                    </div>   
                  </div>
                  <div>
                    <Typography color="orange" variant='h6' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"8px"}}>Gestion des pannes</Typography>
                    <div className="container2">
                        <CardStatistique data={data.nbr_panne_poubelle} nom='Pannes poubelles'
                            icon={ <TiSpanner className='card-icon' style={{color:'red'}}/>}/>
                     
                    </div>  
                   </div> 
                </div> 
 
            </div>
        </div>
            </>
        )
    }else{
        return (
            <>     
                <div className='container-globale-stat' >
                    <Skeleton variant="rectangular"  height={320}/>
                    <Skeleton variant="rectangular"  height={320}/>
                    <Skeleton variant="rectangular"  height={320}/>
                    <Skeleton variant="rectangular"  height={320}/>
                </div>
            </>
        );
    };
}
