import { Field } from '@chakra-ui/react';
import { Input, Textarea } from '@chakra-ui/react';

interface InputFieldProps {
	label: string;
	placeholder: string;
	isRequired?: boolean;
	type?: 'text' | 'textarea' | 'email' | 'tel';
}

export const InputField = ({ label, placeholder, isRequired, type = 'text' }: InputFieldProps) => {
	return (
		<Field.Root required={isRequired}>
			<Field.Label
				fontSize='sm'
				fontFamily='"Zalando Sans Expanded", sans-serif'
				fontWeight='500'
				color='gray.700'
				mb={2}>
				{label}
			</Field.Label>
			{type === 'textarea' ? (
				<Textarea
					placeholder={placeholder}
					border='1px solid'
					borderColor='gray.300'
					borderRadius='none'
					minH='100px'
					fontFamily='"Zalando Sans Expanded", sans-serif'
					fontSize='sm'
					_hover={{ borderColor: 'gray.400' }}
					_focus={{
						borderColor: 'blue.500',
						boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)',
						outline: 'none',
					}}
					p={3}
				/>
			) : (
				<Input
					placeholder={placeholder}
					border='1px solid'
					borderColor='gray.300'
					borderRadius='none'
					fontFamily='"Zalando Sans Expanded", sans-serif'
					fontSize='sm'
					h='44px'
					_hover={{ borderColor: 'gray.400' }}
					_focus={{
						borderColor: 'blue.500',
						boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)',
						outline: 'none',
					}}
					type={type}
				/>
			)}
		</Field.Root>
	);
};
