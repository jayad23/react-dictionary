import React, { useContext, useState } from 'react'
import { TopicCard } from '../../common/card/Card';
import { CustomBox } from '../../common/styles/customElements';
import { SearchContext } from '../../../context/Context';
import { PropSection } from '../../../context/ContextTypes';
import { NoDataComponent } from '../../common/no-data-component/NoDataComponent';
import ImageUploader from '../../common/image-uploader/ImageUploader';
import {TextField} from '@mui/material';

const Home = () => {
  const { state } = useContext(SearchContext);
  if(state.homeData.length === 0){
    return (
      <NoDataComponent />
    );
  };

  return (
    <CustomBox component="section">
      {
        state.homeData.map((item: PropSection) => (
          <TopicCard 
            key={item.id} 
            {...item} 
          />
        ))
      }
    </CustomBox>
  )
};

export default Home;