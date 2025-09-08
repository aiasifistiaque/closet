'use client';
import { Button, Flex, Grid, Menu, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FaSortDown } from 'react-icons/fa';

type HeaderGridProps = {
	categoryName: any;
};

const HeaderGrid: FC<HeaderGridProps> = ({ categoryName }) => {
	return (
		<Grid pt={4} templateColumns={{ base: '1fr', md: '300px 1fr' }} gap={4}>
			<Flex bg={'white'} px={4} py={2} borderRadius={'md'} alignItems={'center'}>
				<Text fontWeight={600}>Filter</Text>
			</Flex>

			<Flex bg={'white'} px={4} py={2} borderRadius={'md'} direction='column' gap={4}>
				<Flex justify='space-between' align='center' flexWrap='wrap' gap={2}>
					<Text fontWeight={600}>{categoryName}</Text>
					<Menu.Root>
						<Menu.Trigger asChild>
							<Button variant='outline' size='sm'>
								Sort By {<FaSortDown />}
							</Button>
						</Menu.Trigger>
						<Menu.Positioner>
							<Menu.Content>
								<Menu.Item value='low-high'>Price: Low to High</Menu.Item>
								<Menu.Item value='high-low'>Price: High to Low</Menu.Item>
								<Menu.Item value='a-z'>Name: A - Z</Menu.Item>
								<Menu.Item value='z-a'>Name: Z - A</Menu.Item>
							</Menu.Content>
						</Menu.Positioner>
					</Menu.Root>
				</Flex>
			</Flex>
		</Grid>
	);
};

export default HeaderGrid;
