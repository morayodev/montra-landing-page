import Typography from "@/component/ui/typography";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Iphone15 from "../../../public/iphone15.svg";
import customer from "../../../public/customer.svg";
import vec1 from "../../../public/customer vec1.svg";
import vec3 from "../../../public/customer vec2.svg";
import vec2 from "../../../public/customer vec3.svg";

import personal from "../../../public/personal.svg";
import { FaChevronRight } from "react-icons/fa";
import { ActiveBox, InactiveBox } from "./activeBox";

export default function Personal() {
  const images = [vec1, vec2, vec3];

  const [isAnimatingVec1, setIsAnimatingVec1] = useState(true);
  const [isAnimatingVec2, setIsAnimatingVec2] = useState(true);
  const [isAnimatingVec3, setIsAnimatingVec3] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimatingVec1(false);
    }, 2500); // Adjust based on your SVG animation duration

    return () => clearTimeout(timer); // Cleanup
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimatingVec2(false);
    }, 4500); // Adjust based on your SVG animation duration

    return () => clearTimeout(timer); // Cleanup
  }, []);

  useEffect(() => {
    const recycle = setInterval(() => {
      setIsActiveIndex((prevState) => (prevState + 1) % images.length);
    }, 2000); // Adjust based on your SVG animation duration

    return () => clearTimeout(recycle); // Cleanup
  }, [images.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimatingVec3(false);
    }, 7500); // Adjust based on your SVG animation duration

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div className="bg-tertiary-default">
      <div className="max-w-[1200px]  mx-auto ">
        <div className="flex   gap-40 py-20">
          <div className="w-[35%]">
            <Typography variant="p" text="Montra - Personal" className="pb-4 text-secondary-default font-semibold" />

            <Typography
              text="Secure way of accessing"
              variant="h2"
              className=" text-primary-blue font-normal "
              style={{ lineHeight: 1.5 }}
            />
            <Typography
              text=" world of Payments"
              variant="h2"
              className=" text-primary-blue font-bold leading-[80px]"
            />
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
          <div>
            <div className="relative ">
              <Image src={vec1} alt="vec1" />
              <Image src={vec2} alt="vec3" className="absolute top-[0px] left-10" />
              <Image src={vec3} alt="vec3" className="absolute top-[-4px] " />

              {isAnimatingVec1 ? (
                <>
                  <div className="absolute  top-[120px] left-[-45px] mt-[20px]">
                    <ActiveBox text="Montra Customer" variant="p" image={customer} />
                  </div>
                  <div className="absolute  top-[28px] left-[80px]">
                    <ActiveBox text="Mobile or Contact " variant="p" image={customer} />
                  </div>
                  <div className="absolute top-[-60px] left-[250px]">
                    <ActiveBox text="Montra Account " variant="p" image={customer} />
                  </div>
                  <div className="absolute bottom-[-35px] right-[60px]">
                    <ActiveBox text="Payment Authorization" variant="p" image={customer} />
                  </div>
                  <div className="absolute top-[25px] right-[-80px]">
                    <ActiveBox text="Montra Customers" variant="p" image={customer} />
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute  top-[120px] left-[-45px] mt-[20px]">
                    <InactiveBox image={customer} />
                  </div>
                  <div className="absolute  top-[28px] left-[80px]">
                    <InactiveBox image={customer} />
                  </div>
                  <div className="absolute top-[-60px] left-[250px]">
                    <InactiveBox image={customer} />
                  </div>
                  <div className="absolute bottom-[-35px] right-[60px]">
                    <InactiveBox image={customer} />
                  </div>
                  <div className="absolute top-[25px] right-[-80px]">
                    <InactiveBox image={customer} />
                  </div>
                </>
              )}
              {isAnimatingVec2 ? (
                <div className="flex gap-[48px]">
                  {/* <div className="flex gap-[48px]"> */}
                  <div className="absolute  top-[120px] left-[-45px] mt-[20px]">
                    <ActiveBox text="Montra Customer" variant="p" image={customer} />
                  </div>
                  <div className="absolute  top-[130px] left-[80px] mt-[10px]">
                    <ActiveBox text="Scan & Pay " variant="p" image={customer} />
                  </div>
                  <div className="absolute top-[-60px] left-[250px]">
                    <ActiveBox
                      text="Montra Account "
                      variant="p"
                      image={customer}
                      // className="absolute top-[-40px] left-[250px]"
                    />
                  </div>
                  <div className="absolute top-[70px] left-[250px]">
                    {/* <div className=""> */}
                    <ActiveBox text="Installment" variant="p" image={customer} />
                  </div>
                  <div className="absolute top-[200px] left-[250px]">
                    <ActiveBox
                      text="Link Card"
                      variant="p"
                      image={customer}
                      // className="absolute top-[3rem] right-[-20px]"
                    />
                  </div>
                  <div className="absolute top-[320px] left-[250px]">
                    <ActiveBox
                      text="Linked Banks"
                      variant="p"
                      image={customer}
                      // className="absolute top-[3rem] right-[-20px]"
                    />
                  </div>

                  <div className="absolute bottom-[-35px] right-[-80px]">
                    {/* <div className=""> */}
                    <ActiveBox
                      text="Money Merchants"
                      variant="p"
                      image={customer}
                      // className="absolute top-[10rem] right-[2.5rem]"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div className="absolute  top-[120px] left-[-45px] mt-[20px]">
                    <InactiveBox image={customer} />
                  </div>
                  <div className="absolute  top-[130px] left-[80px] mt-[10px]">
                    <InactiveBox image={customer} />
                  </div>
                  <div className="absolute top-[-60px] left-[250px]">
                    <InactiveBox image={customer} />
                  </div>
                  <div className="absolute top-[70px] left-[250px]">
                    {/* <div className=""> */}
                    <InactiveBox image={customer} />
                  </div>
                  <div className="absolute top-[200px] left-[250px]">
                    <InactiveBox image={customer} />
                  </div>
                  <div className="absolute top-[320px] left-[250px]">
                    <InactiveBox image={customer} />
                  </div>

                  <div className="absolute bottom-[-35px] right-[-80px]">
                    {/* <div className=""> */}
                    <InactiveBox image={customer} />
                  </div>
                </>
              )}
              {isAnimatingVec3 ? (
                <div className="flex gap-[48px]">
                  {/* <div className="flex gap-[48px]"> */}
                  <div className="absolute  top-[120px] left-[-45px] mt-[20px]">
                    <ActiveBox text="Montra Customer" variant="p" image={customer} />
                  </div>
                  <div className="absolute top-[250px] left-[80px] ">
                    <ActiveBox
                      text="Bank Transfer "
                      variant="p"
                      image={customer}
                      // className="absolute top-8 left-[100px]"
                    />
                  </div>
                  <div className="absolute top-[320px] left-[250px]">
                    <ActiveBox
                      text="Linked Banks"
                      variant="p"
                      image={customer}
                      // className="absolute top-[3rem] right-[-20px]"
                    />
                  </div>
                  <div className="absolute top-[-60px] left-[250px]">
                    <ActiveBox
                      text="Montra Account "
                      variant="p"
                      image={customer}
                      // className="absolute top-[-40px] left-[250px]"
                    />
                  </div>
                  <div className="absolute bottom-[-35px] right-[60px]">
                    {/* <div className=""> */}
                    <ActiveBox
                      text="Payment Authorization"
                      variant="p"
                      image={customer}
                      // className="absolute top-[10rem] right-[2.5rem]"
                    />
                  </div>
                  <div className="absolute top-[25px] right-[-80px]">
                    <ActiveBox
                      text="Montra Customers"
                      variant="p"
                      image={customer}
                      // className="absolute top-[3rem] right-[-20px]"
                    />
                  </div>
                  <div className="absolute top-[250px] right-[-80px]">
                    <ActiveBox text="Other Customers" variant="p" image={customer} />
                  </div>
                </div>
              ) : (
                <>
                  <div className="absolute  top-[120px] left-[-45px] mt-[20px]">
                    <InactiveBox image={customer} />
                  </div>
                  <div className="absolute top-[250px] left-[80px] ">
                    <InactiveBox image={customer} />
                  </div>
                  <div className="absolute top-[320px] left-[250px]">
                    <InactiveBox image={customer} />
                  </div>
                  <div className="absolute top-[-60px] left-[250px]">
                    <InactiveBox image={customer} />
                  </div>
                  <div className="absolute bottom-[-35px] right-[60px]">
                    {/* <div className=""> */}
                    <InactiveBox image={customer} />
                  </div>
                  <div className="absolute top-[25px] right-[-80px]">
                    <InactiveBox image={customer} />
                  </div>
                  <div className="absolute top-[250px] right-[-80px]">
                    <InactiveBox image={customer} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between py-20">
          <div className="w-[35%]">
            <Typography
              text="Compare loan offers from our lending partners & get instant disbursal to your bank account"
              variant="h2"
              className=" text-primary-blue font-bold leading-[80px]"
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

          <div className=" grid place-content-center">
            <Image src={Iphone15} alt="Picture of the author" />
          </div>
        </div>
      </div>
    </div>
  );
}
