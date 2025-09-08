'use client';

import { colors } from '@/components/data/color';
import PageLayout from '@/components/Layout/PageLayout';
import PrimaryButton from '@/components/reusable/PrimaryButton';
import { Box, VStack, Heading, Text, Image } from '@chakra-ui/react';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';


export default function OrderSuccess() {
	return (
		<PageLayout>
			<Box
				minH='80vh'
				display='flex'
				alignItems='center'
				justifyContent='center'
				// bg='gray.50'
				p={4}
			>
				<VStack
					bg='white'
					p={8}
					borderRadius='lg'
					boxShadow='lg'
					maxW='md'
					w='full'
					textAlign='center'
					gap={6}
				>
					{/* Success Icon */}
					<IoCheckmarkDoneCircleOutline size={32} />

					{/* Success Message */}
					<VStack gap={2}>
						<Heading size='lg' color='green.600'>
							Order Confirmed!
						</Heading>
						<Text color='gray.600' fontSize='md'>
							Thank you for your purchase. Your order has been successfully
							placed.
						</Text>
					</VStack>

					{/* Order Details */}
					<Box
						w='full'
						p={4}
						bg='gray.50'
						borderRadius='md'
						border={`1px solid ${colors.blackBorder}`}
					>
						<Text fontSize='sm' color='gray.600' mb={2}>
							You will receive an email confirmation shortly with your order
							details and tracking information.
						</Text>
						<Text fontSize='xs' color='gray.500'>
							Order ID: #{Math.random().toString().substr(2, 8).toUpperCase()}
						</Text>
					</Box>

					{/* Action Buttons */}
					<VStack gap={3} w='full'>
						<PrimaryButton w='full' bgColor='black' color='white' href='/'>
							Continue Shopping
						</PrimaryButton>

						{/* <PrimaryButton
							w='full'
							variant='outline'
							border={`1px solid ${colors.blackBorder}`}
							href='/orders'
						>
							View Orders
						</PrimaryButton> */}
					</VStack>
				</VStack>
			</Box>
		</PageLayout>
	);
}
