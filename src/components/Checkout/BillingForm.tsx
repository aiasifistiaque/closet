import { Box, Grid, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { fields, shippingOptions } from '../data/checkoutData';
import { InputField } from '../reusable/InputField';
import DynamicSelector from './DynamicSelector';
import { colors } from '../data/color';

const BillingForm = () => {
	const [shippingArea, setShippingArea] = useState('inside');
	return (
		<Box
			border={`1px solid ${colors.blackBorder}`}
      backgroundColor={colors.whiteBg}
			rounded='md'
			p={6}
			height='100%'
			display='flex'
			flexDirection='column'
		>
			<Text fontSize='xl' fontWeight='bold' mb={6}>
				Billing And Shipping
			</Text>

			<Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4} mb={4}>
				{fields.map((field, i) => (
					<InputField
						label={field.label}
						placeholder={field.placeholder}
						key={i}
					/>
				))}
			</Grid>

			{/* Order note */}
			<InputField label='Order Note' placeholder='Order Note' type='textarea' />

			{/* Shipping Area */}
			<Box mt='auto'>
				<DynamicSelector
					title='Shipping Area'
					options={shippingOptions}
					defaultValue='inside'
					onChange={val => console.log('Shipping:', val)}
				/>
			</Box>
		</Box>
	);
};

export default BillingForm;
