import React from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

export default function ReviewCard({
  name,
  rating,
  review,
  date,
}: {
  name: string;
  rating: number;
  review: string;
  date: string;
}) {
  return (
    <div
      className="w-[448px] h-[180px] max-md:w-[381px] p-4 flex-shrink-0 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
      style={{
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="flex items-center gap-3">
        <div className="w-[40px] h-[40px] rounded-full bg-red-400 flex items-center justify-center font-medium">
          {name[0].toUpperCase()}
        </div>
        <div>
          <h3 className="font-semibold">{name}</h3>
          <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
        </div>
      </div>
      <h3 className="my-4 font-medium line-clamp-2">{review}</h3>
      <span className="text-[12px]">{date}</span>
    </div>
  );
}
