import { Box, Grid, Text, VStack, HStack, Separator } from '@chakra-ui/react';
import { RadioGroup } from '@chakra-ui/react';
import React, { useState } from 'react';
import { InputField } from '../reusable/InputField';

const BillingForm = () => {
	const [deliveryMethod, setDeliveryMethod] = useState('inside');

	return (
		<VStack
			gap={8}
			align='stretch'>
			{/* Contact Section */}
			<Box>
				<Text
					fontSize='lg'
					fontWeight='600'
					mb={4}
					color='gray.900'>
					Contact
				</Text>
				<VStack
					gap={4}
					align='stretch'>
					<InputField
						label='Email or mobile phone number'
						placeholder='Email or phone number'
						type='email'
					/>
				</VStack>
			</Box>

			<Separator />

			{/* Delivery Section */}
			<Box>
				<Text
					fontSize='lg'
					fontWeight='600'
					mb={4}
					color='gray.900'>
					Delivery
				</Text>

				{/* Delivery Method Selection */}
				<Box
					border='1px solid'
					borderColor='gray.200'
					borderRadius='none'
					p={4}
					mb={6}
					bg='gray.50'>
					<Text
						fontSize='sm'
						fontWeight='500'
						mb={3}
						color='gray.700'>
						Choose a delivery method
					</Text>
					<RadioGroup.Root
						value={deliveryMethod}
						onValueChange={details => setDeliveryMethod(details.value || 'inside')}>
						<VStack
							gap={3}
							align='stretch'>
							<Box
								border='1px solid'
								borderColor={deliveryMethod === 'inside' ? 'blue.500' : 'gray.200'}
								borderRadius='none'
								p={3}
								bg='white'
								cursor='pointer'
								_hover={{ borderColor: 'blue.300' }}>
								<RadioGroup.Item value='inside'>
									<HStack
										justify='space-between'
										w='full'>
										<Text fontSize='sm'>Inside Dhaka</Text>
										<Text
											fontSize='sm'
											fontWeight='600'>
											৳60
										</Text>
									</HStack>
								</RadioGroup.Item>
							</Box>
							<Box
								border='1px solid'
								borderColor={deliveryMethod === 'outside' ? 'blue.500' : 'gray.200'}
								borderRadius='none'
								p={3}
								bg='white'
								cursor='pointer'
								_hover={{ borderColor: 'blue.300' }}>
								<RadioGroup.Item value='outside'>
									<HStack
										justify='space-between'
										w='full'>
										<Text fontSize='sm'>Outside Dhaka</Text>
										<Text
											fontSize='sm'
											fontWeight='600'>
											৳120
										</Text>
									</HStack>
								</RadioGroup.Item>
							</Box>
						</VStack>
					</RadioGroup.Root>
				</Box>

				{/* Address Form */}
				<VStack
					gap={4}
					align='stretch'>
					<Grid
						templateColumns={{ base: '1fr', md: '1fr 1fr' }}
						gap={4}>
						<InputField
							label='First name (optional)'
							placeholder='First name'
						/>
						<InputField
							label='Last name'
							placeholder='Last name'
						/>
					</Grid>

					<InputField
						label='Phone number *'
						placeholder='Phone number'
						isRequired
					/>

					<InputField
						label='Address'
						placeholder='Address'
						isRequired
					/>

					<InputField
						label='Apartment, suite, etc. (optional)'
						placeholder='Apartment, suite, etc.'
					/>

					<Grid
						templateColumns={{ base: '1fr', md: '1fr 1fr' }}
						gap={4}>
						<InputField
							label='City'
							placeholder='City'
						/>
						<InputField
							label='Postal code (optional)'
							placeholder='Postal code'
						/>
					</Grid>

					<InputField
						label='Order Note (optional)'
						placeholder='Special instructions for your order'
						type='textarea'
					/>
				</VStack>
			</Box>
		</VStack>
	);
};

export default BillingForm;
