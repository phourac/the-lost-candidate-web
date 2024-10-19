"use client";
import { FaCircle } from "react-icons/fa";
import React, { useState } from "react";
import { FaCircleDot } from "react-icons/fa6";

import { Variants, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import CenterContent from "./CenterContent";

interface IStepProgess {
  width: "max-w-[550px]" | "max-w-[700px]";
  title: string;
  des: string;
  step: {
    key: string;
    value: {
      img: StaticImageData | string;
      titleValue: string;
      desValue: {
        describe: string;
      }[];
    };
  }[];
}

function StepProgress({ des, step, title, width }: IStepProgess) {
  const variants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
    },
    leave: {
      y: -10,
      opacity: 0,
    },
  };
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const lastKey = step.length > 0 ? step[step.length - 1].key : null;
  const [currentIndex, setCurrentIndex] = useState(lastKey);
  const [active, setActive] = useState(lastKey);
  const [hoverActive, setHoverActive] = useState("");

  const [isAnimating, setIsAnimating] = useState(false);

  console.log("currentIndex", currentIndex);

  const currentItem = step.find((item) => item.key === currentIndex)?.value;

  return (
    <div className="flex flex-col items-center gap-4 py-14 w-full">
      <CenterContent des={des} title={title} />

      <motion.div
        className={`${width} w-full px-4 py-8`}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
        variants={variants}
      >
        <div className="flex justify-between w-full">
          {step.map((item, index) => (
            <motion.button
              onMouseEnter={() => {
                setHoveredIndex(index);
                setHoverActive(item.key);
              }}
              onMouseLeave={() => {
                setHoveredIndex(-1);
                setHoverActive("");
              }}
              onClick={() => {
                setActive(item.key);
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentIndex(item.key);
                  setIsAnimating(false);
                }, 500);
              }}
              key={index}
              className="md:text-[24px] text-[18px] text-secondary-grey font-semibold"
              animate={{
                scale: hoverActive === item.key ? 1.4 : 1,
              }} // Apply scale only when active
              transition={{ type: "spring", duration: 0.3 }}
            >
              {item.key}
            </motion.button>
          ))}
        </div>
        <div className="relative flex items-center justify-center w-full md:px-6 px-4 py-2">
          <div className="absolute h-[4px] bg-primary w-[90%] z-0"></div>{" "}
          {/* Progress Bar */}
          <div className="flex justify-between w-full">
            {step.map((item, index) => (
              <motion.button
                key={index}
                className="text-primary z-10"
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  setHoverActive(item.key);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(-1);
                  setHoverActive("");
                }}
                onClick={() => {
                  setActive(item.key);
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentIndex(item.key);
                    setIsAnimating(false);
                  }, 500);
                }}
                animate={{
                  scale:
                    active === item.key || hoverActive === item.key ? 1.4 : 1,
                }} // Apply scale only when active
                transition={{ type: "spring", duration: 0.3 }}
              >
                {hoveredIndex === index || item.key === active ? (
                  <FaCircleDot
                    size={20}
                    className="bg-primary-content rounded-full"
                  />
                ) : (
                  <FaCircle size={20} />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      <div
        className={` bg-primary-content rounded-[32px] container md:px-0 px-4 mx-auto`}
      >
        <motion.div
          animate={{
            opacity: isAnimating ? 0 : 1,
          }}
          className={`flex md:flex-row flex-col items-center justify-center gap-8 md:p-[64px] p-[16px] `}
        >
          <div className="flex flex-col gap-4">
            <h1 className="md:text-[24px] text-[18px] text-primary-typography font-semibold -ml-4">
              {currentItem?.titleValue}
            </h1>
            <ul>
              {currentItem?.desValue.map((item, index) => (
                <li
                  className="list-disc text-[14px] md:text-[18px] text-secondary leading-[24px]"
                  key={index}
                >
                  {item.describe}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={currentItem?.img || ""}
            alt=""
            width={564}
            height={564}
            className="object-cover w-[564px] h-auto"
            sizes="(min-width: 808px) 50vw, 100vw"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default StepProgress;
