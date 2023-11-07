import React from 'react'

const PopularProduct = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-col items-start gap-5'>
       <img src={imgURL} alt="shoeimg" />
       <p className='xl:text-lg font-palanquin text-slate-gray font-semibold'>{name}</p>
       <p className='font-montserrat text-coral-red'>{price}</p>
    </div>
  )
}

export default PopularProduct