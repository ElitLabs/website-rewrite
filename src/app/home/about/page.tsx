import { Button } from '@/components/shadcn/ui/button';
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/shadcn/ui/hover-card';

export const metadata = {
	title: 'ElitLabs | About',
};

export default function AboutPage() {
	return (
		<main className='mx-auto my-24 flex h-full w-full max-w-[80%] flex-col items-center justify-center gap-y-20 md:my-auto'>
			<div>
				<h1 className='pb-5 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl'>
					Our Mission
				</h1>
				<h2 className='text-xl'>
					We aim to help aspiring developers from all backgrounds learn to code
				</h2>
			</div>
			<div>
				<h2 className='pb-5 text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl'>
					Our Story
				</h2>
				<p className='max-w-3xl text-lg'>
					We&apos;re ElitLabs, a{' '}
					<HoverCard>
						<HoverCardTrigger>
							<Button variant='info' size='info'>
								non-profit
							</Button>
						</HoverCardTrigger>
						<HoverCardContent className='flex flex-col text-base'>
							We are a registered non-profit under HackClub&apos;s HCB fiscal
							sponsorship program.
							<span>
								{'('}EIN: <span className='text-mono'>81-2908499</span>
								{')'}
							</span>
						</HoverCardContent>
					</HoverCard>{' '}
					created by a small group of friends who came together to create a
					platform for learning and teaching. As students ourselves, we know how
					hard it can be to learn using the current courses, tutorials, and
					documentation out there. In our experience, we realized that we can
					learn better by <span className='inline font-bold'> doing</span>.
					That&apos;s why we&apos;re creating a platform for developers to learn
					by working through projects.
				</p>
			</div>
		</main>
	);
}
