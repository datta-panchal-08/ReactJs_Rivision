import React from 'react'
import './Price.css'
const Price = ({oldPrice,newPrice}) => {
  return (
    <div className='price'>
        <span><strike>{oldPrice}</strike></span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span>{newPrice}</span>
    </div>
  )
}

export default Price