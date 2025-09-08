'use client';

import { Box, Flex, Image, Text, VStack, Checkbox } from '@chakra-ui/react';
import DynamicSelector from './DynamicSelector';
import { useCart } from '../contexts/CartContext';
import { paymentOptions } from '../data/checkoutData';
import { LuShoppingCart } from 'react-icons/lu';
import PrimaryButton from '../reusable/PrimaryButton';
import { colors } from '../data/color';
import CustomSeparator from '../reusable/CustomSeparator';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { toaster } from '../ui/toaster';
import { useState } from 'react';

export default function OrderSummary() {
	const { cart, clearCart } = useCart();
	const pathname = usePathname();
	const router = useRouter();
	const [isProcessing, setIsProcessing] = useState(false);

	console.log('pathname', pathname);

	// Calculate totals dynamically
	const subtotal = cart.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);
	const discount = cart.reduce(
		(acc, item) => acc + ((item.oldPrice || 0) - item.price) * item.quantity,
		0
	);
	const shipping = 50; // You can make this dynamic too
	const grandTotal = subtotal + shipping;

	// Handle order confirmation
	const handleConfirmOrder = async () => {
		if (cart.length === 0) return;

		setIsProcessing(true);

		try {
			// Simulate API call for order processing
			await new Promise(resolve => setTimeout(resolve, 1000));

			// Show success message
			toaster.create({
				title: 'Order Confirmed!',
				description:
					'Thank you for your order. You will receive a confirmation email shortly.',
				type: 'success',
				duration: 5000,
			});

			// Clear the cart after successful order
			clearCart();

			// Redirect to a success page or home page
			router.push('/order-success'); // or router.push('/');
		} catch (error) {
			console.error('Order confirmation error:', error);
			toaster.create({
				title: 'Order Failed',
				description: 'Something went wrong. Please try again.',
				type: 'error',
			});
		} finally {
			setIsProcessing(false);
		}
	};

	const getButtonText = () => {
		if (isProcessing) return 'Processing...';
		if (pathname === '/cart') return 'Proceed to Checkout';
		return 'Confirm Order';
	};

	const handleButtonClick = () => {
		if (pathname === '/cart') {
			router.push('/checkout');
		} else {
			handleConfirmOrder();
		}
	};

	return (
		<Box
			border={`1px solid ${colors.blackBorder}`}
			backgroundColor={colors.whiteBg}
			rounded='md'
			p={6}
			height='100%'
			display='flex'
			flexDirection='column'
		>
			{/* Products */}
			<Box flex='1'>
				{cart.length === 0 ? (
					<Flex
						flexDirection='column'
						justifyContent='center'
						alignItems='center'
					>
						<LuShoppingCart size={32} />
						<Text textAlign='center' color={colors.text}>
							Your cart is empty.
						</Text>
					</Flex>
				) : (
					cart.map(item => (
						<Flex key={`${item.id}-${item.size}`} align='center' mb={4}>
							<Image
								src={item.image}
								alt={item.title}
								boxSize='70px'
								rounded='md'
								mr={4}
								objectFit='cover'
							/>
							<Box>
								<Text fontWeight='semibold'>{item.title}</Text>
								<Text fontSize='sm' color='gray.500'>
									{item.color} | {item.size}
								</Text>
								<Text fontSize='sm'>Qty: {item.quantity}</Text>
							</Box>
							<Text ml='auto' fontWeight='bold'>
								৳ {item.price * item.quantity}
							</Text>
						</Flex>
					))
				)}

				<CustomSeparator />

				{/* Totals */}
				<VStack gap={2} align='stretch' mt={4}>
					<Flex justify='space-between'>
						<Text>Subtotal</Text>
						<Text>৳ {subtotal}</Text>
					</Flex>
					<Flex justify='space-between'>
						<Text>Discount</Text>
						<Text>৳ {discount}</Text>
					</Flex>
					<Flex justify='space-between'>
						<Text>Shipping</Text>
						<Text>৳ {shipping}</Text>
					</Flex>

					<CustomSeparator />

					<Flex justify='space-between' fontWeight='bold' fontSize='lg'>
						<Text>Total Order</Text>
						<Text>৳ {grandTotal}</Text>
					</Flex>
				</VStack>

				<DynamicSelector
					title='Payment Method'
					options={paymentOptions}
					defaultValue='inside'
					onChange={val => console.log('payment:', val)}
				/>

				{/* Terms */}
				<Checkbox.Root mt={4} defaultChecked>
					<Checkbox.HiddenInput />
					<Checkbox.Control />
					<Checkbox.Label>
						Accept the{' '}
						<Text as='span' color='blue.500'>
							Terms & Conditions
						</Text>
						,{' '}
						<Text as='span' color='blue.500'>
							Return & Refund Policy
						</Text>{' '}
						and{' '}
						<Text as='span' color='blue.500'>
							Privacy Policy
						</Text>{' '}
						of www.bartonbangladesh.com
					</Checkbox.Label>
				</Checkbox.Root>
			</Box>

			{/* Buttons - Always at bottom */}
			<VStack gap={3} mt={6} width='100%'>
				<PrimaryButton
					border={`1px solid ${colors.blackBorder}`}
					wFraction='full'
					variant='outline'
					colorPalette='gray'
					bgColor={`${colors.whiteBg} !important`}
					size='md'
					_hover={{
						borderColor: colors.blackBorder,
						bg: 'gray.500',
					}}
					href='/'
				>
					Continue Shopping
				</PrimaryButton>

				<PrimaryButton
					w='full'
					size='md'
					bgColor='black'
					color='white'
					_hover={{
						bg: 'gray.800',
					}}
					_active={{
						bg: 'gray.900',
					}}
					disabled={cart.length === 0 || isProcessing}
					onClick={handleButtonClick}
				>
					{getButtonText()}
				</PrimaryButton>
			</VStack>
		</Box>
	);
}