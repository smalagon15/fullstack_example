// The Icons to use for 
import DiamondIcon from '@mui/icons-material/Diamond';
import PatternIcon from '@mui/icons-material/Pattern';
// The portal container
import {PortalContainer} from '../Shared/Components';
// The compoents to fit into the portal
import Diamond from './Diamond';
import Palindrome from './Palindrome';
// Import styling. Note this is scss vs css
import './index.scss';

const Content = {
    'Diamond': {component: Diamond, icon: <DiamondIcon />},
    'Palindrome':{component: Palindrome, icon: <PatternIcon />}
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