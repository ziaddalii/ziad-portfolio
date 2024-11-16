import Image from "next/image";
import Star from "@/assets/images/star.png";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

function CurrentDate() {
  const cairoTime = dayjs().tz("Africa/Cairo");
  const day = cairoTime.format("DD");
  const month = cairoTime.format("MMM");
  const year = cairoTime.format("YYYY");

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
