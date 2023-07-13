import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBMqfWuwNkbRY04LLVg1yxoyuOyXfGCbVU",
  authDomain: "next-crud-221c7.firebaseapp.com",
  projectId: "next-crud-221c7",
  storageBucket: "next-crud-221c7.appspot.com",
  messagingSenderId: "103542632595",
  appId: "1:103542632595:web:322cf24e7e174d1d715d66"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
