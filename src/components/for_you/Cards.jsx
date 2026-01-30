import React from 'react'

const Cards = ({ title, parrafo, rounded }) => {
  return (
    <div className={`w-full bg-slate-900 px-6 py-6 md:px-[80px] md:py-[56px] flex flex-col md:flex-row text-white gap-6 md:gap-[80px] border-b-2 ${rounded}`}>
      
      {/* Icono */}
      <div>
        <i className="bi bi-arrow-down-right text-2xl md:text-[24px]"></i>
      </div>

      {/* Contenido */}
      <div className="flex flex-col md:flex-row w-full md:w-[1128px] gap-6 md:gap-[80px]">
        <h2 className="w-full md:w-[524px] text-2xl md:text-[40px]">{title}</h2>
        <p className="w-full md:w-[524px] text-base md:text-[18px]">{parrafo}</p>
      </div>

    </div>
  )
}

export default Cards
