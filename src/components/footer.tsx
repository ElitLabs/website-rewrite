import Link from 'next/link';
import { Button } from './shadcn/ui/button';
import { SiDiscord, SiGmail } from 'react-icons/si';

export default function Footer() {
	return (
		<footer className='flex flex-row items-center justify-between border-t px-10 py-6'>
			<h1 className='flex flex-row items-center gap-x-2 text-3xl font-bold'>
				2024
				<Link href='/'>ElitLabs</Link>
			</h1>
			<div className='flex flex-row items-center gap-x-3 text-lg font-medium'>
				<Link href='#'>Courses</Link>
				<Link href='#'>About</Link>
				<Link href='#'>Contact</Link>
				<Link href='#'>Terms</Link>
				<Link href='#'>Privacy</Link>
			</div>
			<div className='flex flex-row items-center gap-x-2'>
				<Button variant='outline' size='icon'>
					<a href={`https://discord.gg/5byD5UsdUv`}>
						<SiDiscord className='text-[1.35rem] text-[#5865F2]' />
						<span className='sr-only'>Join Discord Server</span>
					</a>
				</Button>
				<Button variant='outline' size='icon'>
					<a href={`mailto:team@elitlabs.com`}>
						<SiGmail className='text-[1.35rem] text-[#EA4335]' />
						<span className='sr-only'>Email us at team@elitlabs.com</span>
					</a>
				</Button>
			</div>
		</footer>
	);
}
