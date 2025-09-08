export const newArrivals = Array.from({ length: 5 }, () => ({
	image: '/image-9.webp',
	title: 'Premium Cotton T-Shirt',
	price: '899',
	originalPrice: '1299',
	discount: '30',
}));

export const signatureProducts = Array.from({ length: 5 }, () => ({
	image: '/api/placeholder/250/200',
	title: 'Signature Polo Shirt',
	price: '1299',
	originalPrice: '1899',
	discount: '25',
}));

// data.ts
export interface Product {
	id: number;
	name: string;
	price: number;
	originalPrice?: number;
	image: string;
	isViewMore?: boolean;
}

// ✅ Full product type for catalog
export interface DetailedProduct {
	id: number;
	name: string;
	price: number;
	oldPrice: number;
	discount: number;
	color: string;
	sizes: string[];
	sku: string;
	category: string;
	subcategory: string;
	images: string[];
	sizeChart: string;
	description?: string;
	delivery?: string;
}

export interface CategoryData {
	title: string;
	mainImage: string;
	products: Product[];
}

export interface CategoryItem {
	id: any;
	title: string;
	image: string;
}

export const menPoloData: CategoryData = {
	title: 'Mens Collection',
	mainImage: '/image-1.webp',
	products: [
		{
			id: 1,
			name: 'Classic Polo',
			price: 1200.0,
			originalPrice: 1500.0,
			image: '/image-2.webp',
		},
		{
			id: 2,
			name: 'Striped Polo',
			price: 1140.0,
			originalPrice: 1400.0,
			image: '/image-3.webp',
		},
		{
			id: 3,
			name: 'Premium Polo',
			price: 1140.0,
			originalPrice: 1450.0,
			image: '/image-4.webp',
		},
		{
			id: 4,
			name: 'Sport Polo',
			price: 1140.0,
			originalPrice: 1450.0,
			image: '/image-5.webp',
		},
		{
			id: 5,
			name: 'Contrast Polo',
			price: 790.0,
			originalPrice: 1100.0,
			image: '/image-6.webp',
		},
		{
			id: 6,
			name: 'Mint Polo',
			price: 990.0,
			originalPrice: 1200.0,
			image: '/image-7.webp',
		},
		{
			id: 7,
			name: 'Navy Polo',
			price: 990.0,
			originalPrice: 1250.0,
			image: '/image-8.webp',
		},
		{
			id: 8,
			name: '',
			price: 750.0,
			originalPrice: 950.0,
			image: '/image-9.jpg',
			isViewMore: true,
		},
	],
};

export const womenKurtiData: CategoryData = {
	title: 'Women Collection',
	mainImage: '/image-10.jpg',
	products: [
		{
			id: 9,
			name: 'Floral Kurti',
			price: 1140.0,
			originalPrice: 1450.0,
			image: '/image-11.webp',
		},
		{
			id: 10,
			name: 'Purple Dress',
			price: 1950.0,
			originalPrice: 2200.0,
			image: '/image-12.png',
		},
		{
			id: 11,
			name: 'Black Tunic',
			price: 1590.0,
			originalPrice: 1800.0,
			image: '/image-13.webp',
		},
		{
			id: 12,
			name: 'Printed Top',
			price: 1290.0,
			originalPrice: 1500.0,
			image: '/image-14.webp',
		},
		{
			id: 13,
			name: 'Floral Tunic',
			price: 1230,
			image: '/image-15.webp',
		},
		{
			id: 14,
			name: 'Teal Dress',
			price: 1950.0,
			originalPrice: 2200.0,
			image: '/image-16.webp',
		},
		{
			id: 15,
			name: 'Blue Top',
			price: 1150.0,
			originalPrice: 1250.0,
			image: '/image-1.webp',
		},
		{
			id: 16,
			name: '',
			price: 1250.0,
			originalPrice: 1500.0,
			image: '/image-2.webp',
			isViewMore: true,
		},
	],
};

export const categoryData: CategoryItem[] = [
	{
		id: 'Shirts',
		title: 'Shirts',
		image: 'image-2.webp',
	},
	{
		id: 'Panjabi',
		title: 'Panjabi',
		image: 'image-5.webp',
	},
	{
		id: 'Fashion Tops',
		title: 'Fashion Tops',
		image: 'image-1.webp',
	},
	{
		id: 'Exclusive Lawn',
		title: 'Exclusive Lawn',
		image: 'image-6.webp',
	},
];

export const product: DetailedProduct = {
	id: 1,
	name: 'Premium Jacquard Polo Shirts For Men',
	price: 1160,
	oldPrice: 1450,
	discount: 20,
	color: 'Navy Blue',
	sizes: ['M', 'L', 'XL', 'XXL', '3XL'],
	sku: 'SU3P008',
	category: "Men's",
	subcategory: 'Polo Shirt',
	images: ['/image-1.webp', '/image-2.webp', '/image-3.webp'],
	sizeChart: '/sizechart.webp',
	description: '...',
	delivery: '...',
};

