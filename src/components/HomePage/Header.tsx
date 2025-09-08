import {
	Badge,
	Box,
	Container,
	Flex,
	Grid,
	HStack,
	IconButton,
	Image,
	Input,
	Popover,
	Text,
	VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import NavLink from '../reusable/NavLink';
import { LuBell, LuSearch, LuShoppingCart, LuUser } from 'react-icons/lu';
import { navData } from '../data/navData';
import MobileNav from '../Navbar/MobileNav';
import Link from 'next/link';
import CustomContainer from '../reusable/Container';
import { useCart } from '../contexts/CartContext';

const Header = () => {
	const { cart } = useCart();
	const totalItems = cart.length;

	const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

	const chunkArray = (arr: any[], size: number) => {
		const chunks = [];
		for (let i = 0; i < arr.length; i += size) {
			chunks.push(arr.slice(i, i + size));
		}
		return chunks;
	};

	return (
		<Box
			bg='white'
			borderBottom='1px solid'
			borderColor='gray.200'
			py={3}
			position='fixed'
			top={0}
			left={0}
			w='100%'
			zIndex={1000}
		>
			<CustomContainer px={0} pt={0}>
				<Flex
					justify='space-between'
					align='center'
					gap={{ base: 2, md: 4 }}
					w='100%'
					px={{ base: 4, md: 7, lg: 15, "2xl": 20 }}
				>
					<MobileNav />
					{/* Logo */}
					<Link href={'/'}>
						<Image src='/logos/closet-h-logo-white-2.png' alt='closet-logo' h='40px' w='140px' />
					</Link>

					{/* Search Bar */}
					<Box
						position='relative'
						flex='1'
						maxW='500px'
						display={{ base: 'none', lg: 'block' }}
					>
						<Input
							placeholder='Search...'
							bg='gray.50'
							size='sm'
							w='100%'
							pr='40px'
							borderRadius='full'
						/>
						<Box
							position='absolute'
							right={3}
							top='50%'
							transform='translateY(-50%)'
							cursor='pointer'
						>
							<LuSearch color='gray' size={18} />
						</Box>
					</Box>

					{/* Icons */}
					<HStack>
						<Link href={'/login'}>
							<IconButton variant='ghost' aria-label='Account' size='sm'>
								<LuUser />
							</IconButton>
						</Link>
						<IconButton variant='ghost' aria-label='Notifications' size='sm'>
							<LuBell />
						</IconButton>
						<Box position='relative'>
							<Link href={'/cart'}>
								<IconButton variant='ghost' aria-label='Cart' size='sm'>
									<LuShoppingCart />
								</IconButton>
							</Link>
							{totalItems > 0 && (
								<Badge
									bg='red.500'
									color='white'
									borderRadius='full'
									position='absolute'
									top='-1'
									right='-1'
									fontSize='xs'
									minW='20px'
									h='20px'
									display='flex'
									alignItems='center'
									justifyContent='center'
								>
									{totalItems}
								</Badge>
							)}
						</Box>
					</HStack>
				</Flex>

				<Box
					border={'0.5px solid'}
					borderColor={'#e8e8e8'}
					mt={4}
					display={{ base: 'none', md: 'block' }}
				></Box>

				<Flex justify='center' display={{ base: 'none', md: 'flex' }} pt={3}>
					<HStack gap={8}>
						{navData?.map((item, idx) => (
							<Box
								key={idx}
								position='relative'
								onMouseEnter={() => setHoveredCategory(item.label)}
								onMouseLeave={() => setHoveredCategory(null)}
							>
								{/* Category link */}
								<NavLink href={item.href}>{item.label}</NavLink>

								{/* Invisible bridge to prevent gap issues */}
								<Box
									position='absolute'
									top='100%'
									left={0}
									width='220px'
									height='10px'
									bg='transparent'
									zIndex={98}
									display={hoveredCategory === item.label ? 'block' : 'none'}
								/>

								{/* Subcategories Popup */}
								{/* <Box
									position='absolute'
									top='calc(100% + 10px)' // Adjusted to account for bridge
									left={idx < 3 && '0' || 'auto'}
									right={idx > 3 && '0' || 'auto'}
									bg='white'
									overflow={'hidden'}
									boxShadow='md'
									borderRadius='md'
									zIndex={99}
									transition='opacity 0.2s ease'
									opacity={hoveredCategory === item.label ? 1 : 0}
									visibility={
										hoveredCategory === item.label ? 'visible' : 'hidden'
									}
									pointerEvents={
										hoveredCategory === item.label ? 'auto' : 'none'
									}
								>
									<Grid templateColumns={`repeat(${Math.ceil(
										(item.subcategory?.length || 0) / 5
									)}, 1fr) 220px`}>
										{chunkArray(item.subcategory || [], 5).map((chunk, colIdx) => (
											<Box key={colIdx}>
												{chunk?.map((sub, sIdx) => (
													<Link key={sIdx} href={sub.href}>
														<Text
															w='180px'
															px={6}
															py={2}
															fontSize='sm'
															borderBottom='1px solid'
															borderColor='gray.100'
															_hover={{ bg: 'gray.50', color: 'blue.500' }}
															_last={{ borderBottom: 'none' }}
														>
															{sub.label}
														</Text>
													</Link>
												))}
											</Box>
										))}
										<Image
											src={item.image}
											alt={item.label}
											w='75%'
											h='100%'
											objectFit='cover'
											ml='auto'
										/>
									</Grid>
								</Box> */}
							</Box>
						))}
					</HStack>
				</Flex>
			</CustomContainer>
		</Box>
	);
};

export default Header;