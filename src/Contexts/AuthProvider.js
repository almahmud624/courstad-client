import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.init";
import { useStoreUserMutation } from "../features/user/userApi";
import { useDispatch } from "react-redux";
import { userLogOut } from "../features/user/userSlice";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const [storeUser] = useStoreUserMutation();
  const dispatch = useDispatch();

  // google sign in
  const userGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // gitHub sign in
  const userGitHubSignIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  };
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
        const { displayName, email } = currentUser;
        storeUser({ name: displayName, email, role: "student" });
      }
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [storeUser]);
  const userInfo = {
    authUser: user,
    userGoogleSignIn,
    userSignOut,
    createUser,
    userLogIn,
    updateUserProfie,
    loading,
    userGitHubSignIn,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
