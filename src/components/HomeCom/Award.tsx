import React from "react";
import SlideContent from "../SlideContent";
// import { award } from "@/utils/data-util";

interface IAward {
  award: {
    img: string;
    title: string;
    des: string;
    speaker: string;
  }[];
}

function Award({ award }: IAward) {
  return (
    <div className="bg-primary my-8 py-[64px] px-4">
      <SlideContent award={award} flex="flex-row" />
    </div>
  );
}

export default Award;
