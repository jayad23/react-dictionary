###### con el getDocs traemos la collección completa.
###### ref a base dedatos y colección const itemCollection = collection(db, 'sections')
###### 	getDocs(itemCollection).then((res) => {
######    const items = res.docs.map(item => ({...item.data(), uid: item.id }));
######    setCol(items)
######  });
###### con el getDoc más el id traemos un elemento de la colección E.g:
###### const ref = doc(itemCollection, "basic");
###### getDoc(ref).then((res) => console.log(res.data()))
###### El metodo .data() es lo que pone los datos a disposición del cliente.
######
###### Importaciones importantes
###### import { getDocs, collection, getDoc, doc, addDoc, serverTimestamp, setDoc } from 'firebase/firestore';
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######
######