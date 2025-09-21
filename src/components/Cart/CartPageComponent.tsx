'use client';
import React from 'react';
import PageLayout from '../Layout/PageLayout';
import { Box, Container, Grid, Heading } from '@chakra-ui/react';
import CheckoutSteps from '../Checkout/CheckoutSteps';
import CartItems from './CartItems';
import OrderSummary from '../Checkout/OrderSummary';
import Coupon from '../reusable/Coupon';

const CartPageComponent = () => {
	return (
		<PageLayout>
			<Container
				maxW='7xl'
				py={8}>
				{/* Header */}
				<Box
					textAlign='center'
					mb={8}>
					<Heading
						size='xl'
						fontFamily='"Zalando Sans Expanded", sans-serif'
						fontWeight='500'
						mb={2}>
						Shopping Cart
					</Heading>
					<CheckoutSteps currentStep={0} />
				</Box>

				{/* Main Layout */}
				<Grid
					templateColumns={{ base: '1fr', lg: '1.2fr 0.8fr' }}
					gap={12}
					alignItems='start'>
					{/* Left Side - Cart Items */}
					<Box>
						<CartItems />
						<Box mt={6}>
							<Coupon />
						</Box>
					</Box>

					{/* Right Side - Order Summary */}
					<OrderSummary />
				</Grid>
			</Container>
		</PageLayout>
	);
};

export default CartPageComponent;
