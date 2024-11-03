import { introduction, serviceA } from "@/utils/data-util";
import React from "react";
import Sevices from "./Sevices";

const WhoWeAre = () => {
  return (
    <>
      <div className="container md:px-0 px-4 mx-auto py-8 md:mt-32">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-primary md:text-3xl text-xl font-bold uppercase ">
            About us
          </h1>
          <h6 className="md:text-3xl text-xl font-bold uppercase">
            who are we ?
          </h6>
        </div>
      </div>
      <Sevices introduction={introduction} />
    </>
  );
};

export default WhoWeAre;
