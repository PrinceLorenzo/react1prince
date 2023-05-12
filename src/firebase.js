import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCsIesN6cTjQXLY-E6M8w5nNSHPboU9xKA",
  authDomain: "react1lorenzo.firebaseapp.com",
  databaseURL: "https://react1lorenzo-default-rtdb.firebaseio.com",
  projectId: "react1lorenzo",
  storageBucket: "react1lorenzo.appspot.com",
  messagingSenderId: "433696210103",
  appId: "1:433696210103:web:9010a9bf8c421ba9976132"
};

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
