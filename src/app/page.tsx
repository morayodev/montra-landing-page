import BusinessSection from "@/component/ui/business";
import Hero from "@/component/ui/hero";
import NavBar from "@/component/ui/navbar";

export default function Home() {
  return (
    <div className="bg-[#fff] w-[100%] ">
      <NavBar />

      {/* //second section */}
      <Hero />

      <BusinessSection />
    </div>
  );
}
