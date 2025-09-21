'use client';
import React from 'react';
import { Button, HStack, IconButton } from '@chakra-ui/react';
import { Heart, Share2 } from 'lucide-react';

interface ProductActionsProps {
	onAddToCart: () => void;
	onWishlist: () => void;
	onShare: () => void;
	isInCart: boolean;
	isWishlisted: boolean;
}

const ProductActions: React.FC<ProductActionsProps> = ({
	onAddToCart,
	onWishlist,
	onShare,
	isInCart,
	isWishlisted,
}) => {
	return (
		<HStack gap={2}>
			{/* Add to Cart */}
			<Button
				flex={1}
				h='48px'
				bg={isInCart ? 'green.500' : 'black'}
				color='white'
				fontFamily='"Zalando Sans Expanded", sans-serif'
				fontWeight='500'
				fontSize='sm'
				textTransform='uppercase'
				letterSpacing='0.5px'
				borderRadius='none'
				onClick={onAddToCart}
				disabled={isInCart}
				_hover={{
					bg: isInCart ? 'green.600' : 'gray.800',
				}}>
				{isInCart ? 'In Cart' : 'Add to Cart'}
			</Button>

			{/* Wishlist */}
			<IconButton
				aria-label='Add to wishlist'
				h='48px'
				variant='outline'
				borderColor='gray.300'
				borderRadius='none'
				color={isWishlisted ? 'red.500' : 'gray.600'}
				onClick={onWishlist}
				_hover={{
					bg: isWishlisted ? 'red.50' : 'gray.100',
				}}>
				<Heart
					size={18}
					fill={isWishlisted ? 'currentColor' : 'none'}
				/>
			</IconButton>

			{/* Share */}
			<IconButton
				aria-label='Share product'
				h='48px'
				variant='outline'
				borderColor='gray.300'
				borderRadius='none'
				color='gray.600'
				onClick={onShare}
				_hover={{ bg: 'gray.100' }}>
				<Share2 size={18} />
			</IconButton>
		</HStack>
	);
};

export default ProductActions;
