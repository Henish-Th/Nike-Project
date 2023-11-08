import React from 'react'
import { allProducts } from "../constants";

const Men = () => {
  return (
    <section>
    <div className='flex justify-between px-36 mt-10'>
      <h3 className='text-medium font-montserrat font-semibold'>Men's Shoes</h3>
      <p className='text-medium font-montserrat font-semibold'>Sort by</p>
    </div>
    <div className="grid gap-1 grid-cols-3 px-28 py-10">
      {allProducts.map((elem, index) => (
        <div className="flex flex-col items-center gap-2">
          <img src={elem.imgURL} alt="nike air" width={374} height={374} />
          <p className="text-lg font-montserrat font-semibold">{elem.title}</p>
          <p>{elem.MRP}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Men