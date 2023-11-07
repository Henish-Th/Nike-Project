import React from 'react'
import { footerLogo } from '../assets/images'
import { facebook, instagram, twitter } from '../assets/icons'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <section id='contact-us' className='flex flex-col items-start gap-10'>
      <img src={footerLogo} alt="nike-logo" />
      <p className='text-slate-gray font-montserrat w-[350px] text-center'>Get shoes ready for the new term at your nearest Nike store. Find your perfect size in store. Get Rewards</p>
      <div className='flex items-center gap-20'>
        {socialMedia.map(elem =>
          <div className='flex justify-center items-center bg-white rounded-full p-4 cursor-pointer'>
            <img src={elem.src} alt={elem.alt} />
          </div>
        )}
      </div>
      <div className='flex items-start gap-10 font-montserrat'>
        {footerLinks.map(elem => 
          <div className='flex flex-col items-start gap-5'>
            <h3 className='text-lg text-white'>{elem.title}</h3>
            <div className='flex flex-col items-start gap-2 text-slate-gray'>
              {elem.links.map(link => 
                <a href={link.link}>{link.name}</a>
                )}
            </div>
          </div>
          )}
      </div>
    </section>
  )
}

export default Footer