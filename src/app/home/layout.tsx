import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { ReactNode } from 'react';

export default function HomeLayout({ children }: { children: ReactNode }) {
	return (
		<div className='mt-10 min-h-screen'>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
