'use client';

import { Box, Text, VStack, Grid, HStack, Button, Input } from '@chakra-ui/react';
import { Search, Filter, ArrowLeft, Package } from 'lucide-react';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { profileStyles } from './profileStyles';
import OrderCard, { Order } from './OrderCard';

// Mock orders data
const mockOrders: Order[] = [
	{
		id: '1',
		orderNumber: 'CLT-ORD-001',
		date: '2024-03-15',
		total: 7950,
		status: 'delivered',
		paymentStatus: 'paid',
		itemCount: 2,
		estimatedDelivery: 'Delivered on March 18, 2024',
	},
	{
		id: '2',
		orderNumber: 'CLT-ORD-002',
		date: '2024-03-20',
		total: 3200,
		status: 'shipped',
		paymentStatus: 'paid',
		itemCount: 1,
		estimatedDelivery: 'March 25, 2024',
	},
	{
		id: '3',
		orderNumber: 'CLT-ORD-003',
		date: '2024-03-22',
		total: 5500,
		status: 'processing',
		paymentStatus: 'paid',
		itemCount: 3,
		estimatedDelivery: 'March 28, 2024',
	},
	{
		id: '4',
		orderNumber: 'CLT-ORD-004',
		date: '2024-03-18',
		total: 1200,
		status: 'cancelled',
		paymentStatus: 'failed',
		itemCount: 1,
	},
	{
		id: '5',
		orderNumber: 'CLT-ORD-005',
		date: '2024-03-25',
		total: 8900,
		status: 'confirmed',
		paymentStatus: 'paid',
		itemCount: 4,
		estimatedDelivery: 'March 30, 2024',
	},
];

interface MyOrdersPageComponentProps {
	orders?: Order[];
	onOrderClick?: (orderId: string) => void;
	onBackClick?: () => void;
}

export default function MyOrdersPageComponent({
	orders = mockOrders,
	onOrderClick,
	onBackClick,
}: MyOrdersPageComponentProps) {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState('');
	const [statusFilter, setStatusFilter] = useState('all');
	const [sortBy, setSortBy] = useState('date-desc');

	const filteredAndSortedOrders = useMemo(() => {
		let filtered = orders;

		// Filter by search term
		if (searchTerm) {
			filtered = filtered.filter(
				order =>
					order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
					order.id.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}

		// Filter by status
		if (statusFilter !== 'all') {
			filtered = filtered.filter(order => order.status === statusFilter);
		}

		// Sort orders
		filtered.sort((a, b) => {
			switch (sortBy) {
				case 'date-desc':
					return new Date(b.date).getTime() - new Date(a.date).getTime();
				case 'date-asc':
					return new Date(a.date).getTime() - new Date(b.date).getTime();
				case 'total-desc':
					return b.total - a.total;
				case 'total-asc':
					return a.total - b.total;
				default:
					return 0;
			}
		});

		return filtered;
	}, [orders, searchTerm, statusFilter, sortBy]);

	const handleBackClick = () => {
		onBackClick?.();
		router.push('/profile');
	};

	const handleOrderClick = (orderId: string) => {
		onOrderClick?.(orderId);
	};

	return (
		<Box {...profileStyles.pageContainer}>
			<Box {...profileStyles.mainContainer}>
				<Box p={{ base: 6, md: 8 }}>
					<VStack
						alignItems='stretch'
						gap={6}>
						{/* Header */}
						<VStack
							alignItems='stretch'
							gap={4}>
							<HStack gap={3}>
								<Button
									variant='ghost'
									size='sm'
									onClick={handleBackClick}
									fontFamily='"Zalando Sans Expanded", sans-serif'>
									<HStack gap={2}>
										<ArrowLeft size={16} />
										<Text>Back to Profile</Text>
									</HStack>
								</Button>
							</HStack>

							<Box>
								<Text {...profileStyles.sectionHeading}>My Orders</Text>
								<Text
									fontSize='sm'
									color='gray.600'
									fontFamily='"Zalando Sans Expanded", sans-serif'>
									Track and manage your order history
								</Text>
							</Box>
						</VStack>

						{/* Filters and Search */}
						<VStack
							alignItems='stretch'
							gap={4}>
							<Grid
								templateColumns={{ base: '1fr', md: '2fr 1fr 1fr' }}
								gap={4}>
								{/* Search */}
								<Box position='relative'>
									<Box
										position='absolute'
										left='3'
										top='50%'
										transform='translateY(-50%)'
										zIndex='2'>
										<Search
											size={16}
											color='#9CA3AF'
										/>
									</Box>
									<Input
										{...profileStyles.input}
										placeholder='Search by order number...'
										value={searchTerm}
										onChange={e => setSearchTerm(e.target.value)}
										pl='10'
									/>
								</Box>

								{/* Status Filter */}
								<select
									style={{
										height: '44px',
										borderColor: '#D1D5DB',
										borderRadius: '6px',
										fontFamily: '"Zalando Sans Expanded", sans-serif',
										fontSize: '14px',
										padding: '0 12px',
										border: '1px solid #D1D5DB',
										width: '100%',
									}}
									value={statusFilter}
									onChange={e => setStatusFilter(e.target.value)}>
									<option value='all'>All Status</option>
									<option value='confirmed'>Confirmed</option>
									<option value='processing'>Processing</option>
									<option value='shipped'>Shipped</option>
									<option value='delivered'>Delivered</option>
									<option value='cancelled'>Cancelled</option>
								</select>

								{/* Sort */}
								<select
									style={{
										height: '44px',
										borderColor: '#D1D5DB',
										borderRadius: '6px',
										fontFamily: '"Zalando Sans Expanded", sans-serif',
										fontSize: '14px',
										padding: '0 12px',
										border: '1px solid #D1D5DB',
										width: '100%',
									}}
									value={sortBy}
									onChange={e => setSortBy(e.target.value)}>
									<option value='date-desc'>Newest First</option>
									<option value='date-asc'>Oldest First</option>
									<option value='total-desc'>Highest Amount</option>
									<option value='total-asc'>Lowest Amount</option>
								</select>
							</Grid>

							{/* Results Summary */}
							<HStack
								justify='space-between'
								align='center'>
								<Text
									fontSize='sm'
									color='gray.600'
									fontFamily='"Zalando Sans Expanded", sans-serif'>
									Showing {filteredAndSortedOrders.length} of {orders.length} orders
								</Text>

								{(searchTerm || statusFilter !== 'all') && (
									<Button
										size='sm'
										variant='ghost'
										onClick={() => {
											setSearchTerm('');
											setStatusFilter('all');
											setSortBy('date-desc');
										}}
										fontFamily='"Zalando Sans Expanded", sans-serif'>
										<HStack gap={2}>
											<Filter size={14} />
											<Text>Clear Filters</Text>
										</HStack>
									</Button>
								)}
							</HStack>
						</VStack>

						{/* Orders Grid */}
						{filteredAndSortedOrders.length > 0 ? (
							<Grid {...profileStyles.ordersGrid}>
								{filteredAndSortedOrders.map(order => (
									<OrderCard
										key={order.id}
										order={order}
										onClick={handleOrderClick}
									/>
								))}
							</Grid>
						) : (
							<Box {...profileStyles.emptyState}>
								<Package {...profileStyles.emptyStateIcon} />
								<Text {...profileStyles.emptyStateText}>
									{searchTerm || statusFilter !== 'all'
										? 'No orders match your filters'
										: 'No orders found'}
								</Text>
								<Text {...profileStyles.emptyStateSubtext}>
									{searchTerm || statusFilter !== 'all'
										? 'Try adjusting your search or filter criteria'
										: 'Start shopping to create your first order'}
								</Text>
								{!(searchTerm || statusFilter !== 'all') && (
									<Link href='/'>
										<Button
											{...profileStyles.primaryButton}
											mt={4}>
											Start Shopping
										</Button>
									</Link>
								)}
							</Box>
						)}
					</VStack>
				</Box>
			</Box>
		</Box>
	);
}
