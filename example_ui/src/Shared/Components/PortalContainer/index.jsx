import { useState } from 'react'
import Box from '@mui/material/Box';

import PortalNav from './PortalNav';
import './index.scss'

const PortalContainer = (props) => {
    // Recieved from parent component
    const content = props.content? props.content:{'No Content': <div/>};
    // Stet State variable to 
    const [portalContentKey, setPortalContent] = useState(Object.keys(content)[0]);

    const SelectedComponent = content[portalContentKey].component
    return (
        <Box sx={{ display: 'flex' }}>
            
            <PortalNav sections ={content} portalContentKey={portalContentKey} setPortalContent={setPortalContent}/>
            <Box component="main" sx={{ flexGrow: 1, p: 3, height:'calc(100vh - 50px)', marginTop:'50px', padding:0 }}>
                <div style={props.background? {backgroundImage:'url("'+ props.background+'")'}:{}} className='portal-container'>
                    <div className='overlay' />
                    <div className='Content-Container'>
                        <SelectedComponent />
                    </div>
                </div>
                
                
            </Box>
        </Box>
  );
}

export default PortalContainer;