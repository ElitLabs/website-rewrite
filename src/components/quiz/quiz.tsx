import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/shadcn/ui/card';
import QuizButton from './quiz-button';
import { Button } from '../shadcn/ui/button';

export default function Quiz({
	content,
	thumbnail,
}: {
	content: QuizContent;
	thumbnail?: string;
}) {
	const { question, options } = content;
	return (
		<Card className='max-w-[40dvh]'>
			<CardHeader>
				<CardTitle>{question.question}</CardTitle>
				<CardDescription></CardDescription>
			</CardHeader>
			<CardContent className='flex w-min flex-col gap-y-1'>
				{options.map((option, idx) => (
					<QuizButton option={option} index={idx} key={idx} />
				))}
			</CardContent>
			<CardFooter className='justify-end'>
				<Button>Submit</Button>
			</CardFooter>
		</Card>
	);
}
