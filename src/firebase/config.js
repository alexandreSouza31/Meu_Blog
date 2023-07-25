import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBEhZOnmPXSvQ3voIfqWDXNd4MPNAqS1TY",
  authDomain: "meu-blog-c5fcd.firebaseapp.com",
  projectId: "meu-blog-c5fcd",
  storageBucket: "meu-blog-c5fcd.appspot.com",
  messagingSenderId: "305619661707",
  appId: "1:305619661707:web:54f9958b44cf3bcef3b58e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };