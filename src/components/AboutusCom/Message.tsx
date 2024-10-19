"use client";
// import { message } from "@/utils/data-util";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface IMessage {
  message: {
    img: string;
    title: string;
    des: string;
    speaker: string;
  };
}

function Message({ message }: IMessage) {
  const titleVariants: Variants = {
    offscreen: {
      x: -100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
      opacity: 1,
    },
  };
  const desVariants: Variants = {
    offscreen: {
      x: 100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
        delay: 0.4,
      },
      opacity: 1,
    },
  };
  const ceoVariants: Variants = {
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
        delay: 0.8,
      },
      opacity: 1,
    },
  };
  const imgVariants: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      transition: {
        duration: 0.2,
        delay: 0.2,
      },
      opacity: 1,
    },
  };
  return (
    <div className="container md:px-4 px-4 mx-auto bg-primary-content rounded-[32px]">
      <motion.div
        className="relative"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          className={`flex md:flex-row flex-col items-center justify-center p-[32px] gap-8 transition-opacity duration-500`}
        >
          <motion.div
            className="relative w-full "
            style={{ aspectRatio: "400/400" }}
            variants={imgVariants}
          >
            <Image
              src={message.img}
              alt=""
              fill
              className="rounded-[16px]"
              sizes="(min-width: 808px) 50vw, 100vw"
              // style={{ objectFit: "cover" }}
            />
          </motion.div>
          <div className="flex flex-col items-start gap-4 flex-re">
            <motion.h1
              className="md:text-[32px] text-[24px] text-primary-typography font-bold leading-[28px]"
              variants={titleVariants}
            >
              {message.title}
            </motion.h1>
            <motion.p
              className="md:text-[18px] text-[14px] text-secondary leading-[24px]"
              variants={desVariants}
            >
              {message.des}
            </motion.p>
            <motion.p
              className="md:text-[18px] text-[14px] text-secondary font-semibold italic"
              variants={ceoVariants}
            >
              {message.speaker}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Message;
