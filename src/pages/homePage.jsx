import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Lottie from "lottie-react";
import { useState } from 'react';
import textbl from '../assets/logos/Skillkedin-bluetext.png';
import student from '../assets/lotties/student.json'
import QuizChoice from "../component/quiz/QuizChoice";

const HomePage = () => {
    const [inputSearch, setInputSearch] = useState('');
    let searchHandler = (e) => {
        const input = e.target.value;
        const lowerCase = input.toLowerCase();
        setInputSearch(lowerCase)
        // console.log(inputSearch)
    }

    const categories = async () => {
        const response = await fetch()
        console.log(response)
    }

    // function that let compare the input with the list of categories

    return (
        <>
            <div className="container mx-auto flex justify-center items-center font-montserrat">
                <Lottie animationData={student} className='hidden md:block' />
                <div className="mx-8 md:w-1/2 space-y-4">
                    <img src={textbl} alt="logo"/>
                    <h2 className='text-md'>Tired of failing your assessments skills on Linkedin ? </h2>
                    <p className="text-base">Skillkedin provides a fun and interactive way for professionals to prepare for their LinkedIn certification exams, whether they are looking to advance their careers or simply enhance their LinkedIn profile. 
                    Users can select the specific certification exam they are preparing for, such as LinkedIn Marketing Certification or LinkedIn Sales Navigator Certification. The app then provides users with a series of quizzes, each consisting of multiple-choice questions, that are designed to closely mirror the actual exam format.
                    Skillkedin is perfect for professionals who want to demonstrate their skills and knowledge on the LinkedIn platform.
                    </p>
                </div>
            </div>
            <div className="bg-primary text-neutral">
                <div className="container mx-auto flex justify-between items-center h-28">
                    <h1 className='ml-8'>Choose a quiz</h1>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '150px'},
                        }}
                        noValidate
                        autoComplete="off"
                        className='mr-8'
                    >
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Search"
                            onChange={searchHandler}
                        />
                    </Box>
                </div>
            </div>
            <div>
                <QuizChoice />
            </div>
        </>
    )
}

export default HomePage;