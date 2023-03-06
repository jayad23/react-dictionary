import React, { useContext } from 'react'
import {Box,  CardMedia } from '@mui/material'
import {SearchContext} from '@context/Context';
import { assets } from '@context/utils';

export const LoadingComponent = () => {
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
        image={assets.loadingIcon}
        alt="Error"
      />
  </Box>
  )
};