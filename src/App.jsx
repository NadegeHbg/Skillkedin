import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Coucou Diego</h1>
      <p className='text-neutral-100 bg-cyan-600'>Je suis un repo propre</p>
    </div>
  )
}

export default App
