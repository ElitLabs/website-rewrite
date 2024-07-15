import { Button } from '../shadcn/ui/button';

export default function QuizButton({
	option,
	index,
}: {
	option: QuizOption;
	index: number;
}) {
	return (
		<Button className='gap-2'>
			<div className='flex aspect-square h-full w-auto items-center justify-center rounded-full bg-secondary p-2 text-primary'>
				{String.fromCharCode(index + 65)}
			</div>
			{option.content}
		</Button>
	);
}
