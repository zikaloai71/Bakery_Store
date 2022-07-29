import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import LoadingComponent from "../components/LoadingComponent";
import "../components/components.css";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const { usersCarts } = children;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const[userId,setUserId]=useState(null);
  // const[userCart,setUserCart]=useState(null);
 
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      // setUserId(user.uid);
      // setUserCart(usersCarts.find((user) => {return user.uid === userId;}));
     
    });
  }, []);
  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;