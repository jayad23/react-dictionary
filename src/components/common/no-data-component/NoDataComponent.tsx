import React, { useContext } from 'react'
import {Box, CardMedia, Typography} from '@mui/material'
import { SearchContext } from '../../../context/Context'

export const NoDataComponent = () => {
  const { state } = useContext(SearchContext);

  const typoText = {
    en: "Can't find anything related.",
    es: "No encontré nada relacionado."
  }

  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        height: "90%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center"
      }}
    >
      <CardMedia
        component="img"
        height="194"
        sx={{ objectFit: "contain"}}
        image={state.assets.noDataAlertIcon}
        alt="alert_icon"
      />
      <CardMedia
        component="img"
        height="194"
        sx={{ objectFit: "contain"}}
        image={state.assets.noDataIcon}
        alt="no_data_icon"
      />
      <Typography variant='h1'>{typoText[state.lang]}</Typography>
    </Box>
  )
};