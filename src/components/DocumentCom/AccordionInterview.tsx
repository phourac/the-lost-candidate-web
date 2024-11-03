"use client";
import INTERVIEW_API from "@/api/Interview";
import { useRequest } from "ahooks";
import { useState } from "react";

export function AccordionInterview() {
  const {
    data: listInterview,
    loading: loadingListInterview,
    error: errorListInterview,
    refresh: refreshListInterview,
  } = useRequest(() => INTERVIEW_API.getListReference("", 1), {
    refreshDeps: [],
  });

  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index: any) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Explore Common Questions
          </h2>
        </div>
        <div className="container md:px-0 px-4  py-8  mx-auto mt-8 space-y-4 md:mt-16">
          {listInterview?.data.map((item, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
            >
              <button
                type="button"
                onClick={() => toggleQuestion(index)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex md:text-2xl text-lg font-semibold text-black text-start">
                  <span className="pr-2 text-primary">{`សំ.`}</span>
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                    openQuestion === index ? "rotate-0" : "-rotate-180"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openQuestion === index && (
                <ol className="list-disc px-4 pb-5 sm:px-6 sm:pb-6 pt-4 text-lg">
                  {item.answer.map((anw, i) => (
                    <li key={i} className="ml-10 py-2">
                      {anw}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 text-base mt-9">
          Still have questions?
          <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary underline ml-1">
            Contact our support
          </span>
        </p>
      </div>
    </section>
  );
}

export default AccordionInterview;
