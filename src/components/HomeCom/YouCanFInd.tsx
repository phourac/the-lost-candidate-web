"use client";
import { youCanFindJob } from "@/utils/data-util";
import React, { useState } from "react";

import Recruite from "../../../public/images/Recruite.png";
import Image, { StaticImageData } from "next/image";
import { SiFaceit } from "react-icons/si";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { motion } from "framer-motion";

const YouCanFInd = () => {
  const [selected, setSeleted] = useState(0);
  return (
    <div className="container md:px-0 px-4 mx-auto py-8 md:mt-32">
      <div className="flex flex-col gap-4">
        <h1 className="text-primary md:text-3xl text-xl font-bold uppercase ">
          What you can find ?
        </h1>
        <h6 className="md:text-3xl text-xl font-bold uppercase">
          we can provide you :
        </h6>
      </div>
      <div className="md:flex hidden flex-row gap-4 pt-24">
        <div className="flex flex-col gap-8">
          {youCanFindJob.map((item, i) => {
            return (
              <div
                key={i}
                onMouseEnter={() => {
                  setSeleted(i);
                }}
                className={`cursor-pointer ${
                  selected === i
                    ? "translate-x-6 transition-transform duration-300 ease-in-out" // smoother transition
                    : "translate-x-0 transition-transform duration-300 ease-in-out"
                }`}
              >
                <div className="flex flex-row items-start gap-4">
                  {selected === i && (
                    <SiFaceit className={`text-primary`} size={42} />
                  )}
                  <div>
                    <h6
                      className={`text-2xl font-semibold ${
                        selected === i ? "text-primary " : "text-secondary-grey"
                      } `}
                    >
                      {item.title}
                    </h6>
                    <p
                      className={`text-2xl font-semibold ${
                        selected === i ? "text-black" : "text-secondary-grey"
                      } `}
                    >
                      {item.des}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4">
          <div
            className={`h-[312px] w-[512px] relative`}
            style={{ backgroundColor: youCanFindJob[selected].color }}
          >
            <Image
              src={youCanFindJob[selected].img}
              alt=""
              width={"512"}
              height={"312"}
              className="w-full h-auto max-w-[512] absolute left-4 top-4"
              sizes="(min-width: 808px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
      <div className="md:hidden pt-16">
        <SlideContent award={youCanFindJob} />
      </div>
    </div>
  );
};

export default YouCanFInd;

interface ISlideContent {
  award: {
    img: StaticImageData | string;
    title: string;
    des: string;
  }[];
}

const SlideContent = ({ award }: ISlideContent) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : award.length - 1
      );
      setIsAnimating(false);
    }, 500);
  };

  const handleNextClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < award.length - 1 ? prevIndex + 1 : 0
      );
      setIsAnimating(false);
    }, 500);
  };

  const currentItem = award[currentIndex];

  return (
    <div className="">
      <motion.div
        className="relative"
        animate={{ opacity: isAnimating ? 0 : 1 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
      >
        <div
          className={`flex flex-col md:flex-row items-center justify-center gap-8`}
        >
          <Image
            src={currentItem.img}
            alt=""
            width={"400"}
            height={"400"}
            className="rounded-[16px] w-full h-auto max-w-[400px]"
            sizes="(min-width: 808px) 50vw, 100vw"
          />
          <div className="flex flex-col items-start justify-start gap-4 min-h-[200px]">
            <h1 className="md:text-[32px] text-[24px] text-primary-typography font-bold leading-[28px] text-start">
              {currentItem.title}
            </h1>
            <p className="md:text-[18px] text-[14px] text-secondary leading-[24px] text-start">
              {currentItem.des}
            </p>
            {/* <p className="md:text-[18px] text-[14px] text-secondary font-semibold italic">
              {currentItem.speaker}
            </p> */}
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
  );
};
