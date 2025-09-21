'use client';
import React, { FC, useState } from 'react';
import PageLayout from '../Layout/PageLayout';
import { Grid, Box, Text, HStack } from '@chakra-ui/react';
import GridLeftPart from './GridLeftPart';
import GridRightPart from './GridRightPartNew';
import { products } from '../data/productData';
import ProductSection from '../HomePage/ProductSection';
import AdditionalInfo from './AdditionalInfo';
import CustomContainer from '../reusable/Container';
import TabSection from './TabSectionNew';
import { useParams } from 'next/navigation';

const ProductPageComponent: FC = () => {
	const params = useParams();

	const product: any = products.find(product => product.id === Number(params.id));

	const [selectedImage, setSelectedImage] = useState(product.images[0]);
	const [selectedSize, setSelectedSize] = useState('M');

	return (
		<PageLayout>
			<CustomContainer pt={6}>
				{/* Breadcrumb Navigation */}
				<Box
					py={4}
					pt={0}>
					<HStack
						gap={2}
						fontSize='xs'
						color='gray.600'
						fontFamily='"Zalando Sans Expanded", sans-serif'>
						<Text
							_hover={{ color: 'black' }}
							cursor='pointer'>
							Home
						</Text>
						<Text>/</Text>
						<Text
							_hover={{ color: 'black' }}
							cursor='pointer'>
							Products
						</Text>
						<Text>/</Text>
						<Text
							color='black'
							fontWeight='500'>
							{product.name}
						</Text>
					</HStack>
				</Box>

				{/* Main Product Grid */}
				<Grid
					templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
					gap={{ base: 4, lg: 8 }}
					py={4}
					mb={8}>
					<GridLeftPart
						product={product}
						selectedImage={selectedImage}
						setSelectedImage={setSelectedImage}
					/>

					<GridRightPart
						product={product}
						selectedSize={selectedSize}
						setSelectedSize={setSelectedSize}
					/>
				</Grid>

				{/* Product Details Tabs */}
				<TabSection product={product} />
			</CustomContainer>

			{/* Related Products Section */}
			<Box
				bg='gray.100'
				py={8}>
				<ProductSection
					title='Related Products'
					products={products.slice(0, 4)}
				/>
			</Box>

			{/* Additional Info */}
			<AdditionalInfo />
		</PageLayout>
	);
};

export default ProductPageComponent;