export const products: DetailedProduct[] = [
	{
		id: 1,
		name: 'Premium Leather Bag',
		price: 1160,
		oldPrice: 1450,
		discount: 20,
		color: 'Navy Blue',
		sizes: ['One Size'],
		sku: 'BG1001',
		category: 'Bags',
		subcategory: 'Crossbody Bag',
		images: ['/product/p-bag3.jpg', '/product/p-bag2.jpg'],
		sizeChart: '/sizechart.webp',
	},
	{
		id: 2,
		name: 'Designer Tote Bag',
		price: 890,
		oldPrice: 1100,
		discount: 19,
		color: 'Pink',
		sizes: ['One Size'],
		sku: 'BG1002',
		category: 'Bags',
		subcategory: 'Tote Bag',
		images: ['/product/p-bag4.jpg', '/product/p-bag1.jpg'],
		sizeChart: '/sizechart.webp',
	},
	{
		id: 3,
		name: 'Stylish Sunglasses',
		price: 1450,
		oldPrice: 1750,
		discount: 17,
		color: 'Dark Blue',
		sizes: ['One Size'],
		sku: 'AC1003',
		category: 'Accessories',
		subcategory: 'Sunglasses',
		images: ['/product/p-sunglass1.jpg', '/product/p-sunglass2.jpg'],
		sizeChart: '/sizechart.webp',
	},
	{
		id: 4,
		name: 'Gold Plated Necklace',
		price: 3200,
		oldPrice: 3900,
		discount: 18,
		color: 'Gold',
		sizes: ['One Size'],
		sku: 'JW1004',
		category: 'Jewelry',
		subcategory: 'Necklace',
		images: ['/product/p-necklace1.jpg', '/product/p-necklace3.jpg'],
		sizeChart: '/sizechart.webp',
	},
	{
		id: 5,
		name: 'Premium Leather Belt',
		price: 560,
		oldPrice: 750,
		discount: 25,
		color: 'Brown',
		sizes: ['S', 'M', 'L', 'XL'],
		sku: 'AC1005',
		category: 'Accessories',
		subcategory: 'Belt',
		images: ['/product/p-belt1.jpg', '/product/p-belt2.jpg'],
		sizeChart: '/sizechart.webp',
	},
	{
		id: 6,
		name: 'Classic Analog Watch',
		price: 2200,
		oldPrice: 2650,
		discount: 17,
		color: 'Silver',
		sizes: ['One Size'],
		sku: 'WT1006',
		category: 'Watches',
		subcategory: 'Analog Watch',
		images: ['/product/p-watch1.jpg', '/product/p-watch2.jpg'],
		sizeChart: '/sizechart.webp',
	},
	{
		id: 7,
		name: 'Evening Clutch Bag',
		price: 1850,
		oldPrice: 2100,
		discount: 12,
		color: 'Black',
		sizes: ['One Size'],
		sku: 'BG1007',
		category: 'Bags',
		subcategory: 'Clutch Bag',
		images: ['/product/p-bag4.jpg', '/product/p-bag5.jpg'],
		sizeChart: '/sizechart.webp',
	},
	{
		id: 8,
		name: 'Silver Diamond Earrings',
		price: 1250,
		oldPrice: 1600,
		discount: 22,
		color: 'Silver',
		sizes: ['One Size'],
		sku: 'JW1008',
		category: 'Jewelry',
		subcategory: 'Earrings',
		images: ['/product/p-earring1.jpg', '/product/p-earring2.jpg'],
		sizeChart: '/sizechart.webp',
	},
	{
		id: 9,
		name: 'Modest Long Sleeve Dress',
		price: 1350,
		oldPrice: 1600,
		discount: 16,
		color: 'Navy',
		sizes: ['S', 'M', 'L', 'XL', 'XXL'],
		sku: 'MW1009',
		category: 'Modest Wear',
		subcategory: 'Long Dress',
		images: ['/product/p-modest1.jpg', '/product/p-modest2.jpg'],
		sizeChart: '/sizechart.webp',
	},
	{
		id: 10,
		name: 'Comfortable Pajama Set',
		price: 1750,
		oldPrice: 2100,
		discount: 17,
		color: 'Light Blue',
		sizes: ['S', 'M', 'L', 'XL'],
		sku: 'SW1010',
		category: 'Sleep Wear',
		subcategory: 'Pajama Set',
		images: ['/product/p-pajama1.jpg', '/product/p-pajama2.jpg'],
		sizeChart: '/sizechart.webp',
	},
];
