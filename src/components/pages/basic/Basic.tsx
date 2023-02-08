import React from 'react';
import { CustomBox } from '../../common/styles/customElements';
import { SectionCard } from '../../common/section-card/SectionCard';
import BasicData from "../../../base/basic.json";

const Basic = () => {
  const basic = BasicData && BasicData.basic;
  const options = Object.keys(basic);
  return (
    <CustomBox>
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
    </CustomBox>
  )
}

export default Basic