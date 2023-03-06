import React from 'react';
import { CustomBoxElement } from '@common/styles/customElements';
import { SectionCard } from '@common/section-card/SectionCard';
import { getData } from '@api/api';

const data = getData("/basics");

const Basic = () => {

  const basics = data.basics.read();
  const options = Object.keys(basics);

  return (
    <CustomBoxElement>
      {
        options.length > 0 && 
        options.map((option: string, index: number ) => (
          <SectionCard 
            key={index} 
            option={option} 
            information={basics[option as keyof typeof basics]} 
          />  
        ))
      }
    </CustomBoxElement>
  )
}

export default Basic