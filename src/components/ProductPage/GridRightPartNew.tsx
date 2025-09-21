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

export default GridRightPart;
