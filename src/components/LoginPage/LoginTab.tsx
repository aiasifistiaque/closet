'use client';
import { Box, Button, Checkbox, Field, HStack, Input, Link, Stack, Tabs, Text, VStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { colors } from '../data/color';

type LoginTabProps = {
	loginData: any;
	setLoginData: any;
	showPassword: any;
	setShowPassword: any;
	handleLogin: any;
};

const LoginTab: FC<LoginTabProps> = ({
	loginData,
	setLoginData,
	showPassword,
	setShowPassword,
	handleLogin,
}) => {
	return (
		<Tabs.Content value='login'>
			<VStack gap={4} w='full'>
				<Text
					fontSize='2xl'
					fontWeight='bold'
					textAlign='center'
					color='gray.700'
				>
					Login
				</Text>

				<Stack gap={4} w='full'>
					<Field.Root required w='full'>
						<Field.Label>
							Email or Phone <Field.RequiredIndicator />
						</Field.Label>
						<Input
							border={`1px solid ${colors.blackBorder}`}
							type='text'
							placeholder='Enter your email or phone'
							value={loginData.emailOrPhone}
							onChange={e =>
								setLoginData((prev: any) => ({
									...prev,
									emailOrPhone: e.target.value,
								}))
							}
							w='full'
						/>
						<Field.HelperText>
							{"	We'll use this to verify your identity."}
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
								placeholder='Enter your password'
								value={loginData.password}
								onChange={e =>
									setLoginData((prev: any) => ({
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
					</Field.Root>

					<HStack justify='space-between' w='full'>
						<Checkbox.Root
							checked={loginData.keepLoggedIn}
							onCheckedChange={(checked: any) =>
								setLoginData((prev: any) => ({
									...prev,
									keepLoggedIn: checked,
								}))
							}
							colorPalette='blue'
						>
							<Checkbox.HiddenInput />
							<Checkbox.Control>
								<Checkbox.Indicator />
							</Checkbox.Control>
							<Checkbox.Label>Keep me logged in</Checkbox.Label>
						</Checkbox.Root>
						<Link
							color='blue.500'
							fontSize='sm'
							href='#'
							textDecoration='underline'
						>
							Forgot Password?
						</Link>
					</HStack>

					<Button
						colorScheme='blue'
						size='lg'
						w='full'
						onClick={handleLogin}
						disabled={!loginData.emailOrPhone || !loginData.password}
					>
						Login
					</Button>
				</Stack>
			</VStack>
		</Tabs.Content>
	);
};

export default LoginTab;