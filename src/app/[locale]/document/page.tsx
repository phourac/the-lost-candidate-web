import React from "react";
import Interview from "../../../../public/images/Interview.png";

import { useTranslations } from "next-intl";
import { Metadata } from "next";

import AccordionInterview from "@/components/DocumentCom/AccordionInterview";
import Resume from "@/components/DocumentCom/Resume";
import Header from "@/components/Header";

export const metadata: Metadata = {
  openGraph: {
    title: "Document - The Lost Candiate",
    description:
      "The Lost Candiate is a website that offer a variety of strategies and resources to help students find a job that aligns with their skills and career aspirations.",
  },
  title: "Document - The Lost Candiate",
  description:
    "The Lost Candiate is a website that offer a variety of strategies and resources to help students find a job that aligns with their skills and career aspirations.",
  // keywords:
  //   "cambodia, delivery, grocery, food, baverage, drink, stationary, baby mart, flowers, health, bakery",
};

function Document() {
  const t = useTranslations("Index");

  return (
    <div className="w-full">
      <Header img={Interview} title={t("Document")} />

      <div className="px-4 my-16">
        <AccordionInterview />
        <Resume />
      </div>
    </div>
  );
}

export default Document;
