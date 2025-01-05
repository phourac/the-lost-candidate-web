'use client'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

interface IHeader {
  title: string
  img?: StaticImageData | string
}

function Header({ img, title }: IHeader) {
  return (
    <>
      {img && (
        <div className="relative">
          <motion.div
            className="relative"
            initial={{ x: -20, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.2, duration: 0.2 }
            }}
            transition={{ type: 'spring', bounce: 0.4, duration: 0.8 }}
          >
            <Image
              src={img || ''}
              alt=""
              width={'0'}
              height={'0'}
              className="object-cover w-full"
              sizes="(max-width: 768px) 96px 80px, (max-width: 1200px) 144px 128px"
              placeholder="blur"
            />
          </motion.div>
          <motion.h1
            className="md:py-20 py-10 md:text-[48px] text-[32px] text-primary-typography font-bold  left-0 -top-5 sm:-top-10 absolute text-center w-full"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', bounce: 0.4, duration: 0.8 }}
          >
            {title}
          </motion.h1>
        </div>
      )}
    </>
  )
}

export default Header
