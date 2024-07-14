// TODO: MAKE IT RETURN TO courses.
import { Button } from '@/components/shadcn/ui/button';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div>
			<h1>404</h1>
			<h2>Page Not Found TEST</h2>
			<Link href={'/'}>
				<Button size={'xl2'}>Back To Home</Button>
			</Link>
		</div>
	);
}
