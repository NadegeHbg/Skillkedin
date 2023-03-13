import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import './App.css'

function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
           <Route path="/" element={<HomePage/>}/>
           
          </Routes>
        </Router>
    </div>
  )
}

export default App
