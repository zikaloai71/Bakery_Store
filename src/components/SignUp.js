import React from 'react';
import auth from "../firebase-config";

export default function SignUp() {
    
  return (
    <div>
      <form>
        <label htmlFor="name">Enter your name</label>
        <input type="text" id='name' />
        <label htmlFor="email">Enter your email</label>
        <input type="email" id='email' />
        <label htmlFor="password">Enter a password</label>
        <input type="password" id='password' />
        <label htmlFor="confirmationPassword">confirm password</label>
        <input type="password" id='confirmationPassword' />
        <button type='submit'>Sign up</button>
      </form>
    </div>
  )
}
