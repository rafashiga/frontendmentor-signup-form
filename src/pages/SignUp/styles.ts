import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import BackkgroundImage from '../../assets/images/bg-intro-desktop.png';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		backgroundImage: `url(${BackkgroundImage})`,
		backgroundSize: '100%',
		backgroundColor: theme.palette.background.default,
		minHeight: '100vh',
		paddingTop: 24,
	},
	grid: {
		[theme.breakpoints.down('sm')]: {
			width: '95%',
		},
		[theme.breakpoints.up('sm')]: {
			width: '80%',
		},
	},
	title: {
		color: '#fff',
		fontSize: '48px',
		fontWeight: 700,
		marginBottom: '24px',
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
		},
	},
	description: {
		color: '#fff',
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
		},
	},
	button: {
		width: '100%',
		padding: 20,
		textTransform: 'none',
		display: 'block',
		fontWeight: 400,
	},
	form: {
		width: '100%',
		backgroundColor: '#fff',
		borderRadius: 5,
		padding: 36,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		gap: 16,
	},
	input: {
		width: '100%',

		'& input::placeholder': {
			color: '#000',
			fontWeight: 600,
		},
		'& .MuiOutlinedInput-root': {
			fontWeight: 500,
			'&.Mui-focused fieldset': {
				border: '1.75px solid hsl(249, 10%, 26%)',
			},
		},
		'& .MuiFormHelperText-root': {
			textAlign: 'right',
			marginRight: 0,
			fontStyle: 'italic',
			fontWeight: 500,
		},
	},
	buttonSuccess: {
		width: '100%',
		padding: '16px',
		color: '#fff',
		fontWeight: 500,
		letterSpacing: 2,
	},
	terms: {
		textAlign: 'center',
		fontSize: '12px',
		color: '#CECDD3',
		fontWeight: 500,
	},
	link: {
		color: theme.palette.error.main,
		textDecoration: 'none',
		fontWeight: 700,
	},
}));

export default useStyles;
