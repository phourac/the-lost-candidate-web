"use client";
// import { home } from "@/utils/data-util";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import { Variants, motion } from "framer-motion";

interface ILearnMore {
  home: {
    title: string;
    des: string;
  };
}

const LearnMore = ({ home }: ILearnMore) => {
  const arrow = {
    initial: { rotate: 0, scale: 1 },
    animate: { scale: 1.4 },
    tab: { translateX: 15 },
  };

  const cardVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
      opacity: 1,
    },
  };
  // className="absolute lg:top-[30%] md:top-[20%] sm:top-[15%] top-[7%] left-[7%] text-primary-content md:max-w-[460px] max-w-[300px] sm:text-[20px] md:text-[32px] text-[14px] font-bold flex flex-col gap-4 sm:leading-[36px]"

  return (
    <motion.div
      className="container mx-auto flex flex-col lg:relative absolute top-[10%] left-[4%]  lg:left-[0%] lg:bottom-[55vh]  text-primary-content"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      variants={cardVariants}
    >
      <span className="sm:leading-[36px] lg:max-w-[460px] max-w-[300px] text-start sm:text-[20px] md:text-[32px] text-[14px] font-bold md:pb-4 pb-2">
        {home.title}
      </span>
      <span className="md:text-[18px] sm:text-[14px] text-[10px] sm:leading-[26px] lg:max-w-[460px] max-w-[300px] text-start md:pb-8 pb-4">
        {home.des}
      </span>
      <Link href={"/about-us"}>
        <motion.div
          initial="initial"
          animate="initial"
          whileHover="animate"
          whileTap="tab"
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="transition duration-300 bg-primary-content py-[12px] rounded-[99px] text-primary md:text-base text-[10px] text-center md:max-w-[250px] max-w-[170px] flex items-center justify-center gap-4 hover:bg-primary hover:text-primary-content"
        >
          Learn more about us
          <motion.div variants={arrow}>
            <FaArrowRightLong />
          </motion.div>
          {/* <span>
        </span> */}
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default LearnMore;
