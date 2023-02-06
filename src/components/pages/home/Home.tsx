import React from 'react'
import { TopicCard } from '../../common/card/Card';
import { CustomBox } from '../../common/styles/customElements';

const Home = () => {
  return (
    <CustomBox component="section">
      {
        [1,2,3,4,5,6,7,8,9,0].map((item) => (
          <TopicCard key={item} />
        ))
      }
    </CustomBox>
  )
};

export default Home;