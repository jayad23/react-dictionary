import React, { useContext, useEffect, useState } from 'react';
import { TopicCard } from '../../common/card/Card';
import { CustomBox } from '../../common/styles/customElements';
import { SearchContext } from '../../../context/Context';
import { PropSection } from '../../../context/ContextTypes';

const Home = () => {
	const { state } = useContext(SearchContext);

	return (
		<CustomBox component="section">
			{state.homeData.length > 0 && state.homeData.map((item: PropSection) => (
				<TopicCard key={item.id} {...item} />
			))}
		</CustomBox>
	);
};

export default Home;
