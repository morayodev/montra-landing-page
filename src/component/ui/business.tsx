"use client";
import React, { useEffect, useState } from "react";
import Typography from "./typography";
import { FaChevronRight } from "react-icons/fa";
import Iphone15 from "../../../public/iphone15.svg";
import growBusiness from "../../../public/grow.svg";
import arrow from "../../../public/arrow.svg";
import earn from "../../../public/earn.svg";
import Property2 from "../../../public/Property 2.svg";
import Property1 from "../../../public/Property 1.svg";
import Property3 from "../../../public/Property 3.svg";
import Property4 from "../../../public/Property 4.svg";
import business2 from "../../../public/business2.svg";
import business1 from "../../../public/business1.svg";
import business3 from "../../../public/business3.svg";
import startWebsite from "../../../public/startWebsite.svg";
import Image from "next/image";

export default function BusinessSection() {
  const images = [Property1, Property2, Property3, Property4];
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Track the hovered image index

  useEffect(() => {
    if (!hoveredIndex) {
      const timer = setInterval(() => {
        setActiveIndex((prevState) => (prevState + 1) % images.length);
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [hoveredIndex, images.length]);

  return (
    <div className="relative z-10  ">
      <div className="bg-primary before:height-[185px] before:skew-y-[-6deg] before:origin-[0] relative before:absolute before:content-[''] before:left-[0px] before:top-[0px] before:w-full before:h-full before:bg-primary before:z-[-1]">
        <div className="px-[20px]">
          <div className="mt-[-60px] ml-[-30px] absolute  ">
            <Image src={arrow} alt="arrow" />
          </div>
          <div className="max-w-[1200px]  mx-auto ">
            <div className="flex  gap-0 lg:gap-24 py-20 flex-col lg:flex-row">
              <div className="lg:w-[40%] w-[100%]">
                <Typography
                  variant="p"
                  text="Montra - Business"
                  className="lg:pb-4 pb-0 text-secondary-default font-semibold"
                />

                <Typography
                  text="Grow your business with  Montra Business Account & start accepting Payments from everyone"
                  variant="h2"
                  className=" text-white font-bold"
                />
                <Typography
                  text="Elevate your business with Montra's tailored solutions, propelling you toward your goals with unmatched support and innovation."
                  variant="p"
                  className="font-normal my-4 text-[#C5CFD8]"
                />
                <button className="text-[12px] flex items-center gap-2 justify-center bg-secondary-default text-white px-3 py-1 rounded-md">
                  <span>Explore Payments Acceptance</span>{" "}
                  <span>
                    {" "}
                    <FaChevronRight size={15} className="" />
                  </span>
                </button>
                <div className="mt-10 mb-5">
                  <Image src={growBusiness} alt="growBusiness" />
                </div>
              </div>
              <div className=" w-full lg:w-[60%] relative ml-auto mr-auto block lg:h-full h-[250px]">
                {/* {step === 1 && ( */}
                <div className="absolute">
                  {" "}
                  <Image src={business1} alt="loan1" className="w-full h-full object-contain"  />
                </div>
                {/* )} */}
                {/* {step === 2 && ( */}
                <div className="absolute top-[130px]">
                  {" "}
                  <Image src={business2} alt="loan2" className="w-full h-full object-contain"  />
                </div>
                {/* )} */}
                {/* {step === 3 && ( */}
                <div className="absolute top-[170px]">
                  {" "}
                  <Image src={business3} alt="loan3" className="w-full h-full object-contain"  />
                </div>
                {/* )} */}
              </div>
            </div>
            <div className="flex  gap-0 lg:gap-24 py-10 lg:py-20 flex-col lg:flex-row">
              <div className="w-full lg:w-[35%]">
                <Typography
                  text="Earn more by opening a Montra Agent Account & start offering Agency Banking Services"
                  variant="h2"
                  className=" text-white font-bold"
                />
                <Typography
                  text="Expand your financial horizons and provide essential banking services to your community. Montra makes it easy for you to boost your income while offering valuable services to those around you."
                  variant="p"
                  className="font-normal my-4 text-[#C5CFD8]"
                />
                <button className="text-[12px]   flex items-center gap-2 justify-center bg-secondary-default text-white px-3 py-1 rounded-md">
                  <span>Explore Agency Banking Services</span>{" "}
                  <span>
                    {" "}
                    <FaChevronRight size={15} className="" />
                  </span>
                </button>
                <div className="mt-10 mb-5">
                  <Image src={earn} alt="earn" />
                </div>
              </div>

              {/* <div className=" grid place-content-center"> */}
              <div className=" w-full lg:w-[60%] relative ml-auto mr-auto block">
                <Image src={Iphone15} alt="Picture of the author" />
              </div>
              {/* </div> */}
            </div>
            <div className="flex  gap-0 lg:gap-24 py-10 lg:py-20 flex-col lg:flex-row">
              <div className="lg:w-[40%] w-[100%]">
                <Typography
                  text="Don&nbsp;t have a website for your business?"
                  variant="p"
                  className=" text-white font-bold"
                />
                <Typography
                  text=" Start selling online on Montra App by setting up your Montra Store"
                  variant="h2"
                  className=" text-white font-bold"
                />
                <Typography
                  text="Create a free online customized Montra store for your business category  that helps you find customers, accept payments from anyone, and grow your business"
                  variant="p"
                  className="font-normal my-4 text-[#C5CFD8]"
                />
                <button className="text-[12px]   flex items-center gap-2 justify-center bg-secondary-default text-white px-3 py-1 rounded-md">
                  <span>Explore Monstra Store Offering</span>{" "}
                  <span>
                    {" "}
                    <FaChevronRight size={15} className="" />
                  </span>
                </button>
                <div className="mt-10 mb-10">
                  <Image src={startWebsite} alt="startWebsite" />
                </div>
              </div>

              <div className="grid place-content-center gap-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)} // Set hovered image index
                    onMouseLeave={() => setHoveredIndex(null)} // Reset hovered state
                    className={`relative transition-opacity duration-500 ${
                      hoveredIndex === index || (hoveredIndex === null && index === activeIndex)
                        ? "opacity-100"
                        : "opacity-50"
                    }`}
                  >
                    <Image src={image} alt={`Property ${index + 1}`} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
