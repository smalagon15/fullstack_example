import { useState } from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import TimelineIcon from '@mui/icons-material/Timeline';
import CompassCalibrationOutlinedIcon from '@mui/icons-material/CompassCalibrationOutlined';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

import './index.scss'

/**
 * Links to travel to and the icons and labels used in all the header displays
 */
const pages = [
    {
        label:'API Interface',
        href: 'http://localhost:8000/docs',
        icon:<TimelineIcon/>
    },
    {
        label:'Github',
        href: 'https://github.com/smalagon15/fullstack_example',
        icon: <CompassCalibrationOutlinedIcon/>
    }
]

/**
 * @class Header
 */
const Header = (props) =>{
    const [drawerOpen, setDrawerOpen] = useState(false);
    /**
     * 
     * @param {*} decision 
     */
    const toggleDrawer =(decision)=>{
        setDrawerOpen(decision);
    }
    
    return (
        <div className='header-component'>
            <div className='header'>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={()=>toggleDrawer(!drawerOpen)}
                >
                    <AppsIcon />
                
                </IconButton>
                <Drawer
                anchor='left'
                open={drawerOpen}
                onClose={()=>toggleDrawer(false)}
                >
                    <Box
                        sx={{ width: 200 }}
                        role="presentation"
                        onClick={()=>toggleDrawer(false)}
                        onKeyDown={()=>toggleDrawer(false)}
                    >
                        <List>
                            {pages.map((page) => (
                                <ListItem button key={page.label} >
                                    <Link style={{position: "absolute",top: 0,left: 0,right: 0,bottom: 0}} href={page.href} />
                                    <ListItemIcon>
                                        {page.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={page.label} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </div>
            {props.children}
        </div>   
    )    

}
export default Header;