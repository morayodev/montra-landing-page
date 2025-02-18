import Typography from "@/component/ui/typography";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import vec1 from "../../../public/customer vec1.svg";
import vec3 from "../../../public/customer vec2.svg";
import vec2 from "../../../public/customer vec3.svg";
import vec1Inactive from "../../../public/vec1Inactive.svg";
import vec2Inactive from "../../../public/vecInactive2.svg";
import vec3Inactive from "../../../public/vecInactive3.svg";
import loan1 from "../../../public/loan1.svg";
import loan2 from "../../../public/loan2.svg";
import loan3 from "../../../public/loan3.svg";
import loan1Inactive from "../../../public/loanInactive1.svg";
import loan2Inactive from "../../../public/loanInactive2.svg";
import loan3Inactive from "../../../public/loanInactive3.svg";

import personal from "../../../public/personal.svg";
import { FaChevronRight } from "react-icons/fa";

export default function Personal() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => (prevStep % 3) + 1);
    }, 3000); // Adjust based on total animation cycle duration

    return () => clearInterval(interval); // Cleanup
  }, [step]);

  const elementRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (elementRef.current) {
      setHeight(elementRef.current.getBoundingClientRect().height);
    }
  }, []);

  //   const [isMobile, setIsMobile] = useState(false);

  //   const updateHeight = () => {
  //     if (elementRef.current) {
  //       setHeight(elementRef.current.getBoundingClientRect().height);
  //     }
  //   };

  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth <= 768); // Adjust threshold if needed
  //   };

  //   useEffect(() => {
  //     // Initial height calculation
  //     updateHeight();
  //     checkMobile();

  //     // Add event listener for window resize
  //     window.addEventListener("resize", () => {
  //       updateHeight();
  //       checkMobile();
  //     });

  // Cleanup the event listener on component unmount
  //     return () => {
  //       window.removeEventListener("resize", () => {
  //         updateHeight();
  //         checkMobile();
  //       });
  //     };
  //   }, []);

  console.log(height, "rect");

  return (
    <div className="bg-tertiary-default">
      <div className="max-w-[1200px]  mx-auto px-[20px]">
        <div className="flex  gap-0 lg:gap-24 py-10 lg:py-20 flex-col lg:flex-row">
          <div className="lg:w-[40%] w-[100%]">
            <Typography
              variant="p"
              text="Montra - Personal"
              className="mb-0 lg:pb-4 text-secondary-default font-semibold"
            />
            <Typography
              text="Secure way of accessing"
              variant="h2"
              className=" text-primary-blue font-normal lg"
              //   style={{ lineHeight: 1.5 }}
            />
            <Typography text=" world of Payments" variant="h2" className=" text-primary-blue font-bold " />
            <Typography
              text="Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners."
              variant="p"
              className="font-normal my-4 text-[#425466]"
            />
            <button className="text-[12px] flex items-center gap-2 justify-center bg-secondary-default text-white px-3 py-1 rounded-md">
              <span>Explore payments</span>{" "}
              <span>
                {" "}
                <FaChevronRight size={15} className="" />
              </span>
            </button>
            <div className="mt-10 mb-5">
              <Image src={personal} alt="personal" />
            </div>
            <Typography
              text="Simply scan the QR codes of our Merchants or Tap & Pay on our Merchant’s app with your Debit & Credit Cards or use your Debit & Credit cards on POS issued by Montra to our merchants."
              variant="p"
              className="text-[#425466]"
            />
          </div>
          <div className=" w-full lg:w-[60%] relative ml-auto mr-auto block md:h-[400px] h-[200px]">
            {step === 1 && (
              <div className="absolute z-[1000]">
                {" "}
                <Image src={vec1} alt="vec1" className="w-full h-full object-contain  " />
              </div>
            )}
            {step === 2 && (
              <div className="absolute z-[1000]">
                {" "}
                <Image src={vec3} alt="vec3" className="w-full h-full object-contain " />
              </div>
            )}
            {step === 3 && (
              <div className="absolute z-[1000]">
                {" "}
                <Image src={vec2} alt="vec2" className="w-full h-full object-contain  " />
              </div>
            )}

            {step !== 1 && (
              <div className="absolute ">
                {" "}
                <Image src={vec1Inactive} alt="vec1" className="w-full h-full object-contain" />
              </div>
            )}
            {step !== 2 && (
              <div className="absolute ">
                {" "}
                <Image src={vec2Inactive} alt="vec1" className="w-full h-full object-contain" />
              </div>
            )}
            {step !== 3 && (
              <div className="absolute ">
                {" "}
                <Image src={vec3Inactive} alt="vec1" className="w-full h-full object-contain" />
              </div>
            )}
          </div>
        </div>
        <div className="flex  gap-0 lg:gap-24 py-10 lg:py-20 flex-col lg:flex-row">
          <div className="w-full lg:w-[40%]">
            <Typography
              text="Compare loan offers from our lending partners & get instant disbursal to your bank account"
              variant="h2"
              className=" text-primary-blue font-bold"
            />
            <Typography
              text="Explore and compare diverse loan offers from our trusted Lending Partners, giving you a range of options tailored to your needs. Once you've found the right fit, enjoy the convenience of instant disbursement, ensuring funds are swiftly deposited into your bank account"
              variant="p"
              className="font-normal my-4 text-[#425466]"
            />
            <button className="text-[12px] flex items-center gap-2 justify-center bg-secondary-default text-white px-3 py-1 rounded-md">
              <span>Explore lending</span>{" "}
              <span>
                {" "}
                <FaChevronRight size={15} className="" />
              </span>
            </button>
            <div className="mt-10 mb-5">
              <Image src={personal} alt="personal" />
            </div>
            <Typography
              text="Simply scan the QR codes of our Merchants or Tap & Pay on our Merchant’s app with your Debit & Credit Cards or use your Debit & Credit cards on POS issued by Montra to our merchants."
              variant="p"
              className="text-[#425466]"
            />
          </div>
          <div className=" w-full lg:w-[60%] relative ml-auto mr-auto block lg:h-full h-[450px]">
            {/* {step === 1 && ( */}
            <div className="absolute top-0 left-0 right-0">
              <Image src={loan1} alt="loan1" className="w-full" />
            </div>
            {/* )} */}
            {/* {step === 2 && ( */}
            {/* <div> <Image src={loan2} alt="loan2" className="w-full h-auto object-contain " /></div> */}
            {/* )} */}
            {/* {step === 3 && ( */}{" "}
            {/* <div className="absolute  left-0 right-0" style={{ top: `calc(${height}px - 60px)` }}> */}
            <div
              ref={elementRef}
              className="absolute  left-0 right-0"
              style={{
                top: `calc(${height}px - 95px)`,
                // top: isMobile ? `calc(${height}px - 60px)` : `calc(${height}px - 95px)`,
                zIndex: 10,
              }}
            >
              {/* <div className="absolute  left-0 right-0" style={{ top: `calc(${height}px - 96px - 10px)` }}> */}
              {/* <div className="absolute top-[80px] sm:top-[90px] md:top-[160px] lg:top-[130px] xl:top-[146px] left-0 right-0"> */}
              <Image src={loan3} alt="loan3" className="w-full " />
            </div>
            {/* <Image src={loan3} alt="loan3" className="w-full h-full object-contain" /> */}{" "}
          </div>
          {/* )} */}
          {/* {step !== 1 && (
  <div className="absolute ">
    {" "}
    <Image src={loan1Inactive} alt="loan1Inactive" className="w-full h-full object-contain" />
  </div>
 )} */}
          {/* {step !== 2 && (
  <div className="absolute top-[95px] md:top-[160px] lg:top-[130px] xl:top-[146px]">
    {" "}
    <Image src={loan2Inactive} alt="loan2Inactive" className="w-full h-full object-contain" />
  </div>
)} */}
          {/* {step !== 3 && ( */}
          {/* <div className=" md:top-[160px] lg:top-[130px] xl:top-[146px]">
   {" "}
      <Image src={loan3Inactive} alt="loan3" className="w-full h-full object-contain" />
</div> */}
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

// {/* <div className="relative w-full h-full flex items-center justify-center">
// {/* <div className=" w-full lg:w-[60%] relative ml-auto mr-auto block lg:h-full h-[450px]"> */}
// {/* {step === 1 && ( */}
// <div className="relative w-full h-full flex items-center justify-center">
//   {/* <div className={``}> */}
//   <Image src={loan1} alt="loan1" className="w-full h-auto object-contain" />
//   {/* <Image src={loan1} alt="loan1" className="w-full h-full object-contain" /> */}
//   {/* )} */}
//   {/* {step === 2 && ( */}
//   <div> {/* <Image src={loan2} alt="loan2" className="w-full h-auto object-contain " /> */}</div>
//   {/* )} */}
//   {/* {step === 3 && ( */}
//   <div>
//     {/* <div className=" md:top-[160px] lg:top-[130px] xl:top-[146px]"> */}{" "}
//     <Image src={loan3} alt="loan3" className="w-full h-auto object-contain " />
//   </div>
//   {/* <Image src={loan3} alt="loan3" className="w-full h-full object-contain" /> */}
// </div>
// {/* )} */}

// {/* {step !== 1 && (
//   <div className="absolute ">
//     {" "}
//     <Image src={loan1Inactive} alt="loan1Inactive" className="w-full h-full object-contain" />
//   </div>
// )} */}

// {/* {step !== 2 && (
//   <div className="absolute top-[95px] md:top-[160px] lg:top-[130px] xl:top-[146px]">
//     {" "}
//     <Image src={loan2Inactive} alt="loan2Inactive" className="w-full h-full object-contain" />
//   </div>
// )} */}
// {/* {step !== 3 && ( */}
// {/* <div className=" md:top-[160px] lg:top-[130px] xl:top-[146px]">
//   {" "}
//   <Image src={loan3Inactive} alt="loan3" className="w-full h-full object-contain" />
// </div> */}
// {/* )} */}
// </div> */}
