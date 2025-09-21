'use client';
import {
	Box,
	Grid,
	GridItem,
	IconButton,
	Image,
	VStack,
	AspectRatio,
	HStack,
} from '@chakra-ui/react';
import React, { FC, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { LuExpand } from 'react-icons/lu';
import Slider from 'react-slick';
import FullscreenImageModal from './FullscreenImageModal';

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
			left='8px'
			transform='translateY(-50%)'
			bg='white'
			color='black'
			size='sm'
			boxShadow='md'
			_hover={{ bg: 'gray.100' }}
			zIndex={2}
			border='1px solid'
			borderColor='gray.200'>
			<FiChevronLeft size={16} />
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
			right='8px'
			transform='translateY(-50%)'
			bg='white'
			color='black'
			size='sm'
			boxShadow='md'
			_hover={{ bg: 'gray.100' }}
			zIndex={2}
			border='1px solid'
			borderColor='gray.200'>
			<FiChevronRight size={16} />
		</IconButton>
	);
};

const GridLeftPart: FC<GridLeftPartProps> = ({ product, selectedImage, setSelectedImage }) => {
	const sliderRef = useRef<Slider | null>(null);
	const [isHovered, setIsHovered] = useState(false);
	const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
	const [fullscreenIndex, setFullscreenIndex] = useState(0);

	const handleThumbnailClick = (img: string, index: number) => {
		setSelectedImage(img);
		sliderRef.current?.slickGoTo(index);
	};

	const handleFullscreenOpen = () => {
		const currentIndex = product.images.indexOf(selectedImage);
		setFullscreenIndex(currentIndex >= 0 ? currentIndex : 0);
		setIsFullscreenOpen(true);
	};

	const handleFullscreenNext = () => {
		const nextIndex = (fullscreenIndex + 1) % product.images.length;
		setFullscreenIndex(nextIndex);
		setSelectedImage(product.images[nextIndex]);
	};

	const handleFullscreenPrev = () => {
		const prevIndex = fullscreenIndex === 0 ? product.images.length - 1 : fullscreenIndex - 1;
		setFullscreenIndex(prevIndex);
		setSelectedImage(product.images[prevIndex]);
	};

	return (
		<GridItem>
			{/* Mobile: Stack layout */}
			<Box display={{ base: 'block', md: 'none' }}>
				<VStack gap={2}>
					{/* Main Image */}
					<Box
						position='relative'
						w='100%'
						overflow='hidden'
						bg='gray.50'
						cursor='pointer'
						onClick={handleFullscreenOpen}>
						<AspectRatio ratio={1}>
							<Image
								src={selectedImage}
								alt={product.name}
								objectFit='cover'
							/>
						</AspectRatio>

						{/* Fullscreen Icon */}
						<IconButton
							aria-label='View fullscreen'
							position='absolute'
							top='8px'
							right='8px'
							bg='blackAlpha.600'
							color='white'
							size='sm'
							_hover={{ bg: 'blackAlpha.800' }}
							zIndex={2}>
							<LuExpand size={16} />
						</IconButton>
					</Box>

					{/* Thumbnails */}
					<HStack
						gap={1}
						w='100%'
						overflowX='auto'
						py={1}>
						{product.images.map((img: any, index: number) => (
							<Box
								key={index}
								minW='50px'
								h='50px'
								overflow='hidden'
								border='1px solid'
								borderColor={selectedImage === img ? 'black' : 'gray.300'}
								cursor='pointer'
								onClick={() => setSelectedImage(img)}>
								<Image
									src={img}
									alt={`${product.name} ${index + 1}`}
									w='100%'
									h='100%'
									objectFit='cover'
								/>
							</Box>
						))}
					</HStack>
				</VStack>
			</Box>

			{/* Desktop: Side-by-side layout */}
			<Grid
				templateColumns='80px 1fr'
				gap={2}
				display={{ base: 'none', md: 'grid' }}
				h='500px'>
				{/* Thumbnails */}
				<VStack
					gap={1}
					h='100%'
					overflowY='auto'>
					{product.images.map((img: any, index: number) => (
						<Box
							key={index}
							w='80px'
							h='80px'
							overflow='hidden'
							border='1px solid'
							borderColor={selectedImage === img ? 'black' : 'gray.300'}
							cursor='pointer'
							_hover={{ borderColor: 'black' }}
							onClick={() => handleThumbnailClick(img, index)}>
							<Image
								src={img}
								alt={`${product.name} ${index + 1}`}
								w='100%'
								h='100%'
								objectFit='cover'
							/>
						</Box>
					))}
				</VStack>

				{/* Main Image */}
				<Box
					position='relative'
					overflow='hidden'
					bg='gray.50'
					h='100%'
					cursor='pointer'
					onClick={handleFullscreenOpen}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}>
					{/* Fullscreen Button */}
					<IconButton
						aria-label='View fullscreen'
						position='absolute'
						top='8px'
						right='8px'
						bg='blackAlpha.600'
						color='white'
						size='sm'
						opacity={isHovered ? 1 : 0}
						transition='opacity 0.2s ease'
						_hover={{ bg: 'blackAlpha.800' }}
						zIndex={3}
						onClick={e => {
							e.stopPropagation();
							handleFullscreenOpen();
						}}>
						<LuExpand size={16} />
					</IconButton>

					<AspectRatio ratio={1}>
						<Image
							src={selectedImage}
							alt={product.name}
							objectFit='cover'
						/>
					</AspectRatio>
				</Box>
			</Grid>

			{/* Fullscreen Modal */}
			<FullscreenImageModal
				isOpen={isFullscreenOpen}
				onClose={() => setIsFullscreenOpen(false)}
				images={product.images}
				currentIndex={fullscreenIndex}
				onNext={handleFullscreenNext}
				onPrev={handleFullscreenPrev}
			/>
		</GridItem>
	);
};

export default GridLeftPart;
