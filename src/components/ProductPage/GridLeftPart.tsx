'use client';
import {
	Box,
	Grid,
	GridItem,
	IconButton,
	Image,
	VStack,
} from '@chakra-ui/react';
import React, { FC, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Slider from 'react-slick';

type GridLeftPartProps = {
	product: any;
	selectedImage: any;
	setSelectedImage: any;
};

const PrevArrow = (props: any) => {
	const { onClick } = props;
	return (
		<IconButton
			aria-label='Previous'
			onClick={onClick}
			position='absolute'
			top='50%'
			left='10px'
			transform='translateY(-50%)'
			bg='blackAlpha.600'
			color='white'
			borderRadius='full'
			_hover={{ bg: 'blackAlpha.700' }}
			zIndex={2}
		>
			<FiChevronLeft size={22} />
		</IconButton>
	);
};

const NextArrow = (props: any) => {
	const { onClick } = props;
	return (
		<IconButton
			aria-label='Next'
			onClick={onClick}
			position='absolute'
			top='50%'
			right='10px'
			transform='translateY(-50%)'
			bg='blackAlpha.600'
			color='white'
			borderRadius='full'
			_hover={{ bg: 'blackAlpha.700' }}
			zIndex={2}
		>
			<FiChevronRight size={22} />
		</IconButton>
	);
};

const GridLeftPart: FC<GridLeftPartProps> = ({
	product,
	selectedImage,
	setSelectedImage,
}) => {
	const sliderRef = useRef<Slider | null>(null);
	const [zoomStates, setZoomStates] = useState<{
		[key: number]: {
			isHovered: boolean;
			transformOrigin: string;
			scale: number;
		};
	}>({});

	const handleThumbnailClick = (img: string, index: number) => {
		setSelectedImage(img);
		sliderRef.current?.slickGoTo(index);
	};

	const handleMouseEnter = (index: number) => {
		setZoomStates(prev => ({
			...prev,
			[index]: {
				...prev[index],
				isHovered: true,
				scale: 2.8, // Zoom scale factor
			},
		}));
	};

	const handleMouseLeave = (index: number) => {
		setZoomStates(prev => ({
			...prev,
			[index]: {
				...prev[index],
				isHovered: false,
				scale: 1,
			},
		}));
	};

	const handleMouseMove = (
		e: React.MouseEvent<HTMLDivElement>,
		index: number
	) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width) * 100;
		const y = ((e.clientY - rect.top) / rect.height) * 100;

		setZoomStates(prev => ({
			...prev,
			[index]: {
				...prev[index],
				transformOrigin: `${x}% ${y}%`,
			},
		}));
	};

	return (
		<GridItem>
			<Grid templateColumns='100px 1fr' gap={4} alignItems='stretch'>
				{/* Thumbnails */}
				<VStack gap={3} align='stretch' h='100%'>
					{product.images.map((img: any, index: number) => (
						<Image
							key={index}
							src={img}
							alt={product.name}
							w='100%'
							h='90px'
							objectFit='cover'
							borderRadius='md'
							border={
								selectedImage === img ? '2px solid black' : '1px solid gray'
							}
							cursor='pointer'
							onClick={() => handleThumbnailClick(img, index)}
						/>
					))}
				</VStack>

				{/* Large Image Slider with Zoom */}
				<Box
					borderRadius='md'
					overflow='hidden'
					w='100%'
					h='100%'
					position='relative'
				>
					<Slider
						ref={sliderRef}
						dots={true}
						infinite={true}
						speed={500}
						slidesToShow={1}
						slidesToScroll={1}
						adaptiveHeight={true}
						arrows={true}
						prevArrow={<PrevArrow />}
						nextArrow={<NextArrow />}
						initialSlide={product.images.indexOf(selectedImage)}
						beforeChange={(current, next) =>
							setSelectedImage(product.images[next])
						}
					>
						{product.images.map((img: any, index: number) => (
							<Box key={index} borderRadius='md' overflow='hidden'>
								<Box
									position='relative'
									w='100%'
									h='500px'
									overflow='hidden'
									borderRadius='md'
									onMouseEnter={() => handleMouseEnter(index)}
									onMouseLeave={() => handleMouseLeave(index)}
									onMouseMove={e => handleMouseMove(e, index)}
								>
									<Image
										src={img}
										alt={product.name}
										w='100%'
										h='100%'
										objectFit='cover'
										borderRadius='md'
										transition='transform 0.5s ease-out'
										transform={`scale(${zoomStates[index]?.scale || 1})`}
										transformOrigin={
											zoomStates[index]?.transformOrigin || 'center'
										}
										cursor={
											zoomStates[index]?.isHovered ? 'zoom-in' : 'default'
										}
									/>
								</Box>
							</Box>
						))}
					</Slider>
				</Box>
			</Grid>
		</GridItem>
	);
};

export default GridLeftPart;