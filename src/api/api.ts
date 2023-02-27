import { getDocs, collection, getDoc, doc, addDoc, serverTimestamp, setDoc, QuerySnapshot, DocumentData } from 'firebase/firestore';
import {db} from '../../firebaseConfig';

const fetchData = (endpoint: string) => {
  const itemCollection = collection(db, endpoint);
  return getDocs(itemCollection);
}

const wrapPromise = (promise: Promise<QuerySnapshot<DocumentData>>) => {
  let status = 'Pending';
  let result: any;
  let error: any;
  let suspender = promise.then(
    (res) => {
      (status = 'Success'), (result = res.docs.map((item) => ({...item.data(), uid: item.id })));
    },
    (err) => {
      (status = 'Failed'), (error = err);
    }
  );

  return {
    read(){
      if(status === "Pending"){
        throw suspender;
      } else if (status === "Failed"){
        throw error;
      } else {
        return result;
      }
    }
  };
};

export const getData = (endpoint: string) => {
  const key = endpoint.split("/")[1];
  const newPromise = fetchData(endpoint);
  
  return {
    [key]: wrapPromise(newPromise)
  };

};