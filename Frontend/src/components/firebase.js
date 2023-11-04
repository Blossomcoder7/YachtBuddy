import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

export const auth = getAuth(app);
export const db = getFirestore(app);
