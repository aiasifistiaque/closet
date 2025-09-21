// Order Success page styling constants
export const orderSuccessStyles = {
	// Layout styles
	pageContainer: {
		minH: '100vh',
		bg: 'gray.50',
		py: { base: 8, md: 12 },
		px: { base: 4, md: 8 },
	},

	mainContainer: {
		maxW: '600px',
		mx: 'auto',
		bg: 'white',
		borderRadius: 'lg',
		border: '1px solid',
		borderColor: 'gray.200',
		p: { base: 6, md: 8 },
		boxShadow: 'lg',
		textAlign: 'center' as const,
	},

	// Icon and visual styles
	successIcon: {
		w: { base: '80px', md: '100px' },
		h: { base: '80px', md: '100px' },
		color: 'green.500',
		mx: 'auto',
		mb: 6,
	},

	orderImage: {
		w: '60px',
		h: '60px',
		borderRadius: 'md',
		objectFit: 'cover' as const,
		border: '2px solid',
		borderColor: 'gray.200',
	},

	// Typography styles
	mainHeading: {
		fontSize: { base: '2xl', md: '3xl' },
		fontWeight: '600',
		color: 'gray.900',
		fontFamily: '"Zalando Sans Expanded", sans-serif',
		mb: 2,
	},

	subHeading: {
		fontSize: { base: 'lg', md: 'xl' },
		fontWeight: '500',
		color: 'gray.700',
		fontFamily: '"Zalando Sans Expanded", sans-serif',
		mb: 6,
	},

	orderNumber: {
		fontSize: 'lg',
		fontWeight: '600',
		color: 'blue.600',
		fontFamily: '"Zalando Sans Expanded", sans-serif',
	},

	infoText: {
		fontSize: 'sm',
		color: 'gray.600',
		fontFamily: '"Zalando Sans Expanded", sans-serif',
		lineHeight: '1.6',
	},

	sectionHeading: {
		fontSize: 'lg',
		fontWeight: '600',
		color: 'gray.900',
		fontFamily: '"Zalando Sans Expanded", sans-serif',
		mb: 4,
	},

	// Card and section styles
	infoCard: {
		bg: 'gray.50',
		border: '1px solid',
		borderColor: 'gray.200',
		borderRadius: 'md',
		p: 4,
		mb: 6,
	},

	orderSummaryCard: {
		border: '1px solid',
		borderColor: 'gray.200',
		borderRadius: 'md',
		p: 4,
		mb: 6,
		bg: 'white',
	},

	// Button styles
	primaryButton: {
		w: 'full',
		h: '48px',
		bg: 'black',
		color: 'white',
		borderRadius: 'md',
		fontFamily: '"Zalando Sans Expanded", sans-serif',
		fontWeight: '500',
		fontSize: 'sm',
		_hover: { bg: 'gray.800' },
		mb: 3,
	},

	secondaryButton: {
		w: 'full',
		h: '44px',
		border: '1px solid',
		borderColor: 'gray.300',
		bg: 'white',
		color: 'gray.700',
		borderRadius: 'md',
		fontFamily: '"Zalando Sans Expanded", sans-serif',
		fontWeight: '500',
		fontSize: 'sm',
		_hover: { bg: 'gray.50', borderColor: 'gray.400' },
	},

	// Layout helpers
	stackContainer: {
		gap: 6,
		w: 'full',
	},

	flexBetween: {
		justify: 'space-between',
		align: 'center',
		w: 'full',
	},

	productRow: {
		gap: 3,
		align: 'center',
		mb: 3,
	},

	// Timeline styles
	timelineContainer: {
		position: 'relative' as const,
		pl: 6,
	},

	timelineItem: {
		position: 'relative' as const,
		pb: 4,
		_last: { pb: 0 },
	},

	timelineDot: {
		position: 'absolute' as const,
		left: '-12px',
		top: '2px',
		w: '12px',
		h: '12px',
		borderRadius: 'full',
		border: '2px solid',
		borderColor: 'green.500',
		bg: 'white',
	},

	timelineLine: {
		position: 'absolute' as const,
		left: '-6px',
		top: '14px',
		bottom: '-16px',
		w: '1px',
		bg: 'gray.300',
	},

	// Badge styles
	statusBadge: {
		px: 3,
		py: 1,
		bg: 'green.100',
		color: 'green.800',
		borderRadius: 'full',
		fontSize: 'xs',
		fontWeight: '600',
		fontFamily: '"Zalando Sans Expanded", sans-serif',
	},
};
