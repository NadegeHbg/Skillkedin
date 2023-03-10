import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Lottie from "lottie-react";
import { useState } from 'react';

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
            <div className="container mx-auto flex justify-center items-center">
                <Lottie animationData={student} className='hidden md:block' />
                <div className="mx-8 md:w-1/2 space-y-4">
                    <h1>Skillekedin</h1>
                    <h2>Tired of failing your assessments skills on Linkedin ? </h2>
                    <p className="text-justify">Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.</p>
                </div>
            </div>
            <div className="bg-primary text-neutral">
                <div className="container mx-auto flex justify-between items-center h-28">
                    <h1 className='ml-8'>Choose a quiz</h1>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '150px' },
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