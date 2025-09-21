'use client';
import React from 'react';
import { Box, Button, Text, HStack, IconButton } from '@chakra-ui/react';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
	quantity: number;
	onQuantityChange: (quantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onQuantityChange }) => {
	const handleDecrease = () => {
		if (quantity > 1) {
			onQuantityChange(quantity - 1);
		}
	};

	const handleIncrease = () => {
		onQuantityChange(quantity + 1);
	};

	return (
		<Box>
			<Text
				fontSize='sm'
				fontWeight='500'
				mb={2}
				fontFamily='"Zalando Sans Expanded", sans-serif'
				textTransform='uppercase'
				letterSpacing='0.5px'>
				Quantity
			</Text>
			<HStack
				gap={0}
				w='120px'>
				<IconButton
					aria-label='Decrease quantity'
					onClick={handleDecrease}
					size='sm'
					variant='outline'
					borderColor='gray.300'
					borderRadius='none'
					disabled={quantity <= 1}
					_hover={{ bg: 'gray.100' }}>
					<Minus size={14} />
				</IconButton>
				<Box
					flex={1}
					textAlign='center'
					py={2}
					border='1px solid'
					borderColor='gray.300'
					borderLeft='none'
					borderRight='none'
					fontFamily='"Zalando Sans Expanded", sans-serif'
					fontSize='sm'
					fontWeight='500'>
					{quantity}
				</Box>
				<IconButton
					aria-label='Increase quantity'
					onClick={handleIncrease}
					size='sm'
					variant='outline'
					borderColor='gray.300'
					borderRadius='none'
					_hover={{ bg: 'gray.100' }}>
					<Plus size={14} />
				</IconButton>
			</HStack>
		</Box>
	);
};

export default QuantitySelector;
