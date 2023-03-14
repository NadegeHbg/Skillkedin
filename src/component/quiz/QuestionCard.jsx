import React, { useState,useEffect } from 'react';
import QuizChoice from './QuizChoice';


const Question= () => {
	
	console.log(QuizChoice.category);
	
		const [question,setQuestion] = useState([])
		const getQuestion = async () => {
			try {
			  const response = await fetch(`http://localhost:8000/getCategory/:category`)
			  const responseData = await response.json();
			  setQuestion(responseData)
			  question.sort();
			  console.log(question,"question")
			} catch (err) {
			  console.error(err.message)
			}
		  }
		  useEffect(() => {
			getQuestion()
		  }, []);
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
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
export default Question;