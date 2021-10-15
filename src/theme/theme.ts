import { createTheme } from '@material-ui/core';

export const theme = createTheme({
	palette: {
		primary: {
			main: 'hsl(154, 59%, 51%)',
		},
		secondary: {
			main: 'hsl(248, 32%, 49%)',
		},
		background: {
			default: 'hsl(0, 100%, 74%)',
		},
		error: {
			main: 'hsl(0, 100%, 74%)',
		},
	},
	typography: {
		fontFamily: `'Poppins', sans-serif`,
		button: {
			fontFamily: `'Poppins', sans-serif`,
		},
	},
});
