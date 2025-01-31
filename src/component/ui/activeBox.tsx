import React from "react";
import Typography from "./typography";
import Image from "next/image";

interface ActiveBoxProps {
  text: string;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  image: string;
  className?: string;
}
interface InactiveBoxProps {
  image: string;
  className?: string;
}
export const ActiveBox = ({ text, variant, image, className }: ActiveBoxProps) => {
  return (
    <div
      className={`${className} bg-white text-primary rounded-md bg-#fff  w-24 h-24  px-1 flex justify-center gap-1 items-center flex-col text-center shadow-lg`}
    >
      <div>
        {" "}
        <Image src={image} alt="image" />
      </div>
      <Typography text={text} variant={variant} className="font-semibold !text-[10px] !leading-none" />
    </div>
  );
};

export const InactiveBox = ({ image, className }: InactiveBoxProps) => {
  return (
    <div
      className={`${className} border text-[#C8D0DB] rounded-md bg-#fff w-24 h-24  px-10 flex justify-center gap-1 items-center flex-col text-center `}
    >
      <Image src={image} alt="image" />
    </div>
  );
};
