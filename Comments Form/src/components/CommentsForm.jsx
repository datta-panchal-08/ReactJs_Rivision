import React from 'react'

const CommentsForm = () => {
  return (
    <div className='w-[50%] h-[50%] bg-zinc-100 mt-[15%]'>
      <h4 className='text-center text-xl uppercase font-bold mb-3'>Give A Comment!</h4>
      <form className='flex items-center justify-center flex-col'>
        <input className='outline-blue-400 border-[2px] mb-4 border-black px-6 py-1 rounded-md' type="text" placeholder='username' />
        <input className='outline-blue-400 border-[2px] mb-4 border-black w-[17vw] px-6 py-1 rounded-md' type="number" placeholder='rating' min={1} max={5} />

        <button className='bg-green-600 px-4 py-1 font-bold text-white rounded-md mb-4'>Add Comment</button>
      </form>
    </div>
  )
}

export default CommentsForm