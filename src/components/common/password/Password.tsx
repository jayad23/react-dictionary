import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { SearchContext } from '@context/Context';
import { OutlinedInput } from '@mui/material';

export const PasswordInput = ({ handleChange, value }: { handleChange: (value: string) => void; value: string }) => {
	const [showPassword, setShowPassword] = React.useState(false);
	const { state } = React.useContext(SearchContext);
	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	const text = {
		en: 'Password',
		es: 'Contraseña',
	};

	return (
		<FormControl variant="outlined">
			<InputLabel htmlFor="outlined-adornment-password">{text[state.lang]}</InputLabel>
			<OutlinedInput
				id="outlined-adornment-password"
        value={value}
				type={showPassword ? 'text' : 'password'}
        onChange={(e) => handleChange(e.target.value)}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge="end"
						>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
				label="Password"
			/>
		</FormControl>
	);
};
