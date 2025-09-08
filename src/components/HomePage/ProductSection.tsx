import { Grid } from '@chakra-ui/react';
import React from 'react';
import ProductCard from '../reusable/ProductCard';
import SectionHeader2 from '../reusable/SectionHeader2';
import CustomContainer from '../reusable/Container';
import { DetailedProduct } from '../data/productData';

interface ProductSectionProps {
  title: string;
  products: DetailedProduct[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => (
  <CustomContainer pb={10}>
    <SectionHeader2 title={title} />
    <Grid
      templateColumns={{
        base: '1fr',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
        '2xl': 'repeat(6, 1fr)',
      }}
      gap={6}
    >
      {products.slice(0, 6).map((product, index) => (
        <ProductCard
					key={index}
					product={product} // only this prop
				/>

      ))}
    </Grid>
  </CustomContainer>
);

export default ProductSection;
