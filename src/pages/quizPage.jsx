
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import QuestionCard from '../component/quiz/QuestionCard'

const QuizPage = () => {

  let category = useParams();
  console.log(category.cat)
  const [question, setQuestion] = useState([])
  const getQuestion = async () => {
    try {
      const response = await fetch(`https://skillkedin.spychest.fr/getCategory/${category.cat}`)
      const responseData = await response.json();
      setQuestion(responseData[0].questions);
      //    let ques = responseData[0].questions;

      // console.log(responseData[0].questions, "question");

    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    getQuestion()
  }, []);
  return (

    <div>
      {question.map((que) => {
        return (
          <QuestionCard que={que} key={que} />
        )

      })}
    </div>
  )
}

export default QuizPage
