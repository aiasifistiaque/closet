'use client';

import { Box, Text, VStack, HStack, Button, Input, Grid, Field } from '@chakra-ui/react';
import { MapPin, Phone, Mail, Key } from 'lucide-react';
import { profileStyles } from './profileStyles';
import { UserProfile } from './types';

interface ProfileFormProps {
	formData: UserProfile;
	isEditing: boolean;
	loading: boolean;
	onInputChange: (field: string, value: string) => void;
	onSaveProfile: () => void;
	onCancelEdit: () => void;
	onChangePassword: () => void;
	onStartEditing: () => void;
}

export default function ProfileForm({
	formData,
	isEditing,
	loading,
	onInputChange,
	onSaveProfile,
	onCancelEdit,
	onChangePassword,
	onStartEditing,
}: ProfileFormProps) {
	return (
		<VStack
			alignItems='stretch'
			gap={8}>
			{/* Profile Header */}
			<Box>
				<Text {...profileStyles.sectionHeading}>Personal Information</Text>
				<Text
					fontSize='sm'
					color='gray.600'
					fontFamily='"Zalando Sans Expanded", sans-serif'>
					Manage your account details and preferences
				</Text>
			</Box>

			<Box {...profileStyles.formContainer}>
				<VStack
					alignItems='stretch'
					gap={6}>
					{/* Name Fields */}
					<Grid
						templateColumns={{ base: '1fr', md: '1fr 1fr' }}
						gap={4}>
						<Field.Root>
							<Field.Label {...profileStyles.formLabel}>First Name</Field.Label>
							<Input
								{...profileStyles.input}
								value={formData.firstName}
								onChange={e => onInputChange('firstName', e.target.value)}
								readOnly={!isEditing}
								bg={isEditing ? 'white' : 'gray.50'}
							/>
						</Field.Root>

						<Field.Root>
							<Field.Label {...profileStyles.formLabel}>Last Name</Field.Label>
							<Input
								{...profileStyles.input}
								value={formData.lastName}
								onChange={e => onInputChange('lastName', e.target.value)}
								readOnly={!isEditing}
								bg={isEditing ? 'white' : 'gray.50'}
							/>
						</Field.Root>
					</Grid>

					{/* Contact Information */}
					<Field.Root>
						<Field.Label {...profileStyles.formLabel}>
							<HStack gap={2}>
								<Mail size={16} />
								<Text>Email Address</Text>
							</HStack>
						</Field.Label>
						<Input
							{...profileStyles.input}
							type='email'
							value={formData.email}
							onChange={e => onInputChange('email', e.target.value)}
							readOnly={!isEditing}
							bg={isEditing ? 'white' : 'gray.50'}
						/>
					</Field.Root>

					<Field.Root>
						<Field.Label {...profileStyles.formLabel}>
							<HStack gap={2}>
								<Phone size={16} />
								<Text>Phone Number</Text>
							</HStack>
						</Field.Label>
						<Input
							{...profileStyles.input}
							value={formData.phone}
							onChange={e => onInputChange('phone', e.target.value)}
							readOnly={!isEditing}
							bg={isEditing ? 'white' : 'gray.50'}
						/>
					</Field.Root>

					{/* Address Section */}
					<Box>
						<Text
							{...profileStyles.formLabel}
							mb={4}>
							<HStack gap={2}>
								<MapPin size={16} />
								<Text>Address</Text>
							</HStack>
						</Text>

						<VStack
							alignItems='stretch'
							gap={4}>
							<Field.Root>
								<Field.Label {...profileStyles.formLabel}>Street Address</Field.Label>
								<Input
									{...profileStyles.input}
									value={formData.address.street}
									onChange={e => onInputChange('address.street', e.target.value)}
									readOnly={!isEditing}
									bg={isEditing ? 'white' : 'gray.50'}
								/>
							</Field.Root>

							<Grid
								templateColumns={{ base: '1fr', md: '2fr 1fr' }}
								gap={4}>
								<Field.Root>
									<Field.Label {...profileStyles.formLabel}>City</Field.Label>
									<Input
										{...profileStyles.input}
										value={formData.address.city}
										onChange={e => onInputChange('address.city', e.target.value)}
										readOnly={!isEditing}
										bg={isEditing ? 'white' : 'gray.50'}
									/>
								</Field.Root>

								<Field.Root>
									<Field.Label {...profileStyles.formLabel}>Postal Code</Field.Label>
									<Input
										{...profileStyles.input}
										value={formData.address.postalCode}
										onChange={e => onInputChange('address.postalCode', e.target.value)}
										readOnly={!isEditing}
										bg={isEditing ? 'white' : 'gray.50'}
									/>
								</Field.Root>
							</Grid>

							<Field.Root>
								<Field.Label {...profileStyles.formLabel}>Country</Field.Label>
								<Input
									{...profileStyles.input}
									value={formData.address.country}
									onChange={e => onInputChange('address.country', e.target.value)}
									readOnly={!isEditing}
									bg={isEditing ? 'white' : 'gray.50'}
								/>
							</Field.Root>
						</VStack>
					</Box>

					{/* Password Section */}
					<Box {...profileStyles.infoCard}>
						<HStack
							justify='space-between'
							align='center'>
							<VStack
								alignItems='start'
								gap={1}>
								<Text
									fontSize='sm'
									fontWeight='500'
									color='gray.900'>
									Password
								</Text>
								<Text
									fontSize='xs'
									color='gray.600'>
									Last changed 30 days ago
								</Text>
							</VStack>
							<Button
								{...profileStyles.secondaryButton}
								size='sm'
								onClick={onChangePassword}>
								<HStack gap={2}>
									<Key size={14} />
									<Text>Change Password</Text>
								</HStack>
							</Button>
						</HStack>
					</Box>

					{/* Action Buttons */}
					<HStack
						gap={3}
						justify='flex-end'>
						{isEditing ? (
							<>
								<Button
									{...profileStyles.secondaryButton}
									onClick={onCancelEdit}
									disabled={loading}>
									Cancel
								</Button>
								<Button
									{...profileStyles.primaryButton}
									onClick={onSaveProfile}
									loading={loading}>
									Save Changes
								</Button>
							</>
						) : (
							<Button
								{...profileStyles.primaryButton}
								onClick={onStartEditing}>
								Edit Profile
							</Button>
						)}
					</HStack>
				</VStack>
			</Box>
		</VStack>
	);
}
