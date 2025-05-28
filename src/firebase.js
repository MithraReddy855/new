// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDCR8nICPJ0kRFnJGwaiUHV0qcnHdGCQzM",
  authDomain: "thra-5db19.firebaseapp.com",
  // ... other config from Firebase console
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const facebookProvider = new FacebookAuthProvider();

export { auth, facebookProvider };
