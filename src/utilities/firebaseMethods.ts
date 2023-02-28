import { setDoc, doc, collection, CollectionReference, DocumentData } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { app, db } from "../../firebaseConfig";

//Upload Picture to Media Bucket
const storage = getStorage(app);

export const uploadPicture = async (file: Blob) => {
  const imageRef = ref(storage, v4());
  const result = await uploadBytes(imageRef, file)
  return result;
};

export const getCollection = (endpoint: string): CollectionReference<DocumentData> => collection(db, endpoint);

const Col = getCollection("ux");
export const addDocument = (documentTitle: string, newCollection: DocumentData) => setDoc(doc(Col, documentTitle), newCollection);