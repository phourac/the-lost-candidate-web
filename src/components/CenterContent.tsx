import { Variants, motion } from "framer-motion";
import React from "react";

interface IContent {
  title: string;
  des: string;
}

const CenterContent = ({ des, title }: IContent) => {
  const variants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      // rotate: -10,
      transition: {
        duration: 0.2,
        delay: 0.4,
      },
    },
    leave: { y: -100, opacity: 0 },
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      exit="leave"
      viewport={{ once: true, amount: 0.5 }}
      variants={variants}
    >
      <h1 className="max-w-[725px] text-center px-4 text-[32px] font-semibold text-primary-typography">
        {title}
      </h1>
      <p className="max-w-[725px] px-4 text-center text-secondary leading-[28px] font-medium text-[20px]">
        {des}
      </p>
    </motion.div>
  );
};

export default CenterContent;
