import { Field } from '@chakra-ui/react';
import { Input, Textarea } from '@chakra-ui/react';
import { colors } from '../data/color';

interface InputFieldProps {
	label: string;
	placeholder: string;
	isRequired?: boolean;
	type?: 'text' | 'textarea';
}

export const InputField = ({
	label,
	placeholder,
	isRequired,
	type = 'text',
}: InputFieldProps) => {
	return (
		<Field.Root required={isRequired}>
			<Field.Label fontSize='sm'>{label}</Field.Label>
			{type === 'textarea' ? (
				<Textarea
					placeholder={placeholder}
					border={`1px solid ${colors.blackBorder}`}
					minH='120px'
				/>
			) : (
				<Input
					placeholder={placeholder}
					border={`1px solid ${colors.blackBorder}`}
				/>
			)}
		</Field.Root>
	);
};
