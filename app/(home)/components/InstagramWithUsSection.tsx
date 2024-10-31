import PrimaryNavLink from "@/components/PrimaryNavLink";
import Image from "next/image";
import React from "react";

const instagramImagesPc = [
  "/assets/insta1.png",
  "/assets/insta2.png",
  "/assets/insta3.png",
  "/assets/insta4.png",
  "/assets/insta5.png",
  "/assets/insta6.png",
  "/assets/insta7.png",
];
const instagramImagesMobile = [
  "/assets/insta1.png",
  "/assets/carousel2.jpg",
  "/assets/carousel3.jpg",
];
export default function InstagramWithUsSection() {
  return (
    <div className="bg-cusBlue py-7 ">
      <div className="mx-5">
        <h1 className="text-white text-5xl font-medium my-1 max-md:text-[38px] text-center">
          Instagram with us
        </h1>
        <h3 className="text-white/80 text-center">
          Share your travel moments with us! Tag us in your photos for a chance
          to be featured and inspire fellow explorers.
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 max-sm:hidden gap-3 max-w-[1400px] mx-auto md:px-20 px-10 my-10">
        {instagramImagesPc.map((img, index) => (
          <Image
          src={img}
          alt={`Instagram Image ${index}`}
          key={index}
          width={500}
          height={500} 
          priority={index === 0}
          className={`object-cover w-full max-sm:h-[300px] ${index === 0 ? "sm:col-span-2 " : ""}`}
        />
        
        ))}
      </div>
      <div className="grid grid-cols-1  sm:hidden gap-3 max-w-[1400px] mx-auto px-7 mt-10">
        {instagramImagesMobile.map((img, index) => (
          <Image
          src={img}
          alt={`Instagram Image ${index}`}
          key={index}
          width={500}
          height={500} 
          priority={index === 0}
          className={`object-cover w-full  ${index === 0 ? "md:col-span-2 " : ""}`}
        />
        
        ))}
      </div>
      <div className="flex justify-center">
      <PrimaryNavLink external href="" text="FOLLOW ON INSTERGRAM"/>

      </div>
    </div>
  );
}
