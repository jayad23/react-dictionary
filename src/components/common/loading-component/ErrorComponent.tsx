import React, { useContext, useState, useEffect } from 'react'
import {Box, Button, CardMedia, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import {SearchContext} from '../../../context/Context';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { useTheme } from '@mui/material';

export const ErrorComponent = () => {
  const { state } = useContext(SearchContext);
  const [ opacityValue, setOpacityValue ] = useState(0);
  const [executeOpacity, setExecuteOpacity ] = useState(true);
  const navigate = useNavigate();
  const theme = useTheme();
  
  useEffect(() => {
    if(executeOpacity){
      const handlerOpacity = setInterval(() => {
        setOpacityValue(prevValue => prevValue > 0 ? prevValue - 1 : prevValue + 1);
        console.log("dentro")
      }, 1000);

      return () => {
        clearInterval(handlerOpacity);
      }
    }
  }, [executeOpacity])

  const handleOverButton = (param: string) => {
    if(param === "enter"){
      setOpacityValue(1);
      setExecuteOpacity(false);
    }else {
      setOpacityValue(0);
      setExecuteOpacity(true);
    }
  }

  return (
    <Box 
      component="div"
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems:  "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "450px" }}>
        <CardMedia
          component="img"
          sx={{
            objectFit: "contained",
          }}
          image={state.assets.errorIcon}
          alt="Error"
        />
        <Button 
          color="secondary" 
          variant="contained" 
          size="small" 
          onMouseEnter={() => handleOverButton("enter")}
          onMouseLeave={() => handleOverButton("leave")}
          onClick={() => navigate("/")}
          sx={{ 
            opacity: `${opacityValue}`,
          }}
        >
          <CardMedia
            component="img"
            sx={{
              transform: "rotate(90deg)",
              height: 54,
            }}
            image="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/17ae2840400bb0a.png"
            alt="icon"
          />
        </Button>
      </Box>
      <Typography variant='h1'>No se encontró</Typography>
    </Box>
  )
};