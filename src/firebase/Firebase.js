import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQ7EhFsvRISImTF7SNhvzRdTVbyNBW7_Y",
  authDomain: "react-project-rm.firebaseapp.com",
  projectId: "react-project-rm",
  storageBucket: "react-project-rm.appspot.com",
  messagingSenderId: "470837947289",
  appId: "1:470837947289:web:27b520295a8d2626c90108",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
