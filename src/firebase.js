// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// ? Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUPbDiVHF1eBACT5lKIS5hugDtXm6TNQw",
  authDomain: "guestbook-a86be.firebaseapp.com",
  projectId: "guestbook-a86be",
  storageBucket: "guestbook-a86be.appspot.com",
  messagingSenderId: "322862373273",
  appId: "1:322862373273:web:c60d51700765be60311b08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider=new GoogleAuthProvider()
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (err) {
    throw error;
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    throw error;
  }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        throw(error);
    }
}

const signInWithGoogle = async () => {
  try{
      const res = await signInWithPopup(auth, googleAuthProvider);
      const user = res.user;
      return user;
  } catch(error) {
      throw (error)
  }
}

export {
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  auth,
  sendPasswordReset,
  signInWithGoogle
};
