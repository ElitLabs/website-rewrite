type QuizQuestion = {
	question: string;
	answer: number;
};

type QuizOption = {
	content: string;
};

type QuizContent = {
	question: QuizQuestion;
	options: QuizOption[];
};
