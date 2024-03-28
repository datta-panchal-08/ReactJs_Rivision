import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const[count,setCount] = useState(0);
    const increaseCount = () =>{
        let ans  = count+1;
        setCount(ans);
    }
  return (
    <div>
        <h3>Count = {count}</h3>
        <button onClick={increaseCount}>Increase Count</button>
    </div>
  )
}

export default Counter