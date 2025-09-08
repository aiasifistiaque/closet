"use client"
import React from 'react';
import {
  VStack,
  Container,
} from '@chakra-ui/react';
import { menPoloData, womenKurtiData,  } from '../data/productData';
import CategorySection from '../reusable/CategorySection';
import CustomContainer from '../reusable/Container';

const SpecialOffers = () => {
  return (
    <CustomContainer pb={10}>
      <VStack gap={14} align="stretch">
        <CategorySection data={menPoloData} />
        <CategorySection data={womenKurtiData} />
      </VStack>
    </CustomContainer>
  );
};

export default SpecialOffers;