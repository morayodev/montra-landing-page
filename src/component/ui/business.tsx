import React from "react";
import Typography from "./typography";
import { FaChevronRight } from "react-icons/fa";
import Iphone15 from "../../../public/Group 60750.png";
import personal from "../../../public/personal.png";
import arrow from "../../../public/arrow.svg";
import Image from "next/image";

export default function BusinessSection() {
  return (
    <div className="relative z-10 ">
      <div className="bg-primary before:height-[185px] before:skew-y-[-6deg] before:origin-[0] relative before:absolute before:content-[''] before:left-[0px] before:top-[0px] before:w-full before:h-full before:bg-primary before:z-[-1]">
        <div className="mt-[-60px] ml-[-30px] absolute">
          <Image src={arrow} alt="arrow" />
        </div>
        <div className="max-w-[1200px]  mx-auto ">
          <div className="flex justify-between py-20 mt-10">
            <div className="w-[35%]">
              <Typography variant="p" text="Montra - Business" className="pb-4 text-secondary-default font-semibold" />

              <Typography
                text="Grow your business with  Montra Business Account & start accepting Payments from everyone"
                variant="h2"
                className=" text-white font-bold leading-[80px]"
              />
              <Typography
                text="Elevate your business with Montra's tailored solutions, propelling you toward your goals with unmatched support and innovation."
                variant="p"
                className="font-normal my-4 text-[#C5CFD8]"
              />
              <button className="flex items-center gap-2 justify-center bg-secondary-default text-white px-3 py-1 rounded-md">
                <span>Explore Payments Acceptance</span>{" "}
                <span>
                  {" "}
                  <FaChevronRight size={15} className="" />
                </span>
              </button>
              <div className="mt-10 mb-5">
                <Image src={personal} alt="personal" />
              </div>
            </div>

            <div className=" grid place-content-center">
              <Image src={Iphone15} alt="Picture of the author" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
