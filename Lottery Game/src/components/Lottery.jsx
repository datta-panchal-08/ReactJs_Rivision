import React, { useState } from 'react'
import { genTicket, sum } from '../helper';
const Lottery = () => {
    let [ticket,setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15;

    const buyTicket = () =>{
      setTicket(genTicket(3));
    }

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'> 
        <h1 className='text-5xl uppercase font-[900] '>Lottery Game!</h1>
        <div className='flex items-center justify-center mt-20 border-zinc-500 border-[1px] w-[20%] py-1 gap-10 rounded-full font-[500]' >
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>

        </div>
        <button onClick={buyTicket} className='px-5 py-1 bg-green-700  mt-4 font-bold text-white rounded-md'>Buy Ticket</button>
        <h3 className='text-center mt-4 font-[700] text-[2vw]'>{isWinning && "Congratulations You Won!"}</h3>
    </div>
  )
}

export default Lottery