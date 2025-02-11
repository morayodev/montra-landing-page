"use client";
import BusinessSection from "@/component/ui/business";
import NavBar from "@/component/ui/navbar";
import Personal from "@/component/ui/personal";
import Platform from "@/component/ui/platform";

export default function Home() {
  return (
    <div className="bg-[#fff] w-[100%]">
      <NavBar />

      {/* //second section */}
      <Personal />

      <BusinessSection />
      <Platform />
    </div>
  );
}
