// Auth page styling constants
export const authStyles = {
	// Layout styles
	pageContainer: {
		minH: '100vh',
		bg: 'gray.50',
		py: { base: 8, md: 12 },
	},

	formContainer: {
		maxW: '500px',
		mx: 'auto',
		bg: 'white',
		border: '1px solid',
		borderColor: 'gray.200',
		p: { base: 6, md: 8 },
		boxShadow: 'sm',
	},

	// Typography styles
	heading: {
		fontSize: { base: '2xl', md: '3xl' },
		fontWeight: '600',
		textAlign: 'center' as const,
		color: 'gray.900',

		mb: 2,
	},

	subHeading: {
		fontSize: 'sm',
		color: 'gray.600',
		textAlign: 'center' as const,

		mb: 6,
	},

	// Form styles
	formStack: {
		gap: 4,
		w: 'full',
	},

	inputField: {
		border: '1px solid',
		borderColor: 'gray.300',
		borderRadius: 'none',
		h: '44px',
		w: 'full',
		fontSize: 'sm',
		_hover: { borderColor: 'gray.400' },
		_focus: {
			borderColor: 'black',
			boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)',
			outline: 'none',
		},
	},

	label: {
		fontSize: 'sm',
		fontWeight: '500',
		color: 'gray.700',

		mb: 2,
	},

	// Button styles
	primaryButton: {
		w: 'full',
		h: '48px',
		bg: 'black',
		color: 'white',
		borderRadius: 'none',

		fontWeight: '500',
		fontSize: 'sm',
		_hover: { bg: 'gray.800' },
		_active: { bg: 'gray.900' },
		_disabled: { bg: 'gray.400', cursor: 'not-allowed' },
	},

	socialButton: {
		w: 'full',
		h: '44px',
		border: '1px solid',
		borderColor: 'gray.300',
		bg: 'white',
		color: 'gray.700',
		borderRadius: 'md',

		fontWeight: '500',
		fontSize: 'sm',
		_hover: { bg: 'gray.50', borderColor: 'gray.400' },
	},

	// Link styles
	linkText: {
		color: 'blue.600',
		fontWeight: '500',

		_hover: { textDecoration: 'underline' },
	},

	// Misc styles
	divider: {
		my: 6,
	},

	checkboxLabel: {
		fontSize: 'sm',
		color: 'gray.600',
	},

	errorText: {
		fontSize: 'sm',
		color: 'red.500',
	},

	successText: {
		fontSize: 'sm',
		color: 'green.500',
	},

	passwordToggle: {
		position: 'absolute' as const,
		right: '12px',
		top: '50%',
		transform: 'translateY(-50%)',
		zIndex: 2,
		cursor: 'pointer',
		color: 'gray.500',
		_hover: { color: 'gray.700' },
	},

	inputGroup: {
		w: 'full',
		gap: 2,
		align: 'center',
		position: 'relative' as const,
	},
};
