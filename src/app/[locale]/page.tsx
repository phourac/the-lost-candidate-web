import Image from "next/image";
import banner_home from "../../../public/images/Home_Banner.png";
import ScrollIcon from "@/components/ScrollAnimationIcon";

import { home } from "@/utils/data-util";
import YouCanFInd from "@/components/HomeCom/YouCanFInd";
import WhoWeAre from "@/components/HomeCom/WhoWeAre";
import OurMission from "@/components/HomeCom/OurMission";
import OurVision from "@/components/HomeCom/OurVision";
import LearnMore from "@/components/LearnMore";
export default async function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative w-full h-auto">
        <div className="relative">
          <Image
            src={banner_home}
            alt=""
            width={"0"}
            height={"0"}
            className="object-cover w-full"
            sizes="(max-width: 768px) 96px 80px, (max-width: 1200px) 144px 128px"
            placeholder="blur"
          />
          <span className="absolute -bottom-5 left-[50%] md:block hidden">
            <ScrollIcon />
          </span>
        </div>
        <LearnMore home={home} />
      </div>
      <div className="lg:relative bottom-[200px]">
        <YouCanFInd />
        <WhoWeAre />
        <OurMission />
        <OurVision />
      </div>
    </div>
  );
}
