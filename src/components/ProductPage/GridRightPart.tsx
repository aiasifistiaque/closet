'use client';
import { GridItem, VStack, Box } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { CartItem } from '../data/cartData';
import { toaster } from '../ui/toaster';
import ProductInfo from './ProductInfo';
import QuantitySelector from './QuantitySelector';
import ProductActions from './ProductActions';

type GridRightPartProps = {
	product: any;
	selectedSize: any;
	setSelectedSize: any;
};

const GridRightPart: FC<GridRightPartProps> = ({ product, selectedSize, setSelectedSize }) => {
	const { cart, addToCart } = useCart();
	const [isWishlisted, setIsWishlisted] = useState(false);
	const [quantity, setQuantity] = useState(1);

	const isInCart = cart.some(item => item.id === product.id && item.size === selectedSize);

	const handleAddToCart = () => {
		const cartItem: CartItem = {
			id: product.id,
			title: product.name,
			price: product.price,
			oldPrice: product.oldPrice,
			discount: product.discount,
			color: product.color,
			size: selectedSize,
			quantity: quantity,
			image: product.images[0],
		};
		addToCart(cartItem);
		toaster.create({
			title: `${product.name} added to cart`,
			type: 'success',
		});
	};

	const handleWishlist = () => {
		setIsWishlisted(!isWishlisted);
		toaster.create({
			title: isWishlisted
				? `${product.name} removed from wishlist`
				: `${product.name} added to wishlist`,
			type: 'info',
		});
	};

	const handleShare = () => {
		if (navigator.share) {
			navigator.share({
				title: product.name,
				text: `Check out this product: ${product.name}`,
				url: window.location.href,
			});
		} else {
			navigator.clipboard.writeText(window.location.href);
			toaster.create({
				title: 'Link copied to clipboard',
				type: 'success',
			});
		}
	};

	return (
		<GridItem>
			<VStack
				align='stretch'
				gap={6}
				py={2}>
				{/* Product Information */}
				<ProductInfo product={product} />

				{/* Spacing */}
				<Box
					h='1px'
					bg='gray.200'
				/>

				{/* Quantity Selector */}
				<QuantitySelector
					quantity={quantity}
					onQuantityChange={setQuantity}
				/>

				{/* Action Buttons */}
				<ProductActions
					onAddToCart={handleAddToCart}
					onWishlist={handleWishlist}
					onShare={handleShare}
					isInCart={isInCart}
					isWishlisted={isWishlisted}
				/>
			</VStack>
		</GridItem>
	);
};

// export default GridRightPart;
// 				? `${product.name} removed from wishlist`
// 				: `${product.name} added to wishlist`,
// 			type: 'info',
// 		});
// 	};

// 	const handleShare = () => {
// 		if (navigator.share) {
// 			navigator.share({
// 				title: product.name,
// 				text: `Check out this product: ${product.name}`,
// 				url: window.location.href,
// 			});
// 		} else {
// 			navigator.clipboard.writeText(window.location.href);
// 			toaster.create({
// 				title: 'Link copied to clipboard',
// 				type: 'success',
// 			});
// 		}
// 	};

// 	return (
// 		<GridItem>
// 			<VStack
// 				align='stretch'
// 				gap={6}
// 				py={2}>

// 				{/* Product Information */}
// 				<ProductInfo product={product} />

// 				{/* Spacing */}
// 				<Box h="1px" bg="gray.200" />

// 				{/* Quantity Selector */}
// 				<QuantitySelector
// 					quantity={quantity}
// 					onQuantityChange={setQuantity}
// 				/>

// 				{/* Action Buttons */}
// 				<ProductActions
// 					onAddToCart={handleAddToCart}
// 					onWishlist={handleWishlist}
// 					onShare={handleShare}
// 					isInCart={isInCart}
// 					isWishlisted={isWishlisted}
// 				/>

// 			</VStack>
// 		</GridItem>
// 	);
// };

// export default GridRightPart;
// 						{[1, 2, 3, 4, 5].map(i =>
// 							i <= 4 ? (
// 								<AiFillStar
// 									key={i}
// 									color='#FFD700'
// 									size={18}
// 								/>
// 							) : (
// 								<AiOutlineStar
// 									key={i}
// 									color='#E2E8F0'
// 									size={18}
// 								/>
// 							)
// 						)}
// 					</HStack>
// 					<Text
// 						fontSize='sm'
// 						color='gray.500'
// 						>
// 						4.0 (127 reviews)
// 					</Text>
// 				</HStack>

