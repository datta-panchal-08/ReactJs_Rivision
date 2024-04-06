import React from 'react'
import { useState } from 'react'
const Form = () => {
 const [formdata,setFormdata] = useState({
  fullname : "",
  username : "",
  password : ""
 });
 
 const submitHandler = (event) =>{
     event.preventDefault();
     setFormdata({
      fullname : "",
      username : "",
      password : ""
     })
 }

 const  inputChange = (event) =>{
   setFormdata((currData)=>{
     return {...currData,[event.target.name] : event.target.value}
   });
 }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Enter fullName '  value={formdata.fullname} onChange={inputChange} name='fullname' />
            <input type="text" placeholder='Enter userName ' value={formdata.username} onChange={inputChange} name='username' />
            <input type="password" placeholder='Enter password ' value={formdata.password} onChange={inputChange} name='password' />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form