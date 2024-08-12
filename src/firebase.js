import { initializeApp } from "firebase/app";

// importing getAuth
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQmUBebGqNsh0FX9SmxK3ykJBxfrAX11U",
  authDomain: "reach-inbox-41764.firebaseapp.com",
  projectId: "reach-inbox-41764",
  storageBucket: "reach-inbox-41764.appspot.com",
  messagingSenderId: "717841935819",
  appId: "1:717841935819:web:64d548675a63d9debb1a4e",
  measurementId: "G-ZWWMYN1GRX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
