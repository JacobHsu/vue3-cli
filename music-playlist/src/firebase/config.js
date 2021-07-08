import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBRlEzV__OSpaUSGKyM60AHFd5gnYU5dnI",
    authDomain: "music-playlist-a4b4c.firebaseapp.com",
    projectId: "music-playlist-a4b4c",
    storageBucket: "music-playlist-a4b4c.appspot.com",
    messagingSenderId: "366636255828",
    appId: "1:366636255828:web:8908c531d75636ef5afbc1"
  };

  // init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }