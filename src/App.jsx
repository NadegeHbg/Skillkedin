import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import './App.css'
import Question from "./component/quiz/QuestionCard";
import RootLayout from "./layouts/rootLayout";
import HomePage from "./pages/homePage";
import QuizPage from "./pages/QuizPage";


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<RootLayout />}>
      {/* from origin project - example of routing*/}
      <Route index element={<HomePage />} />
      <Route path="/:cat" element={<QuizPage />}/>
       <Route path="/question" element={<Question />} />
    </Route>

  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;