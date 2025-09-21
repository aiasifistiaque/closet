import React from 'react';
import HeroBanner from './HeroBanner';
import CategoryGridNew from './CategoryGridNew';
import ProductSection from './ProductSection';
import { newArrivals, products, signatureProducts } from '../data/productData';
import SpecialOffers from './SpecialOffers';
import BigDeals from './BigDeals';
import CategoryShowcase from './CategoryShowcase';
import PageLayout from '../Layout/PageLayout';
import PromotionalBanner from './PromotionalBanner';
import FeatureBanner from './FeatureBanner';
import InstagramFollowSection from './InstagramFollowSection';
import InstagramCarousel from './InstagramCarousel';

const HomepageComponent = () => {
	return (
		<PageLayout>
			{/* Hero Banner */}
			<HeroBanner />

			{/* Category Grid */}
			<CategoryGridNew />

			{/* Editor's Pick Section */}
			<ProductSection
				title="EDITOR'S PICK"
				products={products}
				layout='grid'
				viewAllLink='/category/editors-pick'
				subtitle='Curated selection of our favorite pieces'
			/>

			{/* Featured Banner 1 - Metropólis */}
			<FeatureBanner
				title='METROPÓLIS'
				description='Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo lacus meleifend menean diverra loremous.'
				buttonText='SHOP NOW'
				buttonLink='/category/metropolis'
				backgroundColor='gray.100'
				imageContent='/banner/banner1.jpg'
			/>

			{/* New Arrivals Section */}
			<ProductSection
				title='NEW ARRIVALS'
				products={products}
				layout='grid'
				viewAllLink='/category/new-arrivals'
			/>

			{/* Featured Banner 2 - Shoes Collection */}
			<FeatureBanner
				title='SHOES'
				subtitle='STEP IN STYLE'
				description='Discover our premium collection of footwear for every occasion'
				buttonText='EXPLORE COLLECTION'
				buttonLink='/category/shoes'
				backgroundColor='black'
				textColor='white'
				reverse={true}
				imageContent='/category/shoes.svg'
			/>

			{/* Trending Now Section */}
			<ProductSection
				title='TRENDING NOW'
				products={products}
				layout='grid'
				viewAllLink='/category/trending'
				subtitle="What everyone's talking about"
			/>

			{/* Featured Banner 3 - Accessories */}
			<FeatureBanner
				title='LOREM DE DORUS'
				description='Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis.'
				buttonText='SHOP NOW'
				buttonLink='/category/featured'
				backgroundColor='gray.50'
				imageContent='/category/cat-accessories.jpg'
			/>

			{/* Accessories Section */}
			<ProductSection
				title='ACCESSORIES'
				products={products}
				layout='grid'
				viewAllLink='/category/accessories'
			/>

			{/* Featured Banner 4 - Milan Collection */}
			<FeatureBanner
				title='MILANCELOS LANOS'
				description='Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis.'
				buttonText='SHOP NOW'
				buttonLink='/category/milan'
				backgroundColor='white'
				reverse={true}
				imageContent='/banner/banner2.jpg'
			/>

			{/* Instagram Follow Section */}
			<InstagramFollowSection />

			{/* Instagram Carousel */}
			<InstagramCarousel />

			{/* Final CTA Banner */}
			<FeatureBanner
				title='COMO A MILANO'
				description='Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis.'
				buttonText='DISCOVER MORE'
				buttonLink='/category/como-milano'
				backgroundColor='gray.900'
				textColor='white'
				backgroundImage='/banner/banner3.jpg'
			/>
		</PageLayout>
	);
};

export default HomepageComponent;
