import React from 'react'
import { services } from '../constants'
import ServicesCard from '../Components/ServicesCard'

const Services = () => {
  return (
    <section className='flex gap-9 justify-center items-center max-lg:flex-col'>
      {services.map(elem =>
        <ServicesCard
          imgURL={elem.imgURL}
          label={elem.label}
          subText={elem.subtext}
        />
      )}
    </section>
  )
}

export default Services