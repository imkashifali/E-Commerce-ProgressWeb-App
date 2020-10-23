import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvwzRCplSp2zQdUGRbAF7KOsdTJTI-pU0",
  authDomain: "storelive-fd73d.firebaseapp.com",
  databaseURL: "https://storelive-fd73d.firebaseio.com",
  projectId: "storelive-fd73d",
  storageBucket: "storelive-fd73d.appspot.com",
  messagingSenderId: "777351578840",
  appId: "1:777351578840:web:e3e6e36e9294bbadd203ad",
  measurementId: "G-EZ3CXNXGCP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
