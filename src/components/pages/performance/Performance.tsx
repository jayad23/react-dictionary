import React from 'react';
import { CustomBoxElement } from '../../common/styles/customElements';
import { SectionCard } from '../../common/section-card/SectionCard';
import performanceData from "../../../base/optimization.json";

const Performance = () => {
  const performance = performanceData && performanceData.optmization;
  const options = Object.keys(performance);

  return (
    <CustomBoxElement>
      {
        options.length > 0 && 
        options.map((option: string, index: number ) => (
          <SectionCard 
            key={index} 
            option={option} 
            information={performance[option as keyof typeof performance]} 
          />  
        ))
      }
    </CustomBoxElement>
  )
}

export default Performance;