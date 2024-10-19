"use client";
import { coreoffer } from "@/utils/data-util";
import Image from "next/image";
import React from "react";
import CenterContent from "./CenterContent";
import { Variants, motion } from "framer-motion";

interface ICoreOffering {
  coreoffer: {
    title: string;
    des: string;
    arr: {
      img: string;
      title: string;
      des: string;
    }[];
  };
}

function CoreOffering({ coreoffer }: ICoreOffering) {
  const variants: Variants = {
    offscreen: {
      x: -50,
      opacity: 0,
    },
    onscreen: {
      x: 0,
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
        delayChildren: 0.2, // Optional: delay before starting stagger animation
      },
    },
  };

  return (
    <div className="flex flex-col items-center gap-4 py-14 ">
      <CenterContent des={coreoffer.des} title={coreoffer.title} />

      <motion.div
        className="grid grid-flow-row md:grid-cols-2 grid-cols-1 md:gap-16 gap-4 py-8 container md:px-0 px-4 mx-auto"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
        variants={containerVariants}
      >
        {coreoffer.arr.map((item, index) => (
          <motion.div
            key={index}
            className="flex md:flex-row flex-col-reverse justify-between items-start bg-primary-content p-[32px] rounded-3xl gap-4"
            variants={variants}
          >
            <div className="flex flex-col items-start justify-center max-w-[474px] gap-4">
              <h1 className="text-[24px] font-semibold text-primary-typography">
                {item.title}
              </h1>
              <p className="text-[18px] text-secondary-grey leading-[24px]">
                {item.des}
              </p>
            </div>

            <Image
              src={item.img}
              alt=""
              width={88}
              height={88}
              sizes="(min-width: 808px) 50vw, 100vw"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default CoreOffering;
