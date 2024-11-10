import Image from "next/image";
import Star from "@/assets/images/star.png";

function CurrentDate() {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = currentDate.toLocaleString("default", { month: "short" });
  const year = currentDate.getFullYear();

  return (
    <div className="current-date flex gap-2 text-secondary relative leading-none">
      <Image src={Star} width={40} height={40} alt="star" className="w-10 h-10 absolute -left-10 top-4" />
      <span className="md:text-[10rem] sm:text-[9rem] text-[8rem] font-asset">{day}</span>
      <div className="flex-col flex justify-center text-3xl font-playfair lowercase">
        <span className="font-bold">{month}</span> <span className="text-xl">{year}</span>
      </div>
    </div>
  );
}

export default CurrentDate;
