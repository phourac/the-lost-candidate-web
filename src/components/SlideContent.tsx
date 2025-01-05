'use client'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface ISlideContent {
  award: {
    img: StaticImageData | string
    title: string
    des: string
    speaker: string
  }[]
  flex: 'flex-row' | 'flex-row-reverse'
}

const SlideContent = ({ award, flex }: ISlideContent) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handlePrevClick = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : award.length - 1
      )
      setIsAnimating(false)
    }, 500)
  }

  const handleNextClick = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < award.length - 1 ? prevIndex + 1 : 0
      )
      setIsAnimating(false)
    }, 500)
  }

  const currentItem = award[currentIndex]

  return (
    <div className="container md:px-4 px-4 mx-auto bg-primary-content rounded-[32px]">
      <motion.div
        className="relative"
        animate={{ opacity: isAnimating ? 0 : 1 }}
        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
      >
        <div
          className={`flex flex-col md:${flex} items-center justify-center p-[32px] gap-8`}
        >
          <Image
            src={currentItem.img}
            alt=""
            width={'400'}
            height={'400'}
            className="rounded-[16px] w-full h-auto max-w-[400px]"
            sizes="(min-width: 808px) 50vw, 100vw"
          />
          <div className="flex flex-col items-start gap-4">
            <h1 className="md:text-[32px] text-[24px] text-primary-typography font-bold leading-[28px]">
              {currentItem.title}
            </h1>
            <p className="md:text-[18px] text-[14px] text-secondary leading-[24px]">
              {currentItem.des}
            </p>
            <p className="md:text-[18px] text-[14px] text-secondary font-semibold italic">
              {currentItem.speaker}
            </p>
            <div className="flex gap-4">
              <button
                aria-label="Previous slide"
                className="bg-primary-lighter rounded-[99px] p-[8px] text-primary hover:text-primary-lighter hover:bg-primary transition duration-300"
                onClick={handlePrevClick}
              >
                <ArrowLeft2 size="44" variant="Bold" />
              </button>
              <button
                aria-label="Next slide"
                className="bg-primary-lighter rounded-[99px] p-[8px] text-primary hover:text-primary-lighter hover:bg-primary transition duration-300"
                onClick={handleNextClick}
              >
                <ArrowRight2 size="44" variant="Bold" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SlideContent
