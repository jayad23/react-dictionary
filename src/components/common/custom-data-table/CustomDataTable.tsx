import React from 'react'
import DataTableStyled from './CustomStyledDataTable';
import { CustomDataTableProps } from './Types';
import { FadeIn } from '../animations';

const CustomDataTable = ({ columns, data }: CustomDataTableProps) => {
  return (
    <FadeIn>
      <DataTableStyled 
        data={data}
        columns={columns}
      />
    </FadeIn>
  )
}

export default CustomDataTable