'use client';

import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from './shadcn/ui/avatar';
import { Button } from './shadcn/ui/button';
import ThemeButton from './theme-button';
import { IoMenu, IoClose } from 'react-icons/io5';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from './shadcn/ui/sheet';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const router = useRouter();

	return (
		<nav className='fixed top-0 w-[100svw] border-b bg-background px-4 py-3 md:px-10'>
			<div className='mx-auto hidden w-full max-w-7xl flex-row items-center justify-between md:flex'>
				<Link href='/' className='font-quicksand text-3xl font-bold text-brand'>
					ElitLabs
				</Link>
				<div className='flex w-full items-center justify-center'>
					{/* TODO: Figure out button order */}
					<Link href={'#'}>
						<Button variant={'ghost'} className='text-base'>
							Courses
						</Button>
					</Link>
					<Link href={'/about'}>
						<Button variant={'ghost'} className='text-base'>
							About
						</Button>
					</Link>
					<Link href={'/contact'}>
						<Button variant={'ghost'} className='text-base'>
							Contact
						</Button>
					</Link>
				</div>
				<div className='flex flex-row items-center justify-end gap-3'>
					{/* <Avatar className='size-10'>
						<AvatarImage src='' />
						<AvatarFallback>User</AvatarFallback>
					</Avatar> */}
					<Link href={'#'}>
						<Button variant={'ghost'} className='text-base'>
							Log In
						</Button>
					</Link>
					<Link href={'#'}>
						<Button variant={'default'} className='text-base'>
							Sign Up
						</Button>
					</Link>
					<ThemeButton />
				</div>
			</div>
			<div className='flex flex-row justify-between md:hidden'>
				<Link href='/' className='font-quicksand text-3xl font-bold text-brand'>
					ElitLabs
				</Link>
				<Sheet onOpenChange={setOpen} open={open}>
					<SheetTrigger asChild>
						<Button className='lg:hidden' size='icon' variant='ghost'>
							<IoMenu className='size-6' />
							<span className='sr-only'>Toggle menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent className='bg-white dark:bg-stone-950' side='left'>
						<div className='flex items-center justify-between py-4'>
							<Link
								onClick={() => {
									router.push('/'.toString());
									setOpen(false);
								}}
								href='/'
								className='font-quicksand text-3xl font-bold text-brand'
							>
								ElitLabs
							</Link>
							<div className='flex flex-row items-center'>
								<ThemeButton />
								<SheetClose>
									<Button size='icon' variant='ghost'>
										<IoClose className='size-6' />
										<span className='sr-only'>Close menu</span>
									</Button>
								</SheetClose>
							</div>
						</div>
						<nav className='flex h-[90%] flex-col justify-between'>
							<div className='grid gap-2 py-6'>
								<MobileLink onOpenChange={setOpen} href='#'>
									Courses
								</MobileLink>
								<MobileLink onOpenChange={setOpen} href='/about'>
									About
								</MobileLink>
								<MobileLink onOpenChange={setOpen} href='/contact'>
									Contact
								</MobileLink>
							</div>
							<div className='flex w-full flex-row justify-center'>
								<MobileLink onOpenChange={setOpen} href='#'>
									<Button size={'lg'} variant={'outline'} className='w-full'>
										Log In
									</Button>
								</MobileLink>
								<MobileLink onOpenChange={setOpen} href='#'>
									<Button size={'lg'} className='w-full'>
										Sign Up
									</Button>
								</MobileLink>
							</div>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
}

function MobileLink({
	href,
	onOpenChange,
	className,
	children,
	...props
}: {
	href: string;
	onOpenChange: (s: boolean) => void;
	className?: string;
	children?: React.ReactNode;
}) {
	const router = useRouter();
	return (
		<Link
			href={href}
			onClick={() => {
				router.push(href.toString());
				onOpenChange?.(false);
			}}
			className={cn(
				className +
					'flex items-center gap-2 rounded-md px-3 py-2 text-lg font-medium hover:bg-stone-100 dark:hover:bg-stone-800',
			)}
			{...props}
		>
			{children}
		</Link>
	);
}
