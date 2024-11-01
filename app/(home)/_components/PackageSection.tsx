import PrimaryNavLink from "@/components/PrimaryNavLink";
import React from "react";

export default function PackageSection() {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/packages.png')",
        backgroundSize: "cover",
        backgroundPosition: "center", 
        height: "327px",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
        <div className="text-center flex flex-col justify-center items-center h-full mx-5">
            <h1 className=" font-semibold my-1 text-[38px] text-white leading-none">LET’S MAKE YOUR DREAM TOUR</h1>
            <h3 className="text-white">Customised tours and excursions around Sri Lanka just for you</h3>
            <PrimaryNavLink href="" text="VIEW PACKAGES"/>
        </div>
    </div>
  );
}
