"use client";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
// import { corepatners } from "@/utils/data-util";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import CenterContent from "./CenterContent";

interface ICorePartners {
  corepatners: {
    title: string;
    des: string;
    arr: (
      | {
          icon: string;
          type: string;
          number: number;
        }
      | {
          icon: string;
          type: string;
          number: string;
        }
    )[];
  };
}

function CorePatners({ corepatners }: ICorePartners) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col items-center gap-4 py-14">
      <CenterContent des={corepatners.des} title={corepatners.title} />
      <div className="grid grid-flow-row md:grid-cols-3 grid-cols-1 lg:gap-[340px] md:gap-56 gap-28 md:px-0 px-4 pt-8 pb-20">
        {corepatners.arr.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center relative"
          >
            <div className="relative w-[66px] h-[66px] bg-primary-content p-[12px] rounded-[99px]">
              <Image
                src={item.icon}
                alt=""
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
              />
            </div>
            <h1
              ref={ref}
              className="text-[32px] font-semibold text-primary-typography absolute top-[75px]"
            >
              {typeof item.number === "string" ? (
                item.number
              ) : isVisible ? (
                <div className="flex items-center">
                  <CountUp start={0} end={Number(item.number)} duration={5} />{" "}
                  <span>+</span>
                </div>
              ) : (
                0
              )}
            </h1>

            <p className="text-secondary-grey text-[18px] absolute top-[125px] whitespace-nowrap">
              {item.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CorePatners;
