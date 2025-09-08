'use client';
import {
	Badge,
	Button,
	GridItem,
	Heading,
	HStack,
	IconButton,
	Text,
	VStack,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import SizeGuideModal from '../reusable/SizeGuideModal';
import { useCart } from '../contexts/CartContext';
import { CartItem } from '../data/cartData';
import { toaster } from '../ui/toaster';
import Link from 'next/link';

type GridRightPartProps = {
	product: any;
	selectedSize: any;
	setSelectedSize: any;
};

const GridRightPart: FC<GridRightPartProps> = ({
	product,
	selectedSize,
	setSelectedSize,
}) => {
	const { cart, addToCart } = useCart();
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
		<GridItem>
			<VStack align='start' gap={4}>
				{/* Star Rating */}
				<HStack>
					{[1, 2, 3, 4, 5].map(i =>
						i <= 4 ? (
							<AiFillStar key={i} color='gold' size={20} />
						) : (
							<AiOutlineStar key={i} color='gold' size={20} />
						)
					)}
					<Text fontSize='sm' color='gray.500'>
						(0 customer reviews)
					</Text>
				</HStack>

				<Heading size='lg'>{product.name}</Heading>

				{/* Price */}
				<HStack>
					<Text fontSize='2xl' fontWeight='bold'>
						৳ {product.price.toFixed(2)}
					</Text>
					<Text as='s' color='red.400' fontSize='lg'>
						৳ {product.oldPrice.toFixed(2)}
					</Text>
					<Badge colorScheme='green'>{product.discount}% OFF</Badge>
				</HStack>

				{/* Color */}
				<Text>
					Color: <strong>{product.color}</strong>
				</Text>

				{/* Size */}
				<Text>
					Size: <strong>{selectedSize}</strong>
				</Text>

				{/* Sizes */}
				<HStack>
					{product?.sizes?.map((size: any) => (
						<Button
							key={size}
							size='sm'
							variant={selectedSize === size ? 'solid' : 'outline'}
							onClick={() => setSelectedSize(size)}
							border={'1px solid #000'}
						>
							{size}
						</Button>
					))}
				</HStack>

				{/* Actions */}
				<HStack>
					<Button
						variant='outline'
						border={'1px solid #000'}
						onClick={handleAddToCart}
						disabled={isInCart}
					>
						Add To Cart
					</Button>
					<Link href={'/checkout'}>
						<Button colorScheme='blackAlpha' onClick={handleAddToCart}>
							Shop Now
						</Button>
					</Link>
				</HStack>

				{/* SKU & Category */}
				<Text fontSize='sm' color='gray.500'>
					SKU: {product.sku}
				</Text>
				<Text fontSize='sm' color='gray.500'>
					Category: {product.category}
				</Text>

				<SizeGuideModal product={product} />

				<HStack gap={3}>
					<IconButton aria-label='Share on Facebook' size='sm'>
						<FaFacebookF />
					</IconButton>
					<IconButton aria-label='Share on Twitter' size='sm'>
						<FaTwitter />
					</IconButton>
					<IconButton aria-label='Share on Instagram' size='sm'>
						<FaInstagram />
					</IconButton>
				</HStack>
			</VStack>
		</GridItem>
	);
};

export default GridRightPart;
