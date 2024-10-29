import Image from "next/image";
import Link from "next/link";
import React from "react";
import {  TextAlignLeftIcon } from "@radix-ui/react-icons";
import HomeIcon from '@mui/icons-material/Home';
import GridViewIcon from '@mui/icons-material/GridView';
import DomainIcon from '@mui/icons-material/Domain';
import CallIcon from '@mui/icons-material/Call';
import {
  Sheet,
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
  { name: "Contact us", route: "/contact-us", Icon: CallIcon },
];
export default function NavBar() {
  return (
    <div className="flex justify-between px-8 py-5 lg:pr-24 fixed w-full">
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
                {LINKS.map((link) => (
                  <Link
                    href={link.route}
                    className="uppercase py-2 flex items-center gap-5 font-medium"
                    key={link.route}
                  >
                    <link.Icon />
                    {link.name}
                  </Link>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <Image src="/assets/logo.png" alt="logo" height={48} width={147} />
      <div className="flex gap-11 text-sm font-semibold items-center text-white max-md:hidden">
        {LINKS.map((link) => (
          <Link href={link.route} className="uppercase" key={link.route}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
