import { initializeApp } from "firebase/app";
import {getFirestore, connectFirestoreEmulator} from "firebase/firestore"
import "firebase/auth"; 
import { getAuth, connectAuthEmulator } from "firebase/auth";

let firebaseConfig 
let app
export let db 
export let  auth

if (window.location.hostname=== "localhost"){
  firebaseConfig={
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID,
    databaseURL:"http://localhost:9000?ns=bakery-store-5b7a1"
  }

  app= initializeApp(firebaseConfig)
  db = getFirestore(app); 
  auth = getAuth(app);
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, 'localhost', 8080);
}
else{
  firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID
  };
  app= initializeApp(firebaseConfig)
  db = getFirestore(app);
  auth = getAuth(app);
}




 



