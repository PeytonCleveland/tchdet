import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAVXTGxZnLTVThX3QbkyIlnicdNTv7QyDs',
  authDomain: 'tchdet.firebaseapp.com',
  projectId: 'tchdet',
  storageBucket: 'tchdet.appspot.com',
  messagingSenderId: '68908385864',
  appId: '1:68908385864:web:d358cfa8978bb225207a7d',
  measurementId: 'G-DEDGHPNEH8',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
