import Typography from "@/component/ui/typography";
import Image from "next/image";
import React, { useState } from "react";
import google from "../../../public/google (2).svg";
import logo from "../../../public/MONTRA LOGO.svg";
import apple from "../../../public/apple.svg";
import Iphone15 from "../../../public/iphone15.svg";
import { Icon } from "@iconify/react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className=" absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-primary">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-primary">
                Solution
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-primary">
                Platform
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-primary">
                Nigeria
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-primary">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-primary">
                Resource
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-primary">
                Help
              </a>
            </li>
          </ul>
        </div>
      )}

      <div className="max-w-[1200px]  mx-auto  px-[20px]">
        <nav className="hidden lg:flex items-center justify-between text-primary-blue ">
          <div className="flex items-center gap-5 justify-between ">
            <Image src={logo} alt="Logo" className="w-full" />
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
        <div className="flex lg:hidden  items-center justify-between py-3 relative">
          <Image src={logo} alt="Logo" className="w-[30%]" />
          <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <Icon icon="stash:burger-classic" className="size-8 text-primary " />
          </div>
        </div>
        <section>
          <div className="block lg:flex justify-between py-10 lg:py-20">
            <div className=" w-full lg:w-2/4">
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
                className=" text-primary-blue font-bold"
                style={{ lineHeight: 1.2 }}
              />
              <Typography
                text="Simply download Montra app to set-up your Montra Personal Account to access Marketplaces for multiparty payments & Lending Products"
                variant="p"
                className="w-full lg:w-[75%] text-primary-blue font-normal myt-2 mb-6  lg:my-7"
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

                <Image src={apple} alt="apple" className=" w-[30%]" />
                <Image src={google} alt="playstore" className=" w-[30%]" />
              </div>
            </div>

            <div className="w-2/4 grid place-content-center">
              <Image src={Iphone15} alt="Picture of the author" className="   hidden lg:block" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
