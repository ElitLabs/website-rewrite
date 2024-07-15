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
		<div className='bg-200% bg-[linear-gradient(to_right,#ef4444_50%,#0000ff_50%)] bg-[100%]'>
			<ThemeButton />

			<Quiz content={test} />
		</div>
	);
}
