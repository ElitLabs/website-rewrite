import './globals.css';
import { Providers } from './providers';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

const title = 'ElitLabs';
const description =
	'ElitLabs is a platform to help aspiring developers from all backgrounds learn to code! We teach in ways that are intuitive, comprehensive, and engaging. We here at ElitLabs are big believers in learning by doing.';
const image = 'https://elitlabs.com/images/elitlabsicon.png';

export const metadata: Metadata = {
	title,
	description,
	icons: ['https://elitlabs.com/images/favicon.ico'],
	openGraph: {
		title,
		description,
		images: [image],
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		images: [image],
		creator: '@elitlabsteam',
	},
	metadataBase: new URL('https://elitlabs.com'),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/images/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/images/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/images/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
			</head>
			<body className='smooth-scroll min-h-screen overflow-x-hidden'>
				<Providers>
					{children}
					<Analytics />
				</Providers>
			</body>
		</html>
	);
}
