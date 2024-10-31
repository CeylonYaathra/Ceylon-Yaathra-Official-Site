import React from "react";
import CheckIcon from "@mui/icons-material/Check";

export default function WhyBookFacts({ text }: { text: string }) {
  return (
    <div className="max-w-[386px] mx-auto">
      <div className="flex items-center gap-2 ml-2 my-3">
        <CheckIcon className="text-white text-lg" />
        <h3 className="text-white font-medium">{text}</h3>
      </div>
      <div className="h-[1px] bg-white"/>
    </div>
  );
}
