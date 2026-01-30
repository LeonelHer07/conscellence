import React from 'react'

const Cards = ({ num, head, text }) => {
  return (
    <div className="w-full md:w-[394px] h-auto md:h-[312px] rounded-3xl flex flex-col pt-10 px-10 pb-6 border border-gray-300 mb-6 md:mb-0">
      <div className="mb-4 text-xl md:text-[20px] text-blue-600">{num}</div>
      <div className="mb-4 text-2xl md:text-[24px] text-slate-900">{head}</div>
      <div className="text-base md:text-[18px] text-slate-600">{text}</div>
    </div>
  )
}

export default Cards
