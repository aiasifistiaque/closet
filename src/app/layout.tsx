import type { Metadata } from 'next';
import './globals.css';
import { Provider } from '@/components/ui/provider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CartProvider } from '@/components/contexts/CartContext';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
	title: 'Closet 24/7',
	description: 'Closet 24/7',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='preconnect'
					href='https://fonts.googleapis.com'
				/>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin=''
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Zalando+Sans+Expanded:ital,wght@0,100..900;1,100..900&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body>
				<CartProvider>
					<Provider defaultTheme='light'>
						{children}
						<Toaster />
					</Provider>
				</CartProvider>
			</body>
		</html>
	);
}
