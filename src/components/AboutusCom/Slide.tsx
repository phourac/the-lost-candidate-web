import React from "react";
import SlideContent from "../SlideContent";
// import { award } from "@/utils/data-util";

interface ISLide {
  award: {
    img: string;
    title: string;
    des: string;
    speaker: string;
  }[];
}

function Slide({ award }: ISLide) {
  return (
    <div className="py-8">
      <SlideContent award={award} flex="flex-row-reverse" />
    </div>
  );
}

export default Slide;
