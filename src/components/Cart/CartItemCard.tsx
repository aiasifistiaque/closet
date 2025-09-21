'use client';

import { Box, Flex, Image, Text, Button, NumberInput } from '@chakra-ui/react';
import { X } from 'lucide-react';
import React, { useState } from 'react';
import { CartItem } from '../data/cartData';
import { colors } from '../data/color';

interface CartItemCardProps {
	item: CartItem;
	onRemove?: (id: number) => void;
	onUpdateQuantity?: (qty: number) => void;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item, onRemove, onUpdateQuantity }) => {
	return (
		<Flex
			border={`1px solid ${colors.blackBorder}`}
			bg={colors.whiteBg}
			borderRadius='none'
			p={6}
			align='center'
			gap={6}
			flexWrap='wrap'
			transition='all 0.2s ease'
			_hover={{ boxShadow: 'sm' }}>
			<Image
				src={item.image}
				alt={item.title}
				boxSize='120px'
				objectFit='cover'
				borderRadius='none'
				border={`1px solid ${colors.blackBorder}`}
			/>
			<Box
				flex='1'
				minW='200px'>
				<Text
					fontFamily='"Zalando Sans Expanded", sans-serif'
					fontWeight='500'
					fontSize='md'
					color='gray.900'
					mb={1}>
					{item.title}
				</Text>
				<Text
					fontSize='sm'
					color='gray.600'
					fontFamily='"Zalando Sans Expanded", sans-serif'>
					Size: {item.size} | Color: {item.color}
				</Text>
				{onUpdateQuantity && (
					<Flex
						mt={3}
						align='center'
						gap={3}>
						<Text
							fontSize='sm'
							fontFamily='"Zalando Sans Expanded", sans-serif'
							fontWeight='500'
							color='gray.700'>
							Quantity:
						</Text>
						<NumberInput.Root
							value={item.quantity.toString()}
							min={1}
							width='100px'
							onValueChange={details => onUpdateQuantity(details.valueAsNumber)}>
							<NumberInput.Control />
							<NumberInput.Input
								border={`1px solid ${colors.blackBorder}`}
								borderRadius='none'
								fontFamily='"Zalando Sans Expanded", sans-serif'
								fontSize='sm'
								h='36px'
								_hover={{ borderColor: 'gray.400' }}
								_focus={{
									borderColor: 'blue.500',
									boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)',
									outline: 'none',
								}}
							/>
						</NumberInput.Root>
					</Flex>
				)}
			</Box>
			<Box
				textAlign='right'
				minW='120px'>
				<Text
					fontFamily='"Zalando Sans Expanded", sans-serif'
					fontWeight='600'
					fontSize='lg'
					color='gray.900'
					mb={2}>
					৳ {(item.price * item.quantity).toLocaleString()}
				</Text>
				{item.oldPrice && (
					<Text
						fontSize='sm'
						color='gray.400'
						textDecoration='line-through'
						fontFamily='"Zalando Sans Expanded", sans-serif'
						mb={2}>
						৳ {(item.oldPrice * item.quantity).toLocaleString()}
					</Text>
				)}
				{onRemove && (
					<Button
						variant='outline'
						size='sm'
						colorPalette='red'
						borderRadius='none'
						fontFamily='"Zalando Sans Expanded", sans-serif'
						fontSize='xs'
						h='32px'
						px={3}
						onClick={() => onRemove(item.id)}
						_hover={{ bg: 'red.50', borderColor: 'red.500' }}>
						<X size={12} />
						Remove
					</Button>
				)}
			</Box>
		</Flex>
	);
};

export default CartItemCard;
