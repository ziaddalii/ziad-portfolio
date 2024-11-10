"use client";
import Link from "next/link";
import Marquee from "react-fast-marquee";

function MarqueeButton({ children, href, target = "_self", classNames = "" }) {
  const Component = href ? Link : "button";
  const props = href ? { href, target } : {};

  return (
    <Component
      {...props}
      className={`${classNames} flex max-w-fit text-nowrap rounded-full overflow-hidden relative group border-1 border border-secondary border-solid sm:text-3xl text-xl uppercase px-3 py-1 text-secondary`}
    >
      <span className="group-hover:opacity-0 opacity-100 transition-all">{children}</span>

      <Marquee
        className="group-hover:!opacity-100 !opacity-0 transition-all !absolute left-0"
        speed={200}
        loop={0}
        play={true}
      >
        <span className="mr-1">{children}</span>
      </Marquee>
    </Component>
  );
}

export default MarqueeButton;
