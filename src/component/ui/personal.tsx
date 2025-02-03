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
  const [step, setStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => (prevStep % 3) + 1);
    }, 3000); // Adjust based on total animation cycle duration

    return () => clearInterval(interval); // Cleanup
  }, [step]);

  return (
    <div className="bg-tertiary-default">
      <div className="max-w-[1200px]  mx-auto ">
        <div className="flex   gap-24 py-20">
          <div className="w-[40%]">
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
          <div className="mt-[70px] w-[60%]">
            <div className="relative ">
              {step === 1 && <Image src={vec1} alt="vec1" className="absolute  right-[80px]" />}
              {step === 2 && <Image src={vec2} alt="vec3" className="absolute  right-[90px]" />}
              {step === 3 && <Image src={vec3} alt="vec3" className="absolute  right-[90px]" />}

              {step === 1 && (
                <div className="flex gap-[48px] absolute">
                  <div className="mt-[150px]">
                    <ActiveBox text="Montra Customer" variant="p" image={customer} />
                  </div>
                  <div className="mt-[30px]">
                    <ActiveBox text="Mobile or Contact " variant="p" image={customer} />
                  </div>
                  <div className="mt-[-50px]">
                    <ActiveBox text="Montra Account " variant="p" image={customer} />
                  </div>
                  <div className="mt-[140px] ">
                    <ActiveBox text="Payment Authorization" variant="p" image={customer} />
                  </div>
                  <div className="mt-[30px] ">
                    <ActiveBox text="Montra Customers" variant="p" image={customer} />
                  </div>
                </div>
              )}

              {(step === 2 || step === 3) && (
                <div className="flex gap-[48px] absolute">
                  <div className="mt-[150px]">
                    <InactiveBox image={customer} />
                  </div>
                  <div className="mt-[30px]">
                    <InactiveBox image={customer} />
                  </div>
                  <div className="mt-[-50px]">
                    <InactiveBox image={customer} />
                  </div>
                  <div className="mt-[140px] ">
                    <InactiveBox image={customer} />
                  </div>
                  <div className="mt-[30px] ">
                    <InactiveBox image={customer} />
                  </div>
                </div>
              )}
              {step === 2 && (
                <>
                  <div className="flex gap-[48px] absolute">
                    <div className="mt-[150px]">
                      <ActiveBox text="Montra Customer" variant="p" image={customer} />
                    </div>
                    <div className="mt-[150px]">
                      <ActiveBox text="Scan & Pay " variant="p" image={customer} />
                    </div>
                    <div>
                      <div className="mt-[-50px]">
                        <ActiveBox text="Montra Account " variant="p" image={customer} />
                      </div>
                      <div className="mt-[20px]">
                        <ActiveBox text="Installment " variant="p" image={customer} />
                      </div>

                      <div className="mt-[20px]">
                        <ActiveBox text="Link Card" variant="p" image={customer} />
                      </div>
                      <div className="mt-[20px]">
                        <ActiveBox text="Linked Banks" variant="p" image={customer} />
                      </div>
                    </div>

                    <div className="mt-[140px] ">
                      <ActiveBox text="Payment Authorization" variant="p" image={customer} />
                    </div>
                    <div className="mt-[140px]">
                      <ActiveBox text="Montra Agents" variant="p" image={customer} />
                    </div>
                  </div>
                </>
              )}
              {(step === 1 || step === 3) && (
                <>
                  <div className="flex gap-[48px] absolute">
                    <div className="mt-[150px]">
                      <InactiveBox image={customer} />
                    </div>
                    <div className="mt-[150px]">
                      <InactiveBox image={customer} />
                    </div>
                    <div>
                      <div className="mt-[-50px]">
                        <InactiveBox image={customer} />
                      </div>
                      <div className="mt-[20px]">
                        <InactiveBox image={customer} />
                      </div>

                      <div className="mt-[20px]">
                        <InactiveBox image={customer} />
                      </div>
                      <div className="mt-[20px]">
                        <InactiveBox image={customer} />
                      </div>
                    </div>

                    <div className="mt-[140px] ">
                      <InactiveBox image={customer} />
                    </div>
                    <div className="mt-[140px]">
                      <InactiveBox image={customer} />
                    </div>
                  </div>
                </>
              )}

              {/* //third */}
              {step === 3 && (
                <div className="flex gap-[48px] absolute">
                  <div className="mt-[150px]">
                    <ActiveBox text="Montra Customer" variant="p" image={customer} />
                  </div>
                  <div className="mt-[270px]">
                    <ActiveBox text="Bank Transfer " variant="p" image={customer} />
                  </div>
                  <div>
                    <div className="mt-[-50px]">
                      <ActiveBox text="Montra Account " variant="p" image={customer} />
                    </div>

                    <div className="mt-[250px]">
                      <ActiveBox text="Linked Banks" variant="p" image={customer} />
                    </div>
                  </div>

                  <div className="mt-[140px] ">
                    <ActiveBox text="Payment Authorization" variant="p" image={customer} />
                  </div>
                  <div className="mt-[270px] ">
                    <ActiveBox text="others Bank" variant="p" image={customer} />
                  </div>
                </div>
              )}

              {(step === 1 || step === 2) && (
                <div className="flex gap-[48px] absolute">
                  <div className="mt-[150px]">
                    <InactiveBox image={customer} />
                  </div>
                  <div className="mt-[270px]">
                    <InactiveBox image={customer} />
                  </div>
                  <div>
                    <div className="mt-[-50px]">
                      <InactiveBox image={customer} />
                    </div>

                    <div className="mt-[20px]">
                      <InactiveBox image={customer} />
                    </div>
                  </div>

                  <div className="mt-[140px] ">
                    <InactiveBox image={customer} />
                  </div>
                  <div className="mt-[270px] ">
                    <InactiveBox image={customer} />
                  </div>
                </div>
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
