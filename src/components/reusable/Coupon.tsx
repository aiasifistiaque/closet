import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { colors } from '../data/color';

const Coupon = () => {
	return (
		<Box
			border={`1px solid`}
			borderColor='gray.200'
			p={6}
			mt={6}
			bg={colors.whiteBg}>
			<Text
				fontSize='sm'
				fontWeight='500'
				color='gray.900'
				mb={4}>
				Promo Code
			</Text>
			<Flex gap={2}>
				<Input
					placeholder='Enter Coupon Code'
					border={`1px solid ${colors.blackBorder}`}
					borderRadius='none'
					fontSize='sm'
					h='44px'
					flex='1'
					_hover={{ borderColor: 'gray.400' }}
					_focus={{
						borderColor: 'blue.500',
						boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)',
						outline: 'none',
					}}
				/>
				<Button
					borderRadius='none'
					bg='black'
					color='white'
					fontWeight='500'
					px={6}
					h='44px'
					_hover={{ bg: 'gray.800' }}>
					Apply
				</Button>
			</Flex>
		</Box>
	);
};

export default Coupon;
