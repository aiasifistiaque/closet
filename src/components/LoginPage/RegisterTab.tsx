'use client';
import { Box, Button, Checkbox, Field, Input, Link, Stack, Tabs, Text, VStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { colors } from '../data/color';

type RegisterTabProps = {
	registerData: any;
	setRegisterData: any;
	showPassword: any;
	setShowPassword: any;
	showConfirmPassword: any;
	setShowConfirmPassword: any;
	handleRegister: any;
};

const RegisterTab: FC<RegisterTabProps> = ({
	registerData,
	setRegisterData,
	showPassword,
	setShowPassword,
	showConfirmPassword,
	setShowConfirmPassword,
	handleRegister,
}) => {
	return (
		<Tabs.Content value='register'>
			<VStack gap={4} w='full'>
				<Text
					fontSize='2xl'
					fontWeight='bold'
					textAlign='center'
					color='gray.700'
				>
					Create Account
				</Text>

				<Stack gap={4} w='full'>
					<Field.Root required>
						<Field.Label>
							Mobile Number <Field.RequiredIndicator />
						</Field.Label>
						<Input
							border={`1px solid ${colors.blackBorder}`}
							type='tel'
							placeholder='Enter your mobile number'
							value={registerData.mobile}
							onChange={e =>
								setRegisterData((prev: any) => ({
									...prev,
									mobile: e.target.value,
								}))
							}
						/>
						<Field.HelperText>
							{"We'll send a verification code to this number."}
						</Field.HelperText>
					</Field.Root>

					<Field.Root required>
						<Field.Label>
							Email Address <Field.RequiredIndicator />
						</Field.Label>
						<Input
							border={`1px solid ${colors.blackBorder}`}
							type='email'
							placeholder='Enter your email address'
							value={registerData.email}
							onChange={e =>
								setRegisterData((prev: any) => ({
									...prev,
									email: e.target.value,
								}))
							}
						/>
						<Field.HelperText>
							{"We'll never share your email."}
						</Field.HelperText>
					</Field.Root>

					<Field.Root required w='full'>
						<Field.Label>
							Password <Field.RequiredIndicator />
						</Field.Label>
						<Box position='relative' w='full'>
							<Input
								border={`1px solid ${colors.blackBorder}`}
								type={showPassword ? 'text' : 'password'}
								placeholder='Create a password'
								value={registerData.password}
								onChange={e =>
									setRegisterData((prev: any) => ({
										...prev,
										password: e.target.value,
									}))
								}
								pr='60px'
								w='full'
							/>
							<Button
								position='absolute'
								right='8px'
								top='50%'
								transform='translateY(-50%)'
								onClick={() => setShowPassword(!showPassword)}
								variant='ghost'
								size='sm'
								minW='auto'
								h='auto'
								p={1}
								zIndex={2}
							>
								{showPassword ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
							</Button>
						</Box>
						<Field.HelperText>
							Password must be at least 8 characters long.
						</Field.HelperText>
					</Field.Root>

					<Field.Root required w='full'>
						<Field.Label>
							Confirm Password <Field.RequiredIndicator />
						</Field.Label>
						<Box position='relative' w='full'>
							<Input
								type={showConfirmPassword ? 'text' : 'password'}
								placeholder='Confirm your password'
								value={registerData.confirmPassword}
								onChange={e =>
									setRegisterData((prev: any) => ({
										...prev,
										confirmPassword: e.target.value,
									}))
								}
								pr='60px'
								w='full'
								borderColor={
									registerData.confirmPassword &&
									registerData.password !== registerData.confirmPassword
										? 'red.300'
										: colors.blackBorder
								}
							/>
							<Button
								position='absolute'
								right='8px'
								top='50%'
								transform='translateY(-50%)'
								onClick={() => setShowConfirmPassword(!showConfirmPassword)}
								variant='ghost'
								size='sm'
								minW='auto'
								h='auto'
								p={1}
								zIndex={2}
							>
								{showConfirmPassword ? (
									<FaEye size={16} />
								) : (
									<FaEyeSlash size={16} />
								)}
							</Button>
						</Box>
						{registerData.confirmPassword &&
							registerData.password !== registerData.confirmPassword && (
								<Field.ErrorText>Passwords do not match</Field.ErrorText>
							)}
					</Field.Root>

					<Box>
						<Checkbox.Root
							checked={registerData.agreeToTerms}
							onCheckedChange={(checked: any) =>
								setRegisterData((prev: any) => ({
									...prev,
									agreeToTerms: checked,
								}))
							}
							colorPalette='blue'
							alignItems='flex-start'
						>
							<Checkbox.HiddenInput />
							<Checkbox.Control>
								<Checkbox.Indicator />
							</Checkbox.Control>
							<Checkbox.Label>
								<Text fontSize='sm' lineHeight='1.4'>
									I agree to the{' '}
									<Link color='blue.500' textDecoration='underline' href='#'>
										Terms of Service
									</Link>{' '}
									and{' '}
									<Link color='blue.500' textDecoration='underline' href='#'>
										Privacy Policy
									</Link>
								</Text>
							</Checkbox.Label>
						</Checkbox.Root>
					</Box>

					<Button
						colorScheme='blue'
						size='lg'
						w='full'
						onClick={handleRegister}
						disabled={
							!registerData.mobile ||
							!registerData.email ||
							!registerData.password ||
							!registerData.confirmPassword ||
							registerData.password !== registerData.confirmPassword ||
							!registerData.agreeToTerms
						}
					>
						Create Account
					</Button>
				</Stack>
			</VStack>
		</Tabs.Content>
	);
};

export default RegisterTab;