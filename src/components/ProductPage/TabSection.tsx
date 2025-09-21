'use client';
import { Box, Heading, Tabs, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type TabSectionProps = {
	product: any;
};

const TabSection: FC<TabSectionProps> = ({ product }) => {
	return (
		<Box
			py={8}
			bg='white'>
			<Tabs.Root
				defaultValue='description'
				variant='line'>
				<Tabs.List
					borderBottom='1px solid #e2e8f0'
					mb={6}
					justifyContent='center'>
					<Tabs.Trigger
						value='description'
						fontFamily="'Zalando Sans Expanded', sans-serif"
						fontSize='14px'
						fontWeight='500'
						px={6}
						py={3}
						color='gray.600'
						_hover={{ color: 'black' }}
						_selected={{ color: 'black', borderColor: 'black' }}>
						DESCRIPTION
					</Tabs.Trigger>
					<Tabs.Trigger
						value='delivery'
						fontFamily="'Zalando Sans Expanded', sans-serif"
						fontSize='14px'
						fontWeight='500'
						px={6}
						py={3}
						color='gray.600'
						_hover={{ color: 'black' }}
						_selected={{ color: 'black', borderColor: 'black' }}>
						SHIPPING
					</Tabs.Trigger>
					<Tabs.Indicator bg='black' />
				</Tabs.List>

				{/* Description */}
				<Tabs.Content
					value='description'
					py={4}>
					<Box
						maxW='600px'
						mx='auto'>
						<Text
							whiteSpace='pre-line'
							fontSize='14px'
							lineHeight='1.6'
							color='gray.700'
							fontFamily="'Zalando Sans Expanded', sans-serif">
							{product.description || 'Product description not available.'}
						</Text>
					</Box>
				</Tabs.Content>

				{/* Delivery */}
				<Tabs.Content
					value='delivery'
					py={4}>
					<Box
						maxW='600px'
						mx='auto'>
						<Text
							whiteSpace='pre-line'
							fontSize='14px'
							lineHeight='1.6'
							color='gray.700'
							fontFamily="'Zalando Sans Expanded', sans-serif">
							{product.delivery ||
								'Standard shipping: 3-5 business days\nExpress shipping: 1-2 business days\nFree shipping on orders over ৳1000'}
						</Text>
					</Box>
				</Tabs.Content>
			</Tabs.Root>
		</Box>
	);
};

// export default TabSection;

// type TabSectionProps = {
// 	product: any;
// 	reviewText: any;
// 	setReviewText: any;
// 	name: any;
// 	setName: any;
// 	email: any;
// 	setEmail: any;
// 	handleSubmitReview: any;
// };

// const TabSection: FC<TabSectionProps> = ({
// 	product,
// 	reviewText,
// 	setReviewText,
// 	name,
// 	setName,
// 	email,
// 	setEmail,
// 	handleSubmitReview,
// }) => {
// 	return (
// 		<Box
// 			py={12}
// 			bg='white'>
// 			<Tabs.Root
// 				defaultValue='description'
// 				variant='line'>
// 				<Tabs.List
// 					borderBottom='1px solid #e2e8f0'
// 					mb={8}
// 					justifyContent='center'>
// 					<Tabs.Trigger
// 						value='description'
// 						fontFamily="'Zalando Sans Expanded', sans-serif"
// 						fontSize='15px'
// 						fontWeight='500'
// 						px={8}
// 						py={4}
// 						color='gray.600'
// 						_hover={{ color: 'black' }}
// 						_selected={{ color: 'black', borderColor: 'black' }}>
// 						DESCRIPTION
// 					</Tabs.Trigger>
// 					<Tabs.Trigger
// 						value='delivery'
// 						fontFamily="'Zalando Sans Expanded', sans-serif"
// 						fontSize='15px'
// 						fontWeight='500'
// 						px={8}
// 						py={4}
// 						color='gray.600'
// 						_hover={{ color: 'black' }}
// 						_selected={{ color: 'black', borderColor: 'black' }}>
// 						SPECIFICATION
// 					</Tabs.Trigger>
// 					<Tabs.Trigger
// 						value='review'
// 						fontFamily="'Zalando Sans Expanded', sans-serif"
// 						fontSize='15px'
// 						fontWeight='500'
// 						px={8}
// 						py={4}
// 						color='gray.600'
// 						_hover={{ color: 'black' }}
// 						_selected={{ color: 'black', borderColor: 'black' }}>
// 						REVIEWS
// 					</Tabs.Trigger>
// 					<Tabs.Indicator bg='black' />
// 				</Tabs.List>

// 				{/* Description */}
// 				<Tabs.Content
// 					value='description'
// 					py={8}>
// 					<Box
// 						maxW='800px'
// 						mx='auto'
// 						textAlign='center'>
// 						<Heading
// 							size='lg'
// 							mb={6}
// 							fontFamily="'Zalando Sans Expanded', sans-serif"
// 							fontWeight='600'
// 							letterSpacing='-0.02em'>
// 							{product.name}
// 						</Heading>
// 						<Text
// 							whiteSpace='pre-line'
// 							fontSize='16px'
// 							lineHeight='1.6'
// 							color='gray.700'
// 							fontFamily="'Zalando Sans Expanded', sans-serif">
// 							{product.description}
// 						</Text>
// 					</Box>
// 				</Tabs.Content>

// 				{/* Delivery */}
// 				<Tabs.Content
// 					value='delivery'
// 					py={8}>
// 					<Box
// 						maxW='800px'
// 						mx='auto'
// 						textAlign='center'>
// 						<Text
// 							whiteSpace='pre-line'
// 							fontSize='16px'
// 							lineHeight='1.6'
// 							color='gray.700'
// 							fontFamily="'Zalando Sans Expanded', sans-serif">
// 							{product.delivery}
// 						</Text>
// 					</Box>
// 				</Tabs.Content>

// 				{/* Review */}
// 				<Tabs.Content
// 					value='review'
// 					py={8}>
// 					<Box
// 						maxW='600px'
// 						mx='auto'>
// 						<Heading
// 							size='lg'
// 							mb={8}
// 							textAlign='center'
// 							fontFamily="'Zalando Sans Expanded', sans-serif"
// 							fontWeight='600'
// 							letterSpacing='-0.02em'>
// 							WRITE A REVIEW
// 						</Heading>

// 						<Box
// 							bg='gray.50'
// 							p={8}
// 							borderRadius='lg'>
// 							<HStack
// 								justify='center'
// 								mb={6}>
// 								{[1, 2, 3, 4, 5].map(i =>
// 									i <= 4 ? (
// 										<AiFillStar
// 											key={i}
// 											color='#fbbf24'
// 											size={24}
// 										/>
// 									) : (
// 										<AiOutlineStar
// 											key={i}
// 											color='#d1d5db'
// 											size={24}
// 										/>
// 									)
// 								)}
// 							</HStack>

// 							{/* Review Text */}
// 							<Textarea
// 								placeholder='Share your thoughts about this product...'
// 								value={reviewText}
// 								onChange={e => setReviewText(e.target.value)}
// 								mb={4}
// 								border='1px solid #e2e8f0'
// 								borderRadius='md'
// 								_focus={{ borderColor: 'black', boxShadow: '0 0 0 1px black' }}
// 								fontFamily="'Zalando Sans Expanded', sans-serif"
// 								fontSize='14px'
// 								rows={4}
// 							/>

// 							{/* Name & Email */}
// 							<HStack
// 								mb={4}
// 								flexDir={{ base: 'column', md: 'row' }}>
// 								<Input
// 									placeholder='Your Name'
// 									value={name}
// 									onChange={e => setName(e.target.value)}
// 									border='1px solid #e2e8f0'
// 									borderRadius='md'
// 									_focus={{ borderColor: 'black', boxShadow: '0 0 0 1px black' }}
// 									fontFamily="'Zalando Sans Expanded', sans-serif"
// 									fontSize='14px'
// 								/>
// 								<Input
// 									placeholder='Your Email'
// 									type='email'
// 									value={email}
// 									onChange={e => setEmail(e.target.value)}
// 									border='1px solid #e2e8f0'
// 									borderRadius='md'
// 									_focus={{ borderColor: 'black', boxShadow: '0 0 0 1px black' }}
// 									fontFamily="'Zalando Sans Expanded', sans-serif"
// 									fontSize='14px'
// 								/>
// 							</HStack>

// 							{/* Submit Button */}
// 							<Button
// 								bg='black'
// 								color='white'
// 								_hover={{ bg: 'gray.800' }}
// 								fontFamily="'Zalando Sans Expanded', sans-serif"
// 								fontSize='14px'
// 								fontWeight='500'
// 								letterSpacing='0.02em'
// 								px={8}
// 								py={6}
// 								borderRadius='md'
// 								onClick={handleSubmitReview}
// 								w='full'>
// 								SUBMIT REVIEW
// 							</Button>
// 						</Box>
// 					</Box>
// 				</Tabs.Content>
// 			</Tabs.Root>
// 		</Box>
// 	);
// };

export default TabSection;
