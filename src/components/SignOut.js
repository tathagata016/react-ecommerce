import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from "../components/firebase";


const SignOut = () => {
    const navigate = useNavigate()
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        navigate("/login"); // Redirect to the login page after sign-out
      })
      .catch((error) => {
        console.error("Sign-out error", error);
      });
  };

export default SignOut