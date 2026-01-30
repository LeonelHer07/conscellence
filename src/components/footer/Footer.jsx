import React from 'react'
import Logo from "../../assets/Logow.svg"

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row items-center md:justify-between px-4 md:px-[80px] py-6 md:py-[24px] bg-[#1E293B] gap-4'>
      <img src={Logo} alt="Logo" className='w-36 md:w-auto' />
      <span className='text-center md:text-left text-white text-sm md:text-[16px] font-light'>
        All rights reserved © 2024 Cons Consulting. Privacy Policy | Terms of Service
      </span>
    </div>
  )
}

export default Footer
