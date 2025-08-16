import React, { useState} from "react";
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { Link  } from 'react-router-dom';
import {List, ListItem, IconButton,ListItemButton ,ListItemText,ListItemIcon,Collapse} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import  { Tooltip as ReactTooltip }  from 'react-tooltip';

  export const drawerWidth = 270;
  
  export  function hasChildren(item) {
      const { items: children } = item;
      if (children === undefined) {
        return false;
      }
      if (children.constructor !== Array) {
        return false;
      }
      if (children.length === 0) {
        return false;
      }
    
      return true;
    } 
  export  const openedMixin = (theme) => ({
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: 'hidden',
    });
  export const closedMixin = (theme) => ({
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: `calc(${theme.spacing(7)} + 1px)`,
      [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
      },
    });
  export  const DrawerHeader = styled('div')(({ theme }) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    }));
  export  const AppBar = styled(MuiAppBar, {shouldForwardProp: (prop) => prop !== 'open',})(({ theme, open }) => ({
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    }));
  export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
      ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        }),
      }),
    );

  export  const MenuItem = ({ item ,open  }) => {
    const Component = hasChildren(item) ? MultiLevel : SingleLevel;
    return <Component item={item}  open={open}/>;
  };
  
  const SingleLevel = ({ item ,open}) => {
    return (
      <Link key={item.id}   to={item.path}> 
        {open ? <></> : <ReactTooltip place="right" id="icon-single" type="success" effect="solid"/>}
          <ListItemButton sx={{ maxHeight:35, justifyContent: open ? 'initial' : 'center',  px: 1}}>
            <div data-tip={item.name }  data-for='icon-single' >
              <ListItemIcon sx={{  minWidth: 0, mr: open ? 1 :'auto',  justifyContent: 'center', }}  >
                <IconButton color="secondary"  size= {item.size }  >  {item.icon }  </IconButton>
              </ListItemIcon>
            </div>
            <ListItemText component="div" sx={{opacity: open ? 1 : 0, textDecoration:"none"}}
              primary= {item.name}  primaryTypographyProps={{color: 'secondary', fontSize: '14px', variant: 'body2', }}/>
          </ListItemButton>
      </Link>
    );
  };
  const MultiLevel = ({ item ,open}) => {
    const { items: children } = item;
    const [openSubmenu, setOpenSubmenu] = useState(false);
  
    const handleClick = () => {
      setOpenSubmenu((prev) => !prev);
    };
    return (
      <React.Fragment>
        {open ? <></> : <ReactTooltip place="right" id="icon-multiple" type="success" effect="solid"/>}
        <ListItem button onClick={handleClick}  sx={{ maxHeight:35 }}>
            <div data-tip={item.name }  data-for='icon-multiple' >
              <ListItemIcon sx={{marginLeft:-1.2}}> <IconButton color="secondary" size="medium" >{item.icon}</IconButton></ListItemIcon>
            </div>
            <ListItemText component="div" color="secondary" sx={{ opacity: open ? 1 : 0, textDecoration:"none",margin:"0 10px 0 -8.3px"}} primary= {item.name}  primaryTypographyProps={{color: 'secondary', fontSize: '14px', variant: 'body2', }}/>
            {openSubmenu ? <ExpandLessIcon sx={{color:"white"}} /> : <ExpandMoreIcon sx={{color:"white"}} />}
        </ListItem>
        <div style={{marginLeft:8}}>
          <Collapse in={openSubmenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding  >
                  {children.map((child, key) => (
                    <MenuItem key={key}  item={child} open={open}/>
                  ))}
            </List>
          </Collapse>
        </div>

      </React.Fragment>
    );
  };