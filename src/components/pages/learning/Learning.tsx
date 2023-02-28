import React, {useEffect} from 'react';
import { CustomBoxElement } from '../../common/styles/customElements';
import { SectionCard } from '../../common/section-card/SectionCard';
import { getData } from '../../../api/api';

const data = getData("/learning");

const Learning = () => {
  const learning = data.learning.read();
  const options = Object.keys(learning);
  
  return (
    <CustomBoxElement>
      {
        options.length > 0 && 
        options.map((option: string, index: number ) => (
          <SectionCard 
            key={index} 
            option={option} 
            information={learning[option as keyof typeof learning]} 
          />  
        ))
      }
    </CustomBoxElement>
  )
}

export default Learning;