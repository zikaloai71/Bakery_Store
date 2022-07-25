import React , { useState }  from 'react';
import { auth, db } from "../firebase-config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../components/LoadingComponent";

export default function SignUp() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword:"",
    error: null,
    loading: false,
  });
  const navigate = useNavigate();
  const { name, email, password, confirmPassword, error, loading } = newUser;

  function handleChange(e) {
    setNewUser({...newUser, [e.target.name]: e.target.value});
  }
  async function handleSubmit(e) {
    e.preventDefault();
  
    setNewUser({ ...newUser, error: null, loading: true });
    if (!name || !email || !password) {
      setNewUser({ ...newUser, error: "All fields are required" });
      return
    }
    else if(password!==confirmPassword){
      setNewUser({ ...newUser, error: "check that the entered password is same as confirmation password" });
      return
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        name,
        email,
        createdAt: Timestamp.fromDate(new Date()),
      });
      setNewUser({
        name: "",
        email: "",
        password: "",
        error: null,
        loading: false,
      });
      navigate("/Products");
    } catch (err) {
      setNewUser({ ...newUser, error: err.message, loading: false });
    }
   
  }
  if (loading) {
    return (<LoadingComponent />);
  }
  
  async function signInWithGoogle(){
    let provider = new GoogleAuthProvider();
    const result=await signInWithPopup(auth,provider);
    await setDoc(doc(db, "users", result.user.uid), {
      uid: result.user.uid,
      name:auth.currentUser.displayName,
      email:auth.currentUser.email,
      createdAt: Timestamp.fromDate(new Date()),
    });
  navigate("/Products");
  }
  return (
    <div>
      <div className='error'>{error}</div>
      <div className="signUpContainer">
      <form  action="#"
            method="POST"
            onSubmit={handleSubmit} className="signUpForm">
        <label htmlFor="name" className='signUpLabels'>Enter your name</label>
        <input type="text" id='name' name="name" className='signUpInput'   value={name} onChange={(e)=>{handleChange(e)}} />
        <label htmlFor="email"  className='signUpLabels' >Enter your email</label>
        <input type="email"  id='email' name="email" className='signUpInput'  value={email} onChange={(e)=>{handleChange(e)}}/>
        <label htmlFor="password"  className='signUpLabels'>Enter a password</label>
        <input type="password" id='password' className='signUpInput'   name="password" value={password} onChange={(e)=>{handleChange(e)}} />
        <label htmlFor="confirmationPassword"  className='signUpLabels'>confirm password</label>
        <input type="password" id='confirmationPassword' name="confirmPassword" value={confirmPassword} className='signUpInput'   onChange={(e)=>{handleChange(e)}} />
        <button className='signUpButton' type='submit'>Sign up</button>
      </form>
        <h1 className='or'>OR</h1>
        <button onClick={signInWithGoogle} className="signWithGoogle">
      <i className=" googleIcon fa-brands fa-google "></i>sign with google</button>
      </div>
    </div>
  )
}
