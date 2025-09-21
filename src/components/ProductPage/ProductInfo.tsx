'use client';
import React from 'react';
import { Box, Text, Heading, HStack, Badge } from '@chakra-ui/react';

interface ProductInfoProps {
	product: any;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
	const discountPercentage = product.oldPrice
		? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
		: 0;

	return (
		<Box>
			{/* Brand */}
			{product.brand && (
				<Text
					fontSize='xs'
					color='gray.600'
					textTransform='uppercase'
					letterSpacing='wider'
					fontWeight='500'
					fontFamily='"Zalando Sans Expanded", sans-serif'
					mb={2}>
					{product.brand}
				</Text>
			)}

			{/* Product Title */}
			<Heading
				size='lg'
				fontFamily='"Zalando Sans Expanded", sans-serif'
				fontWeight='500'
				lineHeight='1.3'
				color='gray.900'
				mb={3}>
				{product.name}
			</Heading>

			{/* Price */}
			<HStack
				gap={3}
				mb={4}>
				<Text
					fontSize='xl'
					fontWeight='600'
					color='black'
					fontFamily='"Zalando Sans Expanded", sans-serif'>
					৳ {product.price.toLocaleString()}
				</Text>
				{product.oldPrice && (
					<>
						<Text
							fontSize='lg'
							color='gray.400'
							textDecoration='line-through'
							fontFamily='"Zalando Sans Expanded", sans-serif'>
							৳ {product.oldPrice.toLocaleString()}
						</Text>
						{discountPercentage > 0 && (
							<Badge
								bg='red.500'
								color='white'
								fontSize='xs'
								px={2}
								py={1}
								borderRadius='none'>
								-{discountPercentage}%
							</Badge>
						)}
					</>
				)}
			</HStack>

			{/* Short Description */}
			{product.shortDescription && (
				<Text
					fontSize='sm'
					color='gray.600'
					lineHeight='1.5'
					fontFamily='"Zalando Sans Expanded", sans-serif'
					mb={3}>
					{product.shortDescription}
				</Text>
			)}

			{/* Product Details */}
			<Box mb={4}>
				{/* SKU */}
				{product.sku && (
					<Text
						fontSize='xs'
						color='gray.500'
						fontFamily='"Zalando Sans Expanded", sans-serif'
						mb={1}>
						<Text
							as='span'
							fontWeight='500'>
							SKU:
						</Text>{' '}
						{product.sku}
					</Text>
				)}

				{/* Stock Status */}
				<Text
					fontSize='xs'
					color={product.inStock ? 'green.600' : 'red.600'}
					fontFamily='"Zalando Sans Expanded", sans-serif'
					fontWeight='500'
					textTransform='uppercase'
					letterSpacing='0.5px'>
					{product.inStock !== false ? '✓ In Stock' : '✗ Out of Stock'}
				</Text>
			</Box>

			{/* Short Product Description */}
			<Box mb={4}>
				<Text
					fontSize='sm'
					color='gray.700'
					lineHeight='1.6'
					fontFamily='"Zalando Sans Expanded", sans-serif'>
					Premium quality materials with exceptional comfort and durability.
					<br />
					Perfect for everyday wear with a modern, sophisticated design.
					<br />
					Available in multiple sizes to ensure the perfect fit for everyone.
				</Text>
			</Box>

			{/* Description */}
			{product.description && (
				<Text
					fontSize='sm'
					color='gray.700'
					lineHeight='1.6'
					fontFamily='"Zalando Sans Expanded", sans-serif'>
					{product.description}
				</Text>
			)}
		</Box>
	);
};

export default ProductInfo;
