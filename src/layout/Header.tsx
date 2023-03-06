import React, { useContext, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography,
  InputBase,
  CardMedia,
  Tooltip
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { SearchContext } from '@context/Context'; 
import { LanguageMenu } from './LanguageMenu';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
interface boxStyles {
  flexGrow: number; 
  position: string; 
  width: string;
  top: number;
};

export const SearchElement = ({ boxStyles }: { boxStyles?: boxStyles}) => {
  const { state, dispatch } = useContext(SearchContext);
  const [ searchValue, setSearchValue ] = useState("");
  const {
    assets
  } = state;

  const styles = boxStyles || { visibility: "hidden" };

  const handleSearch = (value: string) => {
    setSearchValue(value);
    dispatch({ type: "SEARCH", payload: value })
  }

  const handleClear = () => {
    dispatch({ type: "CLEAR" })
    setSearchValue("");
  };

  const navbarTitle = {
    en: "The React Developer Dictionary.",
    es: "Diccionario para el Desarrollador React."
  };

  return (
    <Box sx={{...styles}}>
      <AppBar position="static">
        <Toolbar>
          <LanguageMenu />
          <CardMedia
            component="img"
            sx={{
              width: "50px",
              height: "50px",
              marginRight: "10px"
            }}
            image={assets.navIcon}
            alt="icon"
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {navbarTitle[state.lang]}
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => handleSearch(e.target.value)}
              value={searchValue}
            />
            {
              searchValue.length > 4 && (
                <Tooltip title="Clear" sx={{ position: "absolute", right: 0}}>
                  <IconButton onClick={handleClear}>
                    <ClearRoundedIcon sx={{ cursor: "pointer", color: "#eee"}} />
                  </IconButton>
                </Tooltip>
              )
            }
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
