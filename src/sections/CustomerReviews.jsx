import React from 'react'
import { reviews } from '../constants'
import Review from '../Components/Review'

const CustomerReviews = () => {
  return (
    <section className='flex flex-col items-center gap-20'>
      <div>
        <h3 className='text-4xl font-palanquin font-bold text-center'>What our <span className='text-coral-red'>Customers</span> say?</h3>
        <p className='text-slate-gray text-lg font-montserrat leading-8 max-2xl:text-center mt-3'>Hear genuine stories from our satisfied customers about their exceptional experiences with us</p>
      </div>
      <div className='flex max-lg:flex-col gap-10'>
        {reviews.map(elem => 
          <Review 
            imgURL={elem.imgURL}
            customerName={elem.customerName}
            rating={elem.rating}
            feedback={elem.feedback}
          />
          )}
      </div>

    </section>
  )
}

export default CustomerReviews