import React from 'react';
import Link from 'next/link';
import { Box, Grid } from '@chakra-ui/react';
import CustomContainer from '../reusable/Container';
import SectionHeader2 from '../reusable/SectionHeader2';
import CategoryCard from '../reusable/CategoryCard';

const categories = [
	{ id: 'shoes', title: 'Shoes', icon: '/category/shoes.svg' },
	{ id: 'bags', title: 'Bags', icon: '/category/cat-bag.svg' },
	{ id: 'hijabs', title: 'Hijabs', icon: '/category/cat-modest-wear.svg' },
	{
		id: 'accessories',
		title: 'Accessories',
		icon: '/category/cat-accessories.svg',
	},
	{ id: 'watches', title: 'Watches', icon: '/category/watches.svg' },
	{ id: 'jewelry', title: 'Jewelry', icon: '/category/cat-modest-wear.svg' },
];

const CategoryGrid = () => (
	<CustomContainer>
		<Box>
			<SectionHeader2 title='Featured Collections' />
			<Grid
				mx={{ base: 0, md: 0, lg: 16 }}
				templateColumns='repeat(3, 1fr)' // always 3 columns
				gap={{ base: 4, md: 6, lg: 8 }} // responsive spacing
			>
				{categories.map(category => (
					<Link key={category.id} href={`/category/${category.id}`} passHref>
						<CategoryCard icon={category.icon} title={category.title} />
					</Link>
				))}
			</Grid>
		</Box>
	</CustomContainer>
);

export default CategoryGrid;
