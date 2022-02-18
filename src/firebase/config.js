import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7w-Bb8oYQ_kiyAHDBHkN9S6LJRGKF9Ns",
  authDomain: "vue-blog-portfolio.firebaseapp.com",
  projectId: "vue-blog-portfolio",
  storageBucket: "vue-blog-portfolio.appspot.com",
  messagingSenderId: "176497494379",
  appId: "1:176497494379:web:4b29bb8aa22fb5d823242e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore()

export {  projectFirestore }