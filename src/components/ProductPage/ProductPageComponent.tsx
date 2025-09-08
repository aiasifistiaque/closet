'use client';
import React, { FC, useState } from 'react';
import PageLayout from '../Layout/PageLayout';
import {
	Grid,
	Box,
	Text,
	Heading,
	Textarea,
	Input,
	Button,
	Tabs,
	HStack,
} from '@chakra-ui/react';
import GridLeftPart from './GridLeftPart';
import GridRightPart from './GridRightPart';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { newArrivals, product, products } from '../data/productData';
import ProductSection from '../HomePage/ProductSection';
import AdditionalInfo from './AdditionalInfo';
import CustomContainer from '../reusable/Container';
import TabSection from './TabSection';
import { useParams } from 'next/navigation';

// Example product JSON

const ProductPageComponent: FC = () => {
	const params = useParams();

	const product: any = products.find(product => product.id === Number(params.id));
	
	const [selectedImage, setSelectedImage] = useState(product.images[0]);
	const [selectedSize, setSelectedSize] = useState('M');

	// Review form states
	const [rating, setRating] = useState(0);
	const [reviewText, setReviewText] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmitReview = () => {
		console.log({
			rating,
			reviewText,
			name,
			email,
		});
		alert('Thank you for your review!');
	};

	return (
		<PageLayout>
			<CustomContainer>
				<Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={{ base: 6, lg: 10, xl: 20,'2xl': 32 }} py={6}>
					<GridLeftPart
						product={product}
						selectedImage={selectedImage}
						setSelectedImage={setSelectedImage}
					/>

					<GridRightPart
						product={product}
						selectedSize={selectedSize}
						setSelectedSize={setSelectedSize}
					/>
				</Grid>

				<TabSection
					product={product}
					reviewText={reviewText}
					setReviewText={setReviewText}
					name={name}
					setName={setName}
					email={email}
					setEmail={setEmail}
					handleSubmitReview={handleSubmitReview}
				/>
			</CustomContainer>

			<ProductSection title='Related Products' products={products} />

			<AdditionalInfo />
		</PageLayout>
	);
};

export default ProductPageComponent;
