import { Box, Text, Button, VStack, Image, Flex } from '@chakra-ui/react';
import React from 'react';
import CustomContainer from '../reusable/Container';
import Link from 'next/link';

interface FeatureBannerProps {
	title: string;
	subtitle?: string;
	description?: string;
	buttonText?: string;
	buttonLink?: string;
	backgroundImage?: string;
	backgroundColor?: string;
	textColor?: string;
	reverse?: boolean;
	imageContent?: string;
}

const FeatureBanner: React.FC<FeatureBannerProps> = ({
	title,
	subtitle,
	description,
	buttonText = 'SHOP NOW',
	buttonLink = '/category',
	backgroundImage,
	backgroundColor = 'gray.50',
	textColor = 'black',
	reverse = false,
	imageContent,
}) => {
	return (
		<Box
			bg={backgroundColor}
			py={{ base: 16, md: 20 }}
			backgroundImage={backgroundImage}
			backgroundSize='cover'
			backgroundPosition='center'
			position='relative'>
			{/* Overlay for better text readability */}
			{backgroundImage && (
				<Box
					position='absolute'
					top={0}
					left={0}
					w='100%'
					h='100%'
					bg='blackAlpha.300'
					zIndex={1}
				/>
			)}

			<CustomContainer>
				<Flex
					direction={{ base: 'column', lg: reverse ? 'row-reverse' : 'row' }}
					align='center'
					justify='space-between'
					gap={8}
					position='relative'
					zIndex={2}>
					{/* Text Content */}
					<VStack
						align={{ base: 'center', lg: 'flex-start' }}
						gap={6}
						flex={1}
						textAlign={{ base: 'center', lg: 'left' }}>
						{subtitle && (
							<Text
								fontSize='sm'
								fontWeight='600'
								color={textColor}
								letterSpacing='2px'
								textTransform='uppercase'
								fontFamily='"Zalando Sans Expanded", sans-serif'>
								{subtitle}
							</Text>
						)}

						<Text
							fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
							fontWeight='700'
							color={textColor}
							letterSpacing='1px'
							fontFamily='"Zalando Sans Expanded", sans-serif'
							lineHeight={1.1}>
							{title}
						</Text>

						{description && (
							<Text
								fontSize={{ base: 'md', md: 'lg' }}
								color={textColor}
								maxW='500px'
								lineHeight={1.6}
								opacity={0.9}
								fontFamily='"Zalando Sans Expanded", sans-serif'>
								{description}
							</Text>
						)}

						{buttonText && buttonLink && (
							<Link href={buttonLink}>
								<Button
									size='lg'
									bg={textColor === 'white' ? 'white' : 'black'}
									color={textColor === 'white' ? 'black' : 'white'}
									fontWeight='500'
									letterSpacing='1px'
									px={8}
									py={6}
									borderRadius='none'
									_hover={{
										bg: textColor === 'white' ? 'gray.100' : 'gray.800',
										transform: 'translateY(-2px)',
									}}
									_active={{
										transform: 'translateY(0px)',
									}}
									transition='all 0.2s'
									fontFamily='"Zalando Sans Expanded", sans-serif'>
									{buttonText}
								</Button>
							</Link>
						)}
					</VStack>

					{/* Image Content */}
					{imageContent && (
						<Box
							flex={1}
							display={{ base: 'none', lg: 'block' }}>
							<Image
								src={imageContent}
								alt={title}
								w='100%'
								h='400px'
								objectFit='cover'
								borderRadius='md'
							/>
						</Box>
					)}
				</Flex>
			</CustomContainer>
		</Box>
	);
};

export default FeatureBanner;
