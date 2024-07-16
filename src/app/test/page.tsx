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
		answer: 4,
		question: 'A, B, C, or D?',
	},
};

export default function TestPage() {
	return (
		<div className='bg-[linear-gradient(to_right,#ef4444_50%,#0000ff_50%)] bg-200% bg-pos-half'>
			<ThemeButton />

			<Quiz content={test} />
		</div>
	);
}
