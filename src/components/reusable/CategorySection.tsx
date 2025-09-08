import { Badge, Box, Grid, GridItem, Icon, Image, Text, useBreakpointValue, VStack, Center } from '@chakra-ui/react';
import React from 'react';
import { CategoryData } from '../data/productData';
import { FiArrowUpRight } from 'react-icons/fi';
import MiniProductCard from './MiniProductCard';

const CategorySection: React.FC<{ data: CategoryData }> = ({ data }) => {
  const mainImageHeight = useBreakpointValue({ base: '250px', md: '400px', lg: '300px', "2xl": '490px' });

  const maxProducts = useBreakpointValue({
    base: data?.products?.length || 0,
    md: data?.products?.length || 0,
    lg: Math.min(data?.products?.length || 0, 6),
    "2xl": Math.min(data?.products?.length || 0, 8),
  });

  const displayProducts = data?.products?.slice(0, maxProducts) || [];

  return (
    <Box w="100%" overflow="hidden">
      <Grid
        templateColumns={{ base: "1fr", lg: "250px 1fr", "2xl": "400px 1fr" }}
        gap={{ base: 4, md: 6 }}
        alignItems="start"
        w="100%"
      >
        {/* Main Category Image */}
        <GridItem w="100%">
          <Box
            position="relative"
            h={mainImageHeight}
            overflow="hidden"
            bg="gray.100"
            w="100%"
          >
            <Image
              src={data?.mainImage}
              alt={data?.title}
              w="100%"
              h="100%"
              objectFit="cover"
            />
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.4))"
            >
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
                  Desiginer Polo
                </Text>
              </Box>
            </Box>
          </Box>
        </GridItem>

        {/* Product Grid */}
        <GridItem w="100%">
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              "2xl": "repeat(4, 1fr)" 
            }}
            gap={{ base: 2, md: 3 }}
            w="100%"
            h={{ lg: mainImageHeight }}
            overflow="auto"
            alignContent="start"
            templateRows={{ "2xl": 'repeat(2, 1fr)' }}
          >
            {displayProducts?.map((product, index) => {
              const isLastItem = index === displayProducts?.length - 1;
              return (
                <GridItem key={product?.id} w="100%" position="relative">
                  <Box
                    w="100%"
                    h={{ 
                      base: "auto", 
                      lg: `calc((${mainImageHeight} - 12px) / 2)` 
                    }}
                    position="relative"
                  >
                    <MiniProductCard
                      image={product?.image}
                      price={product?.price}
                      originalPrice={product?.originalPrice}
                      width="100%"
                      height={{ 
                        base: "250px", 
                        md: "300px",
                        lg: "100%" 
                      }}
                    />
                    {isLastItem && (
                      <Center
                        position="absolute"
                        top={0}
                        left={0}
                        w="100%"
                        h="100%"
                        bg="blackAlpha.600"
                        color="white"
                        fontWeight="bold"
                        fontSize="4xl"
                      >
                        View More
                      </Center>
                    )}
                  </Box>
                </GridItem>
              );
            })}
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default CategorySection;
