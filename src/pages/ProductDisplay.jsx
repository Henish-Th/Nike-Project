import React from 'react'

const ProductDisplay = ({product}) => {
  return (
    <section className='flex gap-10 items-center'>
        <div className='flex gap-2'>
            <div className='flex flex-col gap-1'>
                <img src={product.imgURL} alt={product.title} width={50} />
                <img src={product.imgURL} alt={product.title} width={50} />
                <img src={product.imgURL} alt={product.title} width={50} />
                <img src={product.imgURL} alt={product.title} width={50} />
            </div>
            <img src={product.imgURL} alt={product.title} width={400} height={400} />
        </div>
        <div>
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>{product.MRP}</p>
        </div>
    </section>
  )
}

export default ProductDisplay