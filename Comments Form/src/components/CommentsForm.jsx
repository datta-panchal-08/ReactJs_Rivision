import React from 'react'
import { useState } from 'react';
const CommentsForm = () => {
  const [formdata, setformdata] = useState({
    username : "",
    remarks : "",
    rating : 5
  });

  let handleChangeInput = (event) =>{
    setformdata((currData)=>{
     return {...currData,[event.target.name]:event.target.value};
    });
  };

  let handleSubmit = (event) =>{
    console.log(formdata);
    event.preventDefault();
    setformdata({
      username : "",
      remarks : "",
      rating : 5
    })
  }

  return (
    <div className='w-[50%] h-[50%] bg-zinc-100 mt-[15%]'>
      <h4 className='text-center text-xl uppercase font-bold mb-3'>Give A Comment!</h4>
      <form onSubmit={handleSubmit} className='flex items-center justify-center flex-col'>
        <input name='username' className='outline-blue-400 border-[2px] mb-4 border-black px-6 py-1 rounded-md' type="text" placeholder='username'  value={formdata.username} onChange={handleChangeInput} />
        <textarea name='remarks' placeholder='Remarks' className='w-[34.1%] outline-blue-400 border-[2px] mb-4 border-black px-3 py-1 rounded-md resize-none' value={formdata.remarks} onChange={handleChangeInput}></textarea>
        <input name='rating' className='outline-blue-400 border-[2px] mb-4 border-black w-[17vw] px-6 py-1 rounded-md' type="number" placeholder='rating' min={1} max={5} value={formdata.rating} onChange={handleChangeInput} />

        <button className='bg-green-600 px-4 py-1 font-bold text-white rounded-md mb-4'>Add Comment</button>
      </form>
    </div>
  )
}

export default CommentsForm