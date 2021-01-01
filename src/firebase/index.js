import firebase from "firebase/app";
import "firebase/storage";
import "firebase/database";

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: "mob-support-3d5a1.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const database = firebase.database();


export { storage, database, firebase as default };
