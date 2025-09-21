'use client';
import { Box, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type TabSectionProps = {
	product: any;
};

const TabSection: FC<TabSectionProps> = ({ product }) => {
	return (
		<Box
			py={8}
			pb={16}
			bg='white'>
			{/* Description Section */}
			<Box>
				<Text
					fontSize='20px'
					fontWeight='500'
					mb={6}
					fontFamily="'Zalando Sans Expanded', sans-serif"
					textTransform='uppercase'
					letterSpacing='1px'
					color='black'>
					Description
				</Text>
				<Text
					whiteSpace='pre-line'
					fontSize='14px'
					lineHeight='1.8'
					color='gray.700'
					fontFamily="'Zalando Sans Expanded', sans-serif"
					textAlign='left'>
					{
						'Premium quality materials with exceptional comfort and durability. Perfect for everyday wear with a modern, sophisticated design. Available in multiple sizes to ensure the perfect fit for everyone. Premium quality materials with exceptional comfort and durability. Perfect for everyday wear with a modern, sophisticated design. Available in multiple sizes to ensure the perfect fit for everyone. Premium quality materials with exceptional comfort and durability. Perfect for everyday wear with a modern, sophisticated design. Available in multiple sizes to ensure the perfect fit for everyone. Premium quality materials with exceptional comfort and durability. Perfect for everyday wear with a modern, sophisticated design. Available in multiple sizes to ensure the perfect fit for everyone.'
					}
				</Text>
			</Box>
		</Box>
	);
};

export default TabSection;
