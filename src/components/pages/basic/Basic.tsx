import React from 'react';
import { CustomBoxElement } from '../../common/styles/customElements';
import { SectionCard } from '../../common/section-card/SectionCard';
import { basics } from '../../../db/basics/index';

const Basic = () => {
  const basic = basics;
  const options = Object.keys(basic);

  return (
    <CustomBoxElement>
      {
        options.length > 0 && 
        options.map((option: string, index: number ) => (
          <SectionCard 
            key={index} 
            option={option} 
            information={basic[option as keyof typeof basic]} 
          />  
        ))
      }
    </CustomBoxElement>
  )
}

export default Basic