// Profile page styling constants
export const profileStyles = {
	// Layout styles
	pageContainer: {
		minH: '100vh',
		bg: 'gray.50',
		py: { base: 6, md: 8 },
		px: { base: 4, md: 8 },
	},

	mainContainer: {
		maxW: '1200px',
		mx: 'auto',
		bg: 'white',
		borderRadius: 'lg',
		border: '1px solid',
		borderColor: 'gray.200',
		overflow: 'hidden',
		boxShadow: 'sm',
	},

	// Tab styles
	tabList: {
		borderBottom: '1px solid',
		borderColor: 'gray.200',
		bg: 'gray.50',
	},

	tab: {
		fontWeight: '500',
		fontSize: 'sm',
		color: 'gray.600',
		_selected: {
			color: 'black',
			borderBottomColor: 'black',
			borderBottomWidth: '2px',
		},
		_hover: {
			color: 'gray.900',
		},
	},

	tabPanel: {
		p: { base: 6, md: 8 },
	},

	// Form styles
	formContainer: {
		maxW: '600px',
	},

	sectionHeading: {
		fontSize: { base: 'lg', md: 'xl' },
		fontWeight: '600',
		color: 'gray.900',

		mb: 6,
	},

	formLabel: {
		fontSize: 'sm',
		fontWeight: '500',
		color: 'gray.700',

		mb: 2,
	},

	input: {
		h: '44px',
		borderColor: 'gray.300',
		borderRadius: 'md',

		fontSize: 'sm',
		_focus: {
			borderColor: 'black',
			boxShadow: '0 0 0 1px black',
		},
		_hover: {
			borderColor: 'gray.400',
		},
	},

	// Button styles
	primaryButton: {
		h: '44px',
		bg: 'black',
		color: 'white',
		borderRadius: 'md',

		fontWeight: '500',
		fontSize: 'sm',
		_hover: { bg: 'gray.800' },
		_disabled: { bg: 'gray.400', cursor: 'not-allowed' },
	},

	secondaryButton: {
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

	// Card styles
	infoCard: {
		bg: 'gray.50',
		border: '1px solid',
		borderColor: 'gray.200',
		borderRadius: 'md',
		p: 4,
		mb: 4,
	},

	// Order card styles
	orderCard: {
		border: '1px solid',
		borderColor: 'gray.200',
		borderRadius: 'lg',
		p: 4,
		bg: 'white',
		cursor: 'pointer',
		transition: 'all 0.2s',
		_hover: {
			borderColor: 'gray.300',
			boxShadow: 'md',
			transform: 'translateY(-2px)',
		},
	},

	orderHeader: {
		justify: 'space-between',
		align: 'center',
		w: 'full',
		mb: 3,
	},

	orderId: {
		fontSize: 'sm',
		fontWeight: '600',
		color: 'gray.900',
	},

	orderDate: {
		fontSize: 'xs',
		color: 'gray.500',
	},

	orderTotal: {
		fontSize: 'lg',
		fontWeight: '600',
		color: 'gray.900',
	},

	// Status badges
	statusBadge: {
		px: 3,
		py: 1,
		borderRadius: 'full',
		fontSize: 'xs',
		fontWeight: '600',
	},

	statusConfirmed: {
		bg: 'green.100',
		color: 'green.800',
	},

	statusProcessing: {
		bg: 'blue.100',
		color: 'blue.800',
	},

	statusShipped: {
		bg: 'purple.100',
		color: 'purple.800',
	},

	statusDelivered: {
		bg: 'green.100',
		color: 'green.800',
	},

	statusCancelled: {
		bg: 'red.100',
		color: 'red.800',
	},

	paymentPaid: {
		bg: 'green.100',
		color: 'green.800',
	},

	paymentPending: {
		bg: 'yellow.100',
		color: 'yellow.800',
	},

	paymentFailed: {
		bg: 'red.100',
		color: 'red.800',
	},

	// Grid and layout
	ordersGrid: {
		templateColumns: { base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
		gap: 4,
		w: 'full',
	},

	flexBetween: {
		justify: 'space-between',
		align: 'center',
		w: 'full',
	},

	// User info display
	userInfoItem: {
		mb: 4,
		pb: 4,
		borderBottom: '1px solid',
		borderColor: 'gray.100',
		_last: {
			mb: 0,
			pb: 0,
			borderBottom: 'none',
		},
	},

	userInfoLabel: {
		fontSize: 'sm',
		color: 'gray.600',

		mb: 1,
	},

	userInfoValue: {
		fontSize: 'sm',
		fontWeight: '500',
		color: 'gray.900',
	},

	// Empty state
	emptyState: {
		textAlign: 'center' as const,
		py: 12,
	},

	emptyStateIcon: {
		w: '64px',
		h: '64px',
		color: 'gray.400',
		mx: 'auto',
		mb: 4,
	},

	emptyStateText: {
		fontSize: 'lg',
		color: 'gray.600',

		mb: 2,
	},

	emptyStateSubtext: {
		fontSize: 'sm',
		color: 'gray.500',
	},
};
