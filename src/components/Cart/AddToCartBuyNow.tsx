import { HStack, VStack, Link, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import PrimaryButton from '../reusable/PrimaryButton';
import { CartItem } from '../data/cartData';
import { DetailedProduct } from '../data/productData';
import { useCart } from '../contexts/CartContext';
import { toaster } from '../ui/toaster';
import { useRouter } from 'next/navigation'; // Add this import

const AddToCartBuyNow: React.FC<{ product: DetailedProduct }> = ({
	product,
}) => {
	const isMobile = useBreakpointValue({ base: true, md: false });
	const { cart, addToCart } = useCart();
	const router = useRouter(); // Add router hook

	const isInCart = cart.some(
		item => item.id === product.id && item.size === product.sizes[0]
	);

	const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
		isMobile ? (
			<VStack gap={3} w='full' mt={4}>
				{children}
			</VStack>
		) : (
			<HStack gap={3} mt={4}>
				{children}
			</HStack>
		);

	const handleAddToCart = () => {
		if (isInCart) {
			toaster.create({
				title: `${product.name} is already in your cart`,
				type: 'info',
			});
			return;
		}
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

	// New handler for Shop Now that ensures item is in cart before navigation
	const handleShopNow = () => {
		// First, make sure item is in cart
		if (!isInCart) {
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
		}

		// Small delay to ensure state update, then navigate
		setTimeout(() => {
			router.push('/checkout');
		}, 100);
	};

	return (
		<Wrapper>
			<PrimaryButton
				flex={isMobile ? undefined : 1}
				w={isMobile ? 'full' : undefined}
				variant='outline'
				colorPalette='blue'
				onClick={handleAddToCart}
				disabled={isInCart}
			>
				{isInCart ? 'In Cart' : 'Add to Cart'}
			</PrimaryButton>

			{/* Remove Link wrapper and use button with onClick handler */}
			<PrimaryButton
				flex={isMobile ? undefined : 1}
				w={isMobile ? 'full' : undefined}
				colorPalette='black'
				textAlign='center'
				onClick={handleShopNow}
			>
				Shop Now
			</PrimaryButton>
		</Wrapper>
	);
};

export default AddToCartBuyNow;