'use client';

import { Box, Flex, Image, Text, VStack, HStack, Separator, Button } from '@chakra-ui/react';
import DynamicSelector from './DynamicSelector';
import { useCart } from '../contexts/CartContext';
import { paymentOptions } from '../data/checkoutData';
import { LuShoppingCart } from 'react-icons/lu';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { toaster } from '../ui/toaster';
import { useState } from 'react';

export default function OrderSummary() {
	const { cart, clearCart } = useCart();
	const pathname = usePathname();
	const router = useRouter();
	const [isProcessing, setIsProcessing] = useState(false);

	// Calculate totals dynamically
	const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
	const discount = cart.reduce(
		(acc, item) => acc + ((item.oldPrice || 0) - item.price) * item.quantity,
		0
	);
	const shipping = 60; // Default inside Dhaka shipping
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
				description: 'Thank you for your order. You will receive a confirmation email shortly.',
				type: 'success',
				duration: 5000,
			});

			// Clear the cart after successful order
			clearCart();

			// Redirect to a success page or home page
			router.push('/order-success');
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
		return 'Complete Order';
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
			border='1px solid'
			borderColor='gray.200'
			borderRadius='none'
			bg='white'
			overflow='hidden'>
			{/* Header */}
			<Box
				bg='gray.50'
				px={6}
				py={4}
				borderBottom='1px solid'
				borderBottomColor='gray.200'>
				<Text
					fontSize='lg'
					fontWeight='600'
					fontFamily='"Zalando Sans Expanded", sans-serif'
					color='gray.900'>
					Order Summary
				</Text>
			</Box>

			<Box p={6}>
				{/* Products */}
				{cart.length === 0 ? (
					<Flex
						flexDirection='column'
						justifyContent='center'
						alignItems='center'
						py={8}
						color='gray.500'>
						<LuShoppingCart size={48} />
						<Text
							mt={4}
							fontFamily='"Zalando Sans Expanded", sans-serif'>
							Your cart is empty
						</Text>
					</Flex>
				) : (
					<VStack
						gap={4}
						align='stretch'>
						{cart.map(item => (
							<Flex
								key={item.id}
								gap={3}>
								<Box
									position='relative'
									w='60px'
									h='60px'
									borderRadius='none'
									overflow='hidden'
									border='1px solid'
									borderColor='gray.200'>
									<Image
										src={item.image}
										alt={item.title}
										objectFit='cover'
										w='full'
										h='full'
									/>
									<Box
										position='absolute'
										top='-8px'
										right='-8px'
										bg='gray.600'
										color='white'
										borderRadius='full'
										w='20px'
										h='20px'
										display='flex'
										alignItems='center'
										justifyContent='center'
										fontSize='xs'
										fontWeight='bold'>
										{item.quantity}
									</Box>
								</Box>

								<Flex
									flex='1'
									justify='space-between'
									align='start'>
									<Box>
										<Text
											fontSize='sm'
											fontWeight='500'
											fontFamily='"Zalando Sans Expanded", sans-serif'
											color='gray.900'
											lineHeight='1.3'>
											{item.title}
										</Text>
										{item.color && (
											<Text
												fontSize='xs'
												color='gray.500'>
												{item.color}
											</Text>
										)}
										{item.size && (
											<Text
												fontSize='xs'
												color='gray.500'>
												Size: {item.size}
											</Text>
										)}
									</Box>
									<Text
										fontSize='sm'
										fontWeight='600'
										fontFamily='"Zalando Sans Expanded", sans-serif'
										color='gray.900'>
										৳{(item.price * item.quantity).toLocaleString()}
									</Text>
								</Flex>
							</Flex>
						))}
					</VStack>
				)}

				{cart.length > 0 && (
					<>
						<Separator my={6} />

						{/* Totals */}
						<VStack
							gap={3}
							align='stretch'>
							<HStack justify='space-between'>
								<Text
									fontSize='sm'
									color='gray.600'
									fontFamily='"Zalando Sans Expanded", sans-serif'>
									Subtotal
								</Text>
								<Text
									fontSize='sm'
									fontFamily='"Zalando Sans Expanded", sans-serif'>
									৳{subtotal.toLocaleString()}
								</Text>
							</HStack>

							<HStack justify='space-between'>
								<Text
									fontSize='sm'
									color='gray.600'
									fontFamily='"Zalando Sans Expanded", sans-serif'>
									Shipping
								</Text>
								<Text
									fontSize='sm'
									fontFamily='"Zalando Sans Expanded", sans-serif'>
									৳{shipping}
								</Text>
							</HStack>

							{discount > 0 && (
								<HStack justify='space-between'>
									<Text
										fontSize='sm'
										color='green.600'
										fontFamily='"Zalando Sans Expanded", sans-serif'>
										Discount
									</Text>
									<Text
										fontSize='sm'
										color='green.600'
										fontFamily='"Zalando Sans Expanded", sans-serif'>
										-৳{discount.toLocaleString()}
									</Text>
								</HStack>
							)}

							<Separator />

							<HStack justify='space-between'>
								<Text
									fontSize='lg'
									fontWeight='600'
									fontFamily='"Zalando Sans Expanded", sans-serif'
									color='gray.900'>
									Total
								</Text>
								<Text
									fontSize='lg'
									fontWeight='600'
									fontFamily='"Zalando Sans Expanded", sans-serif'
									color='gray.900'>
									৳{grandTotal.toLocaleString()}
								</Text>
							</HStack>
						</VStack>

						{/* Payment Method */}
						{pathname === '/checkout' && (
							<Box mt={6}>
								<DynamicSelector
									title='Payment Method'
									options={paymentOptions}
									defaultValue='cod'
									onChange={val => console.log('Payment:', val)}
								/>
							</Box>
						)}

						{/* Complete Order Button */}
						<Button
							w='full'
							mt={6}
							h='48px'
							bg='black'
							color='white'
							borderRadius='none'
							fontFamily='"Zalando Sans Expanded", sans-serif'
							fontWeight='500'
							fontSize='sm'
							loading={isProcessing}
							loadingText='Processing...'
							onClick={handleButtonClick}
							_hover={{ bg: 'gray.800' }}
							_disabled={{ bg: 'gray.400', cursor: 'not-allowed' }}
							disabled={cart.length === 0}>
							{getButtonText()}
						</Button>
					</>
				)}
			</Box>
		</Box>
	);
}
