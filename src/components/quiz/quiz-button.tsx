import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

// import { Button } from '../shadcn/ui/button';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'inline-flex items-center bg-[000%] border-2 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-200%',
	{
		variants: {
			variant: {
				default:
					'bg-[linear-gradient(to_right,var(--primary)_50%,#0000ff_50%)] ',
				correct: 'bg-[linear-gradient(to_right,#22c55e_50%,#0000ff_50%)]',
				wrong: 'bg-[linear-gradient(to_right,#ef4444_50%,#0000ff_50%)]',
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				xl: 'h-11 rounded-md p-6 px-7 text-lg',
				xl2: 'h-11 rounded-md p-7 text-xl',
				icon: 'h-10 w-10',
				info: 'p-0 text-lg font-medium',
			},
			answered: {
				true: 'animate-button-in fill-mode-[forwards]',
				false: '',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
			answered: false,
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, answered, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, answered, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = 'Button';

export default function QuizButton({
	option,
	index,
}: {
	option: QuizOption;
	index: number;
}) {
	return (
		<Button
			className='gap-2'
			variant={index == 1 ? 'correct' : index == 2 ? 'wrong' : 'default'}
			answered={index % 2 == 0}
		>
			<div className='flex aspect-square h-full w-auto items-center justify-center rounded-full'>
				{String.fromCharCode(index + 65)}
			</div>
			{option.content}
		</Button>
	);
}
