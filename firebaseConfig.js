// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAC7bz12SvrhOquJh0oxCQhtPBQ8WMcVoA",
  authDomain: "dictionary-react-d5aef.firebaseapp.com",
  projectId: "dictionary-react-d5aef",
  storageBucket: "dictionary-react-d5aef.appspot.com",
  messagingSenderId: "517165446613",
  appId: "1:517165446613:web:9a7e12a618dcbe718bb95c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export default app;