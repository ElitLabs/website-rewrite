import { Avatar, AvatarFallback, AvatarImage } from './shadcn/ui/avatar';

export default function Navbar() {
	return (
		<nav className='w-full border-b shad py-4'>
			<div className='flex flex-row justify-between items-center max-w-6xl mx-auto'>
				<h1 className='font-bold text-4xl text-brand'>ElitLabs</h1>
				<div>
					<span>Courses</span>
				</div>
				<div className='flex flex-row gap-4'>
					{/* <Avatar className='size-10'>
						<AvatarImage src='' />
						<AvatarFallback>User</AvatarFallback>
					</Avatar> */}
					<button>Log In</button>
					<button className='p-2 border rounded-sm'>Sign Up</button>
				</div>
			</div>
		</nav>
	);
}
