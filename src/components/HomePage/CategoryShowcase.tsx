"use client"
import React from 'react';
import {
  Box,
  Container,
  Grid,
  GridItem,
  Text,
  Image,
  useBreakpointValue
} from '@chakra-ui/react';
import { categoryData, CategoryItem } from '../data/productData';
import Link from 'next/link';
import CustomContainer from '../reusable/Container';


const CategoryCard: React.FC<{ category: CategoryItem }> = ({ category }) => {
  const cardHeight = useBreakpointValue({ base: '200px', md: '250px', lg: '400px' });
  
  return (
    <Box
      position="relative"
      h={cardHeight}
      overflow="hidden"
      cursor="pointer"
    >
      {/* Background Image */}
      <Image
        src={category?.image}
        alt={category?.title}
        w="100%"
        h="100%"
        objectFit="cover"
      />
      
      {/* Gradient Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.4))"
      />
      
      {/* Content */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        p={{ base: 4, md: 6 }}
        color="white"
      >
        <Text
          fontSize={{ base: 'lg', md: 'xl', }}
        >
          {category?.title}
        </Text>
      </Box>
    </Box>
  );
};

// Main Category Showcase Component
const CategoryShowcase: React.FC = () => {
  const gridColumns = useBreakpointValue({
    base: 1,
    sm: 2,
    md: 2,
    lg: 3,
    "2xl": 4
  });

  return (
		<CustomContainer>
			<Grid
				templateColumns={`repeat(${gridColumns}, 1fr)`}
				gap={{ base: 4, md: 6 }}
				w='100%'
			>
				{categoryData?.map(category => (
					<Link key={category?.id} href={`/category/${category?.id}`}>
						<GridItem>
							<CategoryCard category={category} />
						</GridItem>
					</Link>
				))}
			</Grid>
		</CustomContainer>
	);
};

export default CategoryShowcase;