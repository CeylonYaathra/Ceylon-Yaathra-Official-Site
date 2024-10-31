'use client'
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import WhyBookFacts from "./WhyBookFacts";
import Bookwithus from "/public/assets/Bookwithus.jpg";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95, rotate: -5 }, 
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring", 
      stiffness: 300, 
      damping: 20,
      delay: 0.1, 
    },
  },
};
const facts = [
  "Tailor Made Tours",
  "Over 54 years of Industry Experience",
  "South Asia’s First Carbon Neutral Fleet",
  "Public Liability Insurance of 3 Million",
  "Book your Transfers & Excursions Online",
  "Value for Money",
];
export default function WhyBookSection() {
  return (
    <Container className="py-10 px-5 md:gap-10" parentClassName="bg-cusBlue">
      <Image
        alt="moments"
        src={Bookwithus}
        width={2000}
        height={2000}
        placeholder="blur"
        className="mb-5 object-cover h-[715px] max-md:h-[346px]  mx-auto"
        style={{ borderRadius: "0 10px 0 10px" }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: false ,amount:0.5}} className="flex flex-col justify-center mr-3 max-md:order-last  ">
        <h1 className="text-5xl font-semibold my-1 max-md:text-[38px] text-white text-center">
          Why Book With Us?
        </h1>
        <div className="mt-5">
          {facts.map((fact,index) => (
            <WhyBookFacts text={fact} key={index}/>
          ))}
        </div>
        </motion.div>

    </Container>
  );
}
