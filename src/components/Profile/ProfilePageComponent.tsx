'use client';

import { Box, Text, VStack, HStack, Button } from '@chakra-ui/react';
import { Tabs } from '@chakra-ui/react';
import { User, Package } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { profileStyles } from './profileStyles';
import ProfileForm from './ProfileForm';
import { UserProfile, ProfilePageComponentProps } from './types';

export default function ProfilePageComponent({
	user = {
		firstName: 'John',
		lastName: 'Doe',
		email: 'john.doe@example.com',
		phone: '+880 1700-000000',
		address: {
			street: '123 Main Street, Apt 4B',
			city: 'Dhaka',
			postalCode: '1205',
			country: 'Bangladesh',
		},
	},
	onUpdateProfile,
	onChangePassword,
	onViewOrders,
}: ProfilePageComponentProps) {
	const router = useRouter();
	const [formData, setFormData] = useState<UserProfile>(user);
	const [isEditing, setIsEditing] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleInputChange = (field: string, value: string) => {
		if (field.includes('.')) {
			const [parent, child] = field.split('.');
			setFormData(prev => ({
				...prev,
				[parent]: {
					...(prev as any)[parent],
					[child]: value,
				},
			}));
		} else {
			setFormData(prev => ({
				...prev,
				[field]: value,
			}));
		}
	};

	const handleSaveProfile = async () => {
		setLoading(true);
		try {
			await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
			onUpdateProfile?.(formData);
			setIsEditing(false);
		} catch (error) {
			console.error('Error updating profile:', error);
		} finally {
			setLoading(false);
		}
	};

	const handleCancelEdit = () => {
		setFormData(user);
		setIsEditing(false);
	};

	const handleChangePassword = () => {
		onChangePassword?.();
	};

	const handleViewOrders = () => {
		onViewOrders?.();
		router.push('/my-orders');
	};

	return (
		<Box {...profileStyles.pageContainer}>
			<Box {...profileStyles.mainContainer}>
				<Tabs.Root defaultValue='profile'>
					<Tabs.List {...profileStyles.tabList}>
						<Tabs.Trigger
							{...profileStyles.tab}
							value='profile'>
							<HStack gap={2}>
								<User size={16} />
								<Text>Profile</Text>
							</HStack>
						</Tabs.Trigger>
						<Tabs.Trigger
							{...profileStyles.tab}
							value='orders'
							onClick={handleViewOrders}>
							<HStack gap={2}>
								<Package size={16} />
								<Text>My Orders</Text>
							</HStack>
						</Tabs.Trigger>
					</Tabs.List>

					<Tabs.Content
						value='profile'
						{...profileStyles.tabPanel}>
						<ProfileForm
							formData={formData}
							isEditing={isEditing}
							loading={loading}
							onInputChange={handleInputChange}
							onSaveProfile={handleSaveProfile}
							onCancelEdit={handleCancelEdit}
							onChangePassword={handleChangePassword}
							onStartEditing={() => setIsEditing(true)}
						/>
					</Tabs.Content>

					<Tabs.Content
						value='orders'
						{...profileStyles.tabPanel}>
						<VStack
							alignItems='stretch'
							gap={6}>
							<Box>
								<Text {...profileStyles.sectionHeading}>My Orders</Text>
								<Text
									fontSize='sm'
									color='gray.600'>
									View and track your order history
								</Text>
							</Box>

							<Box {...profileStyles.emptyState}>
								<Package {...profileStyles.emptyStateIcon} />
								<Text {...profileStyles.emptyStateText}>Your orders will appear here</Text>
								<Text {...profileStyles.emptyStateSubtext}>
									Start shopping to see your order history
								</Text>
								<Link href='/'>
									<Button
										{...profileStyles.primaryButton}
										mt={4}>
										Start Shopping
									</Button>
								</Link>
							</Box>
						</VStack>
					</Tabs.Content>
				</Tabs.Root>
			</Box>
		</Box>
	);
}
