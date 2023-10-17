import React from "react";
import logo from "../../images/logo.svg";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./ChatApp.css";


const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <main className="welcome">
      <h1 >Welcome to YachtBuddy.</h1>
      <img src={logo} alt="" />
      <p>Sign in with Google to chat with with your Guest.</p>
      <button className="sign-in" onClick={googleSignIn}>
      Login With Google
      </button>
    </main>
  );
};

export default Welcome;
