import React from "react";

interface IService {
  title: string;
  des: string;
}

const ServiceCom = ({ des, title }: IService) => {
  return (
    <div className="bg-primary-content py-[32px] px-[38px] rounded-[32px] max-w-[698px]">
      <h1 className="text-primary-typography md:text-[32px] text-[28px] font-semibold">
        {title}
      </h1>
      <p className="text-primary-typography md:text-[18px] text-[14px]">
        {des}
      </p>
    </div>
  );
};

export default ServiceCom;
