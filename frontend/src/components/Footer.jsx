import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam libero quia! Temporibus, molestias ut! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos aliquid ex cumque sint aperiam libero.
            </p>
        </div>
        <div>
            <h1 className='text-xl font-medium mb-5'>COMPANY</h1>
            <ul className='flex flex-col gap-1 text-gray-600'>
            <li>HOME</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+977984000000</li>
                <li>forever@gmail.com</li>
            </ul>
        </div>
      </div>
              <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025 @ forever.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
