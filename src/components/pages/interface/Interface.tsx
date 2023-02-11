import React from 'react';
import { CustomBoxElement } from '../../common/styles/customElements';
import { SectionCard } from '../../common/section-card/SectionCard';
import { ui } from '../../../db/ui/index';

const Interface = () => {
  const options = Object.keys(ui);

  return (
    <CustomBoxElement>
      {
        options.length > 0 && 
        options.map((option: string, index: number ) => (
          <SectionCard 
            key={index} 
            option={option} 
            information={ui[option as keyof typeof ui]} 
          />  
        ))
      }
    </CustomBoxElement>
  )
}

export default Interface;