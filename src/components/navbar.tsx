import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from './shadcn/ui/avatar';
import { Button } from './shadcn/ui/button';
import ThemeButton from './theme-button';
import {IoMenu, IoClose} from 'react-icons/io5'
import { Sheet, SheetContent, SheetTrigger } from './shadcn/ui/sheet';

export default function Navbar() {
	return (
		<nav className='w-full py-3 border-b fixed bg-background top-0 px-10'>
			<div className='md:flex flex-row lg:grid grid-cols-3 justify-between items-center max-w-7xl mx-auto hidden'>
				<Link
					href='/'
					className='font-bold text-3xl text-brand font-quicksand'
				>
					ElitLabs
				</Link>
				<div className='flex items-center'>
					{/* TODO: Figure out button order */}
					<Link href={'#'}>
						<Button variant={'ghost'} className='text-base'>
							Courses
						</Button>
					</Link>
					<Link href={'#'}>
						<Button variant={'ghost'} className='text-base'>
							About
						</Button>
					</Link>
					<Link href={'#'}>
						<Button variant={'ghost'} className='text-base'>
							Contact
						</Button>
					</Link>
				</div>
				<div className='flex flex-row items-center gap-3 justify-end'>
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
			<div className='md:hidden'>
				<Sheet>
					<SheetTrigger><IoMenu/></SheetTrigger>
                    <SheetContent side='left'><IoClose/></SheetContent>
				</Sheet>
			</div>
		</nav>
	);
}
