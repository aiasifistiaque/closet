import React from 'react';
import HeroBanner from './HeroBanner';
import CategoryGrid from './CategoryGrid';
import ProductSection from './ProductSection';
import { newArrivals, products, signatureProducts } from '../data/productData';
import SpecialOffers from './SpecialOffers';
import BigDeals from './BigDeals';
import CategoryShowcase from './CategoryShowcase';
import PageLayout from '../Layout/PageLayout';
import PromotionalBanner from './PromotionalBanner';

const HomepageComponent = () => {
	return (
		<PageLayout>
			<HeroBanner />
			<CategoryGrid />
			<ProductSection title='New Arrival' products={products} />
			{/* <CategoryShowcase /> */}
			<ProductSection title='Premium Product' products={products} />
			{/* <SpecialOfferss /> */}
			{/* <BigDealss /> */}
			{/* <PromotionalBanner /> */}
		</PageLayout>
	);
};

export default HomepageComponent;
