// Import the functions you need from the SDKs you need
import { meta } from "@eslint/js";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_API_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// auth servis referans
export const auth = getAuth(app);
// google sağlayıcısı
export const provider = new GoogleAuthProvider();
//storage servisi referans
export const storage = getStorage(app);
// database referans
export const db = getFirestore(app);
