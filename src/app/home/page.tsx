'use client';

import Image from 'next/image';
import Link from 'next/link';

import elitlabs from '@/../public/images/elitlabsicon.png';
import elitlaptop from '@/assets/images/elitlabslaptop.webp';
import laptop from '@/assets/images/laptop.webp';

import { Button } from '@/components/shadcn/ui/button';
import { Laptop } from 'lucide-react';
import { FaGraduationCap, FaWrench } from 'react-icons/fa';
import { IoTime } from 'react-icons/io5';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function Homepage() {
	useEffect(() => {
		toast(
			<div className='flex flex-col p-2'>
				<span className='text-base font-normal'>
					Hello! We are looking for web developers, writers, and video editors.
				</span>
				<span className='font-light text-muted-foreground'>
					If you are any one of those things, please feel free to reach out to
					us at{' '}
					<Link href={'mailto:team@elitlabs.com'} className='font-medium'>
						team@elitlabs.com
					</Link>
					.
				</span>
			</div>,
			{ closeButton: true },
		);
	});

	return (
		<div>
			<section className='mt-8 w-[100svw] py-36 md:mt-12 md:py-40 lg:mt-4'>
				<div className='container grid items-center gap-6 px-5 sm:grid-cols-2 sm:px-14 md:gap-10 lg:px-20'>
					<div className='space-y-4'>
						<h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl'>
							Rethinking the Way People Learn to Code
						</h1>
						<p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							We are a small group of passionate developers with the mission of
							teaching people in ways that are intuitive, realistic, and fun.
						</p>
						<div className='flex w-full flex-col gap-5 min-[400px]:flex-row sm:w-full md:gap-3'>
							{/* Mobile buttons */}
							<Link
								href='#'
								className='inline-flex h-12 w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring sm:hidden'
								prefetch={false}
							>
								Browse Courses
							</Link>
							<Link
								href='#'
								className='inline-flex h-12 w-full items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-base font-semibold shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring sm:hidden'
								prefetch={false}
							>
								Get Started
							</Link>

							{/* Desktop buttons */}
							<Link href='#' className='hidden sm:flex' prefetch={false}>
								<Button size={'xl'}>Browse Courses</Button>
							</Link>
							<Link href='#' className='hidden sm:flex' prefetch={false}>
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
			<div className='w-[100svw] bg-brand p-5 sm:hidden' content=' '>
				<Image
					src={elitlaptop}
					alt='Elitlabs Laptop Brand Image'
					width={'540'}
					height={'350'}
					className='mx-auto w-[12.5%]'
				/>
			</div>
			<section className='w-[100svw] bg-muted py-20 md:py-24 lg:py-32'>
				<div className='container px-5 sm:px-6'>
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
									Explore one of the most popular programming languages and
									build complex projects.
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
			<section className='mx-auto w-full max-w-2xl py-20 md:max-w-4xl md:py-24 lg:max-w-7xl lg:py-32'>
				<div className='flex flex-col items-center justify-center space-y-4 pb-10 text-center'>
					<h2 className='text-3xl font-bold tracking-tight sm:text-5xl'>
						Why Us?
					</h2>
				</div>
				<div className='container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 lg:grid-cols-4'>
					<div className='group overflow-hidden rounded-xl bg-card shadow transition-all hover:shadow-md dark:shadow-stone-900/90'>
						<div className='p-6'>
							<FaWrench className='size-8 text-primary' />
							<h3 className='text-xl font-semibold'>Learn By Doing</h3>
							<p className='text-muted-foreground'>
								Our courses use real-world projects to help you apply your
								knowledge to improve your coding and problem-solving skills.
							</p>
						</div>
					</div>
					<div className='group overflow-hidden rounded-xl bg-card shadow transition-all hover:shadow-md dark:shadow-stone-900/90'>
						<div className='p-6'>
							<IoTime className='size-8 text-primary' />
							<h3 className='text-xl font-semibold'>Learn On Your Own Time</h3>
							<p className='text-muted-foreground'>
								Access our online courses anytime, anywhere, enabling you to
								learn at your own convenience and pace.
							</p>
						</div>
					</div>
					<div className='group overflow-hidden rounded-xl bg-card shadow transition-all hover:shadow-md dark:shadow-stone-900/90'>
						<div className='p-6'>
							<FaGraduationCap className='size-8 text-primary' />
							<h3 className='text-xl font-semibold'>Easy To Learn</h3>
							<p className='text-muted-foreground'>
								Our curriculum is designed to make complex topics digestible,
								making learning straightforward and accessible.
							</p>
						</div>
					</div>
					<div className='group overflow-hidden rounded-xl bg-card shadow transition-all hover:shadow-md dark:shadow-stone-900/90'>
						<div className='p-6'>
							<Laptop className='size-8 text-primary' />
							<h3 className='text-xl font-semibold'>Stay Engaged</h3>
							<p className='text-muted-foreground'>
								Our courses use a mixture of projects, multiple-choice quizzes,
								and videos to help you better engage with the content.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
