import React from 'react'
import { assets } from '../assets/assets'

function OurPolicy() {
  return (
    <div className='flex flex-col   sm:flex-row justify-around gap-12 sm:gap-2 text-center text-gray-700 py-20 text-xs sm:text-sm md:text-base'>
        <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="policy image" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchance policy</p>
      </div>
              <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="policy image" />
        <p className='font-semibold'>7 Day's Return Policy</p>
        <p className='text-gray-400'>We provide 7 day free return policy</p>
      </div>
              <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="policy image" />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>Be provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default OurPolicy
