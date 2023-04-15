/**
 * The purpose of this file is to act as an entry point for the application. 
 * All we do here is attach our react code to the dom. The real coding is in Portal and Header.
 */

// npm package imports
import React from 'react'
import { createRoot } from 'react-dom/client';

// local style and component imports
import Portal from './Portal';
import {Header} from './Shared/Components';
import './Shared/Styles/index.scss';

// Identify the enlement in the dom to attach the react project to. (found in index.html)
const domNode = document.getElementById('root');
const root = createRoot(domNode);

// Render the portal component with the header so there is page navigation and portal navication
root.render(
    <React.StrictMode>
        <Header><Portal/></Header>
    </React.StrictMode>
);