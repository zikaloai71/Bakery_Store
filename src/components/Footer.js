import React from 'react'
import logo from "../images/logo.png";
import "./components.css";
export default function Footer() {
  return (
    <div>
        <footer className='footer'>
        <img className='footerLogo' src={logo} alt="" />
        <div className='contactUs'>
            <div>Contact Us</div>
            <div className='socialIcons'>
            <i className="socialIcon fa-brands fa-facebook"></i>
            <i className="socialIcon fa-brands fa-instagram"></i>
            <i className="socialIcon fa-brands fa-tiktok"></i>
            <i className="socialIcon fa-brands fa-snapchat-square"></i>
            </div>
        </div>
        </footer>
    </div>
  )
}
