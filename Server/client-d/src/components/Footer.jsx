import React from 'react'
import { assets } from '../assets/assets';

const Footer = () =>{
  return (
    <div className ='container h-100 px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-3'>
          <img src ={assets.getHired}/>
          <p className='flex-1 border-1 border-gray-100 pl-4 text-gray-500 max-sm:hidden'> Copyright @Harsh.dev | All right reserved.</p>
          <div className='flex items-center justify-between gap-2'>
            <img width = {38} src= {assets.facebook_icon}/>
            <img width = {38} src= {assets.instagram_icon}/>
            <img width = {38} src= {assets.twitter_icon}/>
          </div>
    </div>
  )
}

export default Footer