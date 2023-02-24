// Import the functions you need from the SDKs you need
import { v4 } from "uuid";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
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

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const storage = getStorage(app);

export const uploadPicture = async (file: Blob) => {
  const imageRef = ref(storage, v4());
  const result = await uploadBytes(imageRef, file)
  return result;
}

export default app;