import React, { useContext } from 'react'
import {Box,  CardMedia } from '@mui/material'
import {SearchContext} from '../../../context/Context';

export const LoadingComponent = () => {
  const { state } = useContext(SearchContext);
  return (
    <Box
      component="div"
      sx={{
        position: "absolute",
        top:"50%",
        left: "50%",
        transform: 'translate(-50%, -50%)',
      }}
    >
      <CardMedia
        component="img"
        height={140}
        image={state.assets.loadingIcon}
        alt="Error"
      />
  </Box>
  )
};