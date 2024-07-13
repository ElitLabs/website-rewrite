import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { ReactNode } from 'react';

export const metadata = {
	title: 'ElitLabs | Home',
};

export default function HomeLayout({ children }: { children: ReactNode }) {
	return (
		<div className='flex min-h-screen flex-col justify-between pt-16'>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
