import PrimaryNavLink from "@/components/PrimaryNavLink";
import Image from "next/image";
import React from "react";

import insta1 from "/public/assets/instagram9.jpg";
import insta2 from "/public/assets/instagram1.jpg";
import insta3 from "/public/assets/instagram2.jpg";
import insta4 from "/public/assets/instagram3.jpg";
import insta5 from "/public/assets/instagram4.jpg";
import insta6 from "/public/assets/instagram5.jpg";
import insta7 from "/public/assets/instagram7.jpg";
import carousel2 from "/public/assets/carousel2.jpg";
import carousel3 from "/public/assets/carousel3.jpg";

const instagramImagesPc = [insta1, insta2, insta3, insta4, insta5, insta6, insta7];
const instagramImagesMobile = [insta1, carousel2, carousel3];

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
            width={750}
            height={750} 
            priority={index === 0}
            placeholder="blur"
            className={`object-cover w-full max-sm:h-[300px] max-h-[378px] h-full ${index === 0 ? "sm:col-span-2 " : ""}`}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:hidden gap-3 max-w-[1400px] mx-auto px-7 mt-10">
        {instagramImagesMobile.map((img, index) => (
          <Image
            src={img}
            alt={`Instagram Image ${index}`}
            key={index}
            width={1000}
            height={1000}
            priority={index === 0}
            placeholder="blur"
            className={`object-cover w-full ${index === 0 ? "md:col-span-2 " : ""}`}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <PrimaryNavLink external href="" text="FOLLOW ON INSTAGRAM" />
      </div>
    </div>
  );
}
