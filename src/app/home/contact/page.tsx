// TODO: Fix sizes
import Link from 'next/link';
import { SiDiscord, SiInstagram, SiTwitter } from 'react-icons/si';

export const metadata = {
	title: 'ElitLabs | Contact',
};

export default function Contact() {
	return (
		<div className='my-auto flex h-full w-full flex-col items-center justify-center'>
			<h1 className='pb-10 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl'>
				Contact Us
			</h1>

			<div className='flex max-w-[90%] grid-cols-2 flex-col gap-x-16 gap-y-10 lg:grid 2xl:max-w-[85%] 2xl:grid-cols-3'>
				<div className='grid grid-cols-1 justify-between gap-y-4 rounded-md border border-neutral-950 bg-gradient-to-tr from-stone-100 via-stone-50 to-background p-6 dark:border-neutral-600 dark:from-stone-900 dark:via-stone-950 dark:to-background 2xl:col-start-1 2xl:bg-gradient-to-bl'>
					<h1 className='text-center text-2xl font-semibold'>
						Want to stay up to date with ElitLabs?
					</h1>
					<div className='flex grid-cols-2 flex-col gap-x-3 gap-y-4 font-mono text-xl lg:grid'>
						<Link
							className='flex items-center justify-center rounded-md bg-gradient-to-tr from-neutral-300 via-neutral-400 to-neutral-300 p-[3px] dark:from-neutral-900 dark:via-neutral-700 dark:to-neutral-900 2xl:bg-gradient-to-br'
							href='https://instagram.com/elit_labs'
						>
							<span className='flex w-full flex-col items-center justify-center rounded-md bg-neutral-50 p-3 transition-all duration-300 ease-in-out hover:bg-neutral-100/90 dark:bg-neutral-950 hover:dark:bg-neutral-900'>
								<SiInstagram className='text-2xl text-[#E1306C]' /> @elit_labs
							</span>
						</Link>
						<Link
							className='flex items-center justify-center rounded-md bg-gradient-to-tr from-neutral-300 via-neutral-400 to-neutral-300 p-[3px] dark:from-neutral-900 dark:via-neutral-700 dark:to-neutral-900'
							href='https://twitter.com/elitlabsteam'
						>
							<span className='flex w-full flex-col items-center justify-center rounded-md bg-neutral-50 p-3 transition-all duration-300 ease-in-out hover:bg-neutral-100/90 dark:bg-neutral-950 hover:dark:bg-neutral-900'>
								<SiTwitter className='text-2xl text-[#1DA1F2]' /> @elitlabsteam
							</span>
						</Link>
					</div>
				</div>
				<div className='row-start-2 mx-auto grid w-full justify-between gap-y-4 rounded-md border border-neutral-950 bg-gradient-to-b from-stone-100 via-stone-50 to-background p-6 dark:border-neutral-600 dark:from-stone-900 dark:via-stone-950 dark:to-background lg:col-span-2 lg:w-[50%] 2xl:col-span-1 2xl:col-start-2 2xl:row-start-1 2xl:w-full'>
					<h1 className='text-center text-2xl font-semibold'>
						For any questions or concerns, please email us at
					</h1>
					<div className='mx-auto w-min gap-x-4 font-mono text-xl'>
						<Link
							className='flex items-center justify-center rounded-md bg-gradient-to-br from-neutral-300 via-neutral-400 to-neutral-300 p-[3px] dark:from-neutral-900 dark:via-neutral-700 dark:to-neutral-900'
							href='mailto:team@elitlabs.com'
						>
							<span className='flex w-full flex-col items-center justify-center rounded-md bg-neutral-50 p-3 transition-all duration-300 ease-in-out hover:bg-neutral-100/90 dark:bg-neutral-950 hover:dark:bg-neutral-900'>
								team@elitlabs.com
							</span>
						</Link>
					</div>
				</div>
				<div className='row-start-1 flex flex-col justify-between gap-y-4 rounded-md border border-neutral-950 bg-gradient-to-tl from-stone-100 via-stone-50 to-background p-6 dark:border-neutral-600 dark:from-stone-900 dark:via-stone-950 dark:to-background 2xl:col-start-3 2xl:bg-gradient-to-br'>
					<h1 className='text-center text-2xl font-semibold'>
						Join our community!
					</h1>
					<div className='mx-auto w-min gap-x-4 font-mono text-xl'>
						<Link
							className='flex items-center justify-center rounded-md bg-gradient-to-br from-neutral-300 via-neutral-400 to-neutral-300 p-[3px] dark:from-neutral-900 dark:via-neutral-700 dark:to-neutral-900'
							href='https://discord.gg/5byD5UsdUv'
						>
							<span className='flex w-full flex-col items-center justify-center rounded-md bg-neutral-50 p-3 transition-all duration-300 ease-in-out hover:bg-neutral-100/90 dark:bg-neutral-950 hover:dark:bg-neutral-900'>
								<SiDiscord className='text-2xl text-[#5865F2]' /> /5byD5UsdUv
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
