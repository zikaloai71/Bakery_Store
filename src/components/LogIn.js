import React , { useState }  from 'react';
import { auth} from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import LoadingComponent from "../components/LoadingComponent";

export default function LogIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    error: null,
    loading: false,
  });
  const navigate = useNavigate();
  const { email, password, error, loading } = user;

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setUser({ ...user, error: null, loading: true });
    if (!email || !password) {
      setUser({ ...user, error: "All fields are required" });
      return
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setUser({
        email: "",
        password: "",
        error: null,
        loading: false,
      });
      navigate("/Products");
    } catch (err) {
      setUser({ ...user, error: "enter correct password or email", loading: false });
    }
  }
  if (loading) {
    return <LoadingComponent />;
  }
  
  return (
    <div>
        <div className='error'>{error}</div>
      <form  action="#"
            method="POST"
            onSubmit={handleSubmit} className="loginForm">
        <label htmlFor="email" className="loginLabels" >Enter your email</label>
        <input type="email"   id='email' name="email" value={email} className="loginInput" onChange={(e)=>{handleChange(e)}}/>
        <label htmlFor="password" className="loginLabels">Enter a password</label>
        <input type="password" id='password'  name="password" className="loginInput" value={password} onChange={(e)=>{handleChange(e)}} />
        <button className='loginSubmit' type='submit'>Log In</button>
      </form>
    </div>
  )
}
