// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuegczhflxBS-uGK0Bp0RZEIxVEcTnylg",
  authDomain: "first-project-c6378.firebaseapp.com",
  projectId: "first-project-c6378",
  storageBucket: "first-project-c6378.appspot.com",
  messagingSenderId: "482546501272",
  appId: "1:482546501272:web:3cf6ebce60df56dda8f2ed",
  measurementId: "G-P95313JNV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;