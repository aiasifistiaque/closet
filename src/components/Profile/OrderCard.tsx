'use client';

import { Box, Text, HStack, VStack, Badge, Flex } from '@chakra-ui/react';
import { ChevronRight, Package, Calendar, CreditCard } from 'lucide-react';
import Link from 'next/link';
import { profileStyles } from './profileStyles';

export interface Order {
	id: string;
	orderNumber: string;
	date: string;
	total: number;
	status: 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
	paymentStatus: 'paid' | 'pending' | 'failed';
	itemCount: number;
	estimatedDelivery?: string;
}

interface OrderCardProps {
	order: Order;
	onClick?: (orderId: string) => void;
}

export default function OrderCard({ order, onClick }: OrderCardProps) {
	const getStatusColor = (status: Order['status']) => {
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

	const getPaymentStatusColor = (paymentStatus: Order['paymentStatus']) => {
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

	const handleCardClick = () => {
		onClick?.(order.id);
	};

	return (
		<Link href={`/order/${order.id}`}>
			<Box
				{...profileStyles.orderCard}
				onClick={handleCardClick}>
				{/* Header with Order Number and Date */}
				<Flex {...profileStyles.orderHeader}>
					<VStack
						alignItems='start'
						gap={1}>
						<Text {...profileStyles.orderId}>{order.orderNumber}</Text>
						<HStack gap={1}>
							<Calendar
								size={12}
								color='#9CA3AF'
							/>
							<Text {...profileStyles.orderDate}>
								{new Date(order.date).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'short',
									day: 'numeric',
								})}
							</Text>
						</HStack>
					</VStack>

					<ChevronRight
						size={20}
						color='#9CA3AF'
					/>
				</Flex>

				{/* Order Details */}
				<VStack
					alignItems='stretch'
					gap={3}>
					{/* Total and Item Count */}
					<Flex
						justify='space-between'
						align='center'>
						<VStack
							alignItems='start'
							gap={0}>
							<Text
								fontSize='xs'
								color='gray.600'
								fontFamily='"Zalando Sans Expanded", sans-serif'>
								Total Amount
							</Text>
							<Text {...profileStyles.orderTotal}>৳{order.total.toLocaleString()}</Text>
						</VStack>

						<VStack
							alignItems='end'
							gap={0}>
							<Text
								fontSize='xs'
								color='gray.600'
								fontFamily='"Zalando Sans Expanded", sans-serif'>
								Items
							</Text>
							<HStack gap={1}>
								<Package
									size={14}
									color='#6B7280'
								/>
								<Text
									fontSize='sm'
									fontWeight='500'
									color='gray.700'>
									{order.itemCount} item{order.itemCount > 1 ? 's' : ''}
								</Text>
							</HStack>
						</VStack>
					</Flex>

					{/* Status Badges */}
					<HStack
						justify='space-between'
						align='center'>
						<VStack
							alignItems='start'
							gap={2}>
							<HStack gap={2}>
								<Text
									fontSize='xs'
									color='gray.600'
									fontFamily='"Zalando Sans Expanded", sans-serif'>
									Status:
								</Text>
								<Badge {...getStatusColor(order.status)}>{formatStatus(order.status)}</Badge>
							</HStack>

							<HStack gap={2}>
								<CreditCard
									size={12}
									color='#9CA3AF'
								/>
								<Text
									fontSize='xs'
									color='gray.600'
									fontFamily='"Zalando Sans Expanded", sans-serif'>
									Payment:
								</Text>
								<Badge {...getPaymentStatusColor(order.paymentStatus)}>
									{formatStatus(order.paymentStatus)}
								</Badge>
							</HStack>
						</VStack>
					</HStack>

					{/* Estimated Delivery */}
					{order.estimatedDelivery &&
						order.status !== 'delivered' &&
						order.status !== 'cancelled' && (
							<Box
								bg='blue.50'
								p={3}
								borderRadius='md'
								border='1px solid'
								borderColor='blue.200'>
								<Text
									fontSize='xs'
									color='blue.700'
									fontFamily='"Zalando Sans Expanded", sans-serif'>
									<strong>Estimated Delivery:</strong> {order.estimatedDelivery}
								</Text>
							</Box>
						)}
				</VStack>
			</Box>
		</Link>
	);
}
