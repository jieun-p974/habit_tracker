import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATIz0nE66-VgZvfpadEEWF_RsCrScW4dI",
  authDomain: "habit-tracker-db236.firebaseapp.com",
  projectId: "habit-tracker-db236",
  storageBucket: "habit-tracker-db236.appspot.com",
  messagingSenderId: "816347253081",
  appId: "1:816347253081:web:fd7759356ab0a90b98e448",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
