// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDI3eGWnGp1ML2MNcTwvthIP8_-VEEHTVK',
  authDomain: 'brazucaspelomundo-38a88.firebaseapp.com',
  projectId: 'brazucaspelomundo-38a88',
  storageBucket: 'brazucaspelomundo-38a88.appspot.com',
  messagingSenderId: '309328084969',
  appId: '1:309328084969:web:af1c27ebb7d9d9de90f8a7',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };