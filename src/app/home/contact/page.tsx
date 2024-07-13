import { SiDiscord, SiInstagram, SiTwitter } from 'react-icons/si';

export const metadata = {
	title: 'ElitLabs | Contact',
};

export default function Contact() {
	return (
		<div className='3xl:pt-[25vh] flex h-full w-full flex-col items-center justify-center pb-10 pt-10 lg:pt-[5vh]'>
			<h1 className='pb-[2.5%] text-center font-mono text-[2.825rem] font-black uppercase tracking-wide'>
				Contact Us
			</h1>

			<div className='3xl:grid-cols-3 flex max-w-[90%] grid-cols-2 flex-col gap-x-16 gap-y-10 lg:grid lg:max-w-[75%]'>
				<div className='border-1 3xl:col-start-1 3xl:bg-gradient-to-bl grid grid-cols-1 justify-between gap-y-4 rounded-md border-neutral-950 bg-gradient-to-tr from-neutral-100 via-neutral-50 to-neutral-50 p-6 dark:border-neutral-600 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-950'>
					<h1 className='text-center text-3xl font-semibold'>
						Want to stay up to date with ElitLabs?
					</h1>
					<div className='flex grid-cols-2 flex-col gap-x-3 gap-y-4 font-mono text-xl lg:grid'>
						<a
							className='3xl:bg-gradient-to-br flex items-center justify-center rounded-md bg-gradient-to-tr from-neutral-300 via-neutral-400 to-neutral-300 p-[3px] dark:from-neutral-900 dark:via-neutral-700 dark:to-neutral-900'
							href='https://instagram.com/elit_labs'
						>
							<span className='flex w-full flex-col items-center justify-center rounded-md bg-neutral-50 p-3 transition-all duration-300 ease-in-out hover:bg-neutral-100 dark:bg-neutral-950 hover:dark:bg-neutral-900'>
								<SiInstagram className='text-3xl text-[#E1306C]' /> @elit_labs
							</span>
						</a>
						<a
							className='flex items-center justify-center rounded-md bg-gradient-to-tr from-neutral-300 via-neutral-400 to-neutral-300 p-[3px] dark:from-neutral-900 dark:via-neutral-700 dark:to-neutral-900'
							href='https://twitter.com/elitlabsteam'
						>
							<span className='flex w-full flex-col items-center justify-center rounded-md bg-neutral-50 p-3 transition-all duration-300 ease-in-out hover:bg-neutral-100 dark:bg-neutral-950 hover:dark:bg-neutral-900'>
								<SiTwitter className='text-3xl text-[#1DA1F2]' /> @elitlabsteam
							</span>
						</a>
					</div>
				</div>
				<div className='border-1 3xl:col-span-1 3xl:col-start-2 3xl:row-start-1 3xl:w-full row-start-2 mx-auto grid w-full justify-between gap-y-4 rounded-md border-neutral-950 bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-50 p-6 dark:border-neutral-600 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-950 lg:col-span-2 lg:w-[50%]'>
					<h1 className='text-center text-3xl font-semibold'>
						For any questions or concerns, please email us at
					</h1>
					<div className='mx-auto w-min gap-x-4 font-mono text-xl'>
						<a
							className='flex items-center justify-center rounded-md bg-gradient-to-br from-neutral-300 via-neutral-400 to-neutral-300 p-[3px] dark:from-neutral-900 dark:via-neutral-700 dark:to-neutral-900'
							href='mailto:team@elitlabs.com'
						>
							<span className='flex w-full flex-col items-center justify-center rounded-md bg-neutral-50 p-3 transition-all duration-300 ease-in-out hover:bg-neutral-100 dark:bg-neutral-950 hover:dark:bg-neutral-900'>
								team@elitlabs.com
							</span>
						</a>
					</div>
				</div>
				<div className='border-1 3xl:col-start-3 3xl:bg-gradient-to-br row-start-1 flex flex-col justify-between gap-y-4 rounded-md border-neutral-950 bg-gradient-to-tl from-neutral-100 via-neutral-50 to-neutral-50 p-6 dark:dark:border-neutral-600 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-950'>
					<h1 className='text-center text-3xl font-semibold'>
						Join our community!
					</h1>
					<div className='mx-auto w-min gap-x-4 font-mono text-xl'>
						<a
							className='flex items-center justify-center rounded-md bg-gradient-to-br from-neutral-300 via-neutral-400 to-neutral-300 p-[3px] dark:from-neutral-900 dark:via-neutral-700 dark:to-neutral-900'
							href='https://discord.gg/T4ngq47kVD'
						>
							<span className='flex w-full flex-col items-center justify-center rounded-md bg-neutral-50 p-3 transition-all duration-300 ease-in-out hover:bg-neutral-100 dark:bg-neutral-950 hover:dark:bg-neutral-900'>
								<SiDiscord className='text-3xl text-[#5865F2]' /> /T4ngq47kVD
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
