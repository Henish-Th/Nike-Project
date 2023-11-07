import React from 'react'


const Button = ({label,iconUrl}) => {
  return (
    <button className='px-7 py-4 flex gap-2 items-center justify-center bg-coral-red rounded-full font-montserrat leading-none text-lg text-white'>
        {label}
        <img src={iconUrl} alt="arrowright" />
    </button>
  )
}

export default Button