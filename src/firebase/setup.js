// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjbYFAH8ZLRdwB_iw3s4AG8fGrGByVTow",
  authDomain: "netflix-clone-36d20.firebaseapp.com",
  projectId: "netflix-clone-36d20",
  storageBucket: "netflix-clone-36d20.appspot.com",
  messagingSenderId: "28891245733",
  appId: "1:28891245733:web:9c93f33b09564bd639714c"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)