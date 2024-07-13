import Link from 'next/link';
import { Button } from './shadcn/ui/button';
import { SiDiscord, SiGmail } from 'react-icons/si';

export default function Footer() {
	return (
		<footer className='flex w-full justify-start border-t px-10 py-6 sm:justify-center sm:py-4'>
			<div className='flex w-full max-w-7xl flex-col items-center gap-y-5 sm:flex-row sm:justify-between'>
				<h1 className='flex w-full flex-row items-center gap-x-2 text-3xl font-bold sm:w-auto'>
					2024
					<Link href='/'>ElitLabs</Link>
				</h1>
				<div className='grid w-full grid-cols-2 items-center gap-x-2 text-lg font-semibold sm:flex sm:w-auto sm:flex-row sm:gap-x-4'>
					<h1 className='col-span-2 text-2xl font-bold sm:hidden'>Pages</h1>
					<Link href='#'>Courses</Link>
					<Link href='/about'>About</Link>
					<Link href='/contact'>Contact</Link>
					<Link href='#'>Terms</Link>
					<Link href='#'>Privacy</Link>
				</div>
				<div className='flex w-full flex-col items-center justify-start gap-y-1 sm:w-auto sm:justify-center'>
					<h3 className='w-full text-2xl font-bold sm:w-auto sm:text-xl'>
						Contact Us
					</h3>
					<div className='flex w-full flex-row items-center gap-x-2 sm:w-auto'>
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
				</div>
			</div>
		</footer>
	);
}
