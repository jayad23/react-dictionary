import React, { useContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { 
  Box, 
  Card, 
  CardContent, 
  CardMedia, 
  IconButton, 
  Tooltip, 
  Typography
} from '@mui/material';
import { SectionCardProps } from './Types';
import { SearchContext } from '../../../context/Context';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import { useLocation, useNavigate } from 'react-router-dom';

export const SectionCard = ({ option, information }: SectionCardProps) => {
  const { state } = useContext(SearchContext);
  const tooltipTitle = state.lang === "en" ? "view" : "ver";

  const { pathname } = useLocation();
  const navigate  = useNavigate();

  const handleNavigation = () => {
    const route = information.title[state.lang].toLowerCase().replaceAll(" ", "-").replaceAll(".", "");
    navigate(`${pathname}/${route}`, {
      state: information.bank
    });
  };

  return (
    <Card sx={{ display: 'flex', width: 500 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {information.title[state.lang]}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1 }}>
          <Tooltip title={tooltipTitle}>
            <IconButton 
              onClick={handleNavigation}
              aria-label="view"
              >
              <RemoveRedEyeRoundedIcon  />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={information.title?.link}
        alt={information.title[state.lang]}
      />
    </Card>
  );
}