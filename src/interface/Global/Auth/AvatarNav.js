import React , {useState , useEffect} from 'react'
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ListItemIcon, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link  ,useNavigate} from 'react-router-dom';
import Swal from "sweetalert";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {StyledBadge} from '../style'
import HttpsIcon from '@mui/icons-material/Https';


export default function AvatarNav(props) {
  var user ="";
  var fileName ="";
  if("auth_token" in localStorage){
    if(localStorage.getItem("Role")=== "administrateur"){
        user="administrateur";
        fileName="administrateur";
    }else if(localStorage.getItem("Role")=== "client"){
        user="client"
        fileName="client"
    }else if(localStorage.getItem("Role")=== "agent-maintenance"){
        user="agent-maintenance"
        fileName="agent-maintenance"
    }
  }
  const logoutSubmit= (e)=>{
    e.preventDefault();
    axios.post(`api/logout`).then(res=>{
      if(res.data.status===200){
        localStorage.removeItem('auth_token');
        localStorage.removeItem('Role');
        localStorage.removeItem('profile');
        Swal('Success',res.data.message,"success")
        navigate("/")   
      }
    })
  }
  var AuthButtons='';
    if(localStorage.getItem('auth_token')){
      AuthButtons=( <li onClick={logoutSubmit} style={{color:"blue", fontSize:"13px" , margin:"2px -5px"}}>Se Déconnecter</li> )
  }
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }; 

/*------------- Notification --------------*/
  const [notification, setNotification] = useState(null);
  const openNotification = Boolean(notification);
  const clickNotification = (event) => { setNotification(event.currentTarget);};
  const closeNotification = () => {setNotification(null);};
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
/*------------- image avatar --------------*/

  const [profile, setProfile] = useState(null)
  const getData = () => {
    fetch(`http://127.0.0.1:8000/api/profile`, requestOptions)
    .then(response => response.json())
    .then(result => setProfile(result))
    .catch(error => console.log('error', error));
  }
    useEffect(() => {
      getData()
    }, [])
    let image = [];
    if(profile!==null ){
        if(profile.photo!==null){
            image.push(<><Avatar alt={profile.nom} src={`http://127.0.0.1:8000/storage/images/${fileName}/${profile.photo}`}/></>);
        }else{image.push(<><Avatar alt="user image" /></>)} 
        }else{image.push(<><Avatar alt="user image"  /></>);}  
  return (
     <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton  size="large"  aria-label="show 17 new notifications" color="secondary" id="notification-button" aria-controls={openNotification ? 'notification-menu' : undefined} 
              aria-haspopup="true" aria-expanded={openNotification ? 'true' : undefined} onClick={clickNotification}>
                    <Badge badgeContent={17} color="error"><NotificationsIcon sx={{color:`${props.couleur}`}}/></Badge>
          </IconButton>
        <Menu id="notification-menu"  MenuListProps={{ 'aria-labelledby': 'notification-button' }} 
        anchorEl={notification} open={openNotification}  onClose={closeNotification} 
        TransitionComponent={Fade} 
        PaperProps={{
          style: {
            backgroundColor:'white',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          },
        }}>
              <MenuItem onClick={closeNotification}>Notification 1</MenuItem>
              <MenuItem onClick={closeNotification}>Notification 2</MenuItem>
              <MenuItem onClick={closeNotification}>Notification 3</MenuItem>
              <MenuItem onClick={closeNotification}>Notification 4</MenuItem>
        </Menu> 
          <Button id="fade-button" aria-controls={open?'fade-menu':undefined} aria-haspopup="true" aria-expanded={open ?'true':undefined} onClick={handleClick} color='secondary'>
            <StyledBadge overlap="circular" anchorOrigin={{vertical:'top',horizontal:'right'}} variant="dot">{image[0]}</StyledBadge>    
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                backgroundColor:'white',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
              },
            }}
          >
              <MenuItem onClick={handleClose}>
                <Link to={`/${user}/profile`}>
                  <ListItemIcon>
                    <Avatar fontSize="small"  sx={{margin:"0 -8px 0"}}/>
                    <li style={{fontSize:"13px" , margin:"15px 7px 0"}}>Mon Profile</li>
                  </ListItemIcon>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <Link to={`/${user}/modifier-mot-de-passe`}>
                  <ListItemIcon>
                    <HttpsIcon fontSize="small" />
                    <li style={{ fontSize:"13px" , margin:"2px 10px"}}>Changer mot de passe</li>
                  </ListItemIcon>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ExitToAppIcon fontSize="small" sx={{ color:"blue" }} />
                </ListItemIcon>
                {AuthButtons}
              </MenuItem>
          </Menu>
    </Box>
  ) 
}
