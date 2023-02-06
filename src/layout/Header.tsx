import React, { useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { SearchContext } from '../context/Context';
import {CardMedia, Tooltip} from '@mui/material';

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
    // vertical padding + font size from searchIcon
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
  const {
    handleSearch,
    setSearchValue,
    searchValue,
    assets
  } = state;

  const styles = boxStyles || { visibility: "hidden" };

  return (
    <Box sx={{...styles}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
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
            Diccionario para el React Developer.
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onKeyUp={(e) => handleSearch(e)}
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            {
              searchValue.length > 4 && (
                <Tooltip title="Clear">
                  <IconButton onClick={() => setSearchValue("")}>
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
}
