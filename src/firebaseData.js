// test.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcQou6dsM0prGuKoCJg7ww20EpS3va-00",
  authDomain: "sahaconnect-7dd5a.firebaseapp.com",
  projectId: "sahaconnect-7dd5a",
  storageBucket: "sahaconnect-7dd5a.appspot.com",
  messagingSenderId: "779163591432",
  appId: "1:779163591432:web:415a9359f9072b64e182bd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
