// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCvucg8aU-QFdwllS5E9rwK3DjgvCEVVF8',
  authDomain: 'hyperxinventario.firebaseapp.com',
  projectId: 'hyperxinventario',
  storageBucket: 'hyperxinventario.firebasestorage.app',
  messagingSenderId: '107453582657',
  appId: '1:107453582657:web:51abccd09bf625d56ca5c0',
  measurementId: 'G-SRZVTLHHZY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
