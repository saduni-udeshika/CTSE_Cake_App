import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBQPW6z-l1Ek7fDdq6nTHQl6--Q_BTpUq8",
  authDomain: "ctse-assignment-4445f.firebaseapp.com",
  projectId: "ctse-assignment-4445f",
  storageBucket: "ctse-assignment-4445f.appspot.com",
  messagingSenderId: "142695496608",
  appId: "1:142695496608:web:0a9909ff8cbcfc2845c2c5",
  measurementId: "G-TM8CZ0MY5H"
};

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export {firebase};