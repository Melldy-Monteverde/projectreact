// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjtOxEPhTd8jKkxQKus7WiITCgfkYLzbc",
  authDomain: "projectreact-3d7d7.firebaseapp.com",
  projectId: "projectreact-3d7d7",
  storageBucket: "projectreact-3d7d7.appspot.com",
  messagingSenderId: "72338933877",
  appId: "1:72338933877:web:9d6b9a8da572125516103c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)