// 				{/* Price */}
// 				<HStack
// 					gap={3}
// 					align='center'>
// 					<Text
// 						fontSize='3xl'
// 						fontWeight='600'
// 						color='black'
// 						>
// 						৳ {product.price.toLocaleString()}
// 					</Text>
// 					{product.oldPrice && (
// 						<Text
// 							as='s'
// 							color='gray.400'
// 							fontSize='xl'
// 							>
// 							৳ {product.oldPrice.toLocaleString()}
// 						</Text>
// 					)}
// 					{discountPercentage > 0 && (
// 						<Badge
// 							colorScheme='red'
// 							fontSize='sm'
// 							px={2}
// 							py={1}>
// 							-{discountPercentage}% OFF
// 						</Badge>
// 					)}
// 				</HStack>

// 				<Box
// 					h='1px'
// 					bg='gray.200'
// 					my={6}
// 				/>

// 				{/* Color Selection */}
// 				<VStack
// 					align='stretch'
// 					gap={3}>
// 					<Text
// 						fontWeight='500'
// 						fontSize='sm'
//
// 						textTransform='uppercase'
// 						letterSpacing='0.5px'>
// 						Color:{' '}
// 						<Text
// 							as='span'
// 							fontWeight='400'>
// 							{product.color}
// 						</Text>
// 					</Text>
// 					{product.colors && (
// 						<HStack gap={3}>
// 							{product.colors.slice(0, 5).map((color: string, index: number) => (
// 								<Box
// 									key={index}
// 									w='40px'
// 									h='40px'
// 									borderRadius='md'
// 									bg={color.toLowerCase()}
// 									border='2px solid'
// 									borderColor={color === product.color ? 'black' : 'gray.200'}
// 									cursor='pointer'
// 									transition='all 0.2s ease'
// 									_hover={{
// 										borderColor: 'black',
// 										transform: 'scale(1.05)',
// 									}}
// 								/>
// 							))}
// 						</HStack>
// 					)}
// 				</VStack>

// 				{/* Size Selection */}
// 				<VStack
// 					align='stretch'
// 					gap={3}>
// 					<HStack justify='space-between'>
// 						<Text
// 							fontWeight='500'
// 							fontSize='sm'
//
// 							textTransform='uppercase'
// 							letterSpacing='0.5px'>
// 							Size:{' '}
// 							<Text
// 								as='span'
// 								fontWeight='400'>
// 								{selectedSize}
// 							</Text>
// 						</Text>
// 						<SizeGuideModal product={product} />
// 					</HStack>
// 					<HStack
// 						gap={2}
// 						flexWrap='wrap'>
// 						{product?.sizes?.map((size: any) => (
// 							<Button
// 								key={size}
// 								size='lg'
// 								variant={selectedSize === size ? 'solid' : 'outline'}
// 								colorScheme={selectedSize === size ? 'blackAlpha' : 'gray'}
// 								onClick={() => setSelectedSize(size)}
// 								minW='50px'
// 								h='50px'
// 								borderRadius='md'
//
// 								fontSize='sm'
// 								fontWeight='500'
// 								border='1px solid'
// 								borderColor={selectedSize === size ? 'black' : 'gray.300'}
// 								bg={selectedSize === size ? 'black' : 'white'}
// 								color={selectedSize === size ? 'white' : 'black'}
// 								_hover={{
// 									borderColor: 'black',
// 									bg: selectedSize === size ? 'gray.800' : 'gray.50',
// 								}}>
// 								{size}
// 							</Button>
// 						))}
// 					</HStack>
// 				</VStack>

// 				{/* Quantity */}
// 				<VStack
// 					align='stretch'
// 					gap={3}>
// 					<Text
// 						fontWeight='500'
// 						fontSize='sm'
//
// 						textTransform='uppercase'
// 						letterSpacing='0.5px'>
// 						Quantity
// 					</Text>
// 					<HStack>
// 						<Button
// 							size='md'
// 							variant='outline'
// 							onClick={() => setQuantity(Math.max(1, quantity - 1))}
// 							borderColor='gray.300'
// 							_hover={{ borderColor: 'black' }}>
// 							-
// 						</Button>
// 						<Text
// 							px={4}
// 							py={2}
// 							minW='60px'
// 							textAlign='center'
//
// 							fontWeight='500'>
// 							{quantity}
// 						</Text>
// 						<Button
// 							size='md'
// 							variant='outline'
// 							onClick={() => setQuantity(quantity + 1)}
// 							borderColor='gray.300'
// 							_hover={{ borderColor: 'black' }}>
// 							+
// 						</Button>
// 					</HStack>
// 				</VStack>

// 				<Box
// 					h='1px'
// 					bg='gray.200'
// 					my={6}
// 				/>

