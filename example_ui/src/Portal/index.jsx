// The Icons to use for 
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
// The portal container
import {PortalContainer} from '../Shared/Components';
// The compoents to fit into the portal
import Diamond from './Diamond';
import Contact from './Contact';
// Import styling. Note this is scss vs css
import './index.scss';

const Content = {
    'Diamond': {component: Diamond, icon: <InboxIcon />},
    'Message Us':{component: Contact, icon: <MailIcon />}
}

/**
 * @class Portal
 */
const Portal = (props)=> {

  return (
    <div className="App">
      <PortalContainer background={'/images/prediction.png'} content={Content}/>
    </div>
  )
}
export default Portal;