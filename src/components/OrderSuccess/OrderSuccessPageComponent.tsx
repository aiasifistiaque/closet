'use client';

import { Box, Text, VStack, HStack, Button, Image, Flex, Badge, Separator } from '@chakra-ui/react';
import { CheckCircle, Package, Truck, Home, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { orderSuccessStyles } from './orderSuccessStyles';

interface OrderItem {
	id: string;
	name: string;
	image: string;
	price: number;
	quantity: number;
	size?: string;
	color?: string;
}

interface OrderSuccessPageComponentProps {
	orderNumber?: string;
	orderItems?: OrderItem[];
	customerEmail?: string;
	shippingAddress?: {
		name: string;
		address: string;
		city: string;
		postalCode: string;
		country: string;
	};
	total?: number;
	estimatedDelivery?: string;
}

export default function OrderSuccessPageComponent({
	orderNumber = 'CLT-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
	orderItems = [
		{
			id: '1',
			name: 'Premium Cotton T-Shirt',
			image: '/product/p-modest1.jpg',
			price: 2450,
			quantity: 1,
			size: 'M',
			color: 'Black',
		},
		{
			id: '2',
			name: 'Designer Handbag',
			image: '/product/p-bag1.jpg',
			price: 5500,
			quantity: 1,
			color: 'Brown',
		},
	],
	customerEmail = 'customer@example.com',
	shippingAddress = {
		name: 'John Doe',
		address: '123 Main Street, Apt 4B',
		city: 'Dhaka',
		postalCode: '1205',
		country: 'Bangladesh',
	},
	total = 7950,
	estimatedDelivery = '3-5 business days',
}: OrderSuccessPageComponentProps) {
	const router = useRouter();
	const handleContinueShopping = () => {
		router.push('/');
	};

	const handleTrackOrder = () => {
		// Navigate to order tracking page
		console.log('Track order:', orderNumber);
	};

	const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
	const shipping = 120;
	const calculatedTotal = subtotal + shipping;

	return (
		<Box {...orderSuccessStyles.pageContainer}>
			<Box {...orderSuccessStyles.mainContainer}>
				<VStack
					gap={6}
					w='full'>
					{/* Success Icon */}
					<CheckCircle {...orderSuccessStyles.successIcon} />

					{/* Main Message */}
					<Text {...orderSuccessStyles.mainHeading}>Order Confirmed!</Text>
					<Text {...orderSuccessStyles.subHeading}>Thank you for your purchase</Text>

					{/* Order Number */}
					<Box {...orderSuccessStyles.infoCard}>
						<Text
							{...orderSuccessStyles.infoText}
							mb={2}>
							Order Number
						</Text>
						<Text {...orderSuccessStyles.orderNumber}>{orderNumber}</Text>
					</Box>

					{/* Order Summary */}
					<Box
						{...orderSuccessStyles.orderSummaryCard}
						w='full'>
						<Text {...orderSuccessStyles.sectionHeading}>Order Summary</Text>

						{orderItems.map(item => (
							<HStack
								key={item.id}
								gap={3}
								align='center'
								mb={3}>
								<Image
									src={item.image}
									alt={item.name}
									{...orderSuccessStyles.orderImage}
								/>
								<VStack
									alignItems='start'
									gap={1}
									flex={1}>
									<Text
										fontSize='sm'
										fontWeight='500'
										color='gray.900'>
										{item.name}
									</Text>
									<HStack gap={2}>
										{item.size && (
											<Text
												fontSize='xs'
												color='gray.600'>
												Size: {item.size}
											</Text>
										)}
										{item.color && (
											<Text
												fontSize='xs'
												color='gray.600'>
												Color: {item.color}
											</Text>
										)}
									</HStack>
									<Text
										fontSize='xs'
										color='gray.600'>
										Qty: {item.quantity}
									</Text>
								</VStack>
								<Text
									fontSize='sm'
									fontWeight='600'
									color='gray.900'>
									৳{item.price.toLocaleString()}
								</Text>
							</HStack>
						))}

						<Separator my={4} />

						<VStack
							gap={2}
							alignItems='stretch'>
							<Flex {...orderSuccessStyles.flexBetween}>
								<Text
									fontSize='sm'
									color='gray.600'>
									Subtotal
								</Text>
								<Text
									fontSize='sm'
									fontWeight='500'>
									৳{subtotal.toLocaleString()}
								</Text>
							</Flex>
							<Flex {...orderSuccessStyles.flexBetween}>
								<Text
									fontSize='sm'
									color='gray.600'>
									Shipping
								</Text>
								<Text
									fontSize='sm'
									fontWeight='500'>
									৳{shipping}
								</Text>
							</Flex>
							<Separator />
							<Flex {...orderSuccessStyles.flexBetween}>
								<Text
									fontSize='md'
									fontWeight='600'
									color='gray.900'>
									Total
								</Text>
								<Text
									fontSize='md'
									fontWeight='600'
									color='gray.900'>
									৳{calculatedTotal.toLocaleString()}
								</Text>
							</Flex>
						</VStack>
					</Box>

					{/* Delivery Information */}
					<Box
						{...orderSuccessStyles.infoCard}
						w='full'>
						<Text {...orderSuccessStyles.sectionHeading}>Delivery Information</Text>

						<VStack
							alignItems='start'
							gap={3}>
							<HStack gap={3}>
								<Home
									size={16}
									color='#4A5568'
								/>
								<VStack
									alignItems='start'
									gap={0}>
									<Text
										fontSize='sm'
										fontWeight='500'
										color='gray.900'>
										{shippingAddress.name}
									</Text>
									<Text
										fontSize='sm'
										color='gray.600'>
										{shippingAddress.address}
									</Text>
									<Text
										fontSize='sm'
										color='gray.600'>
										{shippingAddress.city}, {shippingAddress.postalCode}
									</Text>
									<Text
										fontSize='sm'
										color='gray.600'>
										{shippingAddress.country}
									</Text>
								</VStack>
							</HStack>

							<HStack gap={3}>
								<Truck
									size={16}
									color='#4A5568'
								/>
								<VStack
									alignItems='start'
									gap={0}>
									<Text
										fontSize='sm'
										fontWeight='500'
										color='gray.900'>
										Estimated Delivery
									</Text>
									<Text
										fontSize='sm'
										color='gray.600'>
										{estimatedDelivery}
									</Text>
								</VStack>
							</HStack>

							<HStack gap={3}>
								<Package
									size={16}
									color='#4A5568'
								/>
								<VStack
									alignItems='start'
									gap={0}>
									<Text
										fontSize='sm'
										fontWeight='500'
										color='gray.900'>
										Status
									</Text>
									<Badge {...orderSuccessStyles.statusBadge}>Order Confirmed</Badge>
								</VStack>
							</HStack>
						</VStack>
					</Box>

					{/* Order Timeline */}
					<Box
						{...orderSuccessStyles.infoCard}
						w='full'>
						<Text {...orderSuccessStyles.sectionHeading}>Order Progress</Text>

						<Box {...orderSuccessStyles.timelineContainer}>
							<Box {...orderSuccessStyles.timelineItem}>
								<Box {...orderSuccessStyles.timelineDot} />
								<Box {...orderSuccessStyles.timelineLine} />
								<Text
									fontSize='sm'
									fontWeight='500'
									color='gray.900'>
									Order Confirmed
								</Text>
								<Text
									fontSize='xs'
									color='gray.600'>
									Your order has been received and confirmed
								</Text>
							</Box>

							<Box {...orderSuccessStyles.timelineItem}>
								<Box
									{...orderSuccessStyles.timelineDot}
									bg='gray.200'
									borderColor='gray.300'
								/>
								<Box {...orderSuccessStyles.timelineLine} />
								<Text
									fontSize='sm'
									color='gray.600'>
									Processing
								</Text>
								<Text
									fontSize='xs'
									color='gray.500'>
									{`We're preparing your items`}
								</Text>
							</Box>

							<Box {...orderSuccessStyles.timelineItem}>
								<Box
									{...orderSuccessStyles.timelineDot}
									bg='gray.200'
									borderColor='gray.300'
								/>
								<Box {...orderSuccessStyles.timelineLine} />
								<Text
									fontSize='sm'
									color='gray.600'>
									Shipped
								</Text>
								<Text
									fontSize='xs'
									color='gray.500'>
									Your order is on its way
								</Text>
							</Box>

							<Box {...orderSuccessStyles.timelineItem}>
								<Box
									{...orderSuccessStyles.timelineDot}
									bg='gray.200'
									borderColor='gray.300'
								/>
								<Text
									fontSize='sm'
									color='gray.600'>
									Delivered
								</Text>
								<Text
									fontSize='xs'
									color='gray.500'>
									Package delivered to your address
								</Text>
							</Box>
						</Box>
					</Box>

					{/* Contact Information */}
					<Box
						{...orderSuccessStyles.infoCard}
						w='full'>
						<Text {...orderSuccessStyles.sectionHeading}>Need Help?</Text>

						<Text
							{...orderSuccessStyles.infoText}
							mb={4}>
							{`We've sent a confirmation email to`} <strong>{customerEmail}</strong>. If you have
							any questions about your order, feel free to contact us.
						</Text>

						<VStack
							gap={2}
							alignItems='start'>
							<HStack gap={3}>
								<Phone
									size={16}
									color='#4A5568'
								/>
								<Text
									fontSize='sm'
									color='gray.600'>
									+880 1700-000000
								</Text>
							</HStack>
							<HStack gap={3}>
								<Mail
									size={16}
									color='#4A5568'
								/>
								<Text
									fontSize='sm'
									color='gray.600'>
									support@closet.com.bd
								</Text>
							</HStack>
						</VStack>
					</Box>

					{/* Action Buttons */}
					<VStack
						gap={3}
						w='full'>
						<Button
							{...orderSuccessStyles.primaryButton}
							onClick={handleTrackOrder}>
							Track Your Order
						</Button>

						<Button
							{...orderSuccessStyles.secondaryButton}
							onClick={handleContinueShopping}>
							Continue Shopping
						</Button>
					</VStack>
				</VStack>
			</Box>
		</Box>
	);
}
