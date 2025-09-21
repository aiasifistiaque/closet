'use client';
import { Container, Grid, Box, Text, Heading } from '@chakra-ui/react';
import PageLayout from '../Layout/PageLayout';
import CheckoutSteps from './CheckoutSteps';
import OrderSummary from './OrderSummary';
import BillingForm from './BillingForm';
import Coupon from '../reusable/Coupon';

const CheckoutPageComponent = () => {
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
						Checkout
					</Heading>
					<CheckoutSteps currentStep={1} />
				</Box>

				{/* Main Layout */}
				<Grid
					templateColumns={{ base: '1fr', lg: '1.2fr 0.8fr' }}
					gap={12}
					alignItems='start'>
					{/* Left Side - Checkout Form */}
					<BillingForm />

					{/* Right Side - Order Summary */}
					<Box>
						<OrderSummary />
						<Box mt={6}>
							<Coupon />
						</Box>
					</Box>
				</Grid>
			</Container>
		</PageLayout>
	);
};

export default CheckoutPageComponent;
