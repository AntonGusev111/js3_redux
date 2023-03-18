import { useState } from 'react'
import UserInput from './Components/UserInput'
import ValueList from './Components/ValueList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserInput />
    <ValueList />
    </>
  )
}

export default App
