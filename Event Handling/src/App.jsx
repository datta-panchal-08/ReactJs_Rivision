import React from 'react'
import "./App.css"
import NonClickEvents from './components/NonClickEvents';
import Form from './components/Form';

const App = () => {
  const clickHandler = () =>{
    alert("You Clicked Me!");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click Me!</button>
      <br /> <br />
      <NonClickEvents/>
      <br />
      <br />
      <Form/>

    </div>
  )
}

export default App