import React from 'react'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'
import Button from '../Components/Button'

const SpecialOffer = () => {
  return (
    <section className='flex max-xl:flex-col-reverse justify-between items-center gap-8 w-full'>
      <img src={offer} alt="offer-img" />
      <div className='flex flex-col gap-8 items-start 2xl:w-[40%]'>
        <h2 className='text-4xl font-palanquin font-bold'><span className='text-coral-red'>Special</span> Offer</h2>
        <p className='text-slate-gray text-lg font-montserrat leading-8'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalled value that set us apart.</p>
        <p className='text-slate-gray text-lg font-montserrat leading-8'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <Button label='Shop Now' iconUrl={arrowRight} />
      </div>
    </section>
  )
}

export default SpecialOffer