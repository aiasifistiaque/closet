'use client';
import React, { useState } from 'react';
import {
	Box,
	Button,
	Container,
	Input,
	Text,
	VStack,
	HStack,
	Link,
	Separator,
	Field,
	Grid,
} from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/react';
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';
import { authStyles } from './authStyles';
import PageLayout from '../Layout/PageLayout';
import { useRouter } from 'next/navigation';
import NextLink from 'next/link';

export default function SignupPageComponent() {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [agreeToTerms, setAgreeToTerms] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		lastName: '',
		email: '',
		phone: '',
		password: '',
		confirmPassword: '',
	});

	const router = useRouter();

	const handleInputChange = (field: string, value: string) => {
		setFormData(prev => ({
			...prev,
			[field]: value,
		}));
	};

	const handleSignup = async (e: React.FormEvent) => {
		e.preventDefault();

		if (formData.password !== formData.confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		if (!agreeToTerms) {
			alert('Please agree to the terms and conditions');
			return;
		}

		setIsLoading(true);

		try {
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1000));
			console.log('Signup data:', formData);
			// Handle successful signup here
			router.push('/login');
		} catch (error) {
			console.error('Signup error:', error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Box {...authStyles.pageContainer}>
			<Container maxW='container.sm'>
				<Box {...authStyles.formContainer}>
					{/* Header */}
					<Text {...authStyles.heading}>Create Account</Text>
					<Text {...authStyles.subHeading}>Join us and start your shopping journey</Text>

					{/* Signup Form */}
					<form onSubmit={handleSignup}>
						<VStack {...authStyles.formStack}>
							{/* Name Fields */}
							<Grid
								templateColumns={{ base: '1fr', md: '1fr' }}
								gap={4}
								w='full'>
								<Field.Root>
									<Field.Label {...authStyles.label}>First Name</Field.Label>
									<Box {...authStyles.inputGroup}>
										<Input
											{...authStyles.inputField}
											type='text'
											placeholder='Full Name'
											value={formData.name}
											onChange={e => handleInputChange('firstName', e.target.value)}
											pl='40px'
											required
										/>
										<Box
											position='absolute'
											left='12px'
											top='50%'
											transform='translateY(-50%)'
											color='gray.400'>
											<User size={16} />
										</Box>
									</Box>
								</Field.Root>

								{/* <Field.Root>
									<Field.Label {...authStyles.label}>Last Name</Field.Label>
									<Box {...authStyles.inputGroup}>
										<Input
											{...authStyles.inputField}
											type='text'
											placeholder='Last name'
											value={formData.lastName}
											onChange={e => handleInputChange('lastName', e.target.value)}
											pl='40px'
											required
										/>
										<Box
											position='absolute'
											left='12px'
											top='50%'
											transform='translateY(-50%)'
											color='gray.400'>
											<User size={16} />
										</Box>
									</Box>
								</Field.Root> */}
							</Grid>

							{/* Email Field */}
							<Field.Root w='full'>
								<Field.Label {...authStyles.label}>Email Address</Field.Label>
								<Box {...authStyles.inputGroup}>
									<Input
										{...authStyles.inputField}
										type='email'
										placeholder='Enter your email'
										value={formData.email}
										onChange={e => handleInputChange('email', e.target.value)}
										pl='40px'
										required
									/>
									<Box
										position='absolute'
										left='12px'
										top='50%'
										transform='translateY(-50%)'
										color='gray.400'>
										<Mail size={16} />
									</Box>
								</Box>
							</Field.Root>

							{/* Phone Field */}
							<Field.Root w='full'>
								<Field.Label {...authStyles.label}>Phone Number</Field.Label>
								<Box {...authStyles.inputGroup}>
									<Input
										{...authStyles.inputField}
										type='tel'
										placeholder='Enter your phone number'
										value={formData.phone}
										onChange={e => handleInputChange('phone', e.target.value)}
										pl='40px'
										required
									/>
									<Box
										position='absolute'
										left='12px'
										top='50%'
										transform='translateY(-50%)'
										color='gray.400'>
										<Phone size={16} />
									</Box>
								</Box>
							</Field.Root>

							{/* Password Field */}
							<Field.Root w='full'>
								<Field.Label {...authStyles.label}>Password</Field.Label>
								<Box {...authStyles.inputGroup}>
									<Input
										{...authStyles.inputField}
										type={showPassword ? 'text' : 'password'}
										placeholder='Create a password'
										value={formData.password}
										onChange={e => handleInputChange('password', e.target.value)}
										pl='40px'
										pr='40px'
										required
									/>
									<Box
										position='absolute'
										left='12px'
										top='50%'
										transform='translateY(-50%)'
										color='gray.400'>
										<Lock size={16} />
									</Box>
									<Box
										{...authStyles.passwordToggle}
										onClick={() => setShowPassword(!showPassword)}>
										{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
									</Box>
								</Box>
							</Field.Root>

							{/* Confirm Password Field */}
							<Field.Root w='full'>
								<Field.Label {...authStyles.label}>Confirm Password</Field.Label>
								<Box {...authStyles.inputGroup}>
									<Input
										{...authStyles.inputField}
										type={showConfirmPassword ? 'text' : 'password'}
										placeholder='Confirm your password'
										value={formData.confirmPassword}
										onChange={e => handleInputChange('confirmPassword', e.target.value)}
										pl='40px'
										pr='40px'
										required
									/>
									<Box
										position='absolute'
										left='12px'
										top='50%'
										transform='translateY(-50%)'
										color='gray.400'>
										<Lock size={16} />
									</Box>
									<Box
										{...authStyles.passwordToggle}
										onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
										{showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
									</Box>
								</Box>
							</Field.Root>

							{/* Terms and Conditions */}
							<HStack
								align='start'
								w='full'
								gap={3}>
								<Checkbox.Root
									checked={agreeToTerms}
									onCheckedChange={e => setAgreeToTerms(!!e.checked)}
									required>
									<Checkbox.HiddenInput />
									<Checkbox.Control />
								</Checkbox.Root>
								<Text {...authStyles.checkboxLabel}>
									I agree to the{' '}
									<Link
										{...authStyles.linkText}
										href='/terms'>
										Terms & Conditions
									</Link>{' '}
									and{' '}
									<Link
										{...authStyles.linkText}
										href='/privacy'>
										Privacy Policy
									</Link>
								</Text>
							</HStack>

							{/* Signup Button */}
							<Button
								{...authStyles.primaryButton}
								type='submit'
								loading={isLoading}
								loadingText='Creating account...'
								disabled={!agreeToTerms}>
								Create Account
							</Button>
						</VStack>
					</form>

					{/* Divider */}
					<Separator {...authStyles.divider} />

					{/* Social Signup */}
					{/* <VStack gap={3}>
						<Button {...authStyles.socialButton}>Continue with Google</Button>
						<Button {...authStyles.socialButton}>Continue with Facebook</Button>
					</VStack> */}

					{/* Login Link */}
					<Text
						textAlign='center'
						fontSize='sm'
						color='gray.600'
						mt={6}>
						Already have an account?{' '}
						<Link
							as={NextLink}
							{...authStyles.linkText}
							href='/login'>
							Sign in here
						</Link>
					</Text>
				</Box>
			</Container>
		</Box>
	);
}
