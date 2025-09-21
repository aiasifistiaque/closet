'use client';
import React, { FC } from 'react';
import { Box, Text, Image, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { CategoryItem } from './categoriesData';
import { categoriesPageStyles } from './categoriesPageStyles';

interface CategoryCardProps {
	category: CategoryItem;
}

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
	return (
		<Link href={`/category/${category.slug}`}>
			<Box
				{...categoriesPageStyles.categoryCard}
				role='group'>
				{/* Category Image */}
				<Box {...categoriesPageStyles.categoryImageContainer}>
					<Image
						src={category.image}
						alt={category.name}
						{...categoriesPageStyles.categoryImage}
						_groupHover={{
							transform: 'scale(1.05)',
						}}
					/>
					<Box
						{...categoriesPageStyles.categoryImageOverlay}
						_groupHover={{
							opacity: 1,
						}}
					/>
				</Box>

				{/* Category Content */}
				<VStack
					{...categoriesPageStyles.categoryContent}
					alignItems='stretch'>
					<Text {...categoriesPageStyles.categoryName}>{category.name}</Text>

					<Text {...categoriesPageStyles.categoryDescription}>{category.description}</Text>

					<Text {...categoriesPageStyles.categoryStats}>
						{category.productCount} {category.productCount === 1 ? 'item' : 'items'}
					</Text>
				</VStack>
			</Box>
		</Link>
	);
};

export default CategoryCard;
