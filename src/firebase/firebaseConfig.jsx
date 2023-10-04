

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

let app;
let auth;
let provider;

if (typeof window !== "undefined") {
  const firebaseConfig = {
    apiKey: "AIzaSyBUZYuLcg9vLHE3plcXSsVw6uj52keL5OE",
    authDomain: "expense-tracker-b321c.firebaseapp.com",
    projectId: "expense-tracker-b321c",
    storageBucket: "expense-tracker-b321c.appspot.com",
    messagingSenderId: "1084830971814",
    appId: "1:1084830971814:web:bab816a44b6ec6be64c167"
  };

  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  provider = new GoogleAuthProvider();
}

export { app, auth, provider };

