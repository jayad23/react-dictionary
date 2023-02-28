import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getEnvVariables } from "./src/utilities/getEnv";

const {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
} = getEnvVariables();

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


export default app;