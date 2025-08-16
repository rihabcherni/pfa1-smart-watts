import React, { useState, useEffect } from 'react'
import Chart1 from './Chart1'
import { Skeleton } from '@mui/material';
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { MdOutlineRecycling} from "react-icons/md";
import { TiSpanner} from "react-icons/ti";
import '../../../../Styles/GlobalStatistiques.css'
import Home from '../../../../assets/user/client/house.png'
import Reclamation from '../../../../assets/user/client/reclamation.png'
import TotalConMonth from '../../../../assets/user/client/consommationTotal.png'
import compteur from '../../../../assets/user/client/compteur.png'
import broken from '../../../../assets/user/client/broken.png'
import Piechart from './PieChart';
const BoxCard = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ?'#383838':  '#fff',
    color: theme.palette.mode === 'dark' ?'#FFFAFA':  '#103AD2',
    padding:'10px',borderRadius:"10px",
    lineHeight: 1,
    fontSize: '1.2rem',
    textAlign: 'center',
    borderRadius: '10px',
    boxshadow: '0px 2px 10px 5px rgba(167, 166, 166, 0.98)'}));
const CardStatistique =( {data , nom ,img})=>{
    return (
       <BoxCard>
           <div style={{display:"flex" , justifyContent:"center"}}>   
              {img} 
              <Typography variant='h5' 
                sx={{fontSize:"30px",marginTop:"-10px", fontWeight:"bold", fontFamily:"Fredoka"}}>
                    {data}
              </Typography>  
           </div>
           <Typography variant='p' sx={{fontSize:"14px",fontWeight:"bold", fontFamily:"Fredoka"}} >{nom}</Typography>
       </BoxCard>
    )
   }
export default function GlobalStatClient() {
    const [data, setData] = useState(null)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);
    var requestOptions = {method: 'GET', headers: myHeaders, redirect: 'follow'};
    // const getData = () => {
    //   fetch(`http://127.0.0.1:8000/api/glob-stat-client`, requestOptions).then(response => response.json())
    //   .then(result => setData(result)).catch(error => console.log('error', error)); 
    // }
    // useEffect(() => { getData()}, [])
    // console.log(data)
    // if(data!==null){
        return (
            <>
              <div className="container-globale-stat">
                    <CardStatistique data={4} nom='Logements'
                        img={ <img src={Home} width="50px"/>}/>
                    <CardStatistique data={7} nom="Compteur d'électricité intelligent"
                        img={ <img src={compteur} width="50px"/>}/>
                    <CardStatistique data={572} nom='Consommation totale ce mois'
                        img={ <img src={TotalConMonth} width="50px"/>}/>
                    <CardStatistique data={3} nom='Réclamtions'
                        img={ <img src={Reclamation} width="50px"/>}/>
                    <CardStatistique data={2} nom='Pannes'
                        img={ <img src={broken} width="50px"/>}/>
              </div>
              <br/>
              <div style={{ display:"grid", gridTemplateColumns:"34% 66%" }}>
                <Piechart/>
              <Chart1/>
              </div>
              
            </>
        )
    // }else{
    //     return (
    //         <>     
    //             <div className='container-globale-stat' >
    //                 <Skeleton variant="rectangular"  height={320}/>
    //                 <Skeleton variant="rectangular"  height={320}/>
    //                 <Skeleton variant="rectangular"  height={320}/>
    //                 <Skeleton variant="rectangular"  height={320}/>
    //             </div>
    //         </>
    //     );
    // };
}
