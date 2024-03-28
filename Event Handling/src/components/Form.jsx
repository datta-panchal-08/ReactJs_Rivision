import React from 'react'

const Form = () => {
    const formSubmitHandler  = (event)=>{
        console.log("Form Was Submitted...");
        event.preventDefault();

    }
  return (
    <form onSubmit={formSubmitHandler}>
        <input type="text" />
        <button >Submit</button>
    </form>
  )
}

export default Form