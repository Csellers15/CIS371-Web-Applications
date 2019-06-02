import firebase from "@firebase/app";
import "@firebase/database";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDX7hvZXrCOpj50PPPAG4ouIbYh1sQK3Vk",
    authDomain: "reddit-clone-21c35.firebaseapp.com",
    databaseURL: "https://reddit-clone-21c35.firebaseio.com",
    projectId: "reddit-clone-21c35",
    storageBucket: "reddit-clone-21c35.appspot.com",
    messagingSenderId: "731498010714",
    appId: "1:731498010714:web:75c341c3c3281107"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);