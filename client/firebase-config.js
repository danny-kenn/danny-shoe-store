// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRV0Dp48HCVTGPk2xmLOvsnA9aJyQXbeg",
  authDomain: "danny-shoe-store.firebaseapp.com",
  databaseURL: "https://danny-shoe-store-default-rtdb.firebaseio.com",
  projectId: "danny-shoe-store",
  storageBucket: "danny-shoe-store.appspot.com",
  messagingSenderId: "435573409481",
  appId: "1:435573409481:web:f8226271d2da2471e76f18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
