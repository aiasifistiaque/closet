'use client';
import React, { FC } from 'react';
import PageLayout from '../Layout/PageLayout';
import { useParams } from 'next/navigation';
import HeaderGrid from './HeaderGrid';
import { Flex, Grid, Box } from '@chakra-ui/react';
import { products } from '../data/productData';
import CategoryFilterSection from './CategoryFilterSection';
import ProductCard from '../reusable/ProductCard';
import ProductCardV2 from '../reusable/ProductCardV2';
import AdditionalInfo from '../ProductPage/AdditionalInfo';
import Link from 'next/link';

type CategoryPageComponentProps = {};

const CategoryPageComponent: FC<CategoryPageComponentProps> = ({}) => {
	const { id } = useParams<any>();
	const categoryName = id?.split('-').join(' ').toUpperCase();

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

	return (
		<PageLayout>
			<Flex direction={'column'} w={'full'} gap={4} px={{ base: 4, md: 12 }}>
				<HeaderGrid categoryName={categoryName} />

				<Grid
					pb={4}
					templateColumns={{ base: '1fr', md: '300px 1fr' }}
					gap={4}
					// h='calc(100vh - 120px)'
				>
					{/* Filter Section */}
					<Box
						position='sticky'
						top={'152px'}
						h='fit-content'
						maxH='100%'
						overflowY='auto'
						display={{ base: 'none', md: 'block' }}
					>
						<CategoryFilterSection
							categories={categories}
							colors={colors}
							sizes={sizes}
							priceRanges={priceRanges}
						/>
					</Box>

					{/* Product Section */}
					<Box overflowY='auto' h='100%'>
						<Grid
							templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
							gap={4}
							w='full'
						>
							{products?.map((product, index) => (
								// <Link href={`/details/${product.id}`} key={index}>
									<ProductCard product={product} key={index} />
								// </Link>
							))}
						</Grid>
					</Box>
				</Grid>
			</Flex>

			<AdditionalInfo />
		</PageLayout>
	);
};

export default CategoryPageComponent;
