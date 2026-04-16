import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "390/854" }}
      >
        <Image
          src="/images/hero/Bg-Hero.jpg"
          alt="Background Hero"
          fill
          className="object-cover object-bottom"
          priority
        />

        {/* <div className='absolute inset-0 bg-black/30' /> */}

        <div className="absolute top-[7%] left-1/2 -translate-x-1/2 z-10">
          <Image
            src="/images/hero/Ornament-Hero.svg"
            alt="ornament"
            width={85}
            height={110}
            className=""
          />
        </div>


        {/* CONTENT */}

        <div className="absolute inset-0 flex flex-col justify-end items-center pb-[28%] text-center z-10">
          <p className="text-white font-cormorant font-semibold text-[16px]">
            The Sangjit of
          </p>

          <h1 className="text-white font-david text-[28px]">
            JEANETTE & NICHOLAS
          </h1>

          <p className="text-white font-cormorant font-bold text-[13px]">
            SATURDAY, 16 MAY 2026
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
