import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuizChoice = () => {
    const [category,setCategory] = useState([])
    const getCategory = async () => {
        try {
          const response = await fetch(`http://localhost:8000/category`)
          const responseData = await response.json();
          setCategory(responseData)
          category.sort();
          console.log(category,"category")
        } catch (err) {
          console.error(err.message)
        }
      }
      useEffect(() => {
        getCategory()
      }, []);
    
    return (
        <div className="container mx-auto flex justify-center flex-wrap gap-8 mt-8">
           {category.map((cat) => {
            return(
            <div className="border-[1px] border-primary rounded-md basis-[200px] inline-flex justify-center items-center min-h-[50px] hover:scale-110 hover:bg-primary hover:text-neutral transition-all duration-500">
               <Link to={`/${cat}`}>{cat}</Link> 
            </div>
            )
           })}
        </div>
    )
}

export default QuizChoice;