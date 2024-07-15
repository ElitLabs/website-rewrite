import Quiz from '@/components/quiz/quiz';
import ThemeButton from '@/components/theme-button';

const test: QuizContent = {
	options: [
		{ content: 'A' },
		{ content: 'B' },
		{ content: 'C' },
		{ content: 'D' },
	],
	question: {
		answer: 'A',
		question: 'A, B, C, or D?',
	},
};

export default function TestPage() {
	return (
		<div>
			<ThemeButton />

			<Quiz content={test} />
		</div>
	);
}
