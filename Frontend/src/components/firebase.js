// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOmpcAKXMyasj6um0rZ4g_iiCAVefdo4I",
    authDomain: "chat-app-2cbac.firebaseapp.com",
    projectId: "chat-app-2cbac",
    storageBucket: "chat-app-2cbac.appspot.com",
    messagingSenderId: "657838142271",
    appId: "1:657838142271:web:ea11d92a4544c37618998a",
    measurementId: "G-BVRETV75H2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
