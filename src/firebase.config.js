// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMPK6WWrHeukxQ5X1_fJbmEdPKxy4ZuRI",
  authDomain: "krishiuser-fd6d2.firebaseapp.com",
  projectId: "krishiuser-fd6d2",
  storageBucket: "krishiuser-fd6d2.firebasestorage.app",
  messagingSenderId: "281243973782",
  appId: "1:281243973782:web:72427c8c9a97ddaa47eab7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app;
