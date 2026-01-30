import React from 'react'
import Left from "./Left"
import Right from "./Right"

const Sectionthree = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-[80px] mx-6 md:mx-[120px] pb-12 md:pb-[120px]">
      <Left />
      <Right />
    </div>
  )
}

export default Sectionthree
