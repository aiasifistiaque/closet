import { Badge, Box, Flex, HStack, IconButton, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { LuSearch, LuShoppingCart, LuUser } from 'react-icons/lu';
import MobileNav from '../Navbar/MobileNav';
import Link from 'next/link';
import CustomContainer from '../reusable/Container';
import { useCart } from '../contexts/CartContext';

const Header = () => {
	const { cart } = useCart();
	const totalItems = cart.length;

	return (
		<>
			{/* Top Announcement Bar */}
			<Box
				bg='black'
				color='white'
				textAlign='center'
				py={2}
				fontSize='sm'
				fontWeight='400'>
				<Text>Summer sale: Up to 70% off selected items</Text>
			</Box>

			{/* Main Header */}
			<Box
				bg='white'
				borderBottom='1px solid'
				borderColor='gray.200'
				position='fixed'
				top={8}
				left={0}
				w='100%'
				zIndex={1000}>
				<CustomContainer
					px={0}
					pt={0}>
					{/* Top Section with Logo and Icons */}
					<Flex
						justify='space-between'
						align='center'
						gap={{ base: 2, md: 4 }}
						w='100%'
						px={{ base: 4, md: 7, lg: 15, '2xl': 20 }}
						py={4}>
						{/* Mobile Menu */}
						<Box display={{ base: 'block', lg: 'none' }}>
							<MobileNav />
						</Box>

						{/* Logo */}
						<Link href={'/'}>
							<Box textAlign='center'>
								<Text
									fontSize={{ base: '24px', md: '28px' }}
									fontWeight='700'
									color='black'
									letterSpacing='2px'>
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
								borderRadius='md'
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
						<HStack gap={2}>
							<Link href={'/login'}>
								<IconButton
									variant='ghost'
									aria-label='Account'
									size='md'
									_hover={{ bg: 'gray.100' }}>
									<LuUser size={20} />
								</IconButton>
							</Link>
							<Box position='relative'>
								<Link href={'/cart'}>
									<IconButton
										variant='ghost'
										aria-label='Shopping Cart'
										size='md'
										_hover={{ bg: 'gray.100' }}>
										<LuShoppingCart size={20} />
									</IconButton>
								</Link>
								{totalItems > 0 && (
									<Badge
										colorScheme='red'
										variant='solid'
										fontSize='xs'
										position='absolute'
										top='-5px'
										right='-5px'
										borderRadius='full'
										minW='20px'
										h='20px'
										display='flex'
										alignItems='center'
										justifyContent='center'>
										{totalItems}
									</Badge>
								)}
							</Box>
						</HStack>
					</Flex>

					{/* Navigation Menu - Desktop */}
					<Box
						display={{ base: 'none', lg: 'block' }}
						borderTop='1px solid'
						borderColor='gray.200'
						py={3}>
						<Flex
							justify='center'
							align='center'
							gap={8}
							px={{ base: 4, md: 7, lg: 15, '2xl': 20 }}>
							<Link href='/'>
								<Text
									fontWeight='500'
									color='black'
									_hover={{ color: 'gray.600' }}
									transition='color 0.2s'
									cursor='pointer'>
									HOME
								</Text>
							</Link>

							<Link href='/category/women'>
								<Text
									fontWeight='500'
									color='black'
									_hover={{ color: 'gray.600' }}
									transition='color 0.2s'
									cursor='pointer'>
									WOMEN
								</Text>
							</Link>

							<Link href='/category/men'>
								<Text
									fontWeight='500'
									color='black'
									_hover={{ color: 'gray.600' }}
									transition='color 0.2s'
									cursor='pointer'>
									MEN
								</Text>
							</Link>

							<Link href='/category/shoes'>
								<Text
									fontWeight='500'
									color='black'
									_hover={{ color: 'gray.600' }}
									transition='color 0.2s'
									cursor='pointer'>
									SHOES
								</Text>
							</Link>

							<Link href='/category/bags-accessories'>
								<Text
									fontWeight='500'
									color='black'
									_hover={{ color: 'gray.600' }}
									transition='color 0.2s'
									cursor='pointer'>
									BAGS & ACCESSORIES
								</Text>
							</Link>

							<Link href='/category/brands'>
								<Text
									fontWeight='500'
									color='black'
									_hover={{ color: 'gray.600' }}
									transition='color 0.2s'
									cursor='pointer'>
									BRANDS
								</Text>
							</Link>

							<Link href='/sale'>
								<Text
									fontWeight='500'
									color='red.500'
									cursor='pointer'
									_hover={{ color: 'red.600' }}
									transition='color 0.2s'>
									SALE
								</Text>
							</Link>
						</Flex>
					</Box>
				</CustomContainer>
			</Box>
		</>
	);
};

export default Header;
