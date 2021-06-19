import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import './global.css'

// import Badge from './components/Badge';
import BadgeNew from './pages/BadgeNew';


const container = document.getElementById('app');

ReactDOM.render(
<BadgeNew 
// firstName="Dann" 
// lastName="Herz"
// avatar="https://www.gravatar.com/avatar?d=identicon"
// jobTitle="Frontend Engineer"
// twitter="sparragus"
/>,
 container);