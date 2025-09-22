'use client';
import { Box, Flex, Grid, Text, Button } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import ModernProductCard from '../reusable/ModernProductCard';
import SectionHeader2 from '../reusable/SectionHeader2';
import CustomContainer from '../reusable/Container';
import { DetailedProduct } from '../data/productData';
import Link from 'next/link';

interface ProductSectionProps {
	title: string;
	products: DetailedProduct[];
	viewAllLink?: string;
	layout?: 'carousel' | 'grid';
	subtitle?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({
	title,
	products,
	viewAllLink,
	layout = 'grid',
	subtitle,
}) => {
	const visibleProducts = products.slice(0, layout === 'grid' ? 8 : 6);
	const loopedProducts = [...visibleProducts, ...visibleProducts]; // duplicate for looping

	const sliderRef = useRef<HTMLDivElement>(null);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (layout === 'carousel') {
			const interval = setInterval(() => {
				setIndex(prev => (prev + 1) % visibleProducts.length);
			}, 3000); // every 3 seconds -> next card

			return () => clearInterval(interval);
		}
	}, [visibleProducts.length, layout]);

	useEffect(() => {
		if (layout === 'carousel' && sliderRef.current) {
			const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 0;
			const gap = 16; // Chakra gap={6} => 24px
			sliderRef.current.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
			sliderRef.current.style.transition = 'transform 0.6s ease-in-out';
		}
	}, [index, layout]);

	if (layout === 'grid') {
		return (
			<CustomContainer py={12}>
				{/* Section Header */}
				<Flex
					justify='space-between'
					align='center'
					textAlign={{ base: 'center', md: 'left' }}
					mb={8}
					direction={{ base: 'column', md: 'row' }}
					gap={4}>
					<Box>
						<Text
							textAlign={{ base: 'center', md: 'left' }}
							fontSize={{ base: '2xl', md: '3xl' }}
							fontWeight='600'
							color='black'
							mb={2}>
							{title}
						</Text>
						{subtitle && (
							<Text
								textAlign={{ base: 'center', md: 'left' }}
								fontSize='sm'
								letterSpacing='.5px'
								color='gray.600'>
								{subtitle}
							</Text>
						)}
					</Box>

					{viewAllLink && (
						<Link href={viewAllLink}>
							<Button
								variant='outline'
								borderColor='black'
								color='black'
								size='sm'
								fontWeight='300'
								fontSize='12px'
								letterSpacing='1px'
								borderRadius='none'
								_hover={{
									bg: 'black',
									color: 'white',
								}}>
								VIEW ALL
							</Button>
						</Link>
					)}
				</Flex>

				{/* Product Grid */}
				<Grid
					templateColumns={{
						base: 'repeat(2, 1fr)',
						md: 'repeat(3, 1fr)',
						lg: 'repeat(4, 1fr)',
					}}
					gap={1}>
					{visibleProducts.map((product, idx) => (
						<ModernProductCard
							key={`${product.id}-${idx}`}
							product={product}
						/>
					))}
				</Grid>
			</CustomContainer>
		);
	}

	// Carousel layout (original)
	return (
		<CustomContainer pb={10}>
			<SectionHeader2 title={title} />
			<Box
				overflow='hidden'
				w='100%'>
				<Flex
					ref={sliderRef}
					as='ul'
					listStyleType='none'
					gap={4}>
					{loopedProducts.map((product, idx) => (
						<Box
							as='li'
							key={idx}
							flex='0 0 auto'
							w='280px' // Fixed width for consistency
							minH='480px' // Fixed height for consistency
						>
							<ModernProductCard product={product} />
						</Box>
					))}
				</Flex>
			</Box>
		</CustomContainer>
	);
};

export default ProductSection;
