import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from './shadcn/ui/avatar';
import { Button } from './shadcn/ui/button';
import ThemeButton from './theme-button';

export default function Navbar() {
	return (
		<nav className='w-full border-b py-5 drop-shadow-sm fixed bg-background top-0'>
			<div className='flex flex-row justify-between items-center max-w-6xl mx-auto'>
				<Link
					href='/'
					className='font-bold text-3xl text-brand font-quicksand'
				>
					ElitLabs
				</Link>
				<div className='flex items-center'>
					<Link href={'#'}>
						<Button variant={'ghost'} className='text-base'>
							Courses
						</Button>
					</Link>
				</div>
				<div className='flex flex-row items-center gap-3'>
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
		</nav>
	);
}
