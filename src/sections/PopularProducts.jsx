import React from 'react'
import { products } from '../constants'
import PopularProduct from '../Components/PopularProduct'

const PopularProducts = () => {
  return (
    <section id='products' className='scroll-mt-28'>
      <div className='flex flex-col justify-start gap-6'>
         <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red'>Popular</span> Products</h2>
         <p className='text-slate-gray text-lg font-montserrat xl:w-[40%] leading-8'>Experience top notch style with our best selections. Discover a world of comfort,design and value</p>
      </div>
      <div className='flex gap-4 items-center mt-8'>
        {products.map(product => 
          <PopularProduct
            imgURL={product.imgURL}
            name={product.name}
            price={product.price}
          />
          )}
      </div>
    </section>
  )
}

export default PopularProducts