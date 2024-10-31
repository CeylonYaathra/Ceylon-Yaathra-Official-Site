"use client";
import Container from "@/components/Container";
import PrimaryNavLink from "@/components/PrimaryNavLink";
import React, { useRef } from "react";
import ReviewCard from "./ReviewCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 20 }, // Start fully transparent and slightly below the final position
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6, // Duration for the fade-in effect
      ease: [0.5, 0, 0.5, 1], // Custom easing for a smooth transition
      delay: 0.1, // Slight delay before the animation starts
    },
  },
};
export default function ReviewSection() {
  const reviewContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (reviewContainerRef.current) {
      reviewContainerRef.current.scrollBy({
        top: 0,
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (reviewContainerRef.current) {
      reviewContainerRef.current.scrollBy({
        top: 0,
        left: 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container className="my-20 md:px-5 px-3">
      <div className="flex flex-col justify-center max-md:items-center md:ml-12">
        <h1 className="text-5xl font-semibold my-1 max-md:text-[38px] max-md:text-center text-left">
          What Our Travelers Are Saying
        </h1>
        <div className="max-md:hidden">
          <PrimaryNavLink href="" text="VIEW MORE" />
        </div>
      </div>
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: false, amount: 0.5 }}
          ref={reviewContainerRef}
          className="flex gap-5 overflow-auto no-scrollbar md:p-7 py-7 px-4 "
        >
          <ReviewCard
            name="Samantha Payne"
            rating={4}
            review="We took a 'Highlights of Sri Lanka' tour with Walkers (booked through Virgin Holidays)."
            date="23 Nov 2021"
          />
          <ReviewCard
            name="Samantha Payne"
            rating={4}
            review="We took a 'Highlights of Sri Lanka' tour with Walkers (booked through Virgin Holidays)."
            date="23 Nov 2021"
          />
          <ReviewCard
            name="Samantha Payne"
            rating={4}
            review="We took a 'Highlights of Sri Lanka' tour with Walkers (booked through Virgin Holidays)."
            date="23 Nov 2021"
          />
        </motion.div>
        <div className="flex gap-2 md:ml-7 max-md:justify-center">
          <div
            className="p-3 border border-slate-500 cursor-pointer"
            onClick={scrollLeft}
          >
            <ArrowBackIcon />
          </div>
          <div
            className="p-3 border border-slate-500 cursor-pointer"
            onClick={scrollRight}
          >
            <ArrowForwardIcon />
          </div>
        </div>
        <div className="md:hidden flex justify-center">
          <PrimaryNavLink href="" text="VIEW MORE" />
        </div>
      </div>
    </Container>
  );
}
