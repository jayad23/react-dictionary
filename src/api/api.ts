import { getDocs, collection, getDoc, doc, addDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import {db} from '../../firebaseConfig';

type SectionProps = {
  id: number;
  title: {
    [key: string]: string
  };
  section: {
    [key: string]: string
  };
  description: {
    [key: string]: string
  };
  uid: string;
}

const fetchData = (endpoint: string) => {
  let data: Array<SectionProps | any> = [];
  const itemCollection = collection(db, endpoint);
  getDocs(itemCollection).then((res) => {
    data = res.docs.map((item) => ({...item.data(), uid: item.id }))
  })
  return data;
}