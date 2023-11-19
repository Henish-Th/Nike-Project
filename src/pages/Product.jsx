import React from 'react'
import ProductDisplay from './ProductDisplay'
import { useParams } from 'react-router-dom'
import { allProducts } from '../constants';

const Product = () => {

  const {productId} = useParams();
  const product = allProducts.find(elem => elem.id === Number(productId))  
  return (
    <section>
        <ProductDisplay product={product} />
    </section>
  )
}

export default Product