import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "you_api_key",
  authDomain: "you_auth_domain",
  projectId: "you_project_id",
  storageBucket: "you_storage_bucket",
  messagingSenderId: "you_messaging_sender_id",
  appId: "you_api_key"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
