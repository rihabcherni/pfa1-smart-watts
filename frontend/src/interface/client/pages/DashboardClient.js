import React , {useState , useEffect} from 'react';
import {Typography , Paper} from '@mui/material'
import { styled } from '@mui/material/styles';
import GlobalStatClient from '../components/DashClient/GlobalStatClient';
export const Item = styled(Paper)(({ theme }) =>  ({
  backgroundColor: theme.palette.mode === 'dark' ?  '#000':'#f0f0f0', border:' 2px solid #f0f0f0', ...theme.typography.body2,
  padding: theme.spacing(1),  margin:'10px 0', color: theme.palette.text.secondary })
);
export default function DashboardClient() {
    var profile = JSON.parse(localStorage.getItem('profile'));
    return (
      <div className="container_dashboard_resp">
        <Typography variant='h6' sx={{color:"green"}}> Tableau de bord </Typography>
        <Typography variant='p' sx={{color:"gray"}}>
          Bonjour, <b style={{color:"green"}}>{profile.nom} {profile.prenom}</b>, bienvenue dans votre tableau de bord.
        </Typography>  
        <div>
            <Item>
              <Typography variant='p' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"10px"}}>Statistiques générales </Typography>
              <GlobalStatClient/>                
            </Item>
            <Item>
              <Typography variant='p' sx={{fontWeight:"600", fontFamily:"Fredoka"}}>Pannes Compteurs</Typography>
              
            </Item>              
        </div>
      </div>
    )
}
