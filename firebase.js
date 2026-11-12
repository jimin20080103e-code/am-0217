
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getAuth,
  signInAnonymously,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD8eg2sb5XSld4YVfj5t4jMUkt8xliVqwE",
  authDomain: "am-0217.firebaseapp.com",
  projectId: "am-0217",
  storageBucket: "am-0217.firebasestorage.app",
  messagingSenderId: "306432922680",
  appId: "1:306432922680:web:94e93a23202ca4767dc2cd",
  measurementId: "G-24S1MRSZZ6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export {
  signInAnonymously,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
};
