import Lottie from "lottie-react";
import student from '../assets/lotties/student.json'
import QuizChoice from "../component/quiz/QuizChoice";


const HomePage = () => {
    return <>
        <div className="container mx-auto flex justify-center items-center">
            <Lottie animationData={student} className='flex-grow' />
            <div className="w-1/2 space-y-4">
                <h1>Skillekedin</h1>
                <h2>Tired of failing your assessments skills on Linkedin ? </h2>
                <p className="text-justify">Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.</p>
            </div>
        </div>
        <div className="bg-primary text-neutral flex justify-center gap-x-[75%] items-center h-28">
            <h1>Choose a quiz</h1>
            <div>search bar</div>
        </div>
        <div>
            <QuizChoice />
        </div>
    </>
}

export default HomePage;