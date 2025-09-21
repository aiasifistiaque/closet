'use client';

import { colors } from '@/components/data/color';
import PageLayout from '@/components/Layout/PageLayout';
import PrimaryButton from '@/components/reusable/PrimaryButton';
import { Box, VStack, Heading, Text, Image } from '@chakra-ui/react';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';

import { OrderSuccessPageComponent } from '@/components/OrderSuccess';

export default function OrderSuccessPage() {
	return (
		<PageLayout>
			<OrderSuccessPageComponent />
		</PageLayout>
	);
}
