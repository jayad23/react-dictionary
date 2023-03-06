import React, { useContext, useRef, useState } from 'react';
import { Box, Divider, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import { SearchContext } from '@context/Context';
import SwitchBtn from '@components/common/switch-btn/Swtich';
import { NavLink, useLocation } from 'react-router-dom';
import "./style.css";

const linkStyles = {
	textDecoration: 'none',
	textAlign: 'center',
	width: '100%',
  height: "100%",
  color: "#6e6b7b"
};

export const LanguageMenu = () => {
	const { state, dispatch } = useContext(SearchContext);

	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const shareResourceRef = useRef(null) as React.MutableRefObject<null> | React.MutableRefObject<HTMLAnchorElement>;
  const backofficeMenuRef = useRef(null) as React.MutableRefObject<null> | React.MutableRefObject<HTMLAnchorElement>;

	const homeLinkRef = useRef(null) as React.MutableRefObject<null> | React.MutableRefObject<HTMLAnchorElement>;

	const { pathname } = useLocation();
	const isHome = pathname === '/';

  const handleLinkRef = (ref: React.MutableRefObject<HTMLAnchorElement>) => {
    ref.current.click();
    setAnchorElUser(null);
  };

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = (lang: string) => {
		dispatch({ type: 'LANG', payload: lang });
		setAnchorElUser(null);
	};

	const menus = [
		{ id: 1, 
      label: { 
        en: 'Share resource', 
        es: 'Compartir recurso' 
      }, 
      path: "/share-resource",
      ref: shareResourceRef 
    },
		{ id: 2, 
      label: { 
        en: 'Back office', 
        es: 'Back office' 
      }, 
      path: "/login",
      ref: backofficeMenuRef
    },
	];

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
				sx={{ mt: '45px' }}
				id="menu-appbar"
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorElUser)}
				onClose={() => handleCloseUserMenu(state.lang)}
			>
				<MenuItem disabled={isHome} onClick={() => handleLinkRef(homeLinkRef as React.MutableRefObject<HTMLAnchorElement>)}>
					<NavLink
						to="/"
						ref={homeLinkRef}
						style={linkStyles as React.CSSProperties}
					>
						Home page
					</NavLink>
				</MenuItem>
				<Divider />
				{menus.map((option) => (
					<MenuItem key={option.id} onClick={() => handleLinkRef(option.ref as React.MutableRefObject<HTMLAnchorElement>)}>
						<NavLink ref={option.ref} to={option.path} style={{...linkStyles, textAlign: "left" }}>{option.label[state.lang]}</NavLink>
					</MenuItem>
				))}
				<MenuItem>
					<SwitchBtn />
				</MenuItem>
			</Menu>
		</Box>
	);
};
