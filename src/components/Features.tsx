"use client";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
export const features = [
  {
    icon: "/images/shopping_icon.png",
    title: "The best shopping experience",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/images/customer_icon.png",
    title: "Customer supports ready to answer",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/images/tracking_icon.png",
    title: "Real-time tracking door to door",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function Features() {
  const variant: Variants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };

  const containerVariants: Variants = {
    offscreen: {},
    onscreen: {
      transition: {
        staggerChildren: 0.4, // Adjust this value to control the stagger timing
      },
    },
  };

  return (
    <motion.div
      className="container mx-auto flex md:flex-row flex-col justify-between items-center gap-8 mb-16 lg:mb-0"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {features.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center justify-center gap-4"
          variants={variant}
        >
          <div className="relative w-[124px] h-[124px]">
            <Image
              src={item.icon}
              alt=""
              fill
              className="object-contain"
              sizes="(min-width: 808px) 50vw, 100vw"
            />
          </div>
          <h1 className="text-primary-typography font-bold leading-[36px] text-[32px] text-center pt-8">
            {item.title}
          </h1>
          <p className="text-center text-secondary-grey md:text-[18px] text-[14px] leading-[24px]">
            {item.des}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Features;
