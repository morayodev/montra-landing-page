import Typography from "@/component/ui/typography";
import Image from "next/image";
import React from "react";
import google from "../../../public/google (2).svg";
import logo from "../../../public/MONTRA LOGO.svg";
import apple from "../../../public/apple.svg";
import Iphone15 from "../../../public/iphone15.svg";

export default function NavBar() {
  return (
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
        <div className="flex justify-between py-20">
          <div className="w-2/4">
            {/* <Typography
              text="Single app to manage all your "
              variant="h1"
              className=" text-primary-blue" style={{lineHeight:1.2}}
            />
            <Typography
              text=" Personal & Business"
              variant="h1"
              className=" text-primary-blue font-bold" style={{lineHeight:1.2}}
            /> */}
            <Typography
              text="Single app to manage all your Personal & Business finances"
              variant="h1"
              className=" text-primary-blue font-bold" style={{lineHeight:1.2}}
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
  );
}
