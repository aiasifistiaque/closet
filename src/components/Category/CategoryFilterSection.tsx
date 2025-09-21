'use client';
import { Checkbox, Flex, Text, VStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { categoryStyles } from './categoryStyles';

type CategoryFilterSectionProps = {
	categories: any;
	colors: any;
	sizes: any;
	priceRanges: any;
};

const CategoryFilterSection: FC<CategoryFilterSectionProps> = ({
	categories,
	colors,
	sizes,
	priceRanges,
}) => {
	return (
		<VStack
			alignItems='stretch'
			gap={4}>
			{/* Categories Filter */}
			<Flex
				{...categoryStyles.filterSection}
				direction='column'>
				<Text {...categoryStyles.filterTitle}>Categories</Text>
				<VStack
					alignItems='stretch'
					gap={2}>
					{categories?.map((item: any, index: number) => (
						<Checkbox.Root
							key={index}
							size='sm'>
							<Checkbox.HiddenInput />
							<Checkbox.Control />
							<Checkbox.Label {...categoryStyles.filterOption}>{item}</Checkbox.Label>
						</Checkbox.Root>
					))}
				</VStack>
			</Flex>

			{/* Colors Filter */}
			<Flex
				{...categoryStyles.filterSection}
				direction='column'>
				<Text {...categoryStyles.filterTitle}>Colors</Text>
				<VStack
					alignItems='stretch'
					gap={2}>
					{[...new Set(colors)]?.map((item: any, index: number) => (
						<Checkbox.Root
							key={index}
							size='sm'>
							<Checkbox.HiddenInput />
							<Checkbox.Control />
							<Checkbox.Label {...categoryStyles.filterOption}>{item}</Checkbox.Label>
						</Checkbox.Root>
					))}
				</VStack>
			</Flex>

			{/* Sizes Filter */}
			<Flex
				{...categoryStyles.filterSection}
				direction='column'>
				<Text {...categoryStyles.filterTitle}>Sizes</Text>
				<VStack
					alignItems='stretch'
					gap={2}>
					{sizes?.map((item: any, index: number) => (
						<Checkbox.Root
							key={index}
							size='sm'>
							<Checkbox.HiddenInput />
							<Checkbox.Control />
							<Checkbox.Label {...categoryStyles.filterOption}>{item}</Checkbox.Label>
						</Checkbox.Root>
					))}
				</VStack>
			</Flex>

			{/* Price Range Filter */}
			<Flex
				{...categoryStyles.filterSection}
				direction='column'>
				<Text {...categoryStyles.filterTitle}>Price Range</Text>
				<VStack
					alignItems='stretch'
					gap={2}>
					{priceRanges?.map((range: any, index: number) => (
						<Checkbox.Root
							key={index}
							size='sm'>
							<Checkbox.HiddenInput />
							<Checkbox.Control />
							<Checkbox.Label {...categoryStyles.filterOption}>
								৳{range.min} - ৳{range.max}
							</Checkbox.Label>
						</Checkbox.Root>
					))}
				</VStack>
			</Flex>
		</VStack>
	);
};

export default CategoryFilterSection;
