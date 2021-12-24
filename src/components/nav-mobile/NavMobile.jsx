import React from 'react';
import {Link} from "react-router-dom"

import './NavMobile.css'

const NavMobile = () => {
    return (
      <nav className="nav-mobile">
        <ul className="nav-mobile-container">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    );
}
 
export default NavMobile;