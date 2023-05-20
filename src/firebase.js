// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIBMypFRjma2AiJjYChTys8CKukDoAQVg",
  authDomain: "kaju-portfoli0.firebaseapp.com",
  projectId: "kaju-portfoli0",
  storageBucket: "kaju-portfoli0.appspot.com",
  messagingSenderId: "1060016294261",
  appId: "1:1060016294261:web:526455435fd18b8182ab3c",
  measurementId: "G-X0YMMSKGPY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()

