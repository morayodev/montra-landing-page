import React from "react";
import Typography from "./typography";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import group1 from "../../../public/Group 60655.svg";
import asset from "../../../public/Asset 1 1.svg";
import moneyLink from "../../../public/moneyLink.svg";

export default function Platform() {
  return (
    <div className="bg-tertiary-default">
      <div className="max-w-[1200px]  mx-auto px-[20px]">
        <div className="flex  gap-0 lg:gap-24 py-10 lg:py-20 flex-col lg:flex-row">
          <div className="lg:w-[40%] w-[100%]">
            <Image src={moneyLink} alt="asset" />

            <Typography
              text="Modern Fintech Platform that empowers innovators"
              variant="h2"
              className=" text-[#4D148C] font-normal lg"
            />
            <Typography
              text="Modern Card Issuing platform, POS acquiring platform, lending & banking platform connecting banks, fintechs, and businesses with custom APIs for a wide range of financial services
"
              variant="p"
              className="font-normal my-4 text-[#425466]"
            />
            <button className="text-[12px] flex items-center gap-2 justify-center bg-[#FF5900] text-white px-3 py-1  rounded-md">
              <span>Explore MoneyLink Platform</span>{" "}
              <span>
                {" "}
                <FaChevronRight size={15} className="" />
              </span>
            </button>
            <div className="mt-10 mb-5">
              <Image src={group1} alt="group1" className="" />
            </div>
          </div>
          <div className=" w-full lg:w-[60%] relative ml-auto mr-auto block md:h-[400px] h-[200px]">
            <Image src={asset} alt="asset" />
          </div>
        </div>
      </div>
    </div>
  );
}
