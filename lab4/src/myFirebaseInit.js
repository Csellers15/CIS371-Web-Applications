import firebase from "@firebase/app";
import "@firebase/database";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAAYZvjfH0D9_eg4D4wiBza4V7FvYVFJTM",
    authDomain: "lab-3-aadb4.firebaseapp.com",
    databaseURL: "https://lab-3-aadb4.firebaseio.com",
    projectId: "lab-3-aadb4",
    storageBucket: "lab-3-aadb4.appspot.com",
    messagingSenderId: "198917879761",
    appId: "1:198917879761:web:aa37474f08792830"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const MYDB = firebase.database();