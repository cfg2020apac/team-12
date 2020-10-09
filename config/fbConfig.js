import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

// Firebase web config
var firebaseConfig = {
  apiKey: "AIzaSyDzrk0KMpEdFASSX3n0Z_C9X4m-tve3C1k",
  authDomain: "jp-morgan-c945b.firebaseapp.com",
  databaseURL: "https://jp-morgan-c945b.firebaseio.com",
  projectId: "jp-morgan-c945b",
  storageBucket: "jp-morgan-c945b.appspot.com",
  messagingSenderId: "542910140897",
  appId: "1:542910140897:web:f07a946fffffb2407ec2a0",
  measurementId: "G-HZQ4PB8RPC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore();

export default firebase;