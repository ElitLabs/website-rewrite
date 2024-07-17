import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'inline-flex items-center border-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed bg-200%',
	{
		variants: {
			variant: {
				default: 'bg-background',
				selected: 'bg-stone-100 dark:bg-stone-900',
				correct:
					'bg-[linear-gradient(to_right,#22c55e_50%,#f5f5f4_50%)] dark:bg-[linear-gradient(to_right,#22c55e_50%,#1c1917_50%)]',
				wrong:
					'bg-[linear-gradient(to_right,#ef4444_50%,#f5f5f4_50%)] dark:bg-[linear-gradient(to_right,#ef4444_50%,#1c1917_50%)]',
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
	index: number;
	content: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			answered,
			index,
			content,
			asChild = false,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ answered, variant, size, className }))}
				ref={ref}
				{...props}
			>
				<div className='flex aspect-square h-full w-auto items-center justify-center rounded-full bg-primary/10 bg-200% bg-blend-overlay'>
					{String.fromCharCode(index + 65)}
				</div>
				<p className='text-primary'>{content}</p>
			</Comp>
		);
	},
);
Button.displayName = 'Button';

export default function QuizButton({
	option,
	index,
	answer,
	submitted,
	selected,
	setSelected,
}: {
	option: QuizOption;
	index: number;
	answer: number;
	submitted: boolean;
	selected: boolean;
	setSelected: (selected: number) => void;
}) {
	return (
		<Button
			className='gap-2'
			variant={
				selected
					? submitted
						? answer == index
							? 'correct'
							: 'wrong'
						: 'selected'
					: 'default'
			}
			answered={submitted}
			index={index}
			content={option.content}
			disabled={submitted}
			onClick={() => {
				setSelected(index);
			}}
		/>
	);
}
