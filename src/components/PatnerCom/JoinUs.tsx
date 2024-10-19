"use client";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import CenterContent from "../CenterContent";

interface IJoinUs {
  joinus: {
    title: string;
    des: string;
    card: {
      icon: string;
      title: string;
      des: string;
    }[];
  };
}

function JoinUs({ joinus }: IJoinUs) {
  const cardVariants: Variants = {
    offscreen: {
      y: 200,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div className="flex flex-col items-center gap-4 py-14 container md:px-0 px-4 mx-auto">
      <CenterContent des={joinus.des} title={joinus.title} />

      <motion.div
        className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 py-4"
        initial="offscreen"
        whileInView="onscreen"
        exit={{ y: -10, opacity: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {joinus.card.map((item, index) => (
          <motion.div
            className="flex flex-col items-center justify-center bg-white rounded-[32px] py-[32px] px-[16px]"
            key={index}
            variants={cardVariants}
          >
            <Image
              src={item.icon}
              alt=""
              width={54}
              height={54}
              className="pb-[32px] h-auto w-[54px]"
              sizes="(max-width: 768px) 96px, (max-width: 1200px) 144px"
            />
            <h1 className="md:text-[32px] text-[28px] text-primary-typography font-semibold text-center pb-2">
              {item.title}
            </h1>
            <p className="md:text-[18px] text-[14px] text-secondary-grey leading-[24px] text-center">
              {item.des}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default JoinUs;
