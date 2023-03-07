import { setDoc, doc, collection, CollectionReference, DocumentData, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { app, db } from "../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

//Upload Picture to Media Bucket
const storage = getStorage(app);

export const uploadPicture = async (file: Blob) => {
  const imageRef = ref(storage, v4());
  const result = await uploadBytes(imageRef, file)
  return result;
};

export const getCollection = (endpoint: string): CollectionReference<DocumentData> => collection(db, endpoint);

//const Col = getCollection("");
//export const addDocument = (documentTitle: string, newCollection: DocumentData) => (doc(Col, documentTitle), newCollection);

export const updateById = (url: string, id: string, data: {}) => {
  const urlReference = doc(db, url, id);
  updateDoc(urlReference, data)
};

// instance of Auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const onSignin = async ({ email, password }: { email: string; password: string }) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    return err;
  };
};

export const signInGmail = async () => {
  try {
    return await signInWithPopup(auth, googleProvider);
  } catch (err) {
    return err;
  }
}