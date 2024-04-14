import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setcount] = useState(0)

    let incCount = () =>{
        setcount(currVal => currVal + 1);
    }

    useEffect(function printSomething(){
        console.log("This Is Side Effect");
    })

  return (
    <div>
        <h3>Count = {count}</h3>
        <button onClick={incCount}>+1</button>
    </div>
  )
}

export default Counter