// 				{/* Action Buttons */}
// 				<VStack
// 					gap={3}
// 					align='stretch'>
// 					<Button
// 						size='lg'
// 						bg='black'
// 						color='white'
// 						onClick={handleAddToCart}
// 						disabled={isInCart}
// 						h='56px'
//
// 						fontWeight='500'
// 						fontSize='sm'
// 						textTransform='uppercase'
// 						letterSpacing='1px'
// 						_hover={{
// 							bg: 'gray.800',
// 						}}
// 						_disabled={{
// 							bg: 'gray.400',
// 							cursor: 'not-allowed',
// 						}}>
// 						{isInCart ? 'Added to Cart' : 'Add to Cart'}
// 					</Button>

// 					<HStack gap={3}>
// 						<Button
// 							flex={1}
// 							size='lg'
// 							variant='outline'
// 							borderColor='black'
// 							color='black'
// 							h='56px'
//
// 							fontWeight='500'
// 							fontSize='sm'
// 							textTransform='uppercase'
// 							letterSpacing='1px'
// 							onClick={handleWishlist}
// 							_hover={{
// 								bg: 'black',
// 								color: 'white',
// 							}}>
// 							<HStack gap={2}>
// 								<LuHeart size={18} />
// 								<Text>{isWishlisted ? 'Wishlisted' : 'Wishlist'}</Text>
// 							</HStack>
// 						</Button>

// 						<IconButton
// 							size='lg'
// 							variant='outline'
// 							borderColor='black'
// 							color='black'
// 							h='56px'
// 							w='56px'
// 							aria-label='Share'
// 							_hover={{
// 								bg: 'black',
// 								color: 'white',
// 							}}>
// 							<LuShare2 size={18} />
// 						</IconButton>
// 					</HStack>
// 				</VStack>

// 				<Box
// 					h='1px'
// 					bg='gray.200'
// 					my={6}
// 				/>

// 				{/* Product Features */}
// 				<VStack
// 					align='stretch'
// 					gap={4}>
// 					<HStack gap={3}>
// 						<LuTruck
// 							size={20}
// 							color='#10B981'
// 						/>
// 						<VStack
// 							align='start'
// 							gap={0}>
// 							<Text
// 								fontSize='sm'
// 								fontWeight='500'
// 								>
// 								Free Shipping
// 							</Text>
// 							<Text
// 								fontSize='xs'
// 								color='gray.500'>
// 								On orders over ৳1,000
// 							</Text>
// 						</VStack>
// 					</HStack>

// 					<HStack gap={3}>
// 						<LuRotateCcw
// 							size={20}
// 							color='#3B82F6'
// 						/>
// 						<VStack
// 							align='start'
// 							gap={0}>
// 							<Text
// 								fontSize='sm'
// 								fontWeight='500'
// 								>
// 								Easy Returns
// 							</Text>
// 							<Text
// 								fontSize='xs'
// 								color='gray.500'>
// 								30-day return policy
// 							</Text>
// 						</VStack>
// 					</HStack>

// 					<HStack gap={3}>
// 						<LuShield
// 							size={20}
// 							color='#8B5CF6'
// 						/>
// 						<VStack
// 							align='start'
// 							gap={0}>
// 							<Text
// 								fontSize='sm'
// 								fontWeight='500'
// 								>
// 								Secure Payment
// 							</Text>
// 							<Text
// 								fontSize='xs'
// 								color='gray.500'>
// 								100% secure transactions
// 							</Text>
// 						</VStack>
// 					</HStack>
// 				</VStack>

// 				<Box
// 					h='1px'
// 					bg='gray.200'
// 					my={6}
// 				/>

// 				{/* Product Info */}
// 				<VStack
// 					align='stretch'
// 					gap={2}>
// 					<Text
// 						fontSize='sm'
// 						color='gray.600'
// 						>
// 						<Text
// 							as='span'
// 							fontWeight='500'>
// 							SKU:
// 						</Text>{' '}
// 						{product.sku}
// 					</Text>
// 					<Text
// 						fontSize='sm'
// 						color='gray.600'
// 						>
// 						<Text
// 							as='span'
// 							fontWeight='500'>
// 							Category:
// 						</Text>{' '}
// 						{product.category}
// 					</Text>
// 					{product.tags && (
// 						<Text
// 							fontSize='sm'
// 							color='gray.600'
// 							>
// 							<Text
// 								as='span'
// 								fontWeight='500'>
// 								Tags:
// 							</Text>{' '}
// 							{product.tags.join(', ')}
// 						</Text>
// 					)}
// 				</VStack>
// 			</VStack>
// 		</GridItem>
// 	);
// };

export default GridRightPart;
