import React, { useState } from 'react';
import Ticket from './Ticket';
import { genTicket, sum } from '../helper';
import Button from './Button';
const Lottery = ({n=3,winCondition}) => {
    let [ticket,setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    const buyTicket = () =>{
      setTicket(genTicket(n));
    }

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'> 
        <h1 className='text-5xl uppercase font-[900] '>Lottery Game!</h1>
        <div className='flex items-center justify-center mt-20 border-zinc-500 border-[1px] w-[20%] py-1 gap-10 rounded-full font-[500]' >
        <Ticket ticket={ticket}/>
        </div>
         <Button action={buyTicket}/>
        <h3 className='text-center mt-4 font-[700] text-[2vw]'>{isWinning && "Congratulations You Won!"}</h3>
    </div>
  )
}

export default Lottery