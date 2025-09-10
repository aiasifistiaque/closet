import { Box, Text, Flex, Image } from '@chakra-ui/react';
import React from 'react';

const CategoryCard = ({ icon, title }: { icon: string; title: string }) => (
	<Box
		border='2px dashed #CBD5E0'
		borderRadius='xl'
		px={{ base: 4, md: 6, lg: 8 }}
		py={{ base: 4, md: 6, lg: 12 }} // responsive padding
		textAlign='center'
		cursor='pointer'
		transition='all 0.3s ease'
		_hover={{
			boxShadow: 'lg',
			transform: 'translateY(-4px)',
		}}
	>
		<Flex justify='center' align='center' mb={{ base: 3, md: 4 }}>
			<Box
				boxSize={{ base: '60px', md: '70px', lg: '90px' }} // responsive circle size
				borderRadius='full'
				bg='white'
				boxShadow='md'
				display='flex'
				alignItems='center'
				justifyContent='center'
			>
				<Image
					src={icon}
					alt={title}
					boxSize={{ base: '32px', md: '40px', lg: '52px' }} // responsive icon size
				/>
			</Box>
		</Flex>
		<Text fontWeight='bold' fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
			{title}
		</Text>
	</Box>
);

export default CategoryCard;
