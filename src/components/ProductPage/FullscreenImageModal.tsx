'use client';
import React from 'react';
import { Box, Image, IconButton, HStack } from '@chakra-ui/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface FullscreenImageModalProps {
	isOpen: boolean;
	onClose: () => void;
	images: string[];
	currentIndex: number;
	onNext: () => void;
	onPrev: () => void;
}

const FullscreenImageModal: React.FC<FullscreenImageModalProps> = ({
	isOpen,
	onClose,
	images,
	currentIndex,
	onNext,
	onPrev,
}) => {
	if (!isOpen) return null;

	const handleBackdropClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<Box
			position='fixed'
			top='0'
			left='0'
			right='0'
			bottom='0'
			bg='blackAlpha.900'
			zIndex='2000'
			display='flex'
			alignItems='center'
			justifyContent='center'
			onClick={handleBackdropClick}>
			{/* Close Button */}
			<IconButton
				position='absolute'
				top='20px'
				right='20px'
				aria-label='Close'
				onClick={onClose}
				bg='whiteAlpha.200'
				color='white'
				size='lg'
				_hover={{ bg: 'whiteAlpha.300' }}
				zIndex='1001'>
				<X size={24} />
			</IconButton>

			{/* Previous Button */}
			{images.length > 1 && (
				<IconButton
					position='absolute'
					left='20px'
					top='50%'
					transform='translateY(-50%)'
					aria-label='Previous image'
					onClick={onPrev}
					bg='whiteAlpha.200'
					color='white'
					size='lg'
					_hover={{ bg: 'whiteAlpha.300' }}
					zIndex='1001'>
					<ChevronLeft size={24} />
				</IconButton>
			)}

			{/* Next Button */}
			{images.length > 1 && (
				<IconButton
					position='absolute'
					right='20px'
					top='50%'
					transform='translateY(-50%)'
					aria-label='Next image'
					onClick={onNext}
					bg='whiteAlpha.200'
					color='white'
					size='lg'
					_hover={{ bg: 'whiteAlpha.300' }}
					zIndex='1001'>
					<ChevronRight size={24} />
				</IconButton>
			)}

			{/* Main Image */}
			<Box
				maxW='90vw'
				maxH='90vh'
				display='flex'
				alignItems='center'
				justifyContent='center'>
				<Image
					src={images[currentIndex]}
					alt={`Product image ${currentIndex + 1}`}
					maxW='100%'
					maxH='100%'
					objectFit='contain'
				/>
			</Box>

			{/* Image Counter */}
			{images.length > 1 && (
				<Box
					position='absolute'
					bottom='20px'
					left='50%'
					transform='translateX(-50%)'
					bg='whiteAlpha.200'
					color='white'
					px={4}
					py={2}
					fontSize='sm'>
					{currentIndex + 1} / {images.length}
				</Box>
			)}
		</Box>
	);
};

export default FullscreenImageModal;
