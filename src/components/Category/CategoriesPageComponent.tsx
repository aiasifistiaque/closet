'use client';
import React, { FC, useState, useMemo } from 'react';
import PageLayout from '../Layout/PageLayout';
import { Box, Text, HStack, Flex, Grid } from '@chakra-ui/react';
import { ChevronDown, Grid3X3, List } from 'lucide-react';
import { categoriesData, CategoryItem } from './categoriesData';
import CategoryCard from './CategoryCard';
import { categoriesPageStyles } from './categoriesPageStyles';

type SortOption =
	| 'name-asc'
	| 'name-desc'
	| 'products-high'
	| 'products-low'
	| 'featured'
	| 'order';
type ViewMode = 'grid' | 'list';

const CategoriesPageComponent: FC = () => {
	const [sortBy, setSortBy] = useState<SortOption>('order');
	const [viewMode, setViewMode] = useState<ViewMode>('grid');

	// Sort categories based on selected option
	const sortedCategories = useMemo(() => {
		const categories = [...categoriesData];

		switch (sortBy) {
			case 'name-asc':
				return categories.sort((a, b) => a.name.localeCompare(b.name));
			case 'name-desc':
				return categories.sort((a, b) => b.name.localeCompare(a.name));
			case 'products-high':
				return categories.sort((a, b) => b.productCount - a.productCount);
			case 'products-low':
				return categories.sort((a, b) => a.productCount - b.productCount);
			case 'featured':
				return categories.sort((a, b) => {
					if (a.featured && !b.featured) return -1;
					if (!a.featured && b.featured) return 1;
					return a.order - b.order;
				});
			case 'order':
			default:
				return categories.sort((a, b) => a.order - b.order);
		}
	}, [sortBy]);

	const getSortLabel = (option: SortOption): string => {
		switch (option) {
			case 'name-asc':
				return 'Name: A-Z';
			case 'name-desc':
				return 'Name: Z-A';
			case 'products-high':
				return 'Most Products';
			case 'products-low':
				return 'Least Products';
			case 'featured':
				return 'Featured First';
			case 'order':
			default:
				return 'Default Order';
		}
	};

	return (
		<PageLayout>
			<Box {...categoriesPageStyles.pageContainer}>
				<Box {...categoriesPageStyles.contentContainer}>
					{/* Breadcrumb Navigation */}
					<Box {...categoriesPageStyles.breadcrumbContainer}>
						<HStack gap={2}>
							<Text {...categoriesPageStyles.breadcrumbText}>Home</Text>
							<Text color='gray.400'>/</Text>
							<Text {...categoriesPageStyles.breadcrumbCurrent}>Categories</Text>
						</HStack>
					</Box>

					{/* Header Section */}
					<Box {...categoriesPageStyles.headerContainer}>
						<Text {...categoriesPageStyles.pageTitle}>All Categories</Text>
						<Text {...categoriesPageStyles.pageSubtitle}>
							{`Explore our complete collection of carefully curated categories. Find exactly what
							you're looking for from our diverse range of premium products.`}
						</Text>
					</Box>

					{/* Controls Section */}
					<Flex {...categoriesPageStyles.controlsContainer}>
						{/* Results Count */}
						<Text {...categoriesPageStyles.resultsInfo}>
							Showing{' '}
							<Text
								as='span'
								{...categoriesPageStyles.resultCount}>
								{sortedCategories.length}
							</Text>{' '}
							categories
						</Text>

						<Flex
							gap={4}
							alignItems='center'>
							{/* View Toggle */}
							{/* <Box {...categoriesPageStyles.viewToggleContainer}>
								<Box
									as='button'
									{...categoriesPageStyles.viewToggleButton}
									{...(viewMode === 'grid'
										? categoriesPageStyles.viewToggleButtonActive
										: categoriesPageStyles.viewToggleButtonInactive)}
									onClick={() => setViewMode('grid')}>
									<Grid3X3 size={16} />
								</Box>
								<Box
									as='button'
									{...categoriesPageStyles.viewToggleButton}
									{...(viewMode === 'list'
										? categoriesPageStyles.viewToggleButtonActive
										: categoriesPageStyles.viewToggleButtonInactive)}
									onClick={() => setViewMode('list')}>
									<List size={16} />
								</Box>
							</Box> */}

							{/* Sort Dropdown */}
							<Box {...categoriesPageStyles.sortContainer}>
								<Flex
									align='center'
									gap={2}>
									<Text
										fontSize='sm'
										color='gray.600'>
										Sort by:
									</Text>
									<select
										value={sortBy}
										onChange={e => setSortBy(e.target.value as SortOption)}
										style={{
											background: 'transparent',
											border: 'none',

											fontSize: '14px',
											fontWeight: '500',
											color: 'black',
											cursor: 'pointer',
											minWidth: '140px',
										}}>
										<option value='order'>Default Order</option>
										<option value='name-asc'>Name: A-Z</option>
										<option value='name-desc'>Name: Z-A</option>
										<option value='products-high'>Most Products</option>
										<option value='products-low'>Least Products</option>
										<option value='featured'>Featured First</option>
									</select>
									<ChevronDown
										size={16}
										color='gray.600'
									/>
								</Flex>
							</Box>
						</Flex>
					</Flex>

					{/* Categories Grid */}
					<Grid
						{...categoriesPageStyles.categoriesGrid}
						{...(viewMode === 'list' && {
							templateColumns: '1fr',
							gap: 4,
						})}>
						{sortedCategories.map(category => (
							<CategoryCard
								key={category.id}
								category={category}
							/>
						))}
					</Grid>

					{/* Empty State */}
					{sortedCategories.length === 0 && (
						<Box {...categoriesPageStyles.emptyState}>
							<Text {...categoriesPageStyles.emptyStateTitle}>No categories found</Text>
							<Text {...categoriesPageStyles.emptyStateText}>
								Please try again later or contact support if this issue persists.
							</Text>
						</Box>
					)}
				</Box>
			</Box>
		</PageLayout>
	);
};

export default CategoriesPageComponent;
