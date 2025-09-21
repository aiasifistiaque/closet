'use client';
import React, { FC, useState } from 'react';
import PageLayout from '../Layout/PageLayout';
import { useParams } from 'next/navigation';
import { Flex, Grid, Box, Text, HStack, Button } from '@chakra-ui/react';
import { Filter, ChevronDown } from 'lucide-react';
import { products } from '../data/productData';
import CategoryFilterSection from './CategoryFilterSection';
import ModernProductCard from '../reusable/ModernProductCard';
import AdditionalInfo from '../ProductPage/AdditionalInfo';
import { categoryStyles } from './categoryStyles';

type CategoryPageComponentProps = {};

const CategoryPageComponent: FC<CategoryPageComponentProps> = ({}) => {
	const { id } = useParams<any>();
	const [showMobileFilters, setShowMobileFilters] = useState(false);
	const [sortBy, setSortBy] = useState('featured');

	// Format category name for display
	const categoryName = id?.split('-').join(' ').toUpperCase() || 'ALL PRODUCTS';
	const categoryDisplayName =
		id
			?.split('-')
			.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ') || 'All Products';

	// Filter and sort logic
	const categories = [...new Set(products?.map(p => p.category))];
	const sizes = [...new Set(products?.flatMap(p => p.sizes))];
	const colors = products?.map(p => p.color);
	const prices = products.map(p => p.price);
	const minPrice = Math.min(...prices);
	const maxPrice = Math.max(...prices);
	const numberOfRanges = 5;
	const rangeSize = Math.ceil((maxPrice - minPrice) / numberOfRanges);
	const priceRanges = Array.from({ length: numberOfRanges }, (_, i) => {
		const start = minPrice + i * rangeSize;
		const end = i === numberOfRanges - 1 ? maxPrice : start + rangeSize - 1;
		return { min: start, max: end };
	});

	// Sort products
	const sortedProducts = [...products].sort((a, b) => {
		switch (sortBy) {
			case 'price-low':
				return a.price - b.price;
			case 'price-high':
				return b.price - a.price;
			case 'name-az':
				return a.name.localeCompare(b.name);
			case 'name-za':
				return b.name.localeCompare(a.name);
			default:
				return 0;
		}
	});

	return (
		<PageLayout>
			<Box {...categoryStyles.pageContainer}>
				<Box {...categoryStyles.contentContainer}>
					{/* Breadcrumb Navigation */}
					<Box {...categoryStyles.breadcrumbContainer}>
						<HStack gap={2}>
							<Text {...categoryStyles.breadcrumbText}>Home</Text>
							<Text color='gray.400'>/</Text>
							<Text {...categoryStyles.breadcrumbText}>Categories</Text>
							<Text color='gray.400'>/</Text>
							<Text {...categoryStyles.breadcrumbCurrent}>{categoryDisplayName}</Text>
						</HStack>
					</Box>

					{/* Header Section */}
					<Box {...categoryStyles.headerContainer}>
						<Text {...categoryStyles.categoryTitle}>{categoryName}</Text>
						<Text {...categoryStyles.categorySubtitle}>
							Discover our curated collection of {categoryDisplayName.toLowerCase()} items
						</Text>

						{/* Filter and Sort Controls */}
						<Flex
							{...categoryStyles.filterSortContainer}
							justify='space-between'
							align='center'
							wrap='wrap'
							gap={4}>
							{/* Mobile Filter Button */}
							<Button
								{...categoryStyles.filterButton}
								display={{ base: 'flex', lg: 'none' }}
								onClick={() => setShowMobileFilters(true)}>
								<Filter size={16} />
								<Text ml={2}>Filters</Text>
							</Button>

							{/* Results Count */}
							<Box
								{...categoryStyles.resultsInfo}
								flex={1}>
								<Text {...categoryStyles.resultsText}>
									Showing{' '}
									<Text
										as='span'
										{...categoryStyles.resultCount}>
										{sortedProducts.length}
									</Text>{' '}
									products
								</Text>
							</Box>

							{/* Sort Dropdown */}
							<Box {...categoryStyles.sortContainer}>
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
										onChange={e => setSortBy(e.target.value)}
										style={{
											background: 'transparent',
											border: 'none',
											fontFamily: '"Zalando Sans Expanded", sans-serif',
											fontSize: '14px',
											fontWeight: '500',
											color: 'black',
											cursor: 'pointer',
										}}>
										<option value='featured'>Featured</option>
										<option value='price-low'>Price: Low to High</option>
										<option value='price-high'>Price: High to Low</option>
										<option value='name-az'>Name: A-Z</option>
										<option value='name-za'>Name: Z-A</option>
									</select>
									<ChevronDown
										size={16}
										color='gray.600'
									/>
								</Flex>
							</Box>
						</Flex>
					</Box>

					{/* Main Content Grid */}
					<Grid
						templateColumns={{ base: '1fr', lg: '280px 1fr' }}
						gap={8}>
						{/* Filter Sidebar - Desktop */}
						<Box {...categoryStyles.filterSidebar}>
							<CategoryFilterSection
								categories={categories}
								colors={colors}
								sizes={sizes}
								priceRanges={priceRanges}
							/>
						</Box>

						{/* Product Grid */}
						<Box {...categoryStyles.productGridContainer}>
							<Grid {...categoryStyles.productGrid}>
								{sortedProducts?.map((product, index) => (
									<ModernProductCard
										product={product}
										key={product.id || index}
									/>
								))}
							</Grid>

							{/* Empty State */}
							{sortedProducts.length === 0 && (
								<Box {...categoryStyles.emptyState}>
									<Text {...categoryStyles.emptyStateTitle}>No products found</Text>
									<Text {...categoryStyles.emptyStateText}>
										Try adjusting your filters or search criteria
									</Text>
								</Box>
							)}
						</Box>
					</Grid>

					{/* Mobile Filter Overlay */}
					{showMobileFilters && (
						<Box
							{...categoryStyles.mobileFilterOverlay}
							onClick={() => setShowMobileFilters(false)}>
							<Box
								{...categoryStyles.mobileFilterPanel}
								onClick={e => e.stopPropagation()}>
								<Flex
									justify='space-between'
									align='center'
									mb={6}>
									<Text
										fontSize='lg'
										fontWeight='600'>
										Filters
									</Text>
									<Button
										variant='ghost'
										size='sm'
										onClick={() => setShowMobileFilters(false)}>
										✕
									</Button>
								</Flex>
								<CategoryFilterSection
									categories={categories}
									colors={colors}
									sizes={sizes}
									priceRanges={priceRanges}
								/>
							</Box>
						</Box>
					)}
				</Box>
			</Box>

			{/* Additional Info Section */}
			<AdditionalInfo />
		</PageLayout>
	);
};

export default CategoryPageComponent;
