"use client";
import INTERVIEW_API from "@/api/Interview";
import { useRequest } from "ahooks";
import { useState } from "react";
import Image from "next/image";
import { resume } from "@/utils/data-util";

export function Resume() {
  return (
    <section className="py-2 bg-gray-50">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center gap-4 pt-8 pb-8 px-4">
          <h1 className="text-primary md:text-3xl text-xl font-bold uppercase text-center">
            Explore Sample Resumes
          </h1>{" "}
          <h6 className="md:text-lg text-md text-center">
            Here are some professional resume from canva
          </h6>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-8 ">
          {resume.map((item, i) => (
            <div key={i} className="w-auto h-auto rounded-xl">
              <Image
                src={item.img}
                alt=""
                layout="responsive"
                width={100}
                height={100}
                className="rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
