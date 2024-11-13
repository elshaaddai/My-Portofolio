// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHvyXymVotulX1Abr_PXVjEZgM8_moDyQ",
  authDomain: "my-portofolio-46091.firebaseapp.com",
  projectId: "my-portofolio-46091",
  storageBucket: "my-portofolio-46091.firebasestorage.app",
  messagingSenderId: "968623699767",
  appId: "1:968623699767:web:21bf5d09617b048fa78cb2",
  measurementId: "G-N2VFMV785S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);