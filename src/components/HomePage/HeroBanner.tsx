"use client";
import { Box, Container, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const slides = [
	{ id: 1, image: '/banner/banner1.jpg', logo: '/ddong-logo.png' },
	{ id: 2, image: '/banner/banner2.jpg', logo: '/ddong-logo.png' },
	{ id: 3, image: '/banner/banner3.jpg', logo: '/ddong-logo.png' },
];

const HeroBanner = () => (
	<Box position="relative" w="100%" h="100%">
		<Swiper
			modules={[Autoplay, Pagination]}
			autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
		>
			{slides.map((slide) => (
			 <SwiperSlide key={slide.id}>
					<Box
						bgImage={`url('${slide.image}')`}
						bgSize='cover'
						h="75vh"
						color='white'
						position='relative'
						display="flex"
						alignItems="center"
						// justifyContent="center"
					>
						<Box position='absolute' inset={0} bg='blackAlpha.400' />
						{/* <Image
							src="/ddong-logo.png"
							alt='logo'
							w={{ base: "200px", md: "300px" }}
							h={{ base: "200px", md: "300px" }}
							objectFit="contain"
							zIndex={1}
							position="relative"
						/> */}
							
					</Box>
			 </SwiperSlide>
			))}
		</Swiper>
		
	</Box>
	
);

export default HeroBanner;
