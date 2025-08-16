import React ,{useState , useEffect, useLayoutEffect} from "react";
import { Link, Outlet} from 'react-router-dom';
import { MenuItem,AppBar,Drawer } from "./Sidebar/SideBarFunction";
import {Toolbar,Box,Button, List, IconButton} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import HeaderRightIcon from "./Sidebar/HeaderRightIcon";
import { Experimental_CssVarsProvider as CssVarsProvider, useColorScheme,experimental_extendTheme} from '@mui/material/styles';
import Moon from '@mui/icons-material/DarkMode';
import Sun from '@mui/icons-material/LightMode';
import { blue } from '@mui/material/colors';
import Logo from '../../assets/logo.svg'
/*   dark-light  components */
const DarkLightMode = () => {
      const { mode, setMode } = useColorScheme();
      const [mounted, setMounted] = useState(false);
      useEffect(() => {setMounted(true);}, []);
      if (!mounted) {  return null;}
      return (
          <Button variant="contained" onClick={() => {if (mode === 'light') {  setMode('dark');} else { setMode('light'); }}} >
              {mode === 'light' ?  <Sun sx={{color:"white"}} /> :<Moon  sx={{color:"white"}}/>}
          </Button>
      );
};
const theme = experimental_extendTheme({
  colorSchemes: {
    light: {
        palette: { 
            primary: {main: '#1976d2'},
            secondary: { main: '#fff'},
            text: {  primary: blue[900], secondary:  blue[600] },
        },
    },
    dark: {
        palette: {
            primary: {main: '#000' },
            secondary: { main: '#fff'},
            text: { primary:blue[800], secondary: blue[500]},
        },
    },
  },
});
const useEnhancedEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
/*    dark-light  components */
export default function InterfaceUser({SidebarUser}) {
  const [color, setColor] = useState(null);
  useEnhancedEffect(() => { setColor(document.getElementById('css-vars-custom-theme'));}, []);
  
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => { setOpen(true); };
  const handleDrawerClose = () => { setOpen(false); };

  return (
      <div id="css-vars-custom-theme" style={{ backgroundColor:'red' }}>
        <CssVarsProvider theme={theme} colorSchemeNode={color || null} colorSchemeSelector="#css-vars-custom-theme" colorSchemeStorageKey="custom-theme-color-scheme" modeStorageKey="custom-theme-mode">
            <Box bgcolor="background.paper" sx={{ p: 1 }}>
              <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar open={open} sx={{backgroundColor:"#1976d2"}}>
                  <Toolbar>
                    <Box sx={{marginRight: 5, ...(open && { display: 'none' })  }}>
                        <div  style={{fontWeight:"bold", color:"white" ,margin:"0 0 0 -20px",fontFamily: 'Fredoka'}}>
                            <img src={Logo} style={{verticalAlign: "middle",marginRight:"5px", width:"60px"}}/>               
                            <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" ><MenuIcon sx={{ fontSize: 25 }} /> </IconButton>
                        </div>
                    </Box>               
                    <Box sx={{ flexGrow: 1 }} />    
                    <DarkLightMode />
                    <HeaderRightIcon/>             
                  </Toolbar>  
                </AppBar>
                <Drawer PaperProps={{sx:{backgroundColor:"#1976d2"}}} variant="permanent" open={open}>
                  <div style={{fontWeight:"bold",backgroundColor:"white" ,margin:"8px 10px",fontFamily: 'Fredoka'}}>
                    <Link to="/">  <img src={Logo} style={{verticalAlign: "middle", width:"85px", borderRadius:"50%"}}/>
                      <span style={{fontSize:"16px"}} >SMART WATTS </span>
                    </Link>
                    <IconButton onClick={handleDrawerClose}><MenuIcon sx={{ fontSize: 25 }}/></IconButton>
                  </div>
                  <List>{SidebarUser.map((lien) => (
                    <div key={lien.id}>
                      <MenuItem item={lien} open={open}/>
                    </div>
                    ))}
                  </List>
                </Drawer>              
                <Box component="main" sx={{ flexGrow: 1,p:2}}>
                  <div style={{ marginTop:"50px" }}>
                     <Outlet/>
                  </div> 
                </Box>            
              </Box>
            </Box>
        </CssVarsProvider>
    </div>
  );
}
