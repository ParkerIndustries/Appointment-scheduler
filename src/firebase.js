import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAISDy27mepJOAGCBTOceVMlg2vlyUaa-c",
    authDomain: "skab-ce2c4.firebaseapp.com",
    databaseURL: "https://skab-ce2c4-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "skab-ce2c4",
    storageBucket: "skab-ce2c4.appspot.com",
    messagingSenderId: "1007507297212",
    appId: "1:1007507297212:web:cc1e969065fb9044ead1b9",
    measurementId: "G-R4ZGXG6LKM"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};