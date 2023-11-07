import React from 'react'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'

const Subscribe = () => {
  return (
    <section className='flex max-lg:flex-col gap-10 items-center justify-evenly'>
      <div>
        <h3 className='text-4xl font-palanquin font-bold'>Sign up for <span className='text-coral-red'>Updates</span> <br /> & Newsletter</h3>
      </div>
      <div className='flex items-center justify-between border rounded-full py-1 px-1 w-[550px] max-md:w-full max-md:h-10'>
        <input type="email" placeholder='subscribe@nike' className='px-4 flex-1 rounded-full text-lg border-none outline-none' />
        <button className='px-7 py-4 max-md:h-8 flex items-center justify-center bg-coral-red rounded-full font-montserrat leading-none text-lg text-white'>
          Sign Up
        </button>
      </div>
    </section>
  )
}

export default Subscribe