// Categories page styling constants to match website design system
export const categoriesPageStyles = {
	// Main layout
	pageContainer: {
		bg: 'white',
		minH: '100vh',
	},

	contentContainer: {
		maxW: '1400px',
		mx: 'auto',
		px: { base: 4, md: 6, lg: 20 },
		py: { base: 4, md: 6 },
	},

	// Header section
	headerContainer: {
		mb: { base: 6, md: 8 },
	},

	pageTitle: {
		fontSize: { base: '3xl', md: '4xl', lg: '5xl' },
		fontWeight: '600',
		color: 'black',

		letterSpacing: '-0.025em',
		mb: 4,
	},

	pageSubtitle: {
		fontSize: { base: 'md', md: 'lg' },
		color: 'gray.600',

		mb: { base: 6, md: 8 },
	},

	// Breadcrumb navigation
	breadcrumbContainer: {
		py: 4,
		mb: { base: 4, md: 2 },
		pt: 2,
	},

	breadcrumbText: {
		fontSize: 'xs',
		color: 'gray.600',

		_hover: { color: 'black' },
		cursor: 'pointer',
	},

	breadcrumbCurrent: {
		fontSize: 'xs',
		color: 'black',
		fontWeight: '500',
	},

	// Sort and filter controls
	controlsContainer: {
		mb: { base: 6, md: 8 },
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'wrap' as const,
		gap: 4,
	},

	resultsInfo: {
		fontSize: 'sm',
		color: 'gray.600',
	},

	resultCount: {
		fontWeight: '500',
		color: 'black',
	},

	sortContainer: {
		bg: 'white',
		border: '1px solid',
		borderColor: 'gray.200',
		borderRadius: 'none',
		px: 4,
		py: 2.5,
		minW: '200px',
	},

	sortButton: {
		bg: 'transparent',
		border: 'none',

		fontWeight: '500',
		fontSize: 'sm',
		color: 'black',
		_hover: {
			bg: 'gray.50',
		},
	},

	// Categories grid
	categoriesGrid: {
		templateColumns: {
			base: 'repeat(2, 1fr)',
			md: 'repeat(3, 1fr)',
			lg: 'repeat(4, 1fr)',
			xl: 'repeat(5, 1fr)',
		},
		gap: { base: 4, md: 1 },
		w: 'full',
	},

	// Category card
	categoryCard: {
		bg: 'white',
		borderRadius: 'none',
		overflow: 'hidden',
		transition: 'all 0.2s ease-in-out',
		cursor: 'pointer',
	},

	categoryImageContainer: {
		position: 'relative' as const,
		w: 'full',
		h: { base: '150px', md: '300px' },
		overflow: 'hidden',
	},

	categoryImage: {
		w: 'full',
		h: 'full',
		objectFit: 'cover' as const,
		transition: 'transform 0.3s ease-in-out',
	},

	categoryImageOverlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		bg: 'blackAlpha.300',
		opacity: 0,
		transition: 'opacity 0.3s ease-in-out',
	},

	categoryContent: {
		py: { base: 3, md: 3 },
		px: 0,
		pr: 2,
	},

	categoryName: {
		fontSize: { base: 'sm', md: '14px' },
		fontWeight: '400',
		color: 'black',
		textTransform: 'uppercase',

		mb: 0,
		lineHeight: 'tight',
	},

	categoryDescription: {
		fontSize: { base: 'xs', md: '12px' },
		color: 'black',
		fontWeight: '300',

		mb: 2,
		letterSpacing: '1px',
		lineHeight: 'short',
	},

	categoryStats: {
		fontSize: 'xs',
		color: 'black',
	},

	// View toggle (grid/list)
	viewToggleContainer: {
		bg: 'white',
		border: '1px solid',
		borderColor: 'gray.200',
		borderRadius: 'md',
		p: 1,
		display: 'flex',
	},

	viewToggleButton: {
		px: 3,
		py: 2,
		fontSize: 'sm',
		bg: 'transparent',
		border: 'none',
		borderRadius: 'sm',
		cursor: 'pointer',
		transition: 'all 0.2s ease-in-out',
	},

	viewToggleButtonActive: {
		bg: 'black',
		color: 'white',
	},

	viewToggleButtonInactive: {
		color: 'gray.600',
		_hover: {
			bg: 'gray.50',
		},
	},

	// Empty state
	emptyState: {
		textAlign: 'center' as const,
		py: { base: 12, md: 16 },
	},

	emptyStateTitle: {
		fontSize: 'xl',
		fontWeight: '600',
		color: 'black',

		mb: 2,
	},

	emptyStateText: {
		fontSize: 'md',
		color: 'gray.600',
	},
};
