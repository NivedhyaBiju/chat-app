// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWtDtWR7DxK83i2xV0IzfOud1JUI_pKR4",
  authDomain: "reactchat-2c2de.firebaseapp.com",
  projectId: "reactchat-2c2de",
  storageBucket: "reactchat-2c2de.appspot.com",
  messagingSenderId: "635951224399",
  appId: "1:635951224399:web:666ed25b0a43fe710bbc3a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db, storage}