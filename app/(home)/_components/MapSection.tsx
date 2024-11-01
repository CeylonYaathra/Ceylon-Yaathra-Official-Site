"use client";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import mapImage from "/public/assets/map.png";
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
export default function MapSection() {
  return (
    <Container
      parentClassName="bg-white"
      className="px-5 overflow-hidden my-10 max-md:grid-cols-2 max-sm:grid-cols-1"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: false ,amount:0.5}}
        className="flex flex-col justify-center mr-3 max-sm:order-last "
      >
        <h5 className="text-sm font-semibold text-slate-500">SRI LANKA </h5>
        <h1 className="text-5xl font-semibold my-1 max-md:text-[38px]">
          Famous Places in Sri&nbsp;Lanka
        </h1>
        <h4 className="text-base max-md:text-[15px]">
          Discover Sri Lanka's iconic landmarks and hidden gems! From ancient
          temples and stunning beaches to lush tea plantations and vibrant
          cities, explore the top destinations that make Sri Lanka
          unforgettable. Dive into the history, culture, and natural beauty of
          each place as you plan your next adventure. can u combine these and
          give me one
        </h4>
      </motion.div>
      <div className="mb-5 relative h-[715px] max-md:h-[346px]">
        <Image
          alt="map"
          src={mapImage}
          layout="fill"
          objectFit="contain"
          placeholder="blur"
        />
      </div>
    </Container>
  );
}
