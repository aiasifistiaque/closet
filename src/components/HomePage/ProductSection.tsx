'use client';
import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import ProductCard from '../reusable/ProductCard';
import SectionHeader2 from '../reusable/SectionHeader2';
import CustomContainer from '../reusable/Container';
import { DetailedProduct } from '../data/productData';

interface ProductSectionProps {
	title: string;
	products: DetailedProduct[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => {
	const visibleProducts = products.slice(0, 6);
	const loopedProducts = [...visibleProducts, ...visibleProducts]; // duplicate for looping

	const sliderRef = useRef<HTMLDivElement>(null);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prev => (prev + 1) % visibleProducts.length);
		}, 3000); // every 3 seconds -> next card

		return () => clearInterval(interval);
	}, [visibleProducts.length]);

	useEffect(() => {
		if (sliderRef.current) {
			const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 0;
			const gap = 24; // Chakra gap={6} => 24px
			sliderRef.current.style.transform = `translateX(-${
				index * (cardWidth + gap)
			}px)`;
			sliderRef.current.style.transition = 'transform 0.6s ease-in-out';
		}
	}, [index]);

	return (
		<CustomContainer pb={10}>
			<SectionHeader2 title={title} />
			<Box overflow='hidden' w='100%'>
				<Flex ref={sliderRef} as='ul' listStyleType='none' gap={6}>
					{loopedProducts.map((product, idx) => (
						<Box as='li' key={idx} flex='0 0 auto'>
							<ProductCard product={product} />
						</Box>
					))}
				</Flex>
			</Box>
		</CustomContainer>
	);
};

export default ProductSection;
