import { Box, Grid, Image, Text, Button, AspectRatio } from '@chakra-ui/react';
import React from 'react';
import CustomContainer from '../reusable/Container';

const InstagramCarousel = () => {
	// Sample Instagram images - replace with actual Instagram feed
	const instagramImages = [
		'/image-1.webp',
		'/image-2.webp',
		'/image-3.webp',
		'/image-4.webp',
		'/image-5.webp',
		'/image-6.webp',
		'/image-7.webp',
		'/image-8.webp',
	];

	return (
		<Box
			bg='white'
			py={{ base: 8, md: 12 }}>
			<CustomContainer>
				{/* Instagram Images Grid */}
				<Grid
					templateColumns={{
						base: 'repeat(2, 1fr)',
						md: 'repeat(4, 1fr)',
						lg: 'repeat(6, 1fr)',
					}}
					gap={2}
					mb={8}>
					{instagramImages.map((image, index) => (
						<Box
							key={index}
							position='relative'
							cursor='pointer'
							overflow='hidden'
							_hover={{
								transform: 'scale(1.05)',
								transition: 'transform 0.3s ease',
							}}>
							<AspectRatio ratio={1}>
								<Image
									src={image}
									alt={`Instagram post ${index + 1}`}
									objectFit='cover'
									w='100%'
									h='100%'
									transition='all 0.3s ease'
									_hover={{
										opacity: 0.8,
									}}
								/>
							</AspectRatio>

							{/* Overlay on hover */}
							<Box
								position='absolute'
								top={0}
								left={0}
								w='100%'
								h='100%'
								bg='blackAlpha.400'
								opacity={0}
								display='flex'
								alignItems='center'
								justifyContent='center'
								transition='opacity 0.3s ease'
								_hover={{
									opacity: 1,
								}}>
								<Text
									color='white'
									fontSize='lg'
									fontWeight='bold'>
									@closet
								</Text>
							</Box>
						</Box>
					))}
				</Grid>

				{/* View Gallery Button */}
				<Box textAlign='center'>
					<Button
						size='lg'
						variant='outline'
						borderColor='black'
						color='black'
						fontWeight='500'
						letterSpacing='1px'
						px={8}
						py={6}
						borderRadius='none'
						_hover={{
							bg: 'black',
							color: 'white',
							transform: 'translateY(-2px)',
						}}
						_active={{
							bg: 'gray.900',
							transform: 'translateY(0px)',
						}}
						transition='all 0.2s'>
						VIEW GALLERY
					</Button>
				</Box>
			</CustomContainer>
		</Box>
	);
};

export default InstagramCarousel;
