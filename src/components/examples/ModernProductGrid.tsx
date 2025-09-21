// Example usage of ModernProductCard
import { Grid } from '@chakra-ui/react';
import ModernProductCard from '../reusable/ModernProductCard';
import { DetailedProduct } from '../data/productData';

// Example products with enhanced data for the new card
const exampleProducts: DetailedProduct[] = [
	{
		id: 1,
		name: 'Premium Cotton T-Shirt with Modern Design',
		price: 899,
		oldPrice: 1299,
		discount: 30,
		color: 'Black',
		colors: ['#000000', '#FFFFFF', '#FF0000', '#0000FF', '#00FF00'],
		sizes: ['S', 'M', 'L', 'XL'],
		sku: 'TSH001',
		category: 'T-Shirts',
		subcategory: 'Premium',
		images: ['/image-1.webp', '/image-2.webp'],
		sizeChart: '/sizechart.webp',
		brand: 'PREMIUM COLLECTION',
		rating: 4.5,
		reviewCount: 128,
		isNew: true,
		description: 'High-quality cotton t-shirt with modern design',
		delivery: 'Free delivery within 2-3 days',
	},
	{
		id: 2,
		name: 'Casual Denim Jacket',
		price: 2499,
		oldPrice: 3299,
		color: 'Blue',
		colors: ['#0066CC', '#000080'],
		sizes: ['M', 'L', 'XL'],
		sku: 'JCK002',
		category: 'Jackets',
		subcategory: 'Casual',
		images: ['/image-3.webp', '/image-4.webp'],
		sizeChart: '/sizechart.webp',
		brand: 'URBAN STYLE',
		rating: 4.2,
		reviewCount: 89,
		isNew: false,
	},
];

const ModernProductGrid = () => {
	return (
		<Grid
			templateColumns={{
				base: 'repeat(2, 1fr)',
				md: 'repeat(3, 1fr)',
				lg: 'repeat(4, 1fr)',
			}}
			gap='24px'
			p='24px'>
			{exampleProducts.map(product => (
				<ModernProductCard
					key={product.id}
					product={product}
				/>
			))}
		</Grid>
	);
};

export default ModernProductGrid;
