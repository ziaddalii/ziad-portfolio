"use client";
import Image from "next/image";
import Star from "@/assets/images/star.png";
import { useState, useEffect } from "react";

function CurrentDate() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    const now = new Date();

    const options = { timeZone: "Africa/Cairo" };
    const cairoDate = new Intl.DateTimeFormat("en-US", options).format(now);

    const cairoTime = new Date(cairoDate);
    setDay(cairoTime.getDate().toString().padStart(2, "0"));
    setMonth(cairoTime.toLocaleString("default", { month: "short" }));
    setYear(cairoTime.getFullYear());
  }, []);

  return (
    <div className="current-date flex gap-2 text-secondary relative leading-none">
      <Image
        src={Star}
        width={40}
        height={40}
        alt="star"
        className="w-10 h-10 absolute -left-10 top-4"
      />
      <span className="md:text-[10rem] sm:text-[9rem] text-[8rem] font-asset">
        {day}
      </span>
      <div className="flex-col flex justify-center text-3xl font-playfair lowercase">
        <span className="font-bold">{month}</span>{" "}
        <span className="text-xl">{year}</span>
      </div>
    </div>
  );
}

export default CurrentDate;
