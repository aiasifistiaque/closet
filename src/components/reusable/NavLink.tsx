import { Link } from '@chakra-ui/react';
import React from 'react';

const NavLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
	<Link
		fontSize='sm'
		fontWeight='medium'
		color='white'
		_hover={{ color: 'blue.500' }}
		cursor='pointer'
		href={href}>
		{children}
	</Link>
);

export default NavLink;
