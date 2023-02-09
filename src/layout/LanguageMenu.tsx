import React, { useContext, useState } from 'react';
import { Box, CardMedia, IconButton, Menu, MenuItem, Tooltip, Typography} from '@mui/material';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import { SearchContext } from '../context/Context';

export const LanguageMenu = () => {
  const { state, dispatch } = useContext(SearchContext);

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (lang: string) => {
    dispatch({ type: "LANG", payload: lang });
    setAnchorElUser(null);
  };

  const languages = [{ id: 1, lang: "es", opt: "es"}, { id: 2, lang: "en", opt: "us"}];

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton 
          onClick={handleOpenUserMenu}
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <TranslateRoundedIcon />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={Boolean(anchorElUser)}
        onClose={() => handleCloseUserMenu(state.lang)}
        >
        {languages.map(({ id, lang, opt }: { id: number; lang: string; opt: string }) => (
          <MenuItem 
            key={id} 
            onClick={() => handleCloseUserMenu(lang)}
          >
            <Typography textAlign="center">{lang}</Typography>
            <CardMedia 
              component="img"
              sx={{
                width: "40%",
                ml: 1
              }}
              image={`https://flagcdn.com/w40/${opt.toLowerCase()}.png`}
            />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};