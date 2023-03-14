import React, { useState,useEffect } from 'react';
import QuizChoice from './QuizChoice';


const QuestionCard= ({que}) => {
	// console.log(que)
	// console.log(que.question)
    const questions = [
        {	
            questionText: que.question,
            answerOptions: [
                { answerText: que.answer_1.text, isCorrect: que.answer_1.is_right },
                { answerText: que.answer_2.text, isCorrect: que.answer_2.is_right },
                { answerText: que.answer_3.text, isCorrect: que.answer_3.is_right},
                { answerText: que.answer_4.text, isCorrect: que.answer_4.is_right },
            ],
        }
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
        
		<div className='bg-primary text-white m-16 text-lg border-[5px] rounded-md border-primary'>
			{showScore ? (
				<div className='m-5 score-section flex justify-center'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section m-5'>
						<div className='question-count m-5'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text flex justify-center'>{questions[currentQuestion].questionText}</div>
					</div>
                    
					<div className='answer-section flex flex-col m-5 '>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
                   
				</>
			)}
		</div>
	);
}
export default QuestionCard;