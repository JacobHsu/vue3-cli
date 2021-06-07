import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// https://console.firebase.google.com/u/0/project/vue3-cli setting live-chat
const firebaseConfig = {
    apiKey: "AIzaSyARZwCY5P_Z0WaQMEsSbzvgeDVhMmRbtBU",
    authDomain: "vue3-cli.firebaseapp.com",
    projectId: "vue3-cli",
    storageBucket: "vue3-cli.appspot.com",
    messagingSenderId: "838901975015",
    appId: "1:838901975015:web:950dbc4454078aeed29f42"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp }