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
