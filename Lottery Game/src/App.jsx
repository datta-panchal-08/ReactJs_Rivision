import React from 'react'
import Lottery from './components/Lottery'

const App = () => {
  function winCondition (ticket){
    return ticket.every((num)=> num === ticket[0]) ;
  }
  return (
    <div className='flex items-center justify-center '>
      <Lottery n={3} winCondition = {winCondition}/>
    </div>
  )
}

export default App