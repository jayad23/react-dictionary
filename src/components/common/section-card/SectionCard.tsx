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
import { stringToRoute } from '../../../utilities/stringManager';
import "./style.css";

export const SectionCard = ({ option, information }: SectionCardProps) => {
  const { state } = useContext(SearchContext);
  const { pathname } = useLocation();
  const navigate  = useNavigate();

  const handleNavigation = () => {
    const route = stringToRoute(information.title[state.lang]);
    navigate(`${pathname}/${route}`, {
      state: information.bank
    });
  };

  return (
    <div className='information-card' onClick={handleNavigation}>
      <div className='information-desc'><p>{information.title[state.lang]}</p></div>
      <div className='information-filter'></div>
      <div className='information-top'></div>
      <div className='information-right'></div>
      <div className='information-bottom'></div>
      <div className='information-left'></div>
      <img src={`${information.title?.link}`}/>
    </div>
  );
}