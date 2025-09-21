import { Box, Text, VStack, Button } from '@chakra-ui/react';
import React from 'react';
import CustomContainer from '../reusable/Container';

const InstagramFollowSection = () => {
	return (
		<Box
			bg='white'
			py={{ base: 16, md: 20 }}
			borderTop='1px solid'
			borderColor='gray.200'>
			<CustomContainer>
				<VStack
					gap={6}
					textAlign='center'>
					{/* Main heading */}
					<Text
						fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
						fontWeight='600'
						color='black'
						letterSpacing='1px'
						fontFamily='"Zalando Sans Expanded", sans-serif'>
						#CLOSET ON INSTAGRAM
					</Text>

					{/* Description */}
					<Text
						fontSize={{ base: 'md', md: 'lg' }}
						color='gray.600'
						maxW='600px'
						lineHeight={1.6}
						fontFamily='"Zalando Sans Expanded", sans-serif'>
						Phasellus lorem malesuada ligula pulvinar commodo maecenas. Follow us for daily style
						inspiration and the latest fashion trends.
					</Text>

					{/* Follow button */}
					<Button
						size='lg'
						bg='black'
						color='white'
						fontWeight='500'
						letterSpacing='1px'
						px={8}
						py={6}
						borderRadius='none'
						_hover={{
							bg: 'gray.800',
							transform: 'translateY(-2px)',
						}}
						_active={{
							bg: 'gray.900',
							transform: 'translateY(0px)',
						}}
						transition='all 0.2s'
						fontFamily='"Zalando Sans Expanded", sans-serif'>
						FOLLOW @CLOSET
					</Button>
				</VStack>
			</CustomContainer>
		</Box>
	);
};

export default InstagramFollowSection;
