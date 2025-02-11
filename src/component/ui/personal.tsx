import Typography from "@/component/ui/typography";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import vec1 from "../../../public/customer vec1.svg";
import vec3 from "../../../public/customer vec2.svg";
import vec2 from "../../../public/customer vec3.svg";
import vec1Inactive from "../../../public/vec1Inactive.svg";
import vec2Inactive from "../../../public/vecInactive2.svg";
import vec3Inactive from "../../../public/vecInactive3.svg";
import loan1 from "../../../public/loan1.svg";
import loan2 from "../../../public/loan2.svg";
import loan3 from "../../../public/loan3.svg";

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
            {/* {step === 1 && ( */}
            <div className="absolute">
              {" "}
              <Image src={vec1} alt="vec1" className="w-full h-full object-contain" />
            </div>
            {/* )} */}
            {/* {step === 2 && ( */}
            <div className="absolute">
              {" "}
              <Image src={vec3} alt="vec3" className="w-full h-full object-contain" />
            </div>
            {/* )} */}
            {/* {step === 3 && ( */}
            <div className="absolute">
              {" "}
              <Image src={vec2} alt="vec2" className="w-full h-full object-contain" />
            </div>
            {/* )} */}

            <div className="absolute">
              {" "}
              <Image src={vec1Inactive} alt="vec1" className="w-full h-full object-contain" />
            </div>

            <div className="absolute">
              {" "}
              <Image src={vec2Inactive} alt="vec1" className="w-full h-full object-contain" />
            </div>
            <div className="absolute">
              {" "}
              <Image src={vec3Inactive} alt="vec1" className="w-full h-full object-contain" />
            </div>
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

          <div className=" w-full lg:w-[60%] relative ml-auto mr-auto block lg:h-full h-[250px]">
            {/* {step === 1 && ( */}
              <div className="absolute">
                {" "}
                <Image src={loan1} alt="loan1"className="w-full h-full object-contain"  />
              </div>
            {/* )} */}
            {/* {step === 2 && ( */}
              <div className="absolute">
                {" "}
                <Image src={loan2} alt="loan2" className="w-full h-full object-contain" />
              </div>
            {/* )} */}
            {/* {step === 3 && ( */}
              <div className="absolute">
                {" "}
                <Image src={loan3} alt="loan3" className="w-full h-full object-contain" />
              </div>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
