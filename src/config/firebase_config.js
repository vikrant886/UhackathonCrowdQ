// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { isExportDeclaration } from "typescript";

// this is working

const firebaseConfig = {
  apiKey: "AIzaSyAphJJN2v0lPoCHiCqOsM2nEQpBaZ0-IPQ",
  authDomain: "crowd-detection-4a9f3.firebaseapp.com",
  databaseURL: "https://crowd-detection-4a9f3-default-rtdb.firebaseio.com",
  projectId: "crowd-detection-4a9f3",
  storageBucket: "crowd-detection-4a9f3.appspot.com",
  messagingSenderId: "794816242794",
  appId: "1:794816242794:web:a120ed01a916ea32b61613",
  measurementId: "G-0HM1XFL25M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);