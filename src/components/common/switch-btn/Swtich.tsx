import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { CardMedia } from '@mui/material';
import { SearchContext } from '@context/Context';

const IOSSwitch = styled((props: SwitchProps) => (
	<Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
	width: 42,
	height: 26,
	padding: 0,
	'& .MuiSwitch-switchBase': {
		padding: 0,
		margin: 2,
		transitionDuration: '300ms',
		'&.Mui-checked': {
			transform: 'translateX(16px)',
			color: '#fff',
			'& + .MuiSwitch-track': {
				backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        backgroundImage: 'url(https://flagcdn.com/w40/us.png)',
				opacity: 1,
				border: 0,
			},
			'&.Mui-disabled + .MuiSwitch-track': {
				opacity: 0.5,
			},
		},
		'&.Mui-focusVisible .MuiSwitch-thumb': {
			color: '#33cf4d',
			border: '6px solid #fff',
		},
		'&.Mui-disabled .MuiSwitch-thumb': {
			color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
			backgroundImage: 'url(https://flagcdn.com/w40/es.png)',
		},
		'&.Mui-disabled + .MuiSwitch-track': {
			opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
		},
	},
	'& .MuiSwitch-thumb': {
		boxSizing: 'border-box',
		width: 22,
		height: 22,
	},
	'& .MuiSwitch-track': {
		borderRadius: 26 / 2,
		backgroundImage: 'url(https://flagcdn.com/w40/es.png)',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: "48px",
		backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
		opacity: 1,
		transition: theme.transitions.create(['background-color'], {
			duration: 500,
		}),
	},
}));

const SwitchBtn = () => {
	const { state, dispatch } = React.useContext(SearchContext);
	const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.checked;
		const language = value ? "en" : "es";
		localStorage.setItem("lang", language);
		dispatch({ type: "LANG", payload: language });
	};

	const defaultValue = state.lang == "en" ? true : false;

	return (
		<FormGroup>
			<Stack direction="row" spacing={1} alignItems="center">
				<CardMedia
					component="img"
					sx={{
						width: '20%',
						ml: 1,
						visibility: "hidden"
					}}
					image={`https://flagcdn.com/w40/us.png`}
				/>
				<IOSSwitch sx={{ m: 1 }} onChange={(e) => handleCheck(e)} checked={defaultValue} />
				<CardMedia
					component="img"
					sx={{
						width: '20%',
						ml: 1,
						visibility: "hidden"
					}}
					image={`https://flagcdn.com/w40/es.png`}
				/>
			</Stack>
		</FormGroup>
	);
};

export default SwitchBtn;
