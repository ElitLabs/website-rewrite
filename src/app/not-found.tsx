import { Button } from '@/components/shadcn/ui/button';
import Link from 'next/link';

export const metadata = { title: 'ElitLabs | Not Found' };

export default function NotFound() {
	return (
		<div className='my-auto flex h-full min-h-screen w-full flex-col items-center justify-center gap-y-2'>
			<h1 className='text-7xl font-black'>404</h1>
			<h2 className='pb-4 text-3xl font-medium text-primary'>Page Not Found</h2>
			<Link href={'/'}>
				<Button size={'xl2'}>Back To Home</Button>
			</Link>
		</div>
	);
}
