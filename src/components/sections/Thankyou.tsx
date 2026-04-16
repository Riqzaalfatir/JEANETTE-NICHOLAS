import React from "react";
import Image from "next/image";

const Thankyou = () => {
  return (
    <>
      <div className="relative w-full h-[680px] md:h-[573px] flex justify-center items-center overflow-hidden">
        {/* BG CREAM */}
        <div className="absolute inset-0 bg-[#F3EAD7] z-0" />

        {/* ORNAMEN BUNGA & GUCI (DI ATAS BG, TAPI DI BAWAH FRAME) */}
        <Image
          src="/images/thankyou/Ornament-BungaKiri.svg"
          alt=""
          width={250}
          height={250}
          className="absolute bottom-20 left-5 z-20"
        />

        <Image
          src="/images/thankyou/Ornament-BungaKanan.svg"
          alt=""
          width={250}
          height={250}
          className="absolute bottom-0 -right-0 z-10"
        />

        <Image
          src="/images/thankyou/Ornament-BungaTengah.svg"
          alt=""
          width={200}
          height={200}
          className="absolute bottom-10  z-10"
        />


        {/* FRAME BIRU (YANG NUTUPIN BUNGA) */}
        <Image
          src="/images/thankyou/Bg-Thankyou.png"
          alt=""
          fill
          className="object-cover z-20 pointer-events-none"
        />

        {/* CONTENT */}
        <div className="relative z-30 flex flex-col items-center justify-center text-center px-8 h-full">
          {/* TITLE */}
          <h2 className="text-[28px] xs:text-[140px] md:text-[32px] font-cormorant font-semibold text-[#CD4964] tracking-wide">
            Thankyou
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-4 text-[13px] md:text-[14px] text-[#CD4964] leading-relaxed font-cormorant">
           It would be a joy and honor for us to have you join our <br /> celebration and share your blessings.
          </p>

        </div>
      </div>
    </>
  );
};

export default Thankyou;
