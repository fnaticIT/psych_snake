import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

import './Head.css';
function Head(params) {
 
  return (
    <div className="header">
    <p className="headerl">
        Snake game
    </p>
    <a href='https://github.com/fnaticIT' className="header2" >
        Github
    </a>
    </div>
  );
}

export default Head;