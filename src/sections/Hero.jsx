import React, { useState } from 'react'
import Button from '../Components/Button'
import ShoeCard from '../Components/ShoeCard'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'

const Hero = () => {
  
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  
  return (
    <section id='home' className='w-full min-h-screen max-container flex max-xl:flex-col gap-10 justify-center items-center pb-[64px]'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full pt-28'>
        <p className='text-coral-red text-xl font-montserrat'>Our Summer Collections</p>
        <h1 className='mt-10 text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px] font-palanquin'>
          <span className='xl:bg-white z-10 xl:whitespace-nowrap relative pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat my-5 text-lg leading-8 text-slate-gray sm:max-w-sm'>Discover stylish Nike arrivals,quality comfort and innovation for your active life.</p>
        <Button label='Shop now' iconUrl={arrowRight} />
        <div className='flex gap-16 w-full mt-5 items-center'>
          {statistics.map(elem => (
            <div key={elem.label} className='flex flex-col items-center'>
              <p className='text-4xl font-bold font-palanquin'>{elem.value}</p>
              <p className='text-slate-gray font-montserrat'>{elem.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex md:min-h-screen lg:min-h-screen xl:min-h-screen flex-1 w-full max-xl:w-full relative justify-center items-center bg-hero bg-cover bg-center'>
        <img src={bigShoeImg} alt="bigshoe1" className='relative object-contain z-10 w-[510px] h-[400px] max-xl:w-3/5' />
        <div className='flex justify-center gap-10 items-center absolute bottom-[-5%] max-md:gap-4 max-lg:px-6'>
          {shoes.map(elem => (
            <div key={elem.id}>
              <ShoeCard
                bigShoe={elem.bigShoe}
                thumbnailImg={elem.thumbnail}
                bigShoeImg={bigShoeImg} 
                changeBigShoeImg={()=> {setBigShoeImg(elem.bigShoe)}}
              />  
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero