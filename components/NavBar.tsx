"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TextAlignLeftIcon } from "@radix-ui/react-icons";
import HomeIcon from "@mui/icons-material/Home";
import GridViewIcon from "@mui/icons-material/GridView";
import DomainIcon from "@mui/icons-material/Domain";
import CallIcon from "@mui/icons-material/Call";
import MapIcon from '@mui/icons-material/Map';
import { motion } from "framer-motion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const LINKS = [
  { name: "Home", route: "/", Icon: HomeIcon },
  { name: "About us", route: "/about-us", Icon: GridViewIcon },
  { name: "Sri Lanka tours", route: "/packages", Icon: DomainIcon },
  { name: "Places", route: "/places", Icon: MapIcon },
  { name: "Contact us", route: "/contact-us", Icon: CallIcon },
];
export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex justify-between px-8 md:py-5 py-2 lg:pr-24 fixed w-full z-50 top-0 transition-colors duration-300 ${
        scrolled
          ? "bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="text-white">
            <TextAlignLeftIcon className="size-10" />
          </SheetTrigger>
          <SheetContent side="left" className="bg-cusYellow">
            <SheetTitle>
              <VisuallyHidden>Are you absolutely sure?</VisuallyHidden>
            </SheetTitle>
            <SheetHeader>
              <SheetDescription className="mt-20 flex flex-col items-start ml-3">
                {LINKS.map((link, index) => (
                  <motion.span
                    key={link.route}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.75, delay: index * 0.1 }}
                  >
                    <SheetClose asChild>
                      <Link
                        href={link.route}
                        className="uppercase py-2 flex items-center gap-5 font-medium"
                      >
                        <link.Icon />
                        {link.name}
                      </Link>
                    </SheetClose>
                  </motion.span>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <Image
        src="/assets/logo.png"
        alt="logo"
        height={48}
        width={147}
        className="max-md:h-10 bg-cover"
      />
      <div className="flex lg:gap-11 gap-7 text-sm font-semibold items-center text-white max-md:hidden">
        {LINKS.map((link) => (
          <Link href={link.route} className="uppercase" key={link.route}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
