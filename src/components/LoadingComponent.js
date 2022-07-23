import React from 'react'
import logo from "../images/logo.png";
import "./components.css";
export default function LoadingComponent() {
  return (
    <div>
      <img src={logo} className="logoLoading" alt="" />
      <div className="spinner">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
      </div>
    </div>
  )
}
