'use client';
import { AspectRatio, Box, HStack, Image, Text, VStack, Badge, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';
import Link from 'next/link';
import { DetailedProduct } from '../data/productData';
import { useCart } from '../contexts/CartContext';
import { CartItem } from '../data/cartData';
import { toaster } from '../ui/toaster';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';

interface ModernProductCardProps {
	product: DetailedProduct;
}

const ModernProductCard: React.FC<ModernProductCardProps> = ({ product }) => {
	const { cart, addToCart } = useCart();
	const [isHovered, setIsHovered] = useState(false);
	const [isWishlisted, setIsWishlisted] = useState(false);

	const isInCart = cart.some(item => item.id === product.id && item.size === product.sizes[0]);

	const handleAddToCart = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();

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
			title: `${product.name} added to cart`,
			type: 'success',
		});
	};

	const handleWishlist = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setIsWishlisted(!isWishlisted);
		toaster.create({
			title: isWishlisted
				? `${product.name} removed from wishlist`
				: `${product.name} added to wishlist`,
			type: 'info',
		});
	};

	const discountPercentage = product.oldPrice
		? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
		: 0;

	return (
		<Box
			pb={4} // Padding bottom for spacing
			position='relative'
			bg='white'
			overflow='hidden'
			transition='all 0.3s ease'
			minH='480px' // Fixed minimum height for consistency
			w='full'
			maxW='320px' // Maximum width for 4 cards per row
			mx='auto' // Center the card
			cursor='pointer'
			border='none' // Remove border
			borderRadius='none' // Remove border radius
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<Link href={`/details/${product.id}`}>
				<Box
					position='relative'
					overflow='hidden'>
					{/* Discount Badge */}
					{discountPercentage > 0 && (
						<Badge
							position='absolute'
							top='12px'
							left='12px'
							bg='red.500'
							color='white'
							fontSize='xs'
							fontWeight='bold'
							px='8px'
							py='4px'
							borderRadius='md'
							zIndex='2'>
							-{discountPercentage}%
						</Badge>
					)}

					{/* New Badge */}
					{product.isNew && (
						<Badge
							position='absolute'
							top='12px'
							right='12px'
							bg='green.500'
							color='white'
							fontSize='xs'
							fontWeight='bold'
							px='8px'
							py='4px'
							borderRadius='md'
							zIndex='2'>
							NEW
						</Badge>
					)}

					{/* Product Image */}
					<AspectRatio
						ratio={4 / 5}
						w='full'
						minH='420px'>
						<Image
							src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
							alt={product.name}
							objectFit='cover'
							transition='all 0.4s ease'
							transform={isHovered ? 'scale(1.05)' : 'scale(1)'}
						/>
					</AspectRatio>

					{/* Hover Actions */}
					<Box
						position='absolute'
						top='50%'
						left='50%'
						transform='translate(-50%, -50%)'
						opacity={isHovered ? 1 : 0}
						transition='all 0.3s ease'
						zIndex='3'>
						<HStack gap='12px'>
							{/* Quick View */}
							<IconButton
								aria-label='Quick view'
								size='sm'
								bg='white'
								color='gray.700'
								borderRadius='full'
								boxShadow='md'
								_hover={{
									bg: 'gray.100',
									transform: 'scale(1.1)',
								}}
								transition='all 0.2s ease'
								onClick={e => {
									e.preventDefault();
									e.stopPropagation();
									// Add quick view logic here
								}}>
								<Eye size={18} />
							</IconButton>

							{/* Add to Cart */}
							<IconButton
								aria-label={isInCart ? 'In cart' : 'Add to cart'}
								size='sm'
								bg={isInCart ? 'green.500' : 'black'}
								color='white'
								borderRadius='full'
								boxShadow='md'
								_hover={{
									bg: isInCart ? 'green.600' : 'gray.800',
									transform: 'scale(1.1)',
								}}
								transition='all 0.2s ease'
								onClick={handleAddToCart}
								disabled={isInCart}>
								<ShoppingCart size={18} />
							</IconButton>

							{/* Wishlist */}
							<IconButton
								aria-label='Add to wishlist'
								size='sm'
								bg='white'
								color={isWishlisted ? 'red.500' : 'gray.700'}
								borderRadius='full'
								boxShadow='md'
								_hover={{
									bg: isWishlisted ? 'red.50' : 'gray.100',
									transform: 'scale(1.1)',
								}}
								transition='all 0.2s ease'
								onClick={handleWishlist}>
								<Heart
									size={18}
									fill={isWishlisted ? 'currentColor' : 'none'}
								/>
							</IconButton>
						</HStack>
					</Box>

					{/* Quick Add to Cart Button (Bottom) */}
					<Box
						position='absolute'
						bottom='0'
						left='0'
						right='0'
						bg='blackAlpha.800'
						color='white'
						py='12px'
						textAlign='center'
						fontSize='sm'
						fontWeight='medium'
						transform={isHovered ? 'translateY(0)' : 'translateY(100%)'}
						transition='all 0.3s ease'
						cursor='pointer'
						onClick={handleAddToCart}
						zIndex='2'
						_hover={{
							bg: 'blackAlpha.900',
						}}>
						{isInCart ? 'Already in Cart' : 'Quick Add to Cart'}
					</Box>
				</Box>
			</Link>

			{/* Product Info */}
			<VStack
				py='12px' // Reduced padding
				px='0' // Remove horizontal padding
				align='stretch'
				gap='8px' // Reduced spacing
				flex='1' // Take remaining space
			>
				{/* Brand */}
				{product.brand && (
					<Text
						fontSize='10px' // Smaller font size
						color='gray.500'
						textTransform='uppercase'
						letterSpacing='wider'
						fontWeight='600'
						className='ella-brand'>
						{product.brand}
					</Text>
				)}

				{/* Product Name */}
				<Text
					fontFamily='"Zalando Sans Expanded", sans-serif' // Updated font family
					fontSize='12px' // Smaller font size
					fontWeight='400' // Medium weight
					color='gray.800'
					lineHeight='1.4'
					overflow='hidden'
					textOverflow='ellipsis'
					display='-webkit-box'
					style={{
						WebkitLineClamp: 2,
						WebkitBoxOrient: 'vertical',
					}}
					_hover={{
						color: 'black',
					}}>
					{product.name}
				</Text>

				{/* Rating */}
				{product.rating && (
					<HStack
						gap='4px'
						align='center'>
						{[...Array(5)].map((_, i) => (
							<Star
								key={i}
								size={12}
								fill={i < Math.floor(product.rating!) ? '#FFD700' : 'none'}
								color={i < Math.floor(product.rating!) ? '#FFD700' : '#E2E8F0'}
							/>
						))}
						<Text
							fontSize='xs'
							color='gray.500'
							ml='4px'>
							({product.reviewCount || 0})
						</Text>
					</HStack>
				)}

				{/* Price */}
				<HStack
					gap='8px'
					align='center'>
					{/* Fixed height for price consistency */}
					<Text
						fontFamily='"Zalando Sans Expanded", sans-serif'
						fontSize='14px' // Smaller font size
						fontWeight='500'
						color='black'>
						৳ {product.price.toLocaleString()}
					</Text>
					{product.oldPrice && (
						<Text
							fontFamily='"Zalando Sans Expanded", sans-serif'
							fontSize='xs' // Smaller font size
							color='gray.400'
							textDecoration='line-through'
							fontWeight='medium'>
							৳ {product.oldPrice.toLocaleString()}
						</Text>
					)}
				</HStack>

				{/* Color Options */}
				{product.colors && product.colors.length > 1 && (
					<HStack
						gap='6px'
						mt='4px'>
						{product.colors.slice(0, 4).map((color, index) => (
							<Box
								key={index}
								w='16px'
								h='16px'
								borderRadius='full'
								bg={color.toLowerCase()}
								border='2px solid'
								borderColor='gray.200'
								cursor='pointer'
								_hover={{
									borderColor: 'gray.400',
									transform: 'scale(1.1)',
								}}
								transition='all 0.2s ease'
							/>
						))}
						{product.colors.length > 4 && (
							<Text
								fontSize='xs'
								color='gray.500'>
								+{product.colors.length - 4}
							</Text>
						)}
					</HStack>
				)}
			</VStack>
		</Box>
	);
};

export default ModernProductCard;
