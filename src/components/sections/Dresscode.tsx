import React from "react";
import Image from "next/image";

const Dresscode = () => {
  return (
    <>
      <div className="relative w-full min-h-[530px] md:h-[573px] flex justify-center items-center overflow-hidden">
        {/* BG CREAM */}
        <div className="absolute inset-0 bg-[#F3EAD7] z-0" />

        {/* ORNAMEN BUNGA & GUCI (DI ATAS BG, TAPI DI BAWAH FRAME) */}
        <Image
          src="/images/dresscode/Ornament-BungaKiri.svg"
          alt=""
          width={200}
          height={200}
          className="absolute bottom-14 left-0 z-20"
        />

        <Image
          src="/images/dresscode/Ornament-BungaKanan.svg"
          alt=""
          width={250}
          height={250}
          className="absolute bottom-0 -right-10 z-10"
        />

        <Image
          src="/images/dresscode/Ornament-Guci.svg"
          alt=""
          width={140}
          height={140}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10"
        />

        {/* FRAME BIRU (YANG NUTUPIN BUNGA) */}
        <Image
          src="/images/dresscode/Ornament-Bg.svg"
          alt=""
          fill
          className="object-cover z-20 pointer-events-none"
        />

        {/* CONTENT */}
        <div className="relative z-30 flex flex-col items-center justify-center text-center px-8 h-full">
          {/* TITLE */}
          <h2 className="text-[28px] md:text-[32px] font-cormorant font-semibold text-[#CD4964] tracking-wide">
            DRESSCODE
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-4 text-[13px] md:text-[14px] text-[#CD4964] leading-relaxed font-cormorant">
            we would sincerely appreciate <br />
            your presence in <br />
            <span className="italic">
              peranakan kebaya / cheongsam / batik attire
            </span>
          </p>

          {/* IMAGE ORANG */}
          <div className="mt-6">
            <Image
              src="/images/dresscode/Ornament-orang.svg"
              alt="dresscode"
              width={70}
              height={220}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dresscode;
