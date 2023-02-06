import React, { ReactNode, useContext } from 'react'
import {Box, CardMedia, Typography} from '@mui/material'
import {SearchContext} from '../../../context/Context';
import { useNavigate } from 'react-router-dom';
import "./style.css";

const CustomContainer = ({ children }: { children: ReactNode }) => (
  <Box
      component="div"
      sx={{
        position: "absolute",
        // top:"50%",
        // left: "50%",
        // transform: 'translate(-50%, -50%)',
        display: "grid",
        placeItems: "center",
        height: "100%",
        width: "100%"
      }}
    >
      {children}
  </Box>
)

export const LoadingComponent = () => {
  const { state } = useContext(SearchContext);
  return (
    <CustomContainer>
      <Box sx={{ width: "400px" }}>
        <CardMedia
          component="img"
          sx={{
            objectFit: "contained"
          }}
          image={state.assets.loadingIcon}
          alt="Error"
        />
      </Box>
    </CustomContainer>
  )
};

export const ErrorComponent = () => {
  const { state } = useContext(SearchContext);
  const navigate = useNavigate();
  
  return (
    <CustomContainer>
      <Box sx={{ width: "450px" }}>
        <CardMedia
          component="img"
          sx={{
            objectFit: "contained"
          }}
          image={state.assets.errorIcon}
          alt="Error"
        />
      </Box>
      <h1 className="errorTitle">La página no se encontró</h1>
    </CustomContainer>
  )
}