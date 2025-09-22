'use client';
import React from 'react';
import Link from 'next/link';
import { Box, Grid, Text, Image, Container } from '@chakra-ui/react';

const categories = [
	{
		_id: 'women',
		name: 'WOMEN',
		image: '/category/cat-modest-wear.jpg',
		description: 'Discover our latest collection',
	},
	{
		_id: 'men',
		name: 'MEN',
		image: '/product/p-watch1.jpg',
		description: 'Stylish pieces for every occasion',
	},
	{
		_id: 'shoes',
		name: 'SHOES',
		image: '/category/shoes.svg',
		description: 'Step into style',
	},
	{
		_id: 'accessories',
		name: 'ACCESSORIES',
		image: '/category/cat-accessories.jpg',
		description: 'Complete your look',
	},
	{
		_id: 'bags',
		name: 'BAGS',
		image: '/category/cat-bag.jpg',
		description: 'Carry in style',
	},
	{
		_id: 'jewelry',
		name: 'JEWELRY',
		image: '/category/cat-jewelry.jpg',
		description: 'Shine bright',
	},
];

const CategoryCard = ({
	category,
}: {
	category: { _id: string; name: string; image: string; description: string };
}) => (
	<Link href={`/category/${category._id}`}>
		<Box
			position='relative'
			overflow='hidden'
			bg='white'
			border='1px solid'
			borderColor='gray.200'
			borderRadius='none'
			cursor='pointer'
			transition='all 0.3s ease'
			_hover={{
				boxShadow: 'lg',
				transform: 'translateY(-2px)',
			}}
			h='300px'>
			{/* Category Image */}
			<Box
				position='relative'
				h='220px'
				overflow='hidden'>
				<Image
					src={category?.image}
					alt={category?.name}
					objectFit='cover'
					w='full'
					h='full'
					transition='all 0.4s ease'
					_groupHover={{ transform: 'scale(1.05)' }}
				/>
				<Box
					position='absolute'
					inset='0'
					bg='blackAlpha.200'
					transition='all 0.3s ease'
					_groupHover={{ bg: 'blackAlpha.300' }}
				/>
			</Box>

			{/* Category Info */}
			<Box
				p={4}
				textAlign='center'
				bg='white'>
				<Text
					fontSize='md'
					fontWeight='600'
					color='gray.900'
					letterSpacing='w_ider'
					mb={1}>
					{category?.name}
				</Text>
				<Text
					fontSize='xs'
					color='gray.600'
					lineHeight='1.4'>
					{category?.description}
				</Text>
			</Box>
		</Box>
	</Link>
);

const CategoryGridNew = () => (
	<Container
		px={{ base: 4, md: 7, lg: '92px', '2xl': 20 }}
		py={16}
		pb={{ base: 4, md: 16 }}>
		<Box
			textAlign='center'
			mb={12}>
			<Text
				fontSize={{ base: '2xl', md: '3xl' }}
				fontWeight='500'
				color='gray.900'
				letterSpacing='wider'
				mb={4}>
				SHOP BY CATEGORY
			</Text>
			<Text
				fontSize='sm'
				color='gray.600'
				maxW='500px'
				letterSpacing='.5px'
				mx='auto'
				lineHeight='1.6'>
				Discover our curated collections designed for every style and occasion
			</Text>
		</Box>

		<Grid
			templateColumns={{
				base: 'repeat(2, 1fr)',
				md: 'repeat(3, 1fr)',
			}}
			gap={{ base: 2, md: 4 }}
			role='group'>
			{categories?.map(category => (
				<CategoryCard
					key={category?._id}
					category={category}
				/>
			))}
		</Grid>
	</Container>
);

export default CategoryGridNew;
