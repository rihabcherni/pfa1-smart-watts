import React , {useState} from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationGestionnaire from './NotificationGestionnaire';
import AffichageRightProfile from './AffichageRightProfile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
    function TabPanel(props) {
      const { children, value, index, ...other } = props;
      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 1 }}>
              <>{children}</>
            </Box>
          )}
        </div>
      );
    }

    TabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }
    export default function RightSideBarGestionnaire() {
      const [isOpen, setIsOpen] = useState(false)
      const toggleDrawer = () => {
          setIsOpen((prevState) => !prevState)
      }
      const [value, setValue] = useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
          return (
            <>
            <IconButton color="secondary" size="medium" onClick={toggleDrawer}>
                <MoreVertIcon/>
            </IconButton>
            <Drawer open={isOpen} direction='right' size={350} >
              <Button onClick={toggleDrawer}><CloseIcon /></Button>
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                      <Tab  sx={{width:"50%"}} icon={<PersonPinIcon />}  aria-label="profile"  {...a11yProps(0)} />
                      <Tab  sx={{width:"50%"}}  icon={<NotificationsActiveIcon />}  aria-label="notifications"  {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0} >
                  <AffichageRightProfile toggleDrawer={toggleDrawer}/>      
                </TabPanel>
                <TabPanel value={value} index={1} >
                    <NotificationGestionnaire/>
                </TabPanel>
              </Box>
            </Drawer>
        </>
          )
}


