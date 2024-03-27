import React from 'react'
import "./App.css"
import NonClickEvents from './components/NonClickEvents';

const App = () => {
  const clickHandler = () =>{
    alert("You Clicked Me!");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click Me!</button>
      <NonClickEvents/>
    </div>
  )
}

export default App