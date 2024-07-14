type QuizQuestion = {
	question: string;
	answer: string;
};

type QuizOption = {
	content: string;
};

type QuizContent = {
	question: QuizQuestion;
	options: QuizOption[];
};
