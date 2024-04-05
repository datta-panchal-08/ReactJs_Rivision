import React from 'react'
import { useState } from 'react'
const Form = () => {
  const [fullName, setfullName] = useState("");
  let handleNameChange = (event) =>{
    console.log(event.target.value);
    setfullName(event.target.value)
  }
  return (
    <div>
        <form action="">
            <input type="text" placeholder='Enter Your Name '  value={fullName} onChange={handleNameChange}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form