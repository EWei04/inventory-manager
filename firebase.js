// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYGVDMGITieFHgZ3RspJjEtxjC_qBcVeA",
  authDomain: "hsinventory-957f0.firebaseapp.com",
  projectId: "hsinventory-957f0",
  storageBucket: "hsinventory-957f0.appspot.com",
  messagingSenderId: "210336464910",
  appId: "1:210336464910:web:fa4044a683531e78c5bc5f",
  measurementId: "G-JKX6ZSVXH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
