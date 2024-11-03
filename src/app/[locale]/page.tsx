import Image from "next/image";
import banner_home from "../../../public/images/Home_Banner.png";
import Sevices from "@/components/HomeCom/Sevices";
import ScrollIcon from "@/components/ScrollAnimationIcon";
import Comitting from "@/components/Comitting";
import CorePatners from "@/components/CorePatners";
import PartnerCompany from "@/components/PartnerCompany";
import CoreOffering from "@/components/CoreOffering";
import Award from "@/components/HomeCom/Award";
import LearnMore from "@/components/HomeCom/LearnMore";
import Download from "@/components/Download";
import Features from "@/components/Features";
import {
  award,
  committing,
  coreoffer,
  corepatners,
  home,
  patnerscompany,
  serviceA,
} from "@/utils/data-util";
import YouCanFInd from "@/components/HomeCom/YouCanFInd";
import WhoWeAre from "@/components/HomeCom/WhoWeAre";
import OurMission from "@/components/HomeCom/OurMission";
import OurVision from "@/components/HomeCom/OurVision";
import TableCom from "@/components/JobPortal/TableCom";
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
        {/* <Sevices serviceA={serviceA} /> */}
        <YouCanFInd />
        <WhoWeAre />
        <OurMission />
        <OurVision />
        {/* <Comitting committing={committing} />
        <CorePatners corepatners={corepatners} />
        <div className="overflow-x-auto">
          <PartnerCompany patnerscompany={patnerscompany} />
        </div>
        <CoreOffering coreoffer={coreoffer} />
        <Award award={award} />
        <div className="px-4">
          <Download />
        </div>
        <div className="px-4 lg:-mb-[150px] mt-16 ">
          <Features />
        </div> */}
      </div>
    </div>
  );
}
