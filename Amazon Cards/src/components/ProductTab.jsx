import React from 'react'
import Product from './Product'
import "./ProductTab.css"

const ProductTab = () => {
  return (
    <div className='products'>
      <Product title='Logitech MX Master' idx={0}/>
      <Product title="Apple Pencil (2nd Gen)" idx={1}/>
      <Product title="Zebronics Zeb-transformer" idx={2}/>
      <Product title ="Petronics Toad 23" idx={3} />

    </div>
  )
}

export default ProductTab