"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Variants, motion } from "framer-motion";

interface ICard {
  title: string;
  des: string;
  img: StaticImageData | string;
}

function CardWithBlueFrame({ des, img, title }: ICard) {
  const cardVariants: Variants = {
    offscreen: {
      y: 200,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
    offscreenText: {
      x: -200,
    },
    onscreenText: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },

    offscreenVid: {
      x: 200,
    },
    onscreenVid: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      transition={{ duration: 0.2 }}
      exit="leave"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className="container md:px-0 px-4 mx-auto pt-16 flex gap-24 relative z-10 ">
        <motion.div
          className="md:flex flex-col hidden"
          variants={cardVariants}
          initial="offscreenText"
          animate="onscreenText"
        >
          <div className="flex flex-col bg-primary-content rounded-[32px] p-[32px] lg:max-w-[500px] xl:max-w-[698px]">
            <h1 className="md:text-[32px] text-[28px] text-primary-typography font-bold">
              {title}
            </h1>
            <p className="md:text-[18px] text=[14px] text-primary-typography leading-[24px]">
              {des}
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex md:hidden flex-col"
          // variants={cardVariants}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <div className="flex flex-col bg-primary-content rounded-[32px] p-[32px] lg:max-w-[500px] xl:max-w-[698px]">
            <h1 className="md:text-[32px] text-[28px] text-primary-typography font-bold">
              {title}
            </h1>
            <p className="md:text-[18px] text=[14px] text-primary-typography leading-[24px]">
              {des}
            </p>
          </div>
        </motion.div>
        <motion.video
          width={500}
          height={500}
          src="/Final_compos.mp4"
          className="rounded-[32px] object-cover right-0 absolute lg:block hidden"
          autoPlay
          loop
          muted
          variants={cardVariants}
          initial="offscreenVid"
          animate="onscreenVid"
        />{" "}
      </motion.div>
      <motion.div
        className="md:flex justify-center hidden lg:py-0 py-8"
        variants={cardVariants}
      >
        <Image
          src={img}
          alt=""
          className="object-cover"
          width={"0"}
          height={"0"}
          style={{ width: "500px", height: "auto" }}
          sizes="(min-width: 808px) 50vw, 100vw"
        />
      </motion.div>
      <motion.div
        className="pb-8 lg:pt-0 pt-8 md:px-0 px-4 lg:ml-[300px] xl:ml-[420px]  flex justify-center lg:justify-start md:hidden "
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
      >
        <Image
          src={img}
          alt=""
          className="object-cover"
          //   width={500}
          //   height={500}
          width={"0"}
          height={"0"}
          style={{ width: "500px", height: "auto" }}
          sizes="(min-width: 808px) 50vw, 100vw"
        />
      </motion.div>
      <motion.video
        width={500}
        height={500}
        src="/Final_compos.mp4"
        className="rounded-[32px] object-cover right-0 lg:absolute block lg:hidden lg:mb-0 mb-8 md:px-0 px-4 mx-auto"
        // style={{ aspectRatio: "1/1" }}
        autoPlay
        loop
        muted
        playsInline
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
      />{" "}
    </motion.div>
  );
}

export default CardWithBlueFrame;
