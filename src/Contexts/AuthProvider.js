import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const userGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // user sign out
  const userSignOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const userInfo = { user, userGoogleSignIn, userSignOut };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
