// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8DNrDS5BDmsqfXOaVfSsY-sXxocd0thU",
  authDomain: "autentificacion-spa.firebaseapp.com",
  projectId: "autentificacion-spa",
  storageBucket: "autentificacion-spa.appspot.com",
  messagingSenderId: "1023221390476",
  appId: "1:1023221390476:web:224ff89fcdc64729016fa9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


export default firebaseApp;