export const metadata = {
	title: 'ElitLabs | About',
};

export default function AboutPage() {
	return (
		<main className='mx-auto flex w-full flex-col items-center justify-center py-10 lg:max-w-[70%]'>
			<div className='3xl:pt-[10vh] flex flex-col items-center justify-center gap-y-[10vh] pt-4 lg:pt-[7.5vh]'>
				<header className='flex w-full max-w-[90%] flex-col items-center justify-center lg:max-w-[70%]'>
					<h1 className='text-gradient animate-sgradient bg-500% bg-gradient-to-l from-pink-600 via-purple-600 to-pink-600 text-center font-mono text-[3rem] font-black uppercase tracking-wide dark:from-pink-500 dark:via-purple-500 dark:to-pink-500 lg:text-[3.125rem]'>
						Our Mission
					</h1>
					<h2 className='3xl:text-[3.45rem] text-center text-3xl font-semibold leading-[3rem] lg:text-[3.25rem]'>
						We aim to help aspiring developers from all backgrounds learn to
						code
					</h2>
				</header>
				<div className='max-w-[90%] lg:max-w-[85%]'>
					<h1 className='text-center font-mono text-[2.825rem] font-black uppercase tracking-wide'>
						Our Story
					</h1>
					<p className='3xl:text-3xl text-center text-2xl font-medium'>
						We&apos;re ElitLabs, a small group of friends who came together to
						create a platform for learning and teaching. As students ourselves,
						we know how hard it can be to learn using the current courses,
						tutorials, and documentation out there. In our experience, we
						realized that we can learn better by
						<span className='inline font-bold'> doing</span>. That&apos;s why
						we&apos;re creating a platform for developers to learn by working
						through projects.
					</p>
				</div>
			</div>
			{/* <div>
				<h2 className="text-4xl font-bold">Our Team</h2>
				<p className="flex flex-col gap-y-2 text-xl font-normal"></p>
				<p className="flex flex-col gap-y-2 text-xl font-normal">
					We are currently looking for skilled web developers and tutors! If
					you&apos;re interested in joining our team, please email us at{' '}
					<a href="mailto:team@elitlabs.com>">team@elitlabs.com</a>.
				</p> 
			</div>

*/}
		</main>
	);
}
