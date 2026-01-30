import React from 'react'
import Fb from "../../assets/Fb.svg"
import Insta from "../../assets/Insta.svg"
import Yt from "../../assets/Youtube.svg"
import Lk from "../../assets/LinkedIn.svg"
import Phone from "../../assets/Phone.svg"
import Gmail from "../../assets/Gmail.svg"
import Locat from "../../assets/Location.svg"

const Sectionsix = () => {
  return (
    <div className='flex flex-col md:flex-row w-full pt-12 md:pt-[80px] pb-12 md:pb-[120px] px-4 md:px-[120px] text-white gap-8 md:gap-[80px]'>

      {/* Left section */}
      <div className='w-full md:w-[612px] pr-0 md:pr-[80px]'>
        <div className='text-3xl md:text-[48px]'>
          <h2>
            <span className='mr-3 md:mr-[35px]'><i className="bi bi-arrow-down-right"></i></span>
            CONTACT<br />US TODAY
          </h2>
        </div>

        <p className='mt-4 md:mt-[40px] text-sm md:text-base'>
          Contact us today to schedule a consultation and discover how we can help your business thrive.
        </p>

        <div className="flex mt-6 md:mt-[80px] gap-4">
          <img src={Fb} alt="Logo de facebook" />
          <img src={Insta} alt="Logo de Instagram" />
          <img src={Lk} alt="Logo de Linkedin" />
          <img src={Yt} alt="Logo de Youtube" />
        </div>
      </div>

      {/* Right section */}
      <div className='w-full md:w-[508px] flex flex-col justify-between'>

        {/* Form */}
        <div>
          <h4 className='text-lg md:text-[20px] mb-2 md:mb-4'>Get a Free consultation</h4>
          <form className="flex flex-col gap-4">
            <div className="flex gap-3 w-full md:w-[292px] h-[56px] rounded-3xl items-center bg-white px-4">
              <i className="bi bi-person text-xl text-gray-400"></i>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full outline-none text-xs md:text-sm text-black"
              />
            </div>
            <div className="flex gap-3 w-full md:w-[292px] h-[56px] rounded-3xl items-center bg-white px-4">
              <i className="bi bi-envelope text-xl text-gray-400"></i>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none text-xs md:text-sm text-black"
              />
            </div>
            <div className="flex gap-3 w-full md:w-[292px] h-[100px] rounded-3xl items-start bg-white px-4 py-3">
              <i className="bi bi-chat-text text-xl text-gray-400 mt-1"></i>
              <textarea
                placeholder="Your Message"
                className="w-full h-full outline-none text-xs md:text-sm text-black resize-none"
              />
            </div>

            <button type="submit" className="flex gap-3 w-full md:w-[208px] h-[56px] rounded-3xl justify-center items-center bg-blue-600 text-white text-base cursor-pointer hover:bg-blue-700 transition-colors">
              <i className="bi bi-arrow-up-right-circle-fill text-4xl"></i>
            </button>
          </form>
        </div>

        {/* Contact info */}
        <div className='text-[14px] flex flex-col gap-4 mt-6 md:mt-8'>
          <div className='flex gap-4'>
            <img src={Phone} alt="Logo de Telefono" />
            <span className='self-center'>(987)-749-5403</span>
          </div>
          <div className='flex gap-4'>
            <img src={Gmail} alt="Logo de Gmail" />
            <span className='self-center'>info@conscellence.com</span>
          </div>
          <div className='flex gap-4'>
            <img src={Locat} alt="Logo de Locacion" />
            <span className='self-center'>123 Business Road, Suite 456, City, State, ZIP Code</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Sectionsix
