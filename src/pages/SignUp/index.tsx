/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

function SignUp() {
	const classes = useStyles();
	const [firstName, setFirstName] = useState('');
	const [firstNameError, setFirstNameError] = useState(false);

	const [lastName, setLastName] = useState('');
	const [lastNameError, setLastNameError] = useState(false);

	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);

	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState(false);

	return (
		<Box
			display='flex'
			justifyContent='center'
			alignItems='center'
			className={classes.root}
		>
			<Grid
				container
				spacing={4}
				justifyContent='center'
				alignItems='center'
				className={classes.grid}
			>
				<Grid item xs={12} sm={6}>
					<Typography variant='h1' className={classes.title}>
						Learn to code by watching others
					</Typography>
					<Typography className={classes.description}>
						See how experienced developers solve problems in real-time. Watching
						scripted tutorials is great, but understanding how developers think
						is invaluable.
					</Typography>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Button
						variant='contained'
						color='secondary'
						className={classes.button}
					>
						<b> Try it free 7 days </b> then $20/mo. thereafter
					</Button>
					<Box mt={2} className={classes.form}>
						<TextField
							variant='outlined'
							placeholder='First Name'
							className={classes.input}
							error={firstNameError}
							onChange={(e) => setFirstName(e.target.value)}
							onBlur={() => setFirstNameError(!firstName)}
							helperText={!firstNameError ? '' : 'First Name cannot be empty'}
						/>
						<TextField
							variant='outlined'
							placeholder='Last Name'
							className={classes.input}
							error={lastNameError}
							onChange={(e) => setLastName(e.target.value)}
							onBlur={() => setLastNameError(!lastName)}
							helperText={!lastNameError ? '' : 'Last Name cannot be empty'}
						/>
						<TextField
							variant='outlined'
							placeholder='Email Address'
							className={classes.input}
							error={emailError}
							onChange={(e) => setEmail(e.target.value)}
							onBlur={() => setEmailError(!email)}
							helperText={!emailError ? '' : 'Looks like this is not an email'}
						/>
						<TextField
							variant='outlined'
							placeholder='Password'
							type='password'
							className={classes.input}
							error={passwordError}
							onChange={(e) => setPassword(e.target.value)}
							onBlur={() => setPasswordError(!password)}
							helperText={!passwordError ? '' : 'Password cannot be empty'}
						/>
						<Button
							className={classes.buttonSuccess}
							variant='contained'
							color='primary'
						>
							Claim our free trial
						</Button>
						<Typography className={classes.terms}>
							By clicking the button, you are agreeing to our{' '}
							<a href='#' className={classes.link}>
								Terms and Services
							</a>
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}

export default SignUp;
