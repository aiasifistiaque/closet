import React from 'react';
import Link from 'next/link';
import CategoryCard from '../reusable/CategoryCard';
import { Box, Container, Grid } from '@chakra-ui/react';
import SectionHeader from '../reusable/SectionHeader';
import CustomContainer from '../reusable/Container';
import SectionHeader2 from '../reusable/SectionHeader2';

// JSON data for categories
const categories = [
	{ id: 'bags', title: 'Bags', image: '/category/cat-bag.jpg' },
	{ id: 'accessories', title: 'Accessories', image: '/category/cat-accessories.jpg' },
	{ id: 'watches', title: 'Watches', image: '/category/cat-watch.jpg' },
	{ id: 'jewelry', title: 'Jewelry', image: '/category/cat-jewelry.jpg' },
	{ id: 'modest-wear', title: 'Modest Wear', image: '/category/cat-modest-wear.jpg' },
	{ id: 'sleep-wear', title: 'Sleep Wear', image: '/category/cat-sleep-wear.jpg' },
];

const CategoryGrid = () => (
	<CustomContainer>
		<Box>
			<SectionHeader2 title='Shop By Category' />
			<Grid
				templateColumns={{
					base: '1fr',
					md: 'repeat(2, 1fr)',
					lg: 'repeat(6, 1fr)',
				}}
				gap={6}
			>
				{categories.map(category => (
					<Link key={category.id} href={`/category/${category.id}`} passHref>
						<CategoryCard image={category.image} title={category.title} />
					</Link>
				))}
			</Grid>
		</Box>
	</CustomContainer>
);

export default CategoryGrid;
