'use client';
import {
	Box,
	Button,
	Heading,
	HStack,
	Input,
	Tabs,
	Text,
	Textarea,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

type TabSectionProps = {
	product: any;
	reviewText: any;
	setReviewText: any;
	name: any;
	setName: any;
	email: any;
	setEmail: any;
	handleSubmitReview: any;
};

const TabSection: FC<TabSectionProps> = ({
	product,
	reviewText,
	setReviewText,
	name,
	setName,
	email,
	setEmail,
	handleSubmitReview,
}) => {
	return (
		<Box>
			<Tabs.Root defaultValue='description'>
				<Tabs.List borderBottom={'1px solid #ffffff'}>
					<Tabs.Trigger value='description'>Description</Tabs.Trigger>
					<Tabs.Trigger value='delivery'>Specification </Tabs.Trigger>
					<Tabs.Trigger value='review'>Review</Tabs.Trigger>
					<Tabs.Indicator />
				</Tabs.List>

				{/* Description */}
				<Tabs.Content value='description'>
					<Heading size='md' mb={3}>
						{product.name}
					</Heading>
					<Text whiteSpace='pre-line'>{product.description}</Text>
				</Tabs.Content>

				{/* Delivery */}
				<Tabs.Content value='specification '>
					<Text whiteSpace='pre-line'>{product.delivery}</Text>
				</Tabs.Content>

				{/* Review */}
				<Tabs.Content value='review'>
					<Box width={{ base: '100%', md: '50%' }}>
						<Heading size='md' mb={4}>
							Write a Review
						</Heading>

						<HStack>
							{[1, 2, 3, 4, 5].map(i =>
								i <= 4 ? (
									<AiFillStar key={i} color='gold' size={20} />
								) : (
									<AiOutlineStar key={i} color='gold' size={20} />
								)
							)}
						</HStack>

						{/* Review Text */}
						<Textarea
							placeholder='Write your review...'
							value={reviewText}
							onChange={e => setReviewText(e.target.value)}
							mb={2}
							mt={4}
							border={'1px solid #ffffff'}
						/>

						{/* Name & Email */}
						<Input
							placeholder='Your Name'
							value={name}
							onChange={e => setName(e.target.value)}
							mb={3}
							border={'1px solid #ffffff'}
						/>
						<Input
							placeholder='Your Email'
							type='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							mb={4}
							border={'1px solid #ffffff'}
						/>

						{/* Submit Button */}
						<Button colorScheme='blue' onClick={handleSubmitReview}>
							Submit Review
						</Button>
					</Box>
				</Tabs.Content>
			</Tabs.Root>
		</Box>
	);
};

export default TabSection;
