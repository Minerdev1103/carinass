import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // นำเข้า Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsVXopLtMFpMYZMHgXRIY_qnuXq3jkIR0",
  authDomain: "carinass-e2053.firebaseapp.com",
  projectId: "carinass-e2053",
  storageBucket: "carinass-e2053.firebasestorage.app",
  messagingSenderId: "996076138752",
  appId: "1:996076138752:web:f39b01b7d102b1543e03e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);