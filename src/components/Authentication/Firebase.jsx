// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBKCjiwb1WjjDi-pFS4HULB3FvCrVD0VQ",
  authDomain: "clotever-7824e.firebaseapp.com",
  projectId: "clotever-7824e",
  storageBucket: "clotever-7824e.appspot.com",
  messagingSenderId: "35664159655",
  appId: "1:35664159655:web:c1e4a8e546cd94fee64c82",
  measurementId: "G-V2MHG42SE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
export const db = getFirestore(app);
export default app;