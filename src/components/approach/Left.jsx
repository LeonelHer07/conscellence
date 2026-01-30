import React from 'react'
import Logo from "../../assets/LogoApproach.svg"

const Left = () => {
  return (
    <div className="relative w-full md:w-[560px] flex justify-center md:justify-start text-center md:text-left">
      
      {/* Título */}
      <div className="w-full md:w-[560px]">
        <div className="flex justify-center md:justify-start gap-6 md:gap-[240px]">
          <h2 className="text-3xl md:text-[64px]">OUR</h2>
          <i className="bi bi-arrow-down-right text-3xl md:text-[64px]"></i>
        </div>
        <h2 className="text-3xl md:text-[64px] mt-2 md:mt-0">APPROACH</h2>
      </div>

      {/* Imagen - oculta en móvil */}
      <div className="hidden md:block absolute w-[500px] top-25 left-5">
        <img src={Logo} alt="Logo Approach" />
      </div>
    
    </div>
  )
}

export default Left
