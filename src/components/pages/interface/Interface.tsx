import React from 'react';
import { CustomBoxElement } from '@common/styles/customElements';
import { SectionCard } from '@common/section-card/SectionCard';
import { getData } from '@api/api';

const data = getData("/ui");


const Interface = () => {
  const ui = data.ui.read();
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