'use client';
import { VStack, Text, EmptyState, Box, Button } from '@chakra-ui/react';
import CartItemCard from './CartItemCard';
import { useCart } from '../contexts/CartContext';
import { LuShoppingCart } from 'react-icons/lu';
import Link from 'next/link';

const CartItems = () => {
	const { cart, removeFromCart, updateQuantity } = useCart();

	return (
		<Box>
			{/* Section Header */}
			<Box mb={6}>
				<Text
					fontSize='lg'
					fontWeight='600'
					color='gray.900'
					mb={2}>
					Cart Items ({cart.length})
				</Text>
				{cart.length > 0 && (
					<Text
						fontSize='sm'
						color='gray.600'>
						Review your items and proceed to checkout
					</Text>
				)}
			</Box>

			<VStack
				gap={4}
				align='stretch'>
				{cart.length === 0 ? (
					<Box
						border='1px solid'
						borderColor='gray.200'
						borderRadius='none'
						p={12}
						textAlign='center'
						bg='gray.50'>
						<EmptyState.Root>
							<EmptyState.Content>
								<EmptyState.Indicator>
									<LuShoppingCart size={48} />
								</EmptyState.Indicator>
								<VStack
									textAlign='center'
									mt={4}>
									<EmptyState.Title
										fontSize='xl'
										color='gray.700'>
										Your cart is empty
									</EmptyState.Title>
									<EmptyState.Description
										color='gray.500'
										mb={4}>
										Explore our products and add items to your cart
									</EmptyState.Description>
									<Link href='/categories'>
										<Button
											bg='black'
											color='white'
											borderRadius='none'
											fontWeight='500'
											px={6}
											py={3}
											_hover={{ bg: 'gray.800' }}>
											Continue Shopping
										</Button>
									</Link>
								</VStack>
							</EmptyState.Content>
						</EmptyState.Root>
					</Box>
				) : (
					cart.map(item => (
						<CartItemCard
							key={`${item.id}-${item.size}`}
							item={item}
							onRemove={() => removeFromCart(item.id, item.size)}
							onUpdateQuantity={(qty: number) => updateQuantity(item.id, item.size, qty)}
						/>
					))
				)}
			</VStack>
		</Box>
	);
};

export default CartItems;
