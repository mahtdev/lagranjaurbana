import firebase from '@firebase/app'
import '@firebase/storage'
import '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FB_APIKEY,
  authDomain: process.env.FB_AUTHDOMAIN,
  projectId: process.env.FB_PROJECTID,
  storageBucket: process.env.FB_STORAGEBUCKET,
  messagingSenderId: process.env.FB_MESSAGINGSENDERID,
  appId: process.env.FB_APPID
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStore = firebase.storage();
const projectFireStore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStore, projectFireStore, timestamp }