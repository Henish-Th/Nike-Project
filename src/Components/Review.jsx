import React from 'react'
import { star } from '../assets/icons'

const Review = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className='flex flex-col items-center gap-2'>
        <img src={imgURL} alt="customer-profile" width={120} height={120} className='rounded-full mb-4' />
        <p className='font-palanquin text-xl font-bold'>{customerName}</p>
        <p className='flex gap-2 items-center'><img src={star} alt="" />{rating}</p>
        <p className='text-center leading-8 text-slate-gray font-montserrat w-[50%] max-md:w-[70%]'>{feedback}</p>
    </div>
  )
}

export default Review