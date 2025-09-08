'use client';
import { AspectRatio, Box, Grid, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import Link from 'next/link';
import BuyNowDialog from '../Cart/BuyNowDialog';
import { DetailedProduct } from '../data/productData';
import { useCart } from '../contexts/CartContext';
import { CartItem } from '../data/cartData';
import { toaster } from '../ui/toaster';
import { colors } from '../data/color';

interface ProductCardProps {
	product: DetailedProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const { cart, addToCart } = useCart();
	const [isHovered, setIsHovered] = useState(false);

	const isInCart = cart.some(
		item => item.id === product.id && item.size === product.sizes[0]
	);

	const handleAddToCart = () => {
		const cartItem: CartItem = {
			id: product.id,
			title: product.name,
			price: product.price,
			oldPrice: product.oldPrice,
			discount: product.discount,
			color: product.color,
			size: product.sizes[0],
			quantity: 1,
			image: product.images[0],
		};
		addToCart(cartItem);
		toaster.create({
			title: `${product.name} has been added to your cart`,
			type: 'success',
		});
	};
	return (
		<Box
			overflow='hidden'
			bg={colors.cardBg}
			border='1px solid'
			borderColor='gray.100'
			borderRadius={'md'}
		>
			<Link href={`/details/${product.id}`}>
				<Box position='relative' w='full'>
					{/* 3:4 ratio wrapper */}
					<AspectRatio
						ratio={3 / 4}
						w='full'
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						<Image
							src={
								isHovered && product.images[1]
									? product.images[1]
									: product.images[0]
							}
							alt={product.name}
							objectFit='cover'
							transition='opacity 0.4s ease-in-out, transform 0.3s ease'
							opacity={isHovered && product.images[1] ? 0.9 : 1}
						/>
					</AspectRatio>

					{/* Logo overlay */}
					{/* <Image
						src='/ddong-logo.png'
						alt='logo'
						position='absolute'
						top={0}
						left={0}
						bgColor='white'
						objectFit='contain'
						h='30px'
						p={1}
					/> */}
				</Box>
			</Link>

			<VStack p={4} align='stretch' textAlign='center' gap={2}>
				<Text
					fontSize='lg'
					fontWeight='medium'
					overflow='hidden'
					textOverflow='ellipsis'
					display='-webkit-box'
					style={{
						WebkitLineClamp: 1,
						WebkitBoxOrient: 'vertical',
					}}
				>
					{product.name}
				</Text>

				<HStack justify='center' gap={2}>
					<Text fontSize='lg' fontWeight='bold' color='red.500'>
						৳{product.price}
					</Text>
					{product.oldPrice && (
						<Text fontSize='sm' color='gray.500' textDecoration='line-through'>
							৳{product.oldPrice}
						</Text>
					)}
				</HStack>

				<Grid templateColumns={'1fr 1fr'} gap={3}>
					<BuyNowDialog product={product} />
					<PrimaryButton
						variant='outline'
						bgColor='#e4e7ee'
						onClick={handleAddToCart}
						disabled={isInCart}
					>
						{isInCart ? 'In Cart' : 'Add to Cart'}
					</PrimaryButton>
				</Grid>
			</VStack>
		</Box>
	);
};

export default ProductCard;
