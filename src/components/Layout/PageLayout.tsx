'use client';
import { Box, Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import Header from '../HomePage/Header';
import Footer from '../Footer/Footer';
import { colors } from '../data/color';

type PageLayoutProps = FlexProps & {
	children: any;
	props?: any;
};

const PageLayout: FC<PageLayoutProps> = ({ children, ...props }) => {
	return (
		<Box backgroundColor={colors.bg}>
			<Header />
			<Flex
				direction={'column'}
				minH={'100vh'}
				w={'full'}
				pt={{base: '84px', md: '136px'}}
				pb='0px'
				{...props}
			>
				{children}
			</Flex>
			<Footer />
		</Box>
	);
};

export default PageLayout;
