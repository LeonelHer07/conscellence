import React from 'react'

function Cards({ parrafo, foot }) {
  return (
    <div className='group w-full md:w-[360px] h-[390px] md:h-[390px] border-2 rounded-[45px] p-6 md:p-[40px] text-[14px] text-white hover:bg-blue-600 hover:text-white transition-colors'>
      
      <span className='text-2xl md:text-[35px] text-blue-600 group-hover:text-white'>
        "
      </span>
      <br />

      <span className='text-sm md:text-[14px]'>
        {parrafo}
      </span>
      <br /> <br />

      <span className='text-xs md:text-[12px]'>
        {foot} 
      </span>
    </div>
  )
}

export default Cards
