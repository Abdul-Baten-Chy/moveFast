import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase.config";
import { AuthContext } from "./AuthContext";
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, seLoading] = useState(true);
  const signUp = (email, password) => {
    
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    
    signOut(auth)
      .then(() => {
        setUser(null);
        seLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        seLoading(false);
      } else {
        setUser(null);
        seLoading(false);
      }
     
    });

    return () => unsubscribe();
  }, []);
  const myAuth = { signUp, signIn, user, logOut, loading };
  return <AuthContext value={myAuth}>{children}</AuthContext>;
}

export default AuthProvider;
