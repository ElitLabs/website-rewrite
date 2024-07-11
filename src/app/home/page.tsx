import Link from 'next/link';
import Image from 'next/image';

import laptop from '@/assets/images/laptop.webp';
import elitlabs from '@/../public/images/elitlabsicon.png';
import Navbar from '@/components/navbar';
import { Button } from '@/components/shadcn/ui/button';
export default function Homepage() {
	return (
		<div>
			<Navbar />
			<section className='mt-16 w-[100svw] pb-48 pt-20 md:mt-20 md:py-40 lg:mt-14'>
				<div className='container grid items-center gap-6 px-4 sm:grid-cols-2 sm:px-14 md:gap-10 md:px-6 lg:px-20'>
					<div className='space-y-4'>
						<h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl'>
							Rethinking the Way People Learn to Code
						</h1>
						<p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							We are a small group of passionate developers with the mission of
							teaching people in ways that are intuitive, realistic, and fun.
						</p>
						<div className='flex flex-col gap-2 min-[400px]:flex-row md:gap-3'>
							<Link
								href='#'
								// className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
								prefetch={false}
							>
								<Button size={'xl'}>Browse Courses</Button>
							</Link>
							<Link
								href='#'
								// className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
								prefetch={false}
							>
								<Button size={'xl'} variant={'outline'}>
									Get Started
								</Button>
							</Link>
						</div>
					</div>
					<Image
						src={laptop}
						width='550'
						height='550'
						alt='Hero'
						className='mx-auto hidden overflow-hidden rounded-xl object-cover object-center sm:flex sm:w-[80%] lg:order-last'
					/>
				</div>
			</section>
			<section className='w-full bg-muted py-12 md:py-24 lg:py-32'>
				<div className='container px-4 md:px-6'>
					<div className='flex flex-col items-center justify-center space-y-4 text-center'>
						<div className='space-y-2'>
							<div className='inline-block rounded-lg bg-muted px-3 py-1 text-xl'>
								On-Demand Courses
							</div>
							<h2 className='text-3xl font-bold tracking-tight sm:text-5xl'>
								Learn at Your Own Pace
							</h2>
						</div>
					</div>
					<div className='mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:max-w-6xl'>
						<div className='group overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:shadow-md'>
							<Image
								src={elitlabs}
								width='400'
								height='225'
								alt='Course'
								className='aspect-[16/9] w-full object-cover'
							/>
							<div className='p-4'>
								<h3 className='text-lg font-semibold'>
									Introduction to React.js
								</h3>
								<p className='text-muted-foreground'>
									Learn the fundamentals of React and build your first web
									application.
								</p>
							</div>
						</div>
						<div className='group overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:shadow-md'>
							<Image
								src={elitlabs}
								width='400'
								height='225'
								alt='Course'
								className='aspect-[16/9] w-full object-cover'
							/>
							<div className='p-4'>
								<h3 className='text-lg font-semibold'>
									Introduction to Python
								</h3>
								<p className='text-muted-foreground'>
									Explore one of the most popular programming languages.
								</p>
							</div>
						</div>
						<div className='group overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:shadow-md'>
							<Image
								src={elitlabs}
								width='400'
								height='225'
								alt='Course'
								className='aspect-[16/9] w-full object-cover'
							/>
							<div className='p-4'>
								<h3 className='text-lg font-semibold'>
									Introduction to Web Development
								</h3>
								<p className='text-muted-foreground'>
									Learn the fundamentals of HTML, CSS, and JavaScript to build
									your first website.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='w-full py-12 md:py-24 lg:mt-14 lg:py-40'>
				<div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 lg:px-20'>
					<div className='space-y-4'>
						<h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl'>
							Rethinking the Way People Learn to Code
						</h1>
						<p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							Explore our library of courses and learn at your own pace. From
							beginner to advanced, we&apos;ve got you covered.
						</p>
						<div className='flex flex-col gap-2 min-[400px]:flex-row'>
							<Link
								href='#'
								className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
								prefetch={false}
							>
								Browse Courses
							</Link>
							<Link
								href='#'
								className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
								prefetch={false}
							>
								Get Started
							</Link>
						</div>
					</div>
					<Image
						src={laptop}
						width='550'
						height='550'
						alt='Hero'
						className='mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:w-[80%]'
					/>
				</div>
			</section>
		</div>
	);
}
