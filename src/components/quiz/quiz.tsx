'use client';
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
import { useState } from 'react';

export default function Quiz({
	content,
	thumbnail,
}: {
	content: QuizContent;
	thumbnail?: string;
}) {
	const [selected, setSelected] = useState<number>(-1);
	const [submitted, setSubmitted] = useState<boolean>(false);
	const { question, options } = content;

	return (
		<Card className='max-w-[40dvh]'>
			<CardHeader>
				<CardTitle>{question.question}</CardTitle>
				<CardDescription></CardDescription>
			</CardHeader>
			<CardContent className='flex w-min flex-col gap-y-1'>
				{options.map((option, idx) => (
					<QuizButton
						option={option}
						index={idx}
						key={idx}
						answer={content.question.answer - 1}
						submitted={submitted}
						selected={selected == idx}
						setSelected={setSelected}
					/>
				))}
			</CardContent>
			<CardFooter className='justify-end'>
				<Button
					onClick={() => {
						setSubmitted(!submitted);
					}}
				>
					Submit
				</Button>
			</CardFooter>
		</Card>
	);
}
