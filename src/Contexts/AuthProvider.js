import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.init";
import { useVerifyUserMutation } from "../features/user/userApi";
import { useDispatch } from "react-redux";
import { userLogOut } from "../features/user/userSlice";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [verifyUser, { isLoading }] = useVerifyUserMutation();
  const dispatch = useDispatch();

  // user sign out
  const userSignOut = () => {
    dispatch(userLogOut());
    return signOut(auth);
  };
  // create user by email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // uesr email password login
  const userLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUserProfie = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  // password reset
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { email } = currentUser;
        verifyUser({ email });
      }
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [verifyUser]);

  const userInfo = {
    authUser: user,
    userSignOut,
    createUser,
    userLogIn,
    updateUserProfie,
    loading,
    resetPassword,
    isLoading,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
