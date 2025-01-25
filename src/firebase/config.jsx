// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6CPnECvqoDysOhxAkJS_xmT1sPJgHr0g",
  authDomain: "miniblog-e2765.firebaseapp.com",
  projectId: "miniblog-e2765",
  storageBucket: "miniblog-e2765.firebasestorage.app",
  messagingSenderId: "1090099496299",
  appId: "1:1090099496299:web:2c0e87a1fc169bb6b1782e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
//const auth = getAuth(app);

//export {db,auth};
export {db};