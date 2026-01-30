import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Cards from "./Cards"
import Heading from "./Heading"

const SectionFour = () => {

  const cardsData = [
    { parrafo: "Working with Conscellence helped us triple our revenue in just one quarter.", foot: "Michael Thompson, Founder of EcoGreen Solutions" },
    { parrafo: "Their market insights allowed us to expand into Europe efficiently.", foot: "Sarah Williams, CEO of BrightTech" },
    { parrafo: "Thanks to their strategic consulting, our customer retention improved drastically.", foot: "Daniel Perez, COO of NexaCorp" },
    { parrafo: "The team provided unparalleled guidance on navigating complex regulations.", foot: "Laura Kim, Director at BlueWave" },
    { parrafo: "Our product launch was a huge success because of their thorough market research.", foot: "James Miller, Founder of NovaSystems" },
    { parrafo: "They helped us identify new opportunities we never considered before.", foot: "Anna Rodriguez, Marketing Lead at GreenFuture" }
  ]

  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1) // 1 = derecha, -1 = izquierda
  const [cardsToShow, setCardsToShow] = useState(3)

  const CARD_WIDTH = 360
  const GAP = 8
  const cardsLength = cardsData.length

  const normalizeIndex = (i) => (i + cardsLength) % cardsLength

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1)
      } else {
        setCardsToShow(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getVisibleCards = () => {
    const safeIndex = normalizeIndex(index)
    const visible = []
    for (let i = 0; i < cardsToShow; i++) {
      visible.push(cardsData[(safeIndex + i) % cardsLength])
    }
    return visible
  }

  const next = () => {
    setDirection(1)
    setIndex(prev => normalizeIndex(prev + 1))
  }

  const prev = () => {
    setDirection(-1)
    setIndex(prev => normalizeIndex(prev - 1))
  }

  return (
    <div className='py-[120px] px-6 md:pl-[320px] md:pr-[24px]'>
      <Heading />

      <div className='overflow-hidden my-[40px]'>
        <motion.div
          className='flex gap-[8px]'
          key={index + '-' + cardsToShow}
          initial={{ x: direction === 1 ? CARD_WIDTH : -CARD_WIDTH }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 140, damping: 22 }}
        >
          {getVisibleCards().map((item, i) => (
            <div key={i} className={cardsToShow === 1 ? "w-full" : "w-[360px]"}>
              <Cards parrafo={item.parrafo} foot={item.foot} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Botones exactos como los tenías, sin cambios */}
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

export default SectionFour
