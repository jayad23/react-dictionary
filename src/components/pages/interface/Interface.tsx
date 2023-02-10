import React from 'react';
import { CustomBoxElement } from '../../common/styles/customElements';
import { SectionCard } from '../../common/section-card/SectionCard';
import interfaceData from "../../../base/ui.json";

const Interface = () => {
  const ui = interfaceData && interfaceData.interface;
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