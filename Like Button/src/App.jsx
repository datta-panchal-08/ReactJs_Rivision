import React from 'react'
import LikeButton from './components/LikeButton'

const App = () => {
  return (
    <div className='w-full h-full bg-red-50'>
      <div className=' absolute  top-[50%] left-[50%] p-16 -translate-y-[50%] -translate-x-[50%] bg-zinc-200 w-[30%]'>
      <LikeButton/>
      </div>
     

    </div>
  )
}

export default App