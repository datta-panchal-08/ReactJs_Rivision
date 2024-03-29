import React, { useState } from 'react'

const LudoBoard = () => {
    let [moves, setmoves] = useState({blue: 0,red:0,green:0,yellow:0});
    
     const blueMoveUpdater = ()=>{
      setmoves((prevVal)=>{
           return {...prevVal, blue :  prevVal.blue +1}
      });

     }
     const redMoveUpdater = ()=>{
     
      setmoves((prevVal)=>{
        return {...prevVal, red :  prevVal.red +1}
   });


   }
   const yellowMoveUpdater = ()=>{
    setmoves((prevVal)=>{
      return {...prevVal, yellow :  prevVal.yellow +1}
 });

 }
 const greenMoveUpdater = ()=>{
  setmoves((prevVal)=>{
    return {...prevVal, green :  prevVal.green +1}
});


}
  return (
    <div className='flex flex-col items-center mt-48'>
        <h4 className='font-bold mb-2'>Blue Moves : {moves.blue}</h4>
        <button onClick={ blueMoveUpdater} className='bg-blue-600 rounded-md text-white font-semibold px-3 py-1 mb-3'>+1</button>
        <h4 className='font-bold mb-2'>Yellow Moves : {moves.yellow}</h4>
        <button onClick={yellowMoveUpdater} className='bg-yellow-600 rounded-md text-white font-semibold px-3 py-1 mb-3'>+1</button>
        <h4 className='font-bold mb-2'>Red Moves : {moves.red}</h4>
        <button onClick={redMoveUpdater } className='bg-red-600 px-3 rounded-md text-white font-semibold py-1 mb-3'>+1</button>
        <h4 className='font-bold mb-2'>Green Moves : {moves.green}</h4>
        <button  onClick={greenMoveUpdater} className='bg-green-600 px-3  rounded-md text-white font-semibold py-1 mb-3'>+1</button>
    </div>
  )
}

export default LudoBoard