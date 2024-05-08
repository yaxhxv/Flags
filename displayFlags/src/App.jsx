// import { React } from "React";
import { useState } from 'react'
import {Countries} from './Components/Countries.jsx'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Countries/>
   
    </>
  )
}

export default App
