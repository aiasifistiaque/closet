// Categories data for the categories page
export interface CategoryItem {
	id: string;
	name: string;
	description: string;
	image: string;
	productCount: number;
	slug: string;
	featured: boolean;
	order: number;
}

export const categoriesData: CategoryItem[] = [
	{
		id: 'accessories',
		name: 'Accessories',
		description: 'Complete your look with our curated accessories collection',
		image: '/category/cat-accessories.jpg',
		productCount: 156,
		slug: 'accessories',
		featured: true,
		order: 1,
	},
	{
		id: 'bags',
		name: 'Bags',
		description: 'Stylish bags for every occasion and lifestyle',
		image: '/category/cat-bag.jpg',
		productCount: 89,
		slug: 'bags',
		featured: true,
		order: 2,
	},
	{
		id: 'jewelry',
		name: 'Jewelry',
		description: 'Elegant jewelry pieces to enhance your style',
		image: '/category/cat-jewelry.jpg',
		productCount: 203,
		slug: 'jewelry',
		featured: true,
		order: 3,
	},
	{
		id: 'modest-wear',
		name: 'Modest Wear',
		description: 'Contemporary modest fashion for the modern woman',
		image: '/category/cat-modest-wear.jpg',
		productCount: 124,
		slug: 'modest-wear',
		featured: true,
		order: 4,
	},
	{
		id: 'sleep-wear',
		name: 'Sleep Wear',
		description: 'Comfortable and stylish sleepwear essentials',
		image: '/category/cat-sleep-wear.jpg',
		productCount: 76,
		slug: 'sleep-wear',
		featured: false,
		order: 5,
	},
	{
		id: 'watches',
		name: 'Watches',
		description: 'Timeless watches that make a statement',
		image: '/category/cat-watch.jpg',
		productCount: 45,
		slug: 'watches',
		featured: true,
		order: 6,
	},
	{
		id: 'shoes',
		name: 'Shoes',
		description: 'Step out in style with our footwear collection',
		image: '/category/shoes.svg',
		productCount: 167,
		slug: 'shoes',
		featured: true,
		order: 7,
	},
	{
		id: 'handbags',
		name: 'Handbags',
		description: 'Premium handbags for the discerning fashionista',
		image: '/category/cat-bag.jpg',
		productCount: 92,
		slug: 'handbags',
		featured: false,
		order: 8,
	},
	{
		id: 'sunglasses',
		name: 'Sunglasses',
		description: 'Protect your eyes in style with our sunglasses',
		image: '/category/cat-accessories.jpg',
		productCount: 34,
		slug: 'sunglasses',
		featured: false,
		order: 9,
	},
	{
		id: 'belts',
		name: 'Belts',
		description: 'Quality belts to complete your outfit',
		image: '/category/cat-accessories.jpg',
		productCount: 58,
		slug: 'belts',
		featured: false,
		order: 10,
	},
];
