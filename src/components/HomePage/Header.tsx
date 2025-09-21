import { Badge, Box, Flex, HStack, Input, Text, TextProps, VStack, Center } from '@chakra-ui/react';
import React, { useState } from 'react';
import { LuSearch, LuUser, LuShoppingBag } from 'react-icons/lu';
import MobileNav from '../Navbar/MobileNav';
import Link from 'next/link';
import CustomContainer from '../reusable/Container';
import { useCart } from '../contexts/CartContext';

const Header = () => {
	const { cart } = useCart();
	const totalItems = cart.length;
	const [isLoggedIn, setIsLoggedIn] = useState(false); // You can replace this with actual auth state
	const userName = 'John'; // You can replace this with actual user first name

	return (
		<>
			{/* Top Announcement Bar - Fixed */}
			<Box
				bg='black'
				color='white'
				textAlign='center'
				py='6px'
				fontSize='sm'
				fontWeight='400'
				position='fixed'
				top={0}
				left={0}
				w='100%'
				zIndex={1002}>
				<Text letterSpacing='0.5px'>Summer sale: Up to 70% off selected items</Text>
			</Box>

			{/* Main Header - Sticky */}
			<Box
				bg='white'
				borderBottom='1px solid'
				borderColor='gray.200'
				position='sticky'
				top='32px'
				zIndex={1001}
				mt='32px'>
				<CustomContainer
					pt={0}
					px={{ base: 4, md: 7, lg: 16, '2xl': 20 }}>
					<Flex
						justify='space-between'
						align='center'
						gap={{ base: 2, md: 4 }}
						w='100%'
						px={{ base: 4, md: 7, lg: 15, '2xl': 20 }}
						py={3}>
						<Box display={{ base: 'block', lg: 'none' }}>
							<MobileNav />
						</Box>

						{/* Logo */}
						<Link href={'/'}>
							<Box>
								<Text
									fontSize={{ base: '24px', md: '28px' }}
									fontWeight='700'
									color='black'
									letterSpacing='3px'
									textTransform='uppercase'>
									CLOSET
								</Text>
							</Box>
						</Link>

						{/* Search Bar - Hidden on mobile */}
						<Box
							position='relative'
							flex='1'
							maxW='400px'
							display={{ base: 'none', lg: 'block' }}>
							<Input
								placeholder='Search products...'
								bg='gray.50'
								size='md'
								w='100%'
								pr='40px'
								borderRadius='none'
								border='1px solid'
								borderColor='gray.300'
								_focus={{
									borderColor: 'black',
									boxShadow: 'none',
								}}
							/>
							<Box
								position='absolute'
								right={3}
								top='50%'
								transform='translateY(-50%)'
								cursor='pointer'>
								<LuSearch
									color='gray'
									size={18}
								/>
							</Box>
						</Box>

						{/* Right Icons */}
						<HStack gap={6}>
							{/* Search Icon with Text */}
							<VStack
								gap={1}
								cursor='pointer'
								display={{ base: 'flex', lg: 'none' }}
								align='center'>
								<LuSearch
									size={18}
									color='black'
								/>
								<Text
									fontSize='10px'
									fontWeight='400'
									textTransform='uppercase'
									letterSpacing='0.5px'>
									Search
								</Text>
							</VStack>

							{/* Shopping Bag */}
							<Box position='relative'>
								<Link href={'/cart'}>
									<Flex
										gap={2}
										cursor='pointer'
										align='center'>
										<LuShoppingBag
											size={18}
											color='black'
										/>
										<Text
											fontSize='10px'
											fontWeight='400'
											letterSpacing='0.5px'>
											Shopping cart
										</Text>
										<Badge
											colorScheme='red'
											variant='solid'
											fontSize='xs'
											borderRadius='full'
											minW='16px'
											h='16px'
											display='flex'
											alignItems='center'
											justifyContent='center'>
											{totalItems}
										</Badge>
									</Flex>
								</Link>
							</Box>

							{/* Login/User */}
							<Link href={'/login'}>
								<VStack
									gap={1}
									cursor='pointer'
									align='center'>
									{/* <LuUser
										size={18}
										color='black'
									/> */}
									<Text
										fontSize='10px'
										fontWeight='400'
										letterSpacing='0.5px'>
										{isLoggedIn ? userName : 'Sign in or Create an account'}
									</Text>
								</VStack>
							</Link>
						</HStack>
					</Flex>
				</CustomContainer>
			</Box>

			{/* Navigation Menu - Desktop (Scrollable) */}
			<Box
				display={{ base: 'none', lg: 'block' }}
				borderBottom='1px solid'
				borderColor='gray.200'
				py={2}>
				<CustomContainer
					px={0}
					pt={0}>
					<Center
						gap={8}
						px={{ base: 4, md: 7, lg: 15, '2xl': 20 }}>
						<CatItem href='/'>HOME</CatItem>
						<CatItem href='/categories'>CATEGORIES</CatItem>
						<CatItem href='/category/women'>WOMEN</CatItem>
						<CatItem href='/category/men'>MEN</CatItem>
						<CatItem href='/category/shoes'>SHOES</CatItem>
						<CatItem href='/category/bags-accessories'>BAGS & ACCESSORIES</CatItem>
						<CatItem href='/category/brands'>BRANDS</CatItem>
						<CatItem
							href='/sale'
							color='red.500'
							_hover={{ color: 'red.600' }}>
							SALE
						</CatItem>
					</Center>
				</CustomContainer>
			</Box>
		</>
	);
};

const CatItem = ({ children, href, ...props }: TextProps & { children: any; href: string }) => (
	<Link href={href}>
		<Text
			fontWeight='300'
			color='black'
			fontSize='xs'
			fontFamily={'"Zalando Sans Expanded", sans-serif'}
			textTransform='uppercase'
			letterSpacing='.5px'
			_hover={{ color: 'gray.600' }}
			transition='color 0.2s'
			cursor='pointer'
			{...props}>
			{children}
		</Text>
	</Link>
);

export default Header;
