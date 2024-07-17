import Quiz from '@/components/quiz/quiz';
import ThemeButton from '@/components/theme-button';

const test: QuizContent = {
	options: [
		{ content: 'break' },
		{ content: 'pass' },
		{ content: 'continue' },
		{ content: 'return' },
	],
	question: {
		answer: 1,
		question: 'Which keyword exits a loop without exiting a function?',
	},
};

export default function TestPage() {
	return (
		<div className='flex flex-col gap-5 p-10'>
			<ThemeButton />

			<Quiz content={test} />
		</div>
	);
}
