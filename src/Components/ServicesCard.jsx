import React from 'react'

const ServicesCard = ({ imgURL, label, subText }) => {
    return (
        <div className='px-10 py-16 flex flex-1 flex-col items-start gap-6 rounded-3xl shadow-3xl'>
            <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
                <img src={imgURL} alt={label} width={24} height={24} />
            </div>
            <p className='font-palanquin font-bold text-xl leading-8'>{label}</p>
            <p className='font-montserrat text-lg text-slate-gray break-words leading-8'>{subText}</p>
        </div>
    )
}

export default ServicesCard