import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from './theme/theme';

import SignUp from './pages/SignUp';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<SignUp />
		</ThemeProvider>
	);
}

export default App;
