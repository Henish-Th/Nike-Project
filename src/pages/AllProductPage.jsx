import React from 'react'
import { allProducts } from '../constants'

const AllProductPage = () => {
  return (
    <div>
        {allProducts.map((elem,index) => 
        <div>
            <img src={elem.imgURL} alt="nike air" />
            <p>{elem.title}</p>
            <p>{elem.MRP}</p>
        </div>
        )}
    </div>
  )
}

export default AllProductPage