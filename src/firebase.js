import firebase from 'firebase/compat/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCn5eCt3vBrfbpgoetefBnR1YnCvlTfoCg",
    authDomain: "button-e0ef5.firebaseapp.com",
    databaseURL: "https://button-e0ef5-default-rtdb.firebaseio.com",
    projectId: "button-e0ef5",
    storageBucket: "button-e0ef5.appspot.com",
    messagingSenderId: "11833918953",
    appId: "1:11833918953:web:0ad96d2be443b40a9ab778",
    measurementId: "G-YKMMJYQGN6"
};

firebase.initializeApp(config);

export default firebase;