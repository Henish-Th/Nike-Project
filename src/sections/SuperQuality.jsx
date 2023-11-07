import React from 'react'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex max-lg:flex-col justify-between items-center gap-5 w-full scroll-mt-28'>
      <div className='flex flex-col gap-8 items-start 2xl:w-[40%]'>
        <h2 className='text-4xl font-palanquin font-bold'>We Provide You <span className='text-coral-red'>Super</span> <br /> <span className='text-coral-red'>Quality</span> Shoes</h2>
        <p className='text-slate-gray text-lg font-montserrat leading-8'>Ensuring premium comfort and style,our meticulously crafted footwear is designed to elevate your experience,providing you with unmatched quality,innovation and a touch of elegance.</p>
        <p className='text-slate-gray text-lg font-montserrat leading-8'>Our dedication to detail and excellence ensures your satisfaction</p>
        <Button label='View details' iconUrl={arrowRight} />
      </div>
      <img src={shoe8} alt="shoe8" />
    </section>
  )
}

export default SuperQuality