import Typography from "@/components/ui/typography";
import Image from "next/image";
import Iphone15 from "../../public/Group 60750.png";
import google from "../../public/Mobile app store badge.png";
import logo from "../../public/MONTRA LOGO.png";
import apple from "../../public/apple.png";
import personal from "../../public/personal.png";

import { FaApple, FaChevronRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-[#fff] w-[100%] ">
      <div className="max-w-[1200px]  mx-auto">
        <nav className="flex items-center justify-between text-primary-blue ">
          <div className="flex items-center gap-5 justify-between ">
            <Image src={logo} alt="Logo" />
            <Typography text="Products" variant="p" className="hover:text-secondary-default font-semibold" />
            <Typography text="Solution" variant="p" className="hover:text-secondary-default font-semibold" />
            <Typography text="Platform" variant="p" className="hover:text-secondary-default font-semibold" />
          </div>
          <div className="flex items-center gap-5 justify-between">
            {" "}
            <Typography text="Nigeria" variant="p" className="hover:text-secondary-default font-semibold" />
            <Typography text="Company" variant="p" className="hover:text-secondary-default font-semibold" />
            <Typography text="Resources" variant="p" className="hover:text-secondary-default font-semibold" />
            <Typography text="Help" variant="p" className="hover:text-secondary-default font-semibold" />
          </div>
        </nav>
        <section>
          <div className="flex justify-between py-32">
            <div className="w-2/4">
              <Typography
                text="Single app to manage all your Personal & Business finances"
                variant="h1"
                className=" text-primary-blue font-bold leading-[80px]"
              />
              <Typography
                text="Simply download Montra app to set-up your Montra Personal Account to access Marketplaces for multiparty payments & Lending Products"
                variant="p"
                className="w-[75%] text-primary-blue font-normal my-7"
              />
              <div className="flex gap-5">
                {/* <button className="border-[#000] border  rounded-lg  px-3">
                  <div className="flex items-center gap-1">
                    <FaApple size={25} className="text-black" />

                    <div>
                      <p className="text-[10px] font-semibold text-black leading-none text-left">Download on</p>
                      <p className="text-[18px]  font-bold text-black leading-none">App Store</p>
                    </div>
                  </div>
                </button> */}

                <Image src={apple} alt="apple" />
                <Image src={google} alt="playstore" />
              </div>
            </div>

            <div className="w-2/4 grid place-content-center">
              <Image src={Iphone15} alt="Picture of the author" />
            </div>
          </div>
        </section>
      </div>

      {/* //second section */}
      <div className="bg-tertiary-default">
        <div className="max-w-[1200px]  mx-auto ">
          <div className="flex justify-between py-32">
            <div className="w-[35%]">
              <Typography variant="p" text="Montra - Personal" className="pb-4 text-secondary-default font-semibold" />

              <Typography
                text="Secure way of accessing world of Payments"
                variant="h2"
                className=" text-primary-blue font-bold leading-[80px]"
              />
              <Typography
                text="Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners."
                variant="p"
                className="font-normal my-4 text-[#425466]"
              />
              <button className="flex items-center gap-2 justify-center bg-secondary-default text-white px-3 py-1 rounded-md">
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

            <div className=" grid place-content-center">
              <Image src={Iphone15} alt="Picture of the author" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
