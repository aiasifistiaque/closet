'use client';
import { Box, Container, Image, Text, VStack, Button, HStack } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const slides = [
	{
		id: 1,
		image: '/banner/banner1.jpg',
		title: 'NEW COLLECTION',
		subtitle: 'FALL/WINTER 2024',
		description: 'Discover the latest trends and timeless pieces that define your style',
		buttonText: 'SHOP NOW',
		buttonLink: '/categories',
	},
	{
		id: 2,
		image: '/banner/banner2.jpg',
		title: 'EXCLUSIVE OFFERS',
		subtitle: 'UP TO 50% OFF',
		description: 'Limited time deals on selected items from our premium collection',
		buttonText: 'EXPLORE DEALS',
		buttonLink: '/category/sale',
	},
	{
		id: 3,
		image: '/banner/banner3.jpg',
		title: 'STYLE REDEFINED',
		subtitle: 'PREMIUM QUALITY',
		description: 'Elevate your wardrobe with our carefully curated fashion essentials',
		buttonText: 'DISCOVER MORE',
		buttonLink: '/category/premium',
	},
];

const HeroBanner = () => (
	<Box
		position='relative'
		w='100%'
		h='100%'>
		<Swiper
			modules={[Autoplay, Pagination]}
			autoplay={{ delay: 5000, disableOnInteraction: false }}
			pagination={{
				clickable: true,
				bulletActiveClass: 'swiper-pagination-bullet-active',
				bulletClass: 'swiper-pagination-bullet',
			}}
			loop
			className='hero-swiper'>
			{slides.map(slide => (
				<SwiperSlide key={slide.id}>
					<Box
						bgImage={`url('${slide.image}')`}
						{...heroImageBg}>
						<Box
							position='absolute'
							inset={0}
							bg='blackAlpha.500'
						/>

						{/* Content */}
						<Container
							position='relative'
							zIndex={2}
							px={{ base: 4, md: 8, lg: '92px' }}>
							<VStack
								align={{ base: 'center', md: 'flex-start' }}
								textAlign={{ base: 'center', md: 'left' }}
								maxW='600px'
								gap={6}>
								{/* Subtitle */}
								<Text
									fontSize={{ base: 'sm', md: 'md' }}
									fontWeight='400'
									letterSpacing='widest'
									color='white'
									opacity='0.9'>
									{slide.subtitle}
								</Text>

								{/* Main Title */}
								<Text
									fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
									fontWeight='300'
									letterSpacing='wider'
									color='white'
									lineHeight='1.1'>
									{slide.title}
								</Text>

								{/* Description */}
								<Text
									fontSize={{ base: 'md', md: 'lg' }}
									fontWeight='300'
									color='white'
									opacity='0.95'
									lineHeight='1.6'
									maxW='500px'>
									{slide.description}
								</Text>

								{/* CTA Buttons */}
								<HStack
									gap={4}
									pt={4}
									flexDirection={{ base: 'column', sm: 'row' }}
									w={{ base: 'full', sm: 'auto' }}>
									<Link href={slide.buttonLink}>
										<Button {...buttonCss}>{slide.buttonText}</Button>
									</Link>
									<Link href='/categories'>
										<Button
											variant='outline'
											{...buttonCss}>
											VIEW ALL
										</Button>
									</Link>
								</HStack>
							</VStack>
						</Container>
					</Box>
				</SwiperSlide>
			))}
		</Swiper>

		{/* Custom Pagination Styles */}
		<style
			jsx
			global>{`
			.hero-swiper .swiper-pagination {
				bottom: 30px;
			}
			.hero-swiper .swiper-pagination-bullet {
				width: 12px;
				height: 12px;
				background: rgba(255, 255, 255, 0.5);
				opacity: 1;
				margin: 0 6px;
				transition: all 0.3s ease;
			}
			.hero-swiper .swiper-pagination-bullet-active {
				background: white;
				transform: scale(1.2);
			}
		`}</style>
	</Box>
);

const heroImageBg = {
	bgSize: 'cover',
	bgPos: 'center center',
	h: { base: '70vh', md: '84vh' },
	color: 'white',
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	justifyContent: { base: 'center', md: 'flex-start' },
};

const buttonCss = {
	borderColor: 'white',
	color: 'white',
	borderRadius: 'none',
	fontWeight: '500',
	fontSize: 'sm',
	letterSpacing: 'wider',
	px: 8,
	h: '52px',
	minW: '160px',
	_hover: {
		bg: 'whiteAlpha.200',
		borderColor: 'gray.200',
		transform: 'translateY(-2px)',
	},
};

export default HeroBanner;
