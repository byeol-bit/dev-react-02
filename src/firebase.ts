// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFWJAbfia-4pUxCyuD0LFDdtxhOwOKBLg",
  authDomain: "login-test-6e0a7.firebaseapp.com",
  projectId: "login-test-6e0a7",
  storageBucket: "login-test-6e0a7.firebasestorage.app",
  messagingSenderId: "1005438572661",
  appId: "1:1005438572661:web:36cf36cf1c607e4dfb403c",
  measurementId: "G-RN57E2JG2F",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
