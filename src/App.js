

import Keypad from "./Keypad"
import './App.css'
import { useState } from "react"
function App()
{
  let [input, setInput]= useState("")
  function handleClick(value)
  {
      setInput(input+value)
  }
  function calculate(value)
  {
    let outputval = eval(input)

      setInput(outputval)
  }
  function handleClear(value)
  {
      setInput("")
  }
    return (
      <div className="container">
          <h1>Calculator App using react</h1>
          <div className="calculator">
                <input type="text" value={input} className="output"/>
                <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}></Keypad>
          </div>
        </div>


    )
}

export default App