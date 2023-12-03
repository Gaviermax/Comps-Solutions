import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"; 
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyD1nO8GEMuUryXWwLIi92eEPf5QfNYNhJ8",
  authDomain: "loginsignup-801b6.firebaseapp.com",
  databaseURL: "https://loginsignup-801b6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "loginsignup-801b6",
  storageBucket: "loginsignup-801b6.appspot.com",
  messagingSenderId: "409222316795",
  appId: "1:409222316795:web:80c979400122d9e028665e",
  measurementId: "G-TFTY28FEK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);  
export const database = getDatabase(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

