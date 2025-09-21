import { Text } from '@chakra-ui/react';
import React from 'react';
import { colors } from '../data/color';

interface SectionHeader2Props {
	title: string;
	bgColor?: string;
	py?: number | string;
	mb?: number | string;
	fontSize?: string | number;
}

const SectionHeader2: React.FC<SectionHeader2Props> = ({
	title,
	py = 3,
	mb = 8,
	fontSize = '2xl',
}) => {
	return (
		<Text
			textTransform='uppercase'
			fontSize={fontSize}
			fontWeight='700'
			bg='red'
			w='full'
			bgColor={colors.sectionHeaderBg}
			py={py}
			textAlign='center'
			mb={mb}>
			{title}
		</Text>
	);
};

export default SectionHeader2;
