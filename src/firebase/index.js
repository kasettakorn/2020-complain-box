import firebase from "firebase/app";
import "firebase/storage";
import "firebase/database";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAcR04zfOkpNnf90aumafMe4JyNdLmmzKM",
  authDomain: "mob-support-3d5a1.firebaseapp.com",
  databaseURL: "https://mob-support-3d5a1.firebaseio.com",
  projectId: "mob-support-3d5a1",
  storageBucket: "mob-support-3d5a1.appspot.com",
  messagingSenderId: "755638116751",
  appId: "1:755638116751:web:70d8f71ef5c5c7148aabfa"
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const database = firebase.database();


export { storage, database, firebase as default };
