import * as firebase from "firebase"
import "@firebase/database";
import "@firebase/auth"

  // Your web app's Firebase configuration
  const firebaseConfig = {
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

  export default firebase;


  // firebase.auth().createUserWithEmailAndPassword("nodeuser@firebaseui.com", "firebase")
  //   .then(user => console.log(user))
  //   .catch(error => console.error(error));

  // export const config = {
  //   db : firebase.database(),
  //   auth : firebase.auth()
  // };



  // export default firebase.initializeApp(firebaseConfig)

  // export const MYDB = firebase.database();