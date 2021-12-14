import firebase from 'firebase/app';
import 'firebase/auth';



const app= firebase.initializeApp({


    apiKey: "AIzaSyB8DNrDS5BDmsqfXOaVfSsY-sXxocd0thU",
    authDomain: "autentificacion-spa.firebaseapp.com",
    projectId: "autentificacion-spa",
    storageBucket: "autentificacion-spa.appspot.com",
    messagingSenderId: "1023221390476",
    appId: "1:1023221390476:web:224ff89fcdc64729016fa9"
});

export const auth = firebase.auth();

export default app;