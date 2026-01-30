import React from 'react'

const Cardtwo = () => {
  return (
    <div className="bg-blue-600 w-full px-6 py-6 md:pl-[184px] md:pr-[80px] md:py-[40px] flex flex-col md:flex-row text-white text-base md:text-[16px] rounded-b-[50px] gap-6 md:gap-[80px]">
      
      {/* Título */}
      <h2 className="w-full md:w-[524px] text-2xl md:text-[40px] font-bold">
        Free consultation
      </h2>

      {/* Contenido */}
      <div className="w-full md:w-[524px] flex flex-col md:flex-row gap-4 md:gap-[24px] items-start md:items-center">
        
        {/* Botón */}
        <div className="w-full md:w-[294px] h-[56px] flex gap-2 md:gap-[8px] border-2 items-center justify-center rounded-[45px] text-base md:text-[16px] cursor-pointer">
          SCHEDULE A FREE CALL 
          <i className="bi bi-arrow-up-right"></i>
        </div>

        {/* Texto adicional */}
        <div className="text-base md:text-[16px] mt-2 md:mt-0">
          worth 200 USD
        </div>
      </div>

    </div>
  )
}

export default Cardtwo
