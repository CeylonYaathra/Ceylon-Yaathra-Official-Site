"use client";
import Container from "@/components/Container";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import moments1 from "/public/assets/moments1.jpg";
import moments2 from "/public/assets/moments2.jpg";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.5, 0, 0.5, 1],
      delay: 0.1,
    },
  },
};

const Images = [moments1, moments2];

export default function MomentsSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container
      parentClassName="bg-white"
      className="px-5 overflow-hidden my-10"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-col justify-center mr-3 max-md:order-last "
      >
        <h5 className="text-sm font-semibold text-slate-500">
          Sri Lanka Journeys with Walkers Tours
        </h5>
        <h1 className="text-5xl font-semibold my-1 max-md:text-[38px]">
          Walkers Tours
        </h1>
        <h4 className="text-base max-md:text-[15px]">
          Discover the beauty of Sri Lanka through real moments captured by our
          travelers! For over 54 years, Walkers Tours has crafted unforgettable
          experiences for couples, adventurers, and nature lovers. Explore
          iconic landmarks, vibrant culture, and breathtaking landscapes that
          make Sri Lanka unforgettable.
        </h4>
      </motion.div>
      <div className="mb-5 relative h-[715px] max-md:h-[346px]">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <Image
              alt="moments"
              src={Images[currentImageIndex]}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              style={{ borderRadius: "10px 0 10px 0" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </Container>
  );
}
