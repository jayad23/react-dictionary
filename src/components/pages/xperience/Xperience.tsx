import React from 'react';
import { CustomBoxElement } from '../../common/styles/customElements';
import { SectionCard } from '../../common/section-card/SectionCard';
import { ux } from '../../../db/ux/index';

const Xperience = () => {
  const options = Object.keys(ux);
  
  return (
    <CustomBoxElement>
      {
        options.length > 0 && 
        options.map((option: string, index: number ) => (
          <SectionCard 
            key={index} 
            option={option} 
            information={ux[option as keyof typeof ux]} 
          />  
        ))
      }
    </CustomBoxElement>
  )
}

export default Xperience;