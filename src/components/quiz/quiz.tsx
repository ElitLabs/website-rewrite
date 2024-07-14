import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/shadcn/ui/card';
import QuizButton from './quiz-button';

export default function Quiz({
	content,
	thumbnail,
}: {
	content: QuizContent;
	thumbnail?: string;
}) {
	const { question, options } = content;
	return (
		<Card>
			<CardHeader>
				<CardTitle>{question.question}</CardTitle>
				<CardDescription></CardDescription>
			</CardHeader>
			<CardContent>
				{options.map((option, idx) => (
					<QuizButton option={option} index={idx} key={idx} />
				))}
			</CardContent>
			<CardFooter></CardFooter>
		</Card>
	);
}
