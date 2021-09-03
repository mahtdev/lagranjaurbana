import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDZ-xUFWgOIv51SHAsjQFaJBU7gf4G10Ng",
    authDomain: "photo-gallery-f0080.firebaseapp.com",
    projectId: "photo-gallery-f0080",
    storageBucket: "photo-gallery-f0080.appspot.com",
    messagingSenderId: "368650203286",
    appId: "1:368650203286:web:aad6f16cc058c566e0d2b7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStore = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStore, projectFireStore, timestamp};