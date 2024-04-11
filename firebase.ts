import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBttA8MrjkmmQ1j1dcwDruOIC1-OlUnDUU",
  authDomain: "twitter-a3f97.firebaseapp.com",
  projectId: "twitter-a3f97",
  storageBucket: "twitter-a3f97.appspot.com",
  messagingSenderId: "300210729405",
  appId: "1:300210729405:web:10d5a33db8c942a542e2d4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
