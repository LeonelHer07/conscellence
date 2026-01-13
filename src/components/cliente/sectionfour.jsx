import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Cards from "./Cards"
import Heading from "./Heading"

const sectionfour = () => {

  const cardsData = [
    {
      parrafo: "Working with Conscellence helped us triple our revenue in just one quarter.",
      foot: "Michael Thompson, Founder of EcoGreen Solutions"
    },
    {
      parrafo: "Their market insights allowed us to expand into Europe efficiently.",
      foot: "Sarah Williams, CEO of BrightTech"
    },
    {
      parrafo: "Thanks to their strategic consulting, our customer retention improved drastically.",
      foot: "Daniel Perez, COO of NexaCorp"
    },
    {
      parrafo: "The team provided unparalleled guidance on navigating complex regulations.",
      foot: "Laura Kim, Director at BlueWave"
    },
    {
      parrafo: "Our product launch was a huge success because of their thorough market research.",
      foot: "James Miller, Founder of NovaSystems"
    },
    {
      parrafo: "They helped us identify new opportunities we never considered before.",
      foot: "Anna Rodriguez, Marketing Lead at GreenFuture"
    }
  ]

  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1) // 1 = derecha, -1 = izquierda

  const CARD_WIDTH = 360
  const GAP = 8
  const cardsLength = cardsData.length

  const normalizeIndex = (i) => (i + cardsLength) % cardsLength

  const getVisibleCards = () => {
    const safeIndex = normalizeIndex(index)
    return [
      cardsData[safeIndex],
      cardsData[(safeIndex + 1) % cardsLength],
      cardsData[(safeIndex + 2) % cardsLength]
    ]
  }

  const next = () => {
    setDirection(1)  // deslizamiento hacia la izquierda
    setIndex(prev => normalizeIndex(prev + 1))
  }

  const prev = () => {
    setDirection(-1) // deslizamiento hacia la derecha
    setIndex(prev => normalizeIndex(prev - 1))
  }

  return (
    <div className='py-[120px] pl-[320px] pr-[24px]'>
      <Heading />

      <div className='overflow-hidden my-[40px]'>
        <motion.div
          className='flex gap-[8px]'
          key={index}
          // Invertimos la animación
          initial={{ x: direction === 1 ? CARD_WIDTH : -CARD_WIDTH }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 140,
            damping: 22
          }}
        >
          {
            getVisibleCards().map((item, i) => (
              <Cards
                key={i}
                parrafo={item.parrafo}
                foot={item.foot}
              />
            ))
          }
        </motion.div>
      </div>

      <div className='flex'>
        <button onClick={next}>
          <i className="bi bi-arrow-left text-white text-[30px] mr-[20px] cursor-pointer"></i>
        </button>
        <button onClick={prev}>
          <i className="bi bi-arrow-right text-white text-[30px] cursor-pointer"></i>
        </button>
      </div>
    </div>
  )
}

export default sectionfour
