import React from 'react';
import {Link} from "react-router-dom";
import "./components.css";
import logo from "../images/Logo2.png";

export default function Nav() {
  return (
  <nav className='navContainer'>
    <ul className='navItems'>
        <Link className='linkage' to="/">
        <img className='logo' src={logo} alt="logo" />
        <li> HOME</li>
        </Link>
        <li className='navUserEnter'>
        <Link className='linkage' to="/LogIn">Log In</Link>
        <Link className='linkage' to="/SignUp">Sign Up
        </Link>
        </li>
    </ul>
    
  </nav>
  )
}
