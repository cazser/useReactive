import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useReactive } from './useReactive'

function App() {
  const [count, setCount] = useState(0)
  const something  = useReactive({});
  return (
    <div className="App">
     <h1>Vite + React</h1>
      <div className="card">
        
      </div>
  
    </div>
  )
}

export default App
