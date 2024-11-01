"use client";
import HeroCarousel from "@/components/HeroCarousel";
import React from "react";
import { motion } from "framer-motion";
import PackageSection from "../_components/PackageSection";
import ReviewSection from "../_components/ReviewSection";

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
const aboutDetails = [
  { title: "", subtitle: "" },
  { title: "", subtitle: "" },
  { title: "", subtitle: "" },
  { title: "", subtitle: "" },
];
export default function AboutUsPage() {
  return (
    <main>
      <HeroCarousel
        className="text-center"
        title={<>ABOUT US</>}
        titleMini={<>THIS IS OUR STORY</>}
        subTitle={
          <>Feel free to contact us and turn your dream tour into reality!</>
        }
      ></HeroCarousel>
      <section className="text-center">
        <h1 className="text-5xl font-semibold my-1 max-md:text-[38px] mt-20">
          Walkers Tours
        </h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: false, amount: 0.5 }}
          className="max-w-[796px] mx-auto mb-10 px-5"
        >
          <p>
            For over 54 years, Walkers Tours has been the gateway to the wonders
            of Sri Lanka, creating journeys that celebrate the island’s
            unmatched beauty and vibrant culture. Our expertly crafted tours
            cater to every type of traveler, whether you're a couple seeking
            romance, an adventurer ready to explore, or a nature lover drawn to
            lush landscapes and pristine beaches. Each journey is a chance to
            experience authentic Sri Lanka, from iconic landmarks and rich
            heritage sites to warm encounters with local communities. Discover
            the essence of Sri Lanka through the lens of our travelers’ real
            moments and make memories to last a lifetime with Walkers Tours.
            Join us, and step into a world where adventure, beauty, and
            unforgettable experiences await around every corner.
          </p>
        </motion.div>
        <div className="h-[2px] bg-slate-500" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: false, amount: 0.5 }} className="flex flex-wrap max-w-[1400px] mx-auto px-5 justify-center gap-10 py-10">
          {aboutDetails.map((dt, index) => (
            <AboutDetials key={index} />
          ))}
        </motion.div>
        <div className="h-[2px] bg-slate-500 mb-5" />
        <PackageSection />
        <ReviewSection />
      </section>
    </main>
  );
}
function AboutDetials() {
  return (
    <div>
      <h1 className="text-[60px] font-semibold leading-none">15+</h1>
      <span>Years of Experience</span>
    </div>
  );
}
