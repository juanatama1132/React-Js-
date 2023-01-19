// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfyzDjvnnb8IKpAIGPGrChMPsBN7DI_nY",
  authDomain: "coderhouse-ecommerce-3857b.firebaseapp.com",
  projectId: "coderhouse-ecommerce-3857b",
  storageBucket: "coderhouse-ecommerce-3857b.appspot.com",
  messagingSenderId: "438876955985",
  appId: "1:438876955985:web:0060bd9c8d30b1af2d5f70",
  measurementId: "G-G4ZHHK7X4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
