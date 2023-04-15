import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

import { Drawer, DrawerHeader } from '../util';
import './index.scss'


function PortalNav(props) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };
    const onSelect = (key) =>{
        if(key !== props.portalContentKey){
            props.setPortalContent(key);
        }
    }

    return (
    <Drawer variant="permanent" open={open} sx={{zIndex:1}}>
        <DrawerHeader/>
        <List>
        {Object.keys(props.sections).map((text) => (
            <ListItemButton
                key={text}
                onClick={()=>{onSelect(text)}}
                sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                }}
                >
                <Tooltip title={text} disableHoverListener={open} >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                    >
                        {props.sections[text].icon}
                    </ListItemIcon>
                </Tooltip>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
        ))}
        </List>
        <Divider />
        <Box sx={{bottom:0}}>
        <List >
            <ListItemButton
                onClick={toggleDrawer}
                sx={{
                    minHeight: 48,
                    justifyContent: open ? 'right' : 'center',
                    px: 2.5,
                }}
                >
                <ListItemIcon
                    sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    }}
                >
                    {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </ListItemIcon>
            </ListItemButton>
        </List>
        </Box>
    </Drawer>
  );
}

export default PortalNav;