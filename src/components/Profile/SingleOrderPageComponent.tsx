'use client';

import {
	Box,
	Text,
	VStack,
	HStack,
	Button,
	Image,
	Badge,
	Grid,
	Flex,
	Separator,
} from '@chakra-ui/react';
import {
	ArrowLeft,
	Package,
	Truck,
	MapPin,
	Calendar,
	CreditCard,
	Phone,
	Mail,
	Download,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { profileStyles } from './profileStyles';

interface OrderItem {
	id: string;
	name: string;
	image: string;
	price: number;
	quantity: number;
	size?: string;
	color?: string;
}

interface OrderDetails {
	id: string;
	orderNumber: string;
	date: string;
	total: number;
	subtotal: number;
	shipping: number;
	tax: number;
	status: 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
	paymentStatus: 'paid' | 'pending' | 'failed';
	paymentMethod: string;
	estimatedDelivery?: string;
	trackingNumber?: string;
	items: OrderItem[];
	shippingAddress: {
		name: string;
		address: string;
		city: string;
		postalCode: string;
		country: string;
		phone: string;
	};
}

interface SingleOrderPageComponentProps {
	orderId: string;
	order?: OrderDetails;
	onBackClick?: () => void;
	onDownloadInvoice?: (orderId: string) => void;
	onTrackOrder?: (trackingNumber: string) => void;
}

export default function SingleOrderPageComponent({
	orderId,
	order = {
		id: orderId,
		orderNumber: 'CLT-ORD-001',
		date: '2024-03-15T10:30:00Z',
		total: 7950,
		subtotal: 7830,
		shipping: 120,
		tax: 0,
		status: 'delivered',
		paymentStatus: 'paid',
		paymentMethod: 'Credit Card ending in 4567',
		estimatedDelivery: 'March 18, 2024',
		trackingNumber: 'TRK-123456789',
		items: [
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
		shippingAddress: {
			name: 'John Doe',
			address: '123 Main Street, Apt 4B',
			city: 'Dhaka',
			postalCode: '1205',
			country: 'Bangladesh',
			phone: '+880 1700-000000',
		},
	},
	onBackClick,
	onDownloadInvoice,
	onTrackOrder,
}: SingleOrderPageComponentProps) {
	const router = useRouter();

	const getStatusColor = (status: OrderDetails['status']) => {
		switch (status) {
			case 'confirmed':
				return { ...profileStyles.statusBadge, ...profileStyles.statusConfirmed };
			case 'processing':
				return { ...profileStyles.statusBadge, ...profileStyles.statusProcessing };
			case 'shipped':
				return { ...profileStyles.statusBadge, ...profileStyles.statusShipped };
			case 'delivered':
				return { ...profileStyles.statusBadge, ...profileStyles.statusDelivered };
			case 'cancelled':
				return { ...profileStyles.statusBadge, ...profileStyles.statusCancelled };
			default:
				return { ...profileStyles.statusBadge, ...profileStyles.statusConfirmed };
		}
	};

	const getPaymentStatusColor = (paymentStatus: OrderDetails['paymentStatus']) => {
		switch (paymentStatus) {
			case 'paid':
				return { ...profileStyles.statusBadge, ...profileStyles.paymentPaid };
			case 'pending':
				return { ...profileStyles.statusBadge, ...profileStyles.paymentPending };
			case 'failed':
				return { ...profileStyles.statusBadge, ...profileStyles.paymentFailed };
			default:
				return { ...profileStyles.statusBadge, ...profileStyles.paymentPending };
		}
	};

	const formatStatus = (status: string) => {
		return status.charAt(0).toUpperCase() + status.slice(1);
	};

	const handleBackClick = () => {
		onBackClick?.();
		router.push('/my-orders');
	};

	const handleDownloadInvoice = () => {
		onDownloadInvoice?.(order.id);
	};

	const handleTrackOrder = () => {
		if (order.trackingNumber) {
			onTrackOrder?.(order.trackingNumber);
		}
	};

	return (
		<Box {...profileStyles.pageContainer}>
			<Box {...profileStyles.mainContainer}>
				<Box p={{ base: 6, md: 8 }}>
					<VStack
						alignItems='stretch'
						gap={8}>
						{/* Header */}
						<VStack
							alignItems='stretch'
							gap={4}>
							<HStack gap={3}>
								<Button
									variant='ghost'
									size='sm'
									onClick={handleBackClick}>
									<HStack gap={2}>
										<ArrowLeft size={16} />
										<Text>Back to Orders</Text>
									</HStack>
								</Button>
							</HStack>

							<HStack
								justify='space-between'
								align='center'
								flexWrap='wrap'
								gap={4}>
								<VStack
									alignItems='start'
									gap={2}>
									<Text {...profileStyles.sectionHeading}>Order Details</Text>
									<HStack
										gap={4}
										flexWrap='wrap'>
										<Text
											fontSize='sm'
											color='gray.600'>
											<strong>Order:</strong> {order.orderNumber}
										</Text>
										<HStack gap={1}>
											<Calendar
												size={14}
												color='#9CA3AF'
											/>
											<Text
												fontSize='sm'
												color='gray.600'>
												{new Date(order.date).toLocaleDateString('en-US', {
													year: 'numeric',
													month: 'long',
													day: 'numeric',
													hour: '2-digit',
													minute: '2-digit',
												})}
											</Text>
										</HStack>
									</HStack>
								</VStack>

								<HStack gap={3}>
									<Button
										{...profileStyles.secondaryButton}
										size='sm'
										onClick={handleDownloadInvoice}>
										<HStack gap={2}>
											<Download size={16} />
											<Text>Download Invoice</Text>
										</HStack>
									</Button>
									{order.trackingNumber && (
										<Button
											{...profileStyles.primaryButton}
											size='sm'
											onClick={handleTrackOrder}>
											<HStack gap={2}>
												<Package size={16} />
												<Text>Track Order</Text>
											</HStack>
										</Button>
									)}
								</HStack>
							</HStack>
						</VStack>

						<Grid
							templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
							gap={8}>
							{/* Left Column - Order Items */}
							<VStack
								alignItems='stretch'
								gap={6}>
								{/* Order Status */}
								<Box {...profileStyles.infoCard}>
									<HStack
										justify='space-between'
										align='center'
										mb={4}>
										<Text
											fontSize='lg'
											fontWeight='600'
											color='gray.900'>
											Order Status
										</Text>
										<HStack gap={3}>
											<Badge {...getStatusColor(order.status)}>{formatStatus(order.status)}</Badge>
											<Badge {...getPaymentStatusColor(order.paymentStatus)}>
												Payment {formatStatus(order.paymentStatus)}
											</Badge>
										</HStack>
									</HStack>

									{order.estimatedDelivery && (
										<HStack gap={3}>
											<Truck
												size={16}
												color='#4A5568'
											/>
											<Text
												fontSize='sm'
												color='gray.700'>
												<strong>
													{order.status === 'delivered' ? 'Delivered on:' : 'Expected delivery:'}
												</strong>{' '}
												{order.estimatedDelivery}
											</Text>
										</HStack>
									)}

									{order.trackingNumber && (
										<HStack
											gap={3}
											mt={3}>
											<Package
												size={16}
												color='#4A5568'
											/>
											<Text
												fontSize='sm'
												color='gray.700'>
												<strong>Tracking Number:</strong> {order.trackingNumber}
											</Text>
										</HStack>
									)}
								</Box>

								{/* Order Items */}
								<Box>
									<Text
										fontSize='lg'
										fontWeight='600'
										color='gray.900'
										mb={4}>
										Order Items
									</Text>

									<VStack
										alignItems='stretch'
										gap={4}>
										{order.items.map(item => (
											<Box
												key={item.id}
												p={4}
												border='1px solid'
												borderColor='gray.200'
												borderRadius='md'>
												<HStack
													gap={4}
													align='center'>
													<Image
														src={item.image}
														alt={item.name}
														w='80px'
														h='80px'
														borderRadius='md'
														objectFit='cover'
														border='1px solid'
														borderColor='gray.200'
													/>

													<VStack
														alignItems='start'
														gap={1}
														flex={1}>
														<Text
															fontSize='md'
															fontWeight='500'
															color='gray.900'>
															{item.name}
														</Text>
														<HStack
															gap={4}
															flexWrap='wrap'>
															{item.size && (
																<Text
																	fontSize='sm'
																	color='gray.600'>
																	Size: {item.size}
																</Text>
															)}
															{item.color && (
																<Text
																	fontSize='sm'
																	color='gray.600'>
																	Color: {item.color}
																</Text>
															)}
															<Text
																fontSize='sm'
																color='gray.600'>
																Qty: {item.quantity}
															</Text>
														</HStack>
													</VStack>

													<VStack
														alignItems='end'
														gap={1}>
														<Text
															fontSize='lg'
															fontWeight='600'
															color='gray.900'>
															৳{item.price.toLocaleString()}
														</Text>
														{item.quantity > 1 && (
															<Text
																fontSize='sm'
																color='gray.600'>
																৳{(item.price / item.quantity).toLocaleString()} each
															</Text>
														)}
													</VStack>
												</HStack>
											</Box>
										))}
									</VStack>
								</Box>
							</VStack>

							{/* Right Column - Summary and Address */}
							<VStack
								alignItems='stretch'
								gap={6}>
								{/* Order Summary */}
								<Box {...profileStyles.infoCard}>
									<Text
										fontSize='lg'
										fontWeight='600'
										color='gray.900'
										mb={4}>
										Order Summary
									</Text>

									<VStack
										alignItems='stretch'
										gap={3}>
										<Flex
											justify='space-between'
											align='center'>
											<Text
												fontSize='sm'
												color='gray.600'>
												Subtotal
											</Text>
											<Text
												fontSize='sm'
												fontWeight='500'
												color='gray.900'>
												৳{order.subtotal.toLocaleString()}
											</Text>
										</Flex>

										<Flex
											justify='space-between'
											align='center'>
											<Text
												fontSize='sm'
												color='gray.600'>
												Shipping
											</Text>
											<Text
												fontSize='sm'
												fontWeight='500'
												color='gray.900'>
												৳{order.shipping.toLocaleString()}
											</Text>
										</Flex>

										{order.tax > 0 && (
											<Flex
												justify='space-between'
												align='center'>
												<Text
													fontSize='sm'
													color='gray.600'>
													Tax
												</Text>
												<Text
													fontSize='sm'
													fontWeight='500'
													color='gray.900'>
													৳{order.tax.toLocaleString()}
												</Text>
											</Flex>
										)}

										<Separator />

										<Flex
											justify='space-between'
											align='center'>
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
												৳{order.total.toLocaleString()}
											</Text>
										</Flex>
									</VStack>
								</Box>

								{/* Payment Information */}
								<Box {...profileStyles.infoCard}>
									<Text
										fontSize='lg'
										fontWeight='600'
										color='gray.900'
										mb={4}>
										Payment Information
									</Text>

									<VStack
										alignItems='start'
										gap={3}>
										<HStack gap={3}>
											<CreditCard
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
													Payment Method
												</Text>
												<Text
													fontSize='sm'
													color='gray.600'>
													{order.paymentMethod}
												</Text>
											</VStack>
										</HStack>

										<HStack gap={3}>
											<Box
												w='16px'
												h='16px'
												display='flex'
												alignItems='center'
												justifyContent='center'>
												<Badge {...getPaymentStatusColor(order.paymentStatus)}>
													{formatStatus(order.paymentStatus)}
												</Badge>
											</Box>
										</HStack>
									</VStack>
								</Box>

								{/* Shipping Address */}
								<Box {...profileStyles.infoCard}>
									<Text
										fontSize='lg'
										fontWeight='600'
										color='gray.900'
										mb={4}>
										Shipping Address
									</Text>

									<VStack
										alignItems='start'
										gap={3}>
										<HStack
											gap={3}
											alignItems='start'>
											<MapPin
												size={16}
												color='#4A5568'
											/>
											<VStack
												alignItems='start'
												gap={1}>
												<Text
													fontSize='sm'
													fontWeight='500'
													color='gray.900'>
													{order.shippingAddress.name}
												</Text>
												<Text
													fontSize='sm'
													color='gray.600'>
													{order.shippingAddress.address}
												</Text>
												<Text
													fontSize='sm'
													color='gray.600'>
													{order.shippingAddress.city}, {order.shippingAddress.postalCode}
												</Text>
												<Text
													fontSize='sm'
													color='gray.600'>
													{order.shippingAddress.country}
												</Text>
											</VStack>
										</HStack>

										<HStack gap={3}>
											<Phone
												size={16}
												color='#4A5568'
											/>
											<Text
												fontSize='sm'
												color='gray.600'>
												{order.shippingAddress.phone}
											</Text>
										</HStack>
									</VStack>
								</Box>

								{/* Need Help */}
								<Box {...profileStyles.infoCard}>
									<Text
										fontSize='lg'
										fontWeight='600'
										color='gray.900'
										mb={4}>
										Need Help?
									</Text>

									<VStack
										alignItems='start'
										gap={3}>
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
							</VStack>
						</Grid>
					</VStack>
				</Box>
			</Box>
		</Box>
	);
}
