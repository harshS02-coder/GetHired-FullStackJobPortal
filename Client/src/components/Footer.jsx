import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='container h-100 px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-3'>
      <img src={assets.getHired} className="h-50 sm:h-10 md:h-12 w- object-contain"
          style={{
            maxWidth: '180px',
            minHeight: '32px'
          }} />
      <p className='flex-1 border-1 border-gray-100 pl-4 text-gray-500 max-sm:hidden'> Copyright @Harsh.dev | All right reserved.</p>
      <div className='flex items-center justify-between gap-2'>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img width={38} src={assets.facebook_icon} alt="Facebook" />
        </a>

        <a href="https://www.instagram.com/_mr_hrs_02/?hl=en" target="_blank" rel="noopener noreferrer">
          <img width={38} src={assets.instagram_icon} alt="Instagram" />
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <img width={38} src={assets.twitter_icon} alt="Twitter" />
        </a>
      </div>
    </div>
  )
}

export default Footer