import React, { useContext, useEffect, useState } from 'react';
import { TopicCard } from '../../common/card/Card';
import { CustomBox } from '../../common/styles/customElements';
import { SearchContext } from '../../../context/Context';
import { PropSection } from '../../../context/ContextTypes';
import { NoDataComponent } from '../../common/no-data-component/NoDataComponent';
import { db } from '../../../../firebaseConfig';
import { getDocs, collection, getDoc, doc, addDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { Button } from '@mui/material';

const Home = () => {
	const { state } = useContext(SearchContext);

	const [col, setCol] = useState<Array<any | PropSection>>([]);

	// if (col.length === 0) {
	// 	return <NoDataComponent />;
	// }

	const itemCollection = collection(db, 'sections');
	const createDoc = () => {
		// const post = {
		// 	id: 2,
		// 	section: {
		// 		en: 'Blogs',
		// 		es: 'Blogs',
		// 	},
		// 	title: {
		// 		en: 'Blogs & Articles',
		// 		es: 'Artículos & Blogs',
		// 	},
		// 	description: {
		// 		en: 'We shall not forget that having a solid theoretical fundation is as important as having a good praxis.',
		// 		es: 'No olvidemos que tener bases sólidas de la teoría es tan importante como tener un buen desarrollo de la práctica.',
		// 	},
		// };
    // //addDoc(itemCollection, post)
    // setDoc(doc(itemCollection, "blogs"), post)
    let documentTitle = ""
    for(const i of state.homeData){
      documentTitle = i.section.en.toLowerCase()
      setDoc(doc(itemCollection, documentTitle), i)
    }
	};

	useEffect(() => {
	  getDocs(itemCollection).then((res) => {
	    const items = res.docs.map(item => ({...item.data(), uid: item.id }));
	    setCol(items)
	  });
	}, []);


	return (
		<CustomBox component="section">
			{col.length > 0 && col.map((item: PropSection) => (
				<TopicCard key={item.id} {...item} />
			))}
		</CustomBox>
	);
};

export default Home;
