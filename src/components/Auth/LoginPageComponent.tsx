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
} from '@chakra-ui/react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { authStyles } from './authStyles';
import PageLayout from '../Layout/PageLayout';
import { useRouter } from 'next/navigation';
import NextLink from 'next/link';

export default function LoginPageComponent() {
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const router = useRouter();

	const handleInputChange = (field: string, value: string) => {
		setFormData(prev => ({
			...prev,
			[field]: value,
		}));
	};

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1000));
			console.log('Login data:', formData);
			// Handle successful login here
			router.push('/');
		} catch (error) {
			console.error('Login error:', error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Box {...authStyles.pageContainer}>
			<Container maxW='container.sm'>
				<Box {...authStyles.formContainer}>
					{/* Header */}
					<Text {...authStyles.heading}>Welcome Back</Text>
					<Text {...authStyles.subHeading}>Sign in to your account to continue shopping</Text>

					{/* Login Form */}
					<form onSubmit={handleLogin}>
						<VStack {...authStyles.formStack}>
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

							{/* Password Field */}
							<Field.Root w='full'>
								<Field.Label {...authStyles.label}>Password</Field.Label>
								<Box {...authStyles.inputGroup}>
									<Input
										{...authStyles.inputField}
										type={showPassword ? 'text' : 'password'}
										placeholder='Enter your password'
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

							{/* Forgot Password */}
							<HStack
								justify='flex-end'
								w='full'>
								<Link
									{...authStyles.linkText}
									href='#'
									fontSize='sm'>
									Forgot your password?
								</Link>
							</HStack>

							{/* Login Button */}
							<Button
								{...authStyles.primaryButton}
								type='submit'
								loading={isLoading}
								loadingText='Signing in...'>
								Sign In
							</Button>
						</VStack>
					</form>

					{/* Divider */}
					<Separator {...authStyles.divider} />

					{/* Social Login */}
					{/* <VStack gap={3}>
						<Button {...authStyles.socialButton}>Continue with Google</Button>
						<Button {...authStyles.socialButton}>Continue with Facebook</Button>
					</VStack> */}

					{/* Sign Up Link */}
					<Text
						textAlign='center'
						fontSize='sm'
						color='gray.600'
						mt={6}>
						{`Don't have an account? `}
						<Link
							as={NextLink}
							{...authStyles.linkText}
							href='/signup'>
							Create an account
						</Link>
					</Text>
				</Box>
			</Container>
		</Box>
	);
}
