// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCag1OZyqOZH9B4jccTIwyb2-qr1xLiVkw",
    authDomain: "twitter-clone-d1663.firebaseapp.com",
    databaseURL: "https://twitter-clone-d1663.firebaseio.com",
    projectId: "twitter-clone-d1663",
    storageBucket: "twitter-clone-d1663.appspot.com",
    messagingSenderId: "329303696767",
    appId: "1:329303696767:web:5c4decd171f9daa90ba64a",
    measurementId: "G-F7ERBNKQPN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;