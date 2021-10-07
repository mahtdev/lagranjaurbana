import firebase from '@firebase/app'
import '@firebase/storage'
import '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtOjW7gcNCrCk4YOv1sSZDHX4Ffz8aVTI",
  authDomain: "la-granja-urbana.firebaseapp.com",
  projectId: "la-granja-urbana",
  storageBucket: "la-granja-urbana.appspot.com",
  messagingSenderId: "81379174470",
  appId: "1:81379174470:web:56a534a05b25a916a3c247"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStore = firebase.storage();
const projectFireStore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStore, projectFireStore, timestamp }