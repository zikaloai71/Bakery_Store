import React from 'react';
import "./pages.css"
import logo from "../images/logo.png";
import {Link} from "react-router-dom";
import Ingredient from '../components/Ingredient';
export default function Home() {
  return (
    <div>
      <main className='homeMain'>
      <div className='introCard'>
        <h1 className='introCardHeader'>About Me</h1>
        <p className='introCardParagraph'>" Hello to my unique bakery where everything is made with love when you try it for one time you will fall in love with our products it's a homemade products that make you feel that your grandma had bake it specially for you" </p>
        <p className='introCardParagraph'> want to start this delicious adventure click here 
       <Link className='getStartBtn' to="/SignUp">Get Started</Link></p>
      </div>
      <img className='logoCard' src={logo} alt="" />
      </main>
      <Ingredient />
    
    </div>
  )
}
