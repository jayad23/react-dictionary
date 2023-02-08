import React from 'react'
import { useLocation} from 'react-router-dom'
import { useCustomDataActions } from './useCustomDataActions';
import CustomDataTable from '../../common/custom-data-table/CustomDataTable';

const Dynamic = () => {
  const location = useLocation();
  const { columns } = useCustomDataActions();
  const data = location && location.state;

  return <CustomDataTable data={data} columns={columns}/>
}

export default Dynamic