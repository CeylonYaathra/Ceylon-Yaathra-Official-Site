import { cn } from "@/lib/utils";
import React from "react";
type ContainerProps = {
  bgColor?: string;
  className?: string;
  parentClassName?: string;
  children: React.ReactNode;
};
export default function Container(props: ContainerProps) {
  return <div className={props.parentClassName} style={{overflow:'hidden'}}>
    <div className={cn('max-w-[1400px] mx-auto grid grid-cols-2 max-md:grid-cols-1',props.className)}>
        {props.children}
    </div>
  </div>;
}
