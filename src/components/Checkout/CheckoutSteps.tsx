import { Flex, VStack, HStack, Text, Box } from '@chakra-ui/react';
import React from 'react';

// Steps data
export const steps = [
	{
		title: 'Cart',
		description: 'Shopping Cart',
	},
	{
		title: 'Checkout',
		description: 'Checkout',
	},
	{
		title: 'Order Complete',
		description: 'Order Complete',
	},
];

const CheckoutSteps = ({ currentStep = 0 }) => {
	return (
		<HStack
			gap={8}
			justify='center'
			py={4}>
			{steps.map((step, index) => (
				<Flex
					key={index}
					align='center'
					gap={3}>
					<Box
						w='32px'
						h='32px'
						borderRadius='full'
						bg={index <= currentStep ? 'black' : 'gray.200'}
						color={index <= currentStep ? 'white' : 'gray.500'}
						display='flex'
						alignItems='center'
						justifyContent='center'
						fontSize='sm'
						fontWeight='600'
						fontFamily='"Zalando Sans Expanded", sans-serif'>
						{index + 1}
					</Box>
					<Text
						fontSize='sm'
						fontWeight={index === currentStep ? '600' : '400'}
						color={index <= currentStep ? 'gray.900' : 'gray.500'}
						fontFamily='"Zalando Sans Expanded", sans-serif'
						display={{ base: 'none', md: 'block' }}>
						{step.title}
					</Text>
					{index < steps.length - 1 && (
						<Box
							w='40px'
							h='2px'
							bg={index < currentStep ? 'black' : 'gray.200'}
							display={{ base: 'none', md: 'block' }}
						/>
					)}
				</Flex>
			))}
		</HStack>
	);
};

export default CheckoutSteps